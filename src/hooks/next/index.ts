"use client";

import {
  useStackActionContext,
  useStackStateContext,
} from "../../context/contexts";

/**
 * Next.js 환경에서 사용할 수 있는 스택 네비게이션 훅
 * (Next.js App Router에서는 이 훅을 사용하세요)
 */
export const useStackNavigation = () => {
  const state = useStackStateContext();
  const actions = useStackActionContext();
  return { ...state, ...actions };
};
