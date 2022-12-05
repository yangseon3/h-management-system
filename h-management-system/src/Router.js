import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AnimatePresence } from 'framer-motion';
import Login from 'pages/LoginPresenter/LoginPresenter';
import MainLayout from 'pages/MainLayout/MainLayout';
import MainPresenter from 'pages/MainPresenter/MainPresenter';
import RobotPresenter from 'pages/RobotPresenter/RobotPresenter';
import ErrorPresenter from 'pages/ErrorPresenter/ErrorPresenter';
import LogPresenter from 'pages/LogPresenter/LogPresenter';
import ChartPresenter from 'pages/ChartPresenter/ChartPresenter';
import StorePresenter from 'pages/StorePresenter/StorePresenter';
import Modal from 'react-modal';

const Router = () => {
  const queryClient = new QueryClient();

  Modal.setAppElement('#root');
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AnimatePresence>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/main" element={<MainPresenter />} />
              <Route path="/robot/:category" element={<RobotPresenter />} />
              <Route path="/store/:category" element={<StorePresenter />} />
              <Route path="/error" element={<ErrorPresenter />} />
              <Route path="/log" element={<LogPresenter />} />
              <Route path="/chart" element={<ChartPresenter />} />
            </Route>

            <Route path="/" element={<Login />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Router;
