import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'component/Header/Header';
import Nav from 'component/Nav/Nav';
import './MainLayout.scss';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Nav />
      <div className="contentWrap">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
