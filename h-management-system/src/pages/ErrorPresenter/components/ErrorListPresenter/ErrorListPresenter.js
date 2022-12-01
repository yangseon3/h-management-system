import React, { useState } from 'react';
import Calendar from 'component/Calendar/Calendar';
import { useNavigate } from 'react-router-dom';
import './ErrorListPresenter.scss';
import Category from 'component/Category/Category';

const ErrorListPresenter = ({
  event,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  defaultErrorList,
  errorId,
  selectedMapId,
  setErrorId,
}) => {
  const [mapId, setMapId] = useState(selectedMapId);

  const onChangeMapIdHandler = e => {
    setMapId(parseInt(e.target.value));
  };

  return (
    <div className="errorListPresenter">
      <p className="errorListTitle">Error</p>
      <Category
        type="errorCategory"
        event={onChangeMapIdHandler}
        selectedMapId={selectedMapId}
      />
      <Calendar
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        event={event}
        mapId={mapId}
      />
      <div className="errorListBox">
        {defaultErrorList &&
          defaultErrorList.error_notice?.map(
            ({ error_id, error_msg, current_node, robot_id, created_at }) => (
              <div
                className={
                  errorId === error_id ? 'checkedErrorList' : 'errorList'
                }
                key={error_id}
                onClick={() => {
                  errorId && error_id === errorId
                    ? setErrorId(undefined)
                    : setErrorId(error_id);
                }}
              >
                <p>error_msg : {error_msg}</p>
                <p>current_node {current_node}:</p>
                <p>robot_id : {robot_id}</p>
                <p>created_at : {created_at}</p>
              </div>
            )
          )}
      </div>
    </div>
  );
};

const MAP = [
  { mapId: 0, mapName: '전체' },
  { mapId: 1, mapName: '향동 노리쿡' },
  { mapId: 2, mapName: '연신내 더피플버거' },
];

export default ErrorListPresenter;
