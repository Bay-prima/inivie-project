import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import CalendarButton from './CalendarButton';

const buttonClass = "hidden md:flex px-4 py-2 mt-2 text-sm italic border border-white bg-transparent cursor-pointer items-center text-center gap-4";

const ReadOnlyCalendar = () => {


  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="">
      
      
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        
        customInput={<CalendarButton className={buttonClass} />}

        dateFormat="EEE, dd, MMM, yyyy" // Format tampilan calendar
        placeholderText="Pilih tanggal"
        isClearable={false}
      />
      
      {/* <p className="mt-4 text-sm text-gray-600">
        Tanggal yang Dipilih: **{selectedDate.toLocaleDateString('id-ID', {
          year: 'numeric', month: 'long', day: 'numeric'
        })}**
      </p> */}
    </div>
  );
};

export default ReadOnlyCalendar;