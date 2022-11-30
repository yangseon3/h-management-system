import React from 'react';

const LogMappingCategory = ({ event, selectedMapId }) => {
  return (
    <select onChange={event}>
      {MAP.map(map =>
        selectedMapId === map.mapId ? (
          <option key={map.mapId} value={map.mapId} selected>
            {map.mapName}
          </option>
        ) : (
          <option key={map.mapId} value={map.mapId}>
            {map.mapName}
          </option>
        )
      )}
    </select>
  );
};

const MAP = [
  { mapId: 0, mapName: '전체' },
  { mapId: 1, mapName: '향동 노리쿡' },
  { mapId: 2, mapName: '연신내 더피플버거' },
  { mapId: 3, mapName: '공유 주방' },
  { mapId: 4, mapName: '차세대 융합 기술 연구원' },
  { mapId: 901, mapName: 'tpb-test' },
  { mapId: 902, mapName: 'the_people_burger_ys_test' },
  { mapId: 909, mapName: 'testbed_gnr_test' },
  { mapId: 915, mapName: 'speed_test_of_test' },
];

export default LogMappingCategory;
