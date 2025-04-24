import React from "react";
import { useStackStateContext } from "../context/contexts";
import { StackRendererProps } from "../types/index";

/**
 * 스택의 현재 상태를 화면에 렌더링하는 컴포넌트
 *
 * Tailwind CSS 클래스를 지원합니다. className 속성을 통해 제공된 Tailwind 클래스는
 * 스택 컨테이너에 적용됩니다.
 *
 * @example
 * ```tsx
 * <StackRenderer
 *   className="bg-white dark:bg-slate-800 rounded-xl shadow-lg"
 * />
 * ```
 *
 * @param props StackRendererProps
 * @param props.className - CSS 클래스명 (일반 CSS 또는 Tailwind CSS 클래스 지원)
 * @param props.transitionDuration - 전환 애니메이션 시간 (ms)
 * @param props.transitionTimingFunction - 전환 애니메이션 타이밍 함수
 * @returns React 컴포넌트
 */
export const StackRenderer: React.FC<StackRendererProps> = ({
  className = "",
  transitionDuration = 300,
  transitionTimingFunction = "ease-in-out",
}) => {
  const { stack } = useStackStateContext();

  return (
    <div
      className={`stack-renderer ${className}`}
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
        overflowX: "hidden",
      }}
    >
      {stack.map((activity, i) => {
        const { transition, direction, key } = activity;
        const isLast = i === stack.length - 1;

        let transform = "translateX(0)";
        if (transition === "animating") {
          transform =
            direction === "right" ? "translateX(100%)" : "translateX(-100%)";
        }

        const style: React.CSSProperties = {
          position: isLast ? "relative" : "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto",
          transform,
          transition: `transform ${transitionDuration}ms ${transitionTimingFunction}`,
          pointerEvents: transition === "current" ? "auto" : "none",
          zIndex: transition === "current" ? 10 : isLast ? 5 : 1,
          backgroundColor: "inherit",
        };

        return (
          <div
            key={key}
            style={style}
            data-state={transition}
            data-direction={direction}
            className="stack-item"
          >
            {activity.element}
          </div>
        );
      })}
    </div>
  );
};
