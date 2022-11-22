import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { GetKakaoData } from '../../RobotKakaoController/RobotKakaoController';

const Kakao = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState({});

  const params = useParams();

  const RobotDetail = () => {
    query(params.productId);
  };
  const query = useQuery(['mapData'], GetKakaoData);

  const totalData = query.data && query.data.stores;

  const totalValue =
    totalData &&
    totalData.map(cur => ({
      ...cur,
      x: Number(cur.store_x_pos),
      y: Number(cur.store_y_pos),
    }));

  return (
    <>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 37.4765,
          lng: 126.818,
        }}
        style={{
          width: '100%',
          height: '450px',
        }}
        level={12} // 지도의 확대 레벨
      >
        {totalValue &&
          totalValue.map(item => (
            <div key={item.map_id}>
              <MapMarker
                onClick={RobotDetail}
                position={{ lat: item.y, lng: item.x }}
                clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                // 마커에 마우스오버 이벤트를 등록합니다
                onMouseOver={
                  // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                  () => {
                    setIsOpen(true);
                    setInfo(item);
                  }
                }
                // 마커에 마우스아웃 이벤트를 등록합니다
                onMouseOut={
                  // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                  () => setIsOpen(false)
                }
              >
                {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
                {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
                {isOpen && info.map_id === item.map_id && (
                  <div
                    style={{
                      padding: '15px',
                      color: '#000',
                    }}
                  >
                    {item.map_name}
                  </div>
                )}
              </MapMarker>
            </div>
          ))}
      </Map>
    </>
  );
};

export default Kakao;
