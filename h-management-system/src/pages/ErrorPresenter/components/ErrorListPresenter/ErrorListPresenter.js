import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'component/Calendar/Calendar';
import Category from 'component/Category/Category';
import './ErrorListPresenter.scss';

const ErrorListPresenter = ({
  event,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  defaultErrorList,
  errorInfo,
  selectedMapId,
}) => {
  const [mapId, setMapId] = useState(selectedMapId ? selectedMapId : 0);

  const navigate = useNavigate();

  const onChangeMapIdHandler = e => {
    setMapId(parseInt(e.target.value));
  };

  console.log(defaultErrorList);

  return (
    <div className="errorListPresenter">
      <div className="categoryBox">
        <Category
          type="errorCategory"
          event={onChangeMapIdHandler}
          mapId={mapId}
        />
      </div>
      <div className="calendarBox">
        <Calendar
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          event={event}
          mapId={mapId}
        />
      </div>
      <div className="errorListBox">
        {defaultErrorList &&
          defaultErrorList.error_notice?.map(
            ({
              error_id,
              error_msg,
              current_node,
              robot_id,
              created_at,
              map_id,
              error_type,
            }) =>
              errorInfo && errorInfo.error_id === error_id ? (
                <div
                  className="checkedErrorList"
                  key={error_id}
                  onClick={() => {
                    navigate('/error');
                  }}
                >
                  <p className="errorText">error_msg : {error_msg}</p>
                  <p className="errorText">current_node : {current_node}</p>
                  <p className="errorText">robot_id : {robot_id}</p>
                  <p className="errorText">created_at : {created_at}</p>
                </div>
              ) : (
                <div
                  className="errorList"
                  key={error_id}
                  onClick={() => {
                    navigate(`/errorDetail/${error_id}`, {
                      state: {
                        initialInfo: {
                          map_id,
                          startDate,
                          endDate,
                        },
                        error: {
                          robot_id,
                          created_at,
                          map_id,
                          error_type,
                          error_id,
                        },
                        errorList: defaultErrorList,
                      },
                    });
                  }}
                >
                  <p className="errorText">error_msg : {error_msg}</p>
                  <p className="errorText">current_node : {current_node}</p>
                  <p className="errorText">robot_id : {robot_id}</p>
                  <p className="errorText">created_at : {created_at}</p>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default ErrorListPresenter;
