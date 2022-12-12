import Category from 'component/Category/Category';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './StoreList.scss';

const StoreList = ({ storeData, params }) => {
  const storeListRef = useRef(null);
  useEffect(() => {
    if (params.category === 'all') {
      storeListRef.current.style.width = '100%';
      storeListRef.current.style.backgroundColor = 'transparent';
      storeListRef.current.style.height = 'auto';
      storeListRef.current.style.marginLeft = '0';
      storeListRef.current.style.padding = '0 1vw';
    } else {
      storeListRef.current.style.width = '22vw';
      storeListRef.current.style.backgroundColor = '#fff';
      storeListRef.current.style.height = '74.228vh';
      storeListRef.current.style.marginLeft = '-1.5625vw';
      storeListRef.current.style.padding = '1vw 1vw 1vw 2.5625vw';
    }
  }, [params]);
  const storeSelected = storeData && storeData[0];

  const STORE_INFO = [
    {
      title: '설명',
      dataValue: storeSelected.descirbe,
      robotNumber:
        Number(storeSelected.error) +
        Number(storeSelected.refair) +
        Number(storeSelected.serving) +
        Number(storeSelected.stay),
    },
    { title: 'Map_ID', dataValue: storeSelected.map_id },
    { title: 'LOGIN', dataValue: storeSelected.login },
    {
      title: 'START_NODE',
      dataValue: storeSelected.start_node,
    },
    {
      title: 'WIFI_ID',
      dataValue: storeSelected.wifi_id,
    },
    {
      title: 'WIFI_PW',
      dataValue: storeSelected.wifi_pw,
    },
    { title: 'HOME', dataValue: storeSelected.home },
  ];

  return (
    <div className="storeList" ref={storeListRef}>
      <Category type="storeCategory" />
      {params.category === 'all' ? (
        <ul className="listWrap">
          {storeData.map(store => (
            <Link key={store.map_id} to={`/store/${store.map_id}`}>
              <li>
                <p className="storeTitle">
                  {store.map_name} <span className="arrowIcon">&gt;</span>
                </p>
                <div className="imgWrap">
                  <img
                    src={`/images/map/map-background-${store.map_id}-monitoring.png`}
                    alt="매장 맵"
                  />
                </div>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        storeSelected && (
          <div className="shortcutInfo">
            <div className="shortcutInfoWrap">
              <div className="shortcutTitle">
                <p>Map Name</p>
                <p className="storeName">{storeSelected.map_name}</p>
              </div>
              {STORE_INFO.map((info, idx) => (
                <div className="mappedInfo" key={idx}>
                  <p className="shortcutSubTitle">{info.title}</p>
                  <p>{info.dataValue}</p>
                  {info.robotNumber ? <p>로봇 {info.robotNumber}대</p> : null}
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default StoreList;
