import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from 'pages/Login/Login';
import Main from 'pages/Main/Main';
import Detail from 'pages/Detail/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
