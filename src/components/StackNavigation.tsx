import React from "react";
import { StackProvider } from "../context/StackProvider";
import { StackRenderer } from "./StackRenderer";
import { StackNavigationProps } from "../types";

/**
 * StackProvider와 StackRenderer를 통합한 컴포넌트
 * 스택 네비게이션을 위한 모든 기능을 한 번에 제공합니다.
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
    throw new Error(
      "StackNavigation requires at least one item in initialStack"
    );
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
