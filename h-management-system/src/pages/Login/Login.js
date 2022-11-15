import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginHeader">
          <div className="loginHeaderMark">ServingHelper</div>
          <div className="loginHeaderName">H서빙</div>
          <input className="loginIdInput" placeholder="아이디"></input>
          <input className="loginPwInput" placeholder="비밀번호"></input>
        </div>
        <div>
          <div className="buttonValid">아이디 또는 비밀번호가 틀렸습니다.</div>
          <button className="loginButton">로그인</button>
        </div>
        <div className="loginUserinfoFind">
          <a className="loginIdFind">아이디찾기</a>
          <div>|</div>
          <a className="loginPwFind">비밀번호 찾기</a>
        </div>
        <div className="loginFooter">
          <div className="loginFirstName">HELPER</div>
          <div className="loginLastName">ROBOTICS</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
