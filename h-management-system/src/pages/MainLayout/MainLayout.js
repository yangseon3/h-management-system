import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'component/Header/Header';
import './MainLayout.scss';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="contentWrap">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
