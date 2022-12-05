const API = {
  postLoginInfo: '/default/public/login',
  getAllError: '/api/monitoring-system/error-notice/all',
  getDateError: '/api/monitoring-system/error-notice/by-time',
  getByTimeError: '/api/monitoring-system/error-notice/current-date',
  postByTimeError: '/api/monitoring-system/error-notice',
  getByMapLog: '/api/monitoring-system/log/map',
  getByRobotLog: '/api/monitoring-system/log/robot',
  getByUserLog: '/api/monitoring-system/log/user',
  postByErrorLog: '/api/monitoring-system/log/error-log',
  postByServingLog: '/api/monitoring-system/log/serving-log',
  postByRobotLog: '/api/monitoring-system/log/robot-log',
  statistic: '/api/monitoring-system/statistic',
  riskCount: '/api/monitoring-system/risk_count',
  robot: '/api/monitoring-system/robot',
  store: '/api/monitoring-system/store',
  storeCopy: '/api/monitoring-system/robot_count',
  servingLog: '/api/serving-log/by-time',
  getDefaultError: '/api/monitoring-system/error-statistic',
  postErrorInfo: '/api/monitoring-system/error-detail',
  postDetatilContent: '/api/monitoring-system/error-detail/content',
};

export default API;
