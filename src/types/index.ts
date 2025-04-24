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
 * @property key - 화면을 식별하는 고유 키
 * @property element - 표시할 React 컴포넌트
 * @property transition - 현재 전환 상태 (내부용)
 * @property direction - 화면 전환 방향 (내부용)
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
 * @property className - CSS 클래스명 (일반 CSS 또는 Tailwind CSS 클래스 지원)
 * @property transitionDuration - 화면 전환 애니메이션 시간 (ms)
 * @property transitionTimingFunction - 화면 전환 애니메이션 타이밍 함수
 */
export interface StackRendererProps {
  className?: string;
  transitionDuration?: number;
  transitionTimingFunction?: string;
}

/**
 * 스택 네비게이션 props
 * @property initialStack - 초기 화면 스택 배열 (각 항목은 {key, element} 형태)
 * @property children - 추가 자식 컴포넌트
 * @property className - 스택 컨테이너에 적용할 CSS 클래스 (일반 CSS 또는 Tailwind CSS 클래스 지원)
 * @property transitionDuration - 화면 전환 애니메이션 시간 (ms)
 * @property transitionTimingFunction - 화면 전환 애니메이션 타이밍 함수
 */
export interface StackNavigationProps {
  initialStack: Omit<Activity, "transition" | "direction">[];
  children?: ReactNode;
  className?: string;
  transitionDuration?: number;
  transitionTimingFunction?: string;
}
