import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import './RobotKakaoData.scss';
import { GetKakaoData } from '../../RobotKakaoController/RobotKakaoController';

const RobotKakaoData = () => {
  const navigate = useNavigate();

  const query = useQuery(['mapDataCount'], GetKakaoData);

  const totalData = query.data && query.data[1].stores;

  const totalValue =
    totalData &&
    totalData.map(cur => ({
      ...cur,
      total:
        parseInt(cur.error) +
        parseInt(cur.serving) +
        parseInt(cur.stay) +
        parseInt(cur.refair),
    }));

  return (
    <div className="kakaoDataContainer">
      <div className="kakaoDataImpo">
        <div className="kakaoDataImpoContent">모든 매장모아보기</div>
        {totalValue &&
          totalValue.map(item => (
            <div className="kakaoDataImpoWrapper" key={item.map_id}>
              <div className="kakaoDataCookGauge">
                <div
                  className="kakaoDataBranchName"
                  onClick={() => navigate(`/store/${item.map_id}`)}
                >
                  {item.map_name}
                </div>
                <div className="kakaoDataStatusDisplay">
                  <div>🔴 에러 🟢 서빙중 🔵 대기중 ⚫️ 수리중</div>
                  <div className="kakaoDataGauge">
                    <div
                      className="error"
                      style={{
                        width: `${(item.error / item.total) * 100}%`,
                      }}
                    ></div>
                    <div
                      className="serving"
                      style={{
                        width: `${(item.serving / item.total) * 100}%`,
                      }}
                    ></div>
                    <div
                      className="waiting"
                      style={{
                        width: `${(item.stay / item.total) * 100}%`,
                      }}
                    ></div>
                    <div
                      className="repair"
                      style={{
                        width: `${(item.refair / item.total) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="kakaoData">
                <div className="kakaoDataWrapper">
                  <div className="storeDataContent">서빙횟수</div>
                  <div className="storeDataCount">{item.serving_count}</div>
                </div>
                <div className="kakaoDataWrapper">
                  <div className="storeDataContent">에러횟수</div>
                  <div className="storeDataCount">{item.error_count}</div>
                </div>
                <div className="kakaoDataWrapper">
                  <div className="storeDataContent">주행효율</div>
                  <div className="storeDataCount">{item.performance}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RobotKakaoData;
