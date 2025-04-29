import React from "react";
import { render, renderHook } from "@testing-library/react";
import { useStackNavigation } from "../../hooks/useStackNavigation";
import { StackNavigation } from "../../components/StackNavigation";
import { StackNavigationProps } from "../../types";

it("useStackNavigation은 반드시 StackNavigation 컴포넌트 내부에서만 사용할 수 있습니다.", () => {
  expect(() => {
    renderHook(() => useStackNavigation());
  }).toThrow("useStackStateContext must be used within an StackProvider");
});

const setup = (initialStack: StackNavigationProps["initialStack"]) => {
  const props: StackNavigationProps = {
    initialStack,
  };
  return render(React.createElement(StackNavigation, props));
};

describe("StackNavigation 렌더링 이후 훅 테스트", () => {
  it("initialStack이 비어있으면 안됩니다.", () => {
    expect(() => {
      setup([]);
    }).toThrow("StackNavigation requires at least one item in initialStack");
  });

  it("initialStack이 비어있지 않으면 렌더링됩니다.", () => {
    const { container } = setup([
      { key: "step1", element: React.createElement("div", null, "Step 1") },
    ]);
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent("Step 1");
  });
});
