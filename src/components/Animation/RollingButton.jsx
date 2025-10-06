import React from 'react';
import '../../Style/RollingButton.css'; 
import { BsArrowUpRight } from 'react-icons/bs';

const RollingButton = ({ text, bgColor, textColor }) => {
  return (
    <button className={`rolling-button ${bgColor} ${textColor} `}>
      {/* Container untuk teks dan ikon normal */}
      <span className="button-content ">
        <span>{text}</span>
        <BsArrowUpRight className="button-icon" />
      </span>

      {/* Container untuk teks dan ikon saat di-hover */}
      <span className="button-content button-content-hover">
        <span>{text}</span>
        <BsArrowUpRight className="button-icon" />
      </span>
    </button>
  );
};

export default RollingButton;