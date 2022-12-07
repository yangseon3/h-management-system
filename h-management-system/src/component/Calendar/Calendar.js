import React, { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import Button from 'component/Button/Button';
import './Calendar.scss';
import Button from 'component/Button/Button';

const CustomDatePickerInput = forwardRef((props, ref) => (
  <input
    className="customInput"
    type="text"
    ref={ref}
    {...props}
    style={{
      width: '5.8854vw',
      height: '1.7708vw',
      borderRadius: '1.7708vw',
      background: '#f0f3fa',
      border: 'none',
      fontSize: '0.7813vw',
      fontWeight: '500',
      color: '#5655a5',
      textAlign: 'center',
      cursor: 'pointer',
    }}
  />
));

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
        customInput={<CustomDatePickerInput />}
      />
      <ReactDatePicker
        locale={ko} // 한글로 변경
        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
        showPopperArrow={false} // 화살표 변경
        minDate={startDate} // 오늘 날짜 전은 선택 못하게
        selected={endDate}
        onChange={date => setEndDate(date)}
        customInput={<CustomDatePickerInput />}
      />
      <Button
        type="primaryBtn"
        text="검색"
        event={() => {
          postDatesInfoHandler(calendarDate);
        }}
      />
    </div>
  );
};

export default Calendar;
