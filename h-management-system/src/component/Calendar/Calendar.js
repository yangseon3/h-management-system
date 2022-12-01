import React from 'react';
import ReactDatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.scss';

const Calendar = ({
  event,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  mapId,
}) => {
  const convertDate = date => {
    let year = date.getFullYear().toString();
    let month = ('0' + (date?.getMonth() + 1)).slice(-2);
    let day = ('0' + date?.getDate()).slice(-2);

    return year + '-' + month + '-' + day;
  };

  const calendarDate = {
    start_date: convertDate(startDate),
    end_date: convertDate(endDate),
  };

  const postDatesInfoHandler = dates => {
    mapId === undefined ? event(dates) : event({ ...dates, map_id: mapId });
  };

  return (
    <div className="calendarBox">
      <ReactDatePicker
        locale={ko} // 한글로 변경
        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
        showPopperArrow={false} // 화살표 변경
        selected={startDate}
        onChange={date => setStartDate(date)}
      />
      <ReactDatePicker
        locale={ko} // 한글로 변경
        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
        showPopperArrow={false} // 화살표 변경
        minDate={startDate} // 오늘 날짜 전은 선택 못하게
        selected={endDate}
        onChange={date => setEndDate(date)}
      />
      <button
        className="searchBtn"
        onClick={() => {
          postDatesInfoHandler(calendarDate);
        }}
      >
        검색
      </button>
    </div>
  );
};

export default Calendar;
