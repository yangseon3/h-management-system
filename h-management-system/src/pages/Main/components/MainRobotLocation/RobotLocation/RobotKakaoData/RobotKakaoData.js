import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import './RobotKakaoData.scss';
import { GetKakaoData } from '../../RobotKakaoController/RobotKakaoController';

const RobotKakaoData = () => {
  const [serving, setServing] = useState(false);
  const [error, setError] = useState(false);
  const [performance, setPerformance] = useState(false);

  const params = useParams();

  const RobotDetail = () => {
    query(params.productId);
  };

  const query = useQuery(['mapDataCount'], GetKakaoData);

  const totalData = query.data && query.data.stores;

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
                <div onClick={RobotDetail} className="kakaoDataBranchName">
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
