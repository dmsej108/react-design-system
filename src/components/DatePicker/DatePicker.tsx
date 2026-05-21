import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.css';
import { Input, type InputProps, type InputSize } from '../Input/Input';
import { Icon } from '../Icon/Icon';

export interface DatePickerProps {
  label?: string;
  placeholder?: string;
  size?: InputSize;
  dateFormat?: string;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  excludeDates?: Date[];
  filterDate?: (date: Date) => boolean;
  onDateChange?: (selectedDate: Date | null) => void;
}

const DateInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => (
    <Input
      ref={ref}
      suffix={<Icon name="calendar" size="small" color="var(--ds-text-muted)" />}
      {...props}
    />
  ),
);
DateInput.displayName = 'DateInput';

export const DatePicker = ({ label, placeholder = '날짜 선택', size = 'medium', dateFormat = 'yyyy.MM.dd', disabled = false, minDate, maxDate, excludeDates, filterDate, onDateChange }: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateChange?.(date);
  };

  return (
    <div className={styles.datePicker}>
      <ReactDatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat={dateFormat}
        disabled={disabled}
        minDate={minDate}
        maxDate={maxDate}
        excludeDates={excludeDates}
        filterDate={filterDate}
        customInput={<DateInput label={label} placeholder={placeholder} size={size} disabled={disabled} readOnly />}
      />
    </div>
  );
};


DatePicker.displayName = 'SDatePicker';
