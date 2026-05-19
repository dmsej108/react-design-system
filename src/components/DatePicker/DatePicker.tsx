import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.css';
export interface DatePickerProps {
  onDateChange?: (selectedDate: Date | null) => void;
}



export const DatePicker = ({ onDateChange }:DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateChange?.(date);
  };

  return (
    <div className={styles.datePicker}>
      <ReactDatePicker selected={selectedDate} onChange={handleChange} />
    </div>
  );
};


DatePicker.displayName = 'SDatePicker';
