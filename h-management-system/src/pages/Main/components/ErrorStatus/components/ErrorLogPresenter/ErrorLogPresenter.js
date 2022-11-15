import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { ErrorLogController } from './ErrorLogController';
import './ErrorLogPresenter.scss';

const ErrorLogPresenter = () => {
  const [errLog, setErrLog] = useState([]);
  const { status, data, error } = useQuery(['errorLog'], ErrorLogController, {
    onSuccess: data => {
      let [err, result] = data;
      if (!err) {
        setErrLog(result.error_notice.reverse());
      } else {
        console.log(result);
      }
    },
    refetchInterval: 1000,
  });

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div className="errorLogPresenter">
      {errLog.map(log => (
        <div key={log.log_id}>{log.error_msg}</div>
      ))}
    </div>
  );
};

export default ErrorLogPresenter;
