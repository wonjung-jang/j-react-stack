"use client";

import React from "react";
import { StackProvider } from "../context/StackProvider";
import { StackRenderer } from "./StackRenderer";
import { StackNavigationProps } from "../types";

/**
 * StackProvider와 StackRenderer를 통합한 컴포넌트
 * 스택 네비게이션을 위한 모든 기능을 한 번에 제공합니다.
 *
 * @example
 * ```tsx
 * // 기본 사용법
 * <StackNavigation initialStack={[{ key: "home", element: <HomeScreen /> }]} />
 *
 * // Tailwind CSS 적용 예시
 * <StackNavigation
 *   initialStack={[{ key: "home", element: <HomeScreen /> }]}
 *   className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
 * />
 * ```
 *
 * @param props.initialStack - 초기 화면 스택 (필수, 최소 하나의 항목 필요)
 * @param props.children - 추가 자식 요소 (선택)
 * @param props.className - CSS 클래스명 (일반 CSS 또는 Tailwind CSS 클래스 지원)
 * @param props.transitionDuration - 전환 애니메이션 시간 (ms)
 * @param props.transitionTimingFunction - 전환 애니메이션 타이밍 함수
 */
export const StackNavigation: React.FC<StackNavigationProps> = ({
  initialStack,
  children,
  className,
  transitionDuration = 300,
  transitionTimingFunction = "ease-in-out",
}) => {
  // 런타임에 initialStack 체크
  if (!initialStack || initialStack.length === 0) {
    throw new Error("StackNavigation requires at least one item in initialStack");
  }

  return (
    <StackProvider initialStack={initialStack}>
      <StackRenderer
        className={className}
        transitionDuration={transitionDuration}
        transitionTimingFunction={transitionTimingFunction}
      />
      {children}
    </StackProvider>
  );
};
