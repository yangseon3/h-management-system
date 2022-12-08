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
    } else {
      storeListRef.current.style.width = '22vw';
      storeListRef.current.style.backgroundColor = '#fff';
      storeListRef.current.style.height = 'calc(100vh - 2.2396vw - 22.772vh)';
      storeListRef.current.style.marginLeft = '-1.5625vw';
      storeListRef.current.style.padding = '1vw 1vw 1vw 2.5625vw';
    }
  }, [params]);
  const storeSelected = storeData && storeData[0];
  console.log(storeSelected);

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
              <p>{storeSelected.map_name}</p>
              <p>{storeSelected.descirbe}</p>
              <p>{storeSelected.descirbe}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default StoreList;
