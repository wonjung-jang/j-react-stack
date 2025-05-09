# 🧱 J-React-Stack

React와 Next.js 애플리케이션에서 스택 기반 전환을 쉽게 구현할 수 있는 경량 라이브러리입니다.
페이지 전환, 일부 컴포넌트 전환, 스와이프 UI 등 다양한 상황에 유연하게 적용할 수 있습니다.

[![NPM](https://img.shields.io/npm/v/j-react-stack.svg)](https://www.npmjs.com/package/j-react-stack)
[![GitHub](https://img.shields.io/github/stars/wonjung-jang/j-react-stack?style=social)](https://github.com/wonjung-jang/j-react-stack)

> 📦 **패키지 링크**
>
> - NPM: [https://www.npmjs.com/package/j-react-stack](https://www.npmjs.com/package/j-react-stack)
> - GitHub: [https://github.com/wonjung-jang/j-react-stack](https://github.com/wonjung-jang/j-react-stack)

## 📋 개요

J-React-Stack은 부드러운 전환 애니메이션과 직관적인 API를 제공하여 복잡한 상태 관리 없이 자연스러운 화면 전환을 구현할 수 있도록 돕습니다.
전체 페이지 전환은 물론, 폼 단계 이동, 스와이프 인터페이스, 모달/탭 전환 등 다양한 형태로 활용할 수 있습니다.

React Router나 Next.js 라우팅 시스템과 병행 사용이 가능하며, 필요한 페이지나 컴포넌트 일부에만 선택적으로 적용할 수 있습니다.

이 문서에서는 설치 방법, 기본 사용법, 고급 설정 방법까지 안내합니다.

## 📦 설치

```bash
npm install j-react-stack
# 또는
yarn add j-react-stack
```

## ✨ 주요 특징

- 🎞 부드러운 전환 애니메이션
- 🧭 간단한 push/pop 네비게이션 API
- 💡 TypeScript 완벽 지원
- 🛠 초기 화면 필수 설정으로 안정성 확보
- 🎨 Tailwind CSS 손쉬운 통합
- 🔄 React와 Next.js(App Router 포함) 모두 지원
- 🧩 React Router 등 기존 라우터와 병행 사용 가능
- 📱 스와이프 기반 전환도 구현 가능

## 🚀 빠르게 시작하기

### StackNavigation 컴포넌트

스택 기반 화면 전환을 위한 컨테이너 컴포넌트입니다. 페이지 내에서 컴포넌트 간 전환 애니메이션을 제공합니다.

```tsx
import { StackNavigation } from "j-react-stack";
import FormStep1 from "./FormStep1";

export default function FormContainer() {
  return (
    <div className="form-container">
      <h1>다단계 양식</h1>
      <StackNavigation
        initialStack={[{ key: "step1", element: <FormStep1 /> }]}
        transitionDuration={300}
        transitionTimingFunction="ease-in-out"
      />
    </div>
  );
}
```

참고: initialStack에는 최소 하나 이상의 화면을 설정해야 정상 동작합니다.

### useStackNavigation 훅 사용법

스택 내 화면 전환을 제어하는 커스텀 훅입니다.

```tsx
"use client"; // Next.js App Router 사용 시 필요

import { useStackNavigation } from "j-react-stack";
import FormStep2 from "./FormStep2";

function FormStep1() {
  const { push, pop, clear, stack } = useStackNavigation();

  const handleNextStep = () => {
    // 양식 검증 후 다음 단계로 전환
    push({ key: "step2", element: <FormStep2 /> });
  };

  return (
    <div className="form-step">
      <h2>1단계: 기본 정보</h2>
      <input type="text" placeholder="이름" />
      <input type="email" placeholder="이메일" />
      <button onClick={handleNextStep}>다음 단계</button>
    </div>
  );
}
```

## 📚 API Reference

### StackNavigation Props

| 이름                     | 타입        | 필수 | 기본값        | 설명                      |
| ------------------------ | ----------- | ---- | ------------- | ------------------------- |
| initialStack             | StackItem[] | ✅   | -             | 초기 스택 화면 배열       |
| transitionDuration       | number      | ❌   | 300           | 전환 애니메이션 시간(ms)  |
| transitionTimingFunction | string      | ❌   | "ease-in-out" | 전환 애니메이션 이징 함수 |
| className                | string      | ❌   | ""            | 추가 스타일 클래스        |

### useStackNavigation 메서드

| 메서드     | 설명                                 |
| ---------- | ------------------------------------ |
| push(item) | 새로운 화면을 스택에 추가            |
| pop()      | 현재 화면 제거 후 이전 화면으로 이동 |
| clear()    | 스택을 초기 상태로 리셋              |
| stack      | 현재 스택 상태 조회 (배열 형태)      |

## 🎯 활용 사례

- 회원가입 단계 UI
- 설문/투표 플로우
- 체크아웃 단계 (구매 플로우)
- 온보딩 튜토리얼
- 멀티스텝 폼
- 스와이프 기반 콘텐츠 탐색
- 페이지 내 일부 영역 전환
- React Router 사용 중 특정 섹션에만 스택 적용

## ⚡ React Router와 병행 사용하기

J-React-Stack은 React Router와 함께 사용할 수 있습니다. React Router는 페이지 간 전환을 담당하고, J-React-Stack은 페이지 내에서 컴포넌트 간 전환을 담당합니다.

### 실제 통합 사용 예시

```tsx
// App.tsx - React Router로 전체 앱 라우팅 구성
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import CheckoutPage from "./CheckoutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

```tsx
// CheckoutPage.tsx - 페이지 내에서 J-React-Stack으로 스텝 전환 구현
import { StackNavigation } from "j-react-stack";
import DeliveryInfoStep from "./steps/DeliveryInfoStep";

export default function CheckoutPage() {
  return (
    <div className="checkout-container">
      <h1>결제 프로세스</h1>

      {/* 페이지 내에서 J-React-Stack으로 다단계 프로세스 구현 */}
      <StackNavigation
        initialStack={[
          {
            key: "delivery",
            element: <DeliveryInfoStep />,
          },
        ]}
        className="bg-white p-4 rounded-lg shadow-md"
      />
    </div>
  );
}
```

```tsx
// steps/DeliveryInfoStep.tsx - 스택 내 첫 번째 화면
import { useStackNavigation } from "j-react-stack";
import PaymentStep from "./PaymentStep";

export default function DeliveryInfoStep() {
  const { push } = useStackNavigation();

  const handleContinue = () => {
    // 배송 정보 검증 후 결제 단계로 전환
    push({ key: "payment", element: <PaymentStep /> });
  };

  return (
    <div className="step-container">
      <h2>1. 배송 정보</h2>
      <form>
        <input type="text" placeholder="주소" className="w-full mb-2" />
        <input type="text" placeholder="연락처" className="w-full mb-4" />
        <button
          type="button"
          onClick={handleContinue}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          결제 정보 입력
        </button>
      </form>
    </div>
  );
}
```

이 예제에서 React Router는 `/checkout`과 같은 URL 기반 페이지 이동을 처리하고, J-React-Stack은 체크아웃 페이지 내에서 배송 정보 → 결제 정보 → 주문 확인과 같은 단계별 UI 전환을 처리합니다.

## 🎨 고급 사용법

### Next.js(App Router) 환경 사용

```tsx
"use client";
import { StackNavigation } from "j-react-stack";

export default function NextJsPage() {
  return (
    <StackNavigation
      initialStack={[{ key: "home", element: <HomeScreen /> }]}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md"
    />
  );
}
```

```tsx
"use client";
import { useStackNavigation } from "j-react-stack";

function ClientComponent() {
  const { push, pop } = useStackNavigation();
}
```

모든 컴포넌트에 'use client' 지시문이 내장되어 있으므로 Pages Router와 App Router 모두 동일한 import 방식을 사용합니다.

### Tailwind CSS 적용 예시

```tsx
<StackNavigation
  initialStack={[{ key: "home", element: <HomeScreen /> }]}
  className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
/>
```

또는 StackRenderer를 직접 스타일링할 수 있습니다.

```tsx
import { StackRenderer } from "j-react-stack";

<StackRenderer className="bg-white dark:bg-slate-800 rounded-xl shadow-lg" />;
```

### 커스텀 전환 애니메이션

```tsx
<StackNavigation
  initialStack={[{ key: "home", element: <HomeScreen /> }]}
  transitionDuration={500}
  transitionTimingFunction="cubic-bezier(0.68, -0.55, 0.27, 1.55)"
/>
```

## 📁 프로젝트 구조

- StackNavigation: 네비게이션 컨텍스트 및 화면 렌더링
- useStackNavigation: 스택 조작용 커스텀 훅
- StackItem, Activity: TypeScript 타입 정의

## ❓ FAQ

**Q. Next.js 서버 컴포넌트(Server Component)에서 사용할 수 있나요?**  
A. 사용할 수 없습니다. "use client";를 선언하고 클라이언트 컴포넌트에서 사용해야 합니다.

**Q. transitionDuration 값을 너무 길게 설정하면 어떤 문제가 생기나요?**  
A. 전환 속도가 느려져 사용자 경험이 저하되고, 깜빡임(flicker) 현상이 발생할 수 있습니다.

**Q. 초기 화면 없이 StackNavigation을 렌더링하면 어떻게 되나요?**  
A. initialStack이 비어 있으면 정상적으로 동작하지 않습니다. 최소 하나 이상의 화면을 설정해야 합니다.

## 라이선스

MIT License
