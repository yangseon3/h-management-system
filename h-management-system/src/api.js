const API = {
  postLoginInfo: '/default/public/login',
  getAllError: '/api/monitoring-system/error-notice/all',
  getDateError: '/api/monitoring-system/error-notice/by-time',
  getByTimeError: '/api/monitoring-system/error-notice/current-date',
  postByTimeError: '/api/monitoring-system/error-notice',
  statistic: '/api/monitoring-system/statistic',
  riskCount: '/api/monitoring-system/risk_count',
  robot: '/api/monitoring-system/robot',
  store: '/api/monitoring-system/store',
  storeCopy: '/api/monitoring-system/robot_count',
  servingLog: '/api/serving-log/by-time',
  getDefaultError: '/api/monitoring-system/error-statistic',
};

export default API;
