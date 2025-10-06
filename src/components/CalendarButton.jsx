import React, {forwardRef} from 'react'
import { BiCalendar } from 'react-icons/bi';


const CalendarButton = forwardRef(({ value, onClick, className}, ref) => (
  
    <button 
    className={className}
    onClick={onClick}
    ref={ref} 
    type="button" 
  >
    <BiCalendar className='w-6 h-6' /> {value}
  </button>
  
));

export default CalendarButton
