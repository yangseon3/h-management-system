import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Login from 'pages/Login/Login';
import Main from 'pages/Main/Main';
import Detail from 'pages/Detail/Detail';
import MainLayout from 'pages/MainLayout/MainLayout';

const Router = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/main" element={<Main />} />
            <Route path="/detail" element={<Detail />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Router;
