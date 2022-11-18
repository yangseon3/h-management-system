import React from 'react';
import { useState, useEffect } from 'react';
import API from 'api';
import { basicApi } from 'lib/config';
import './RobotKakaoData.scss';

const RobotKakaoData = () => {
  const [positions, setPositions] = useState([]);
  const [serving, setServing] = useState(false);
  const [error, setError] = useState(false);
  const [performance, setPerformance] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await basicApi.get(API.store);
        const data = await res.data;
        setPositions(data);
      } catch (err) {
        alert(err);
      }
    })();
  }, []);

  return (
    <div className="kakaoDataContainer">
      <div className="kakaoDataImpo">
        <div className="kakaoDataImpoContent">모든 매장모아보기</div>
        {positions?.stores?.map(item => (
          <div className="kakaoDataImpoWrapper">
            <div className="kakaoDataCookGauge">
              <div className="kakaoDataBranchName">{item.map_name}</div>
              <div className="kakaoDataStatusDisplay">
                <div>🔴 에러 🟢 서빙중 🔵 대기중 ⚫️ 수리중</div>
                <div className="kakaoDataGauge">
                  <div
                    className="error"
                    style={{ width: `${item.serving_count}0%` }}
                  ></div>
                  <div
                    className="serving"
                    style={{ width: `${item.error_count}0%` }}
                  ></div>
                  <div
                    className="waiting"
                    style={{ width: `${item.serving_count}0%` }}
                  ></div>
                  <div
                    className="repair"
                    style={{ width: `${item.error_count}0%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="kakaoDataServing">
              <div
                className="kakaoDataServing"
                onMouseEnter={() => setServing(true)}
                onMouseLeave={() => setServing(false)}
              >
                {serving ? (
                  <div className="storeDataHover">{item.serving_count}</div>
                ) : (
                  <div className="storeDataContent">서빙횟수</div>
                )}
              </div>
              <div
                className="kakaoDataServing"
                onMouseEnter={() => setError(true)}
                onMouseLeave={() => setError(false)}
              >
                {error ? (
                  <div className="storeDataHover">{item.error_count}</div>
                ) : (
                  <div className="storeDataContent">에러횟수</div>
                )}
              </div>
              <div
                className="kakaoDataServing"
                onMouseEnter={() => setPerformance(true)}
                onMouseLeave={() => setPerformance(false)}
              >
                {performance ? (
                  <div className="storeDataHover">{item.performance}</div>
                ) : (
                  <div className="storeDataContent">주행효율</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RobotKakaoData;
