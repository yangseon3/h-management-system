import React from 'react';
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
        <div className="kakaoDataItemWrapper">
          <div className="kakaoDataEachItem">
            <div className="kakaoDataErrorItem"></div>
            <div className="kakaoDataItemType">에러</div>
          </div>
          <div className="kakaoDataEachItem">
            <div className="kakaoDataServingItem"></div>
            <div className="kakaoDataItemType">서빙중</div>
          </div>
          <div className="kakaoDataEachItem">
            <div className="kakaoDataWaitingItem"></div>
            <div className="kakaoDataItemType">대기중</div>
          </div>
          <div className="kakaoDataEachItem">
            <div className="kakaoDataRepairItem"></div>
            <div className="kakaoDataItemType">수리중</div>
          </div>
        </div>
        {totalValue &&
          totalValue.map(item => (
            <div className="kakaoDataImpoWrapper" key={item.map_id}>
              <div className="kakaoDataCookGauge">
                <div
                  className="kakaoDataBranchWrapper"
                  onClick={() => navigate(`/store/${item.map_id}`)}
                >
                  <img
                    className="branchMark"
                    alt="branchMark"
                    src={item.img_src}
                  />
                  <div className="kakaoDataBranchMove">
                    <div className="kakaoDataBranchName">{item.map_name}</div>
                    <div className="kakaoDataBranchLocation">
                      {item.location}
                    </div>
                  </div>
                  <div className="kakaoDataBranchArrow">〉</div>
                </div>
                <div className="kakaoData">
                  <div className="kakaoDataWrapper">
                    <div className="storeDataContent">서빙횟수</div>
                    <div className="storeDataCount">{item.serving_count}</div>
                  </div>
                  <div className="kakaoDataWrapper">
                    <div className="storeDataContent">에러횟수 </div>
                    <div className="storeDataCount">{item.error_count}</div>
                  </div>
                  <div className="kakaoDataWrapper">
                    <div className="storeDataContent">주행효율</div>
                    <div className="storeDataCount">{item.performance}</div>
                  </div>
                </div>
                <div className="kakaoDataStatusDisplay">
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
            </div>
          ))}
      </div>
    </div>
  );
};

export default RobotKakaoData;
