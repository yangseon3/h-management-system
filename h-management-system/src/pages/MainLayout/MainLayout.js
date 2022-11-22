import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'component/Header/Header';
import Nav from 'component/Nav/Nav';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
};

export default MainLayout;
