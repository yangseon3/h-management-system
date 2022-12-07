import Category from 'component/Category/Category';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './StoreList.scss';

const StoreList = ({ storeData, params }) => {
  const storeListRef = useRef(null);
  useEffect(() => {
    if (params.category === 'all') {
      storeListRef.current.style.width = '100%';
    } else {
      storeListRef.current.style.width = '24vw';
    }
  }, [params]);
  const storeSelected = storeData && storeData[0];

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
          <div className="shortCutInfo">
            <p>{storeSelected.map_name}</p>
            <p>{storeSelected.descirbe}</p>
            <p>{storeSelected.descirbe}</p>
          </div>
        )
      )}
    </div>
  );
};

export default StoreList;
