"use client";

import { createContext, useContext } from "react";
import { StackStateContextType, StackActionContextType } from "../types";

/**
 * 스택 상태를 저장하는 컨텍스트
 */
export const StackStateContext = createContext<
  StackStateContextType | undefined
>(undefined);

/**
 * 스택 액션을 저장하는 컨텍스트
 */
export const StackActionContext = createContext<
  StackActionContextType | undefined
>(undefined);

/**
 * 스택 상태 컨텍스트를 사용하기 위한 훅
 * @returns 스택 상태 객체
 */
export const useStackStateContext = () => {
  const state = useContext(StackStateContext);
  if (state === undefined) {
    throw new Error(
      "useStackStateContext must be used within an StackProvider"
    );
  }
  return state;
};

/**
 * 스택 액션 컨텍스트를 사용하기 위한 훅
 * @returns 스택 액션 객체
 */
export const useStackActionContext = () => {
  const actions = useContext(StackActionContext);
  if (actions === undefined) {
    throw new Error(
      "useStackActionContext must be used within an StackProvider"
    );
  }
  return actions;
};
