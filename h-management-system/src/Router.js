import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Login from 'pages/LoginPresenter/LoginPresenter';
import MainLayout from 'pages/MainLayout/MainLayout';
import MainPresenter from 'pages/MainPresenter/MainPresenter';
import RobotPresenter from 'pages/RobotPresenter/RobotPresenter';
import ErrorPresenter from 'pages/ErrorPresenter/ErrorPresenter';
import ErrorDetailPresenter from 'pages/ErrorDetailPresenter/ErrorDetailPresenter';
import LogPresenter from 'pages/LogPresenter/LogPresenter';
import ChartPresenter from 'pages/ChartPresenter/ChartPresenter';
import StorePresenter from 'pages/StorePresenter/StorePresenter';

const Router = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/main" element={<MainPresenter />} />
            <Route path="/robot" element={<RobotPresenter />} />
            <Route path="/store" element={<StorePresenter />} />
            <Route path="/error" element={<ErrorPresenter />} />
            <Route
              path="/errorDetail/:errorId"
              element={<ErrorDetailPresenter />}
            />
            <Route path="/log" element={<LogPresenter />} />
            <Route path="/chart" element={<ChartPresenter />} />
          </Route>

          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Router;
