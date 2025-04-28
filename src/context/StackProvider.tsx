"use client";

import React, { useMemo, useState, useCallback, useEffect } from "react";
import {
  Activity,
  StackProviderProps,
  TransitionDirection,
  TransitionState,
} from "../types";
import { StackActionContext, StackStateContext } from "./contexts";

/**
 * 스택 네비게이션의 상태와 액션을 제공하는 컴포넌트
 * @param props StackProviderProps
 * @returns React 컴포넌트
 */
export const StackProvider: React.FC<StackProviderProps> = ({
  children,
  initialStack = [],
}) => {
  const [stack, setStack] = useState<Activity[]>([]);

  /**
   * 새로운 화면을 스택에 추가
   * @param activity 추가할 액티비티 객체
   */
  const push = useCallback(
    (activity: Omit<Activity, "transition" | "direction">) => {
      const newActivity: Activity = {
        ...activity,
        transition: "animating",
        direction: "right",
      };

      setStack((prev) => [...prev, newActivity]);

      // 다음 프레임에서 애니메이션 상태 업데이트
      requestAnimationFrame(() => {
        setStack((prev) =>
          prev.map((item, i) =>
            i === prev.length - 1
              ? { ...item, transition: "current" }
              : item.transition === "current"
              ? { ...item, transition: "animating", direction: "left" }
              : item
          )
        );
      });
    },
    []
  );

  /**
   * 스택의 최상위 화면 제거
   */
  const pop = useCallback(() => {
    setStack((prevStack) => {
      if (prevStack.length <= 1) {
        return prevStack;
      }

      const newStack = [...prevStack];
      const current = newStack[newStack.length - 1];
      const prevPage = newStack[newStack.length - 2];

      if (current) {
        current.transition = "animating";
        current.direction = "right";
      }

      if (prevPage) {
        prevPage.transition = "current";
        prevPage.direction = "left";
      }

      // 바로 스택에서 제거
      setTimeout(() => {
        setStack((currentStack) => {
          if (currentStack.length <= 1) {
            return currentStack;
          }

          const result = currentStack.filter(
            (item) =>
              item.key !== current.key || item.transition !== "animating"
          );

          return result;
        });
      }, 300);

      return newStack;
    });
  }, []);

  /**
   * 스택 초기화
   * @param activities 초기 액티비티 배열
   */
  const init = useCallback(
    (activities: Omit<Activity, "transition" | "direction">[]) => {
      // 빈 배열이 들어와도 최소 하나의 스크린은 있어야 함
      if (activities.length === 0) {
        console.warn(
          "초기화 시 최소 하나의 화면이 필요합니다. initialStack을 사용합니다."
        );
        activities = initialStack as Omit<
          Activity,
          "transition" | "direction"
        >[];
      }

      const newStack = activities.map((activity, i) => {
        const isLast = i === activities.length - 1;
        return {
          ...activity,
          transition: isLast
            ? ("current" as TransitionState)
            : ("animating" as TransitionState),
          direction: isLast
            ? ("right" as TransitionDirection)
            : ("left" as TransitionDirection),
        };
      });

      setStack(newStack);
    },
    [initialStack]
  );

  /**
   * 스택을 초기 상태로 리셋
   */
  const clear = useCallback(() => {
    // 완전히 비우지 않고 초기 스택으로 리셋
    init(initialStack as Omit<Activity, "transition" | "direction">[]);
  }, [init, initialStack]);

  // 컴포넌트 마운트 시 초기화
  useEffect(() => {
    if (stack.length === 0) {
      init(initialStack as Omit<Activity, "transition" | "direction">[]);
    }
  }, [initialStack, init, stack.length]);

  const stateValue = useMemo(() => ({ stack }), [stack]);
  const actionValue = useMemo(
    () => ({ push, pop, clear, init }),
    [push, pop, clear, init]
  );

  return (
    <StackStateContext.Provider value={stateValue}>
      <StackActionContext.Provider value={actionValue}>
        {children}
      </StackActionContext.Provider>
    </StackStateContext.Provider>
  );
};
