import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import API from 'api';
import { basicApi } from 'lib/config';

const Kakao = () => {
  const [positions, setPositions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          width: '100%',
          height: '450px',
        }}
        level={3} // 지도의 확대 레벨
      >
        {positions?.stores?.map(item => (
          <div>
            <MapMarker
              key={item.map_id}
              position={{ lat: 33.450701, lng: 126.570667 }}
              clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
              // 마커에 마우스오버 이벤트를 등록합니다
              onMouseOver={
                // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                () => setIsOpen(true)
              }
              // 마커에 마우스아웃 이벤트를 등록합니다
              onMouseOut={
                // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                () => setIsOpen(false)
              }
            >
              {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
              {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
              {isOpen && (
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
