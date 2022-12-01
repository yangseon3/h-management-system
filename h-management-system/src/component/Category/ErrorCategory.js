import React from 'react';

const ErrorCategory = ({ event, selectedMapId }) => {
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
];

export default ErrorCategory;
