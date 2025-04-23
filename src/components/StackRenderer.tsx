import React from "react";
import { useStackStateContext } from "../context/contexts";
import { StackRendererProps } from "../types/index";

/**
 * 스택의 현재 상태를 화면에 렌더링하는 컴포넌트
 * @param props StackRendererProps
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
