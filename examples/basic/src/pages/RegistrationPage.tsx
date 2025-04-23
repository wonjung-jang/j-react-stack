import React from "react";
import { StackNavigation, useStackNavigation } from "j-react-stack";

// 스택의 각 단계 화면 컴포넌트들
const Step1Screen = () => {
  const { push } = useStackNavigation();

  return (
    <div className="screen step">
      <h2>1단계: 기본 정보</h2>
      <div className="form-group">
        <label>이름</label>
        <input type="text" placeholder="이름을 입력하세요" />
      </div>
      <div className="form-group">
        <label>이메일</label>
        <input type="email" placeholder="이메일을 입력하세요" />
      </div>
      <div className="button-group">
        <button
          className="next-button"
          onClick={() => push({ key: "step2", element: <Step2Screen /> })}
        >
          다음 단계
        </button>
      </div>
    </div>
  );
};

const Step2Screen = () => {
  const { pop, push } = useStackNavigation();

  return (
    <div className="screen step">
      <h2>2단계: 추가 정보</h2>
      <div className="form-group">
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력하세요" />
      </div>
      <div className="form-group">
        <label>비밀번호 확인</label>
        <input type="password" placeholder="비밀번호를 다시 입력하세요" />
      </div>
      <div className="button-group">
        <button className="back-button" onClick={() => pop()}>
          이전 단계
        </button>
        <button
          className="next-button"
          onClick={() => push({ key: "step3", element: <Step3Screen /> })}
        >
          다음 단계
        </button>
      </div>
    </div>
  );
};

const Step3Screen = () => {
  const { pop, clear } = useStackNavigation();

  return (
    <div className="screen step">
      <h2>3단계: 완료</h2>
      <div className="success-message">
        <div className="icon">✓</div>
        <p>회원가입이 완료되었습니다!</p>
        <p>이메일 주소로 확인 메일이 발송되었습니다.</p>
      </div>
      <div className="button-group">
        <button className="back-button" onClick={() => pop()}>
          이전 단계
        </button>
        <button className="reset-button" onClick={() => clear()}>
          처음으로
        </button>
      </div>
    </div>
  );
};

// 메인 회원가입 페이지 컴포넌트
export const RegistrationPage = () => {
  return (
    <div className="registration-page page-container">
      <div className="page-header">
        <h1>사용 예시: 회원가입 프로세스</h1>
        <p>단계별 등록 과정의 구현 사례입니다</p>
      </div>

      <div className="stack-container">
        <StackNavigation
          initialStack={[{ key: "step1", element: <Step1Screen /> }]}
          className="registration-stack"
          transitionDuration={300}
          transitionTimingFunction="ease-in-out"
        />
      </div>
    </div>
  );
};
