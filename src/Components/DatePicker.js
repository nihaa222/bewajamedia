import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useDispatch } from "react-redux";

function DatePicker({ setForm, form }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date._d);
    const currentDate = new Date(date._d);
    console.log(currentDate);

    const formatdate = currentDate
      .toLocaleDateString()
      .split("")
      .slice(0, 4)
      .join("");

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    console.log(minutes);

    const formattime = `${hours}:${minutes}`;

    console.log(formattime);

    setForm({ ...form, date: formatdate, time: formattime });
    console.log(formattime);
    localStorage.setItem("date", formatdate);
    localStorage.setItem("time", formattime);

    // setInterval(() => {
    //   localStorage.removeItem("date");
    //   localStorage.removeItem("time");
    // }, 2000);
  };

  return (
    <div>
      <Datetime value={selectedDate} onChange={handleDateChange} />
    </div>
  );
}

export default DatePicker;
