"use client";

import {
  useStackStateContext,
  useStackActionContext,
} from "../context/contexts";

/**
 * 스택 네비게이션 기능을 사용하기 위한 훅
 * StackNavigation 컴포넌트 내부에서만 사용할 수 있습니다.
 */
export const useStackNavigation = () => {
  const { stack } = useStackStateContext();
  const { push, pop, clear } = useStackActionContext();

  return {
    stack,
    push,
    pop,
    clear,
  };
};
