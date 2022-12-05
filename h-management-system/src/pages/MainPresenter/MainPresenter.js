import React from 'react';
import MainErrorStatus from './components/MainErrorStatus/MainErrorStatus';
import MainRobotLocation from './components/MainRobotLocation/MainRobotLocation';
import './MainPresenter.scss';
import { motion } from 'framer-motion';

const MainPresenter = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="main"
    >
      <MainRobotLocation />
      <MainErrorStatus />
    </motion.div>
  );
};

export default MainPresenter;
