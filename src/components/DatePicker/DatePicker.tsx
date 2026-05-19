import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.css';
import { Input, type InputProps } from '../Input/Input';
import { Icon } from '../Icon/Icon';

export interface DatePickerProps {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  /** 선택 가능한 최소 날짜 */
  minDate?: Date;
  /** 선택 가능한 최대 날짜 */
  maxDate?: Date;
  /** 비활성화할 특정 날짜 목록 */
  excludeDates?: Date[];
  /** true를 반환하는 날짜만 활성화 (커스텀 필터) */
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

export const DatePicker = ({ label, placeholder = '날짜 선택', disabled = false, minDate, maxDate, excludeDates, filterDate, onDateChange }: DatePickerProps) => {
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
        dateFormat="yyyy.MM.dd"
        disabled={disabled}
        minDate={minDate}
        maxDate={maxDate}
        excludeDates={excludeDates}
        filterDate={filterDate}
        customInput={<DateInput label={label} placeholder={placeholder} disabled={disabled} readOnly />}
      />
    </div>
  );
};


DatePicker.displayName = 'SDatePicker';
