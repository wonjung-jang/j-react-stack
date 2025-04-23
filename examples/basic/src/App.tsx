import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { RegistrationPage } from "./pages/RegistrationPage";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // 테마 변경 함수
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // 테마 변경시 HTML 요소에 data-theme 속성 설정
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // 시스템 기본 설정 확인
  useEffect(() => {
    // 로컬 스토리지에 저장된 값이 없고, 시스템이 다크 모드면 다크 모드로 설정
    if (
      !localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <div className="sidebar">
          <h1>React Stack</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">홈</Link>
              </li>
              <li>
                <Link to="/registration">사용 예시</Link>
              </li>
            </ul>
          </nav>
        </div>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
        </main>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </BrowserRouter>
  );
}

// 간단한 홈 페이지
const HomePage = () => {
  return (
    <div className="home-page page-container">
      <h2>리액트 스택 네비게이터</h2>
      <p>
        이 라이브러리는 단일 페이지 내에서 다단계 UI 흐름을 구현하는 데
        적합합니다.
      </p>
      <p>회원가입, 설문조사, 게시글 작성 등의 다단계 프로세스에 유용합니다.</p>
      <div className="cta-button">
        <Link to="/registration">사용 예시 살펴보기 →</Link>
      </div>
    </div>
  );
};

export default App;
