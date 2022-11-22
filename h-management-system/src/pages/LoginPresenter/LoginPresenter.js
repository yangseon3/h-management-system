import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { LoginController } from './LoginController';
import './Login.scss';

const LoginPresenter = () => {
  const [validation, setValidation] = useState('');

  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPassword: '',
  });

  const navigate = useNavigate();

  const { userId, userPassword } = userInfo;

  const isValid = userId && userPassword;

  const userInfoHandler = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleClickUserInfo = () => {
    if (!isValid) return setValidation('아이디와 비밀번호 모두 입력해주세요');
    postUserInfo.mutate(userInfo);
  };

  const postUserInfo = useMutation(LoginController, {
    onSuccess: data => {
      let [err, result] = data;
      if (!err) {
        if (result.valid === true) {
          navigate('/main');
        } else {
          setValidation(result);
        }
      } else {
        console.log(result);
      }
    },
  });
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginHeader">
          <div className="loginHeaderMark">ServingHelper</div>
          <div className="loginHeaderName">H서빙</div>
          <input
            className="loginIdInput"
            name="userId"
            placeholder="아이디"
            value={userId}
            onChange={userInfoHandler}
          />
          <input
            className="loginPwInput"
            type="password"
            name="userPassword"
            placeholder="비밀번호"
            value={userPassword}
            onChange={userInfoHandler}
          />
          {validation && <p className="loginValidation">{validation}</p>}
        </div>
        <div>
          <button className="loginButton" onClick={handleClickUserInfo}>
            로그인
          </button>
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

export default LoginPresenter;
