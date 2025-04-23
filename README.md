# J-React-Stack

J-React-Stack은 React 애플리케이션에서 스택 기반 네비게이션을 쉽게 구현할 수 있는 라이브러리입니다. 부드러운 전환 효과와 직관적인 API를 제공합니다.

## 설치

```bash
npm install j-react-stack
# 또는
yarn add j-react-stack
```

## 주요 특징

- **부드러운 전환 애니메이션** - 화면 간 자연스러운 슬라이드 애니메이션
- **직관적인 API** - 간단한 push/pop 기반 API
- **타입스크립트 지원** - 완전한 타입 지원으로 개발 경험 향상
- **초기 화면 필수 설정** - 스택에 항상 시작 화면이 있도록 보장

## 기본 사용법

리액트 스택 네비게이터는 단일 페이지 내에서 여러 단계의 UI를 구현할 때 유용합니다. 주요 컴포넌트와 훅은 다음과 같습니다:

### StackNavigation 컴포넌트

전체 스택 네비게이션 시스템을 구성하는 컴포넌트입니다.

```jsx
import { StackNavigation } from "j-react-stack";

function MyComponent() {
  return (
    <StackNavigation
      initialStack={[{ key: "step1", element: <Step1Screen /> }]}
      transitionDuration={300}
      transitionTimingFunction="ease-in-out"
    />
  );
}
```

### useStackNavigation 훅

스택을 조작하기 위한 함수와 상태에 접근할 수 있는 훅입니다.

```jsx
import { useStackNavigation } from "j-react-stack";

function MyScreen() {
  const { push, pop, clear, stack } = useStackNavigation();

  // 새 화면 추가
  const goToNextStep = () => {
    push({ key: "nextStep", element: <NextStepScreen /> });
  };

  // 이전 화면으로 돌아가기
  const goBack = () => {
    pop();
  };

  // 처음으로 돌아가기
  const reset = () => {
    clear();
  };

  return (
    <div>
      <h2>현재 화면</h2>
      <button onClick={goToNextStep}>다음</button>
      <button onClick={goBack}>이전</button>
      <button onClick={reset}>처음으로</button>
    </div>
  );
}
```

## 활용 사례

- 다단계 회원가입 프로세스
- 설문조사
- 단계별 체크아웃 프로세스
- 마법사(Wizard) 스타일 입력 폼
- 단계별 튜토리얼

## 고급 사용법

### 커스텀 트랜지션

transitionDuration과 transitionTimingFunction 속성을 사용해 화면 전환 애니메이션을 커스터마이징할 수 있습니다.

```jsx
<StackNavigation
  initialStack={[{ key: "initial", element: <InitialScreen /> }]}
  transitionDuration={500}
  transitionTimingFunction="cubic-bezier(0.68, -0.55, 0.27, 1.55)"
/>
```

### 타입 사용법

라이브러리는 TypeScript로 작성되어 있으며, 다음과 같은 타입을 제공합니다:

```typescript
// 기본 스택 아이템 타입
import { StackItem } from "j-react-stack";

// 예시
const initialStack: StackItem[] = [{ key: "home", element: <HomeScreen /> }];

// 더 자세한 타입이 필요한 경우
import { Activity } from "j-react-stack";
```

## 프로젝트 구조

이 라이브러리는 단순하지만 강력한 API를 제공합니다. 핵심 컴포넌트는 다음과 같습니다:

- `StackNavigation`: Provider와 Renderer를 통합한 편리한 컴포넌트
- `useStackNavigation`: 스택 상태와 액션을 한 번에 제공하는 훅

## 라이선스

MIT
