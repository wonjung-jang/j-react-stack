"use client";

import { StackNavigation as BaseStackNavigation } from "../StackNavigation";
import { StackRenderer as BaseStackRenderer } from "../StackRenderer";
import type { StackNavigationProps, StackRendererProps } from "../../types";

/**
 * Next.js 환경에서 사용할 수 있는 StackNavigation 컴포넌트
 * (Next.js App Router에서는 이 컴포넌트를 사용하세요)
 */
export const StackNavigation = (props: StackNavigationProps) => {
  return <BaseStackNavigation {...props} />;
};

/**
 * Next.js 환경에서 사용할 수 있는 StackRenderer 컴포넌트
 * (Next.js App Router에서는 이 컴포넌트를 사용하세요)
 */
export const StackRenderer = (props: StackRendererProps) => {
  return <BaseStackRenderer {...props} />;
};
