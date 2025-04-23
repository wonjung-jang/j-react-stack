import { ReactNode } from "react";

/**
 * 화면 전환 상태
 */
export type TransitionState = "current" | "animating";

/**
 * 화면 전환 방향
 */
export type TransitionDirection = "left" | "right";

/**
 * 스택에 표시되는 화면(액티비티) 정보
 */
export interface Activity {
  key: string;
  element: ReactNode;
  transition?: TransitionState;
  direction?: TransitionDirection;
}

/**
 * 스택 상태 컨텍스트 타입
 */
export interface StackStateContextType {
  stack: Activity[];
}

/**
 * 스택 액션 컨텍스트 타입
 */
export interface StackActionContextType {
  push: (activity: Omit<Activity, "transition" | "direction">) => void;
  pop: () => void;
  clear: () => void;
  init: (activities: Omit<Activity, "transition" | "direction">[]) => void;
}

/**
 * 스택 프로바이더 props
 */
export interface StackProviderProps {
  children: ReactNode;
  initialStack: Omit<Activity, "transition" | "direction">[];
}

/**
 * 스택 렌더러 props
 */
export interface StackRendererProps {
  className?: string;
  transitionDuration?: number;
  transitionTimingFunction?: string;
}

/**
 * 스택 네비게이션 props
 */
export interface StackNavigationProps {
  initialStack: Omit<Activity, "transition" | "direction">[];
  children?: ReactNode;
  className?: string;
  transitionDuration?: number;
  transitionTimingFunction?: string;
}
