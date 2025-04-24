# 🧱 J-React-Stack

**J-React-Stack**은 React 애플리케이션에서 **스택 기반 네비게이션**을 쉽게 구현할 수 있는 경량 라이브러리입니다. 부드러운 전환 애니메이션과 직관적인 API를 제공합니다.

> 단계별 입력 폼, 다단계 가입 화면, 마법사 스타일 UI 등에 최적화된 솔루션입니다.

---

## 📦 설치

```bash
npm install j-react-stack
# 또는
yarn add j-react-stack
```

---

## ✨ 주요 특징

- 🎞 **부드러운 전환 애니메이션**
- 🧭 **간단한 push/pop 네비게이션 API**
- 💡 **TypeScript 완벽 지원**
- 🛠 **초기 화면 필수 설정으로 안정성 확보**
- 🎨 **Tailwind CSS 지원**

---

## 🚀 시작하기

### `StackNavigation` 컴포넌트

전체 네비게이션 시스템을 구성하는 컴포넌트입니다.

```tsx
import { StackNavigation } from "j-react-stack";
import Step1Screen from "./Step1Screen";

export default function App() {
  return (
    <StackNavigation
      initialStack={[{ key: "step1", element: <Step1Screen /> }]}
      transitionDuration={300} // 기본값
      transitionTimingFunction="ease-in-out" // 기본값
    />
  );
}
```

> **주의**: `initialStack` 속성은 **반드시 하나 이상의 화면을 포함해야 합니다.**

#### 속성 (Props)

| 속성                       | 타입   | 필수 | 기본값        | 설명                   |
| -------------------------- | ------ | ---- | ------------- | ---------------------- |
| `initialStack`             | 배열   | ✅   | -             | 초기 화면 스택         |
| `transitionDuration`       | 숫자   | ❌   | 300           | 화면 전환 시간 (ms)    |
| `transitionTimingFunction` | 문자열 | ❌   | "ease-in-out" | 애니메이션 타이밍 함수 |
| `className`                | 문자열 | ❌   | ""            | 추가 CSS 클래스        |

---

### `useStackNavigation` 훅

스택을 조작하고 상태를 제어할 수 있는 커스텀 훅입니다.

```tsx
import { useStackNavigation } from "j-react-stack";
import NextStepScreen from "./NextStepScreen";

function MyScreen() {
  const { push, pop, clear, stack } = useStackNavigation();

  return (
    <div>
      <h2>현재 화면</h2>
      <button
        onClick={() => push({ key: "next", element: <NextStepScreen /> })}
      >
        다음
      </button>
      <button onClick={pop}>이전</button>
      <button onClick={clear}>처음으로</button>
    </div>
  );
}
```

---

## 🧰 API 개요

| 메서드       | 설명                                            |
| ------------ | ----------------------------------------------- |
| `push(item)` | 새 화면을 스택에 추가합니다                     |
| `pop()`      | 스택의 맨 위 화면을 제거하고 이전 화면으로 이동 |
| `clear()`    | 스택을 초기 상태(`initialStack`)로 재설정       |
| `stack`      | 현재 스택 상태 (배열 형태)                      |

---

## 🎯 활용 사례

- 회원가입 단계 UI
- 설문/투표 UI
- 체크아웃 단계
- 튜토리얼/온보딩
- 멀티스텝 폼

---

## 🎨 고급 사용법

### Tailwind CSS 적용하기

컴포넌트에 Tailwind CSS 클래스를 직접 적용할 수 있습니다:

```tsx
<StackNavigation
  initialStack={[{ key: "home", element: <HomeScreen /> }]}
  className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
/>
```

StackRenderer 컴포넌트에도 적용 가능합니다:

```tsx
<StackRenderer className="bg-white dark:bg-slate-800 rounded-xl shadow-lg" />
```

### 커스텀 트랜지션

```tsx
<StackNavigation
  initialStack={[{ key: "home", element: <HomeScreen /> }]}
  transitionDuration={500} // 기본값: 300
  transitionTimingFunction="cubic-bezier(0.68, -0.55, 0.27, 1.55)" // 기본값: "ease-in-out"
/>
```

---

### 타입 사용법 (TypeScript)

```ts
import { StackItem, Activity } from "j-react-stack";

const stack: StackItem[] = [{ key: "main", element: <MainScreen /> }];

const activity: Activity = {
  key: "form",
  element: <FormScreen />,
};
```

---

## 📁 프로젝트 구조

- `StackNavigation`: Provider + Renderer를 통합한 루트 컴포넌트
- `useStackNavigation`: 스택 조작과 상태를 제공하는 훅
- `StackItem`, `Activity`: 커스텀 타입 지원

---

## 📜 라이선스

MIT License
