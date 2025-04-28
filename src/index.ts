// 통합 네비게이션 컴포넌트
export { StackNavigation } from "./components/StackNavigation";

// 스택 네비게이션 훅
export { useStackNavigation } from "./hooks/useStackNavigation";

// 주요 타입 명시적으로 내보내기 (사용자 편의성 개선)
export type {
  Activity,
  TransitionDirection,
  TransitionState,
  StackNavigationProps,
} from "./types";

// 사용 편의성을 위한 타입 유틸리티
import type { ReactNode } from "react";
export type StackItem = {
  key: string;
  element: ReactNode;
};

// 모든 타입 내보내기
export * from "./types";

// Next.js 엔트리포인트
export * as next from "./next";
