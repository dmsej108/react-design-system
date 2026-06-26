import React, { useMemo, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.css';
import { Input, type InputProps, type InputSize } from '../Input/Input';
import { Icon, type IconName } from '../Icon/Icon';
import { SeparateTimeInput } from './SeparateTimeInput';

export type TimeSelectMode = 'list' | 'separate';

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
  showTimeSelect?: boolean;
  showTimeSelectOnly?: boolean;
  timeSelectMode?: TimeSelectMode;
  timeFormat?: string;
  timeIntervals?: number;
  minTime?: Date;
  maxTime?: Date;
  onDateChange?: (selectedDate: Date | null) => void;
}

interface DateInputProps extends InputProps {
  iconName?: IconName;
}

const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  ({ iconName = 'calendar', ...props }, ref) => (
    <Input
      ref={ref}
      suffix={<Icon name={iconName} size="small" color="var(--ds-text-muted)" />}
      {...props}
    />
  ),
);
DateInput.displayName = 'DateInput';

export const DatePicker = ({
  label,
  placeholder,
  size = 'medium',
  dateFormat,
  disabled = false,
  minDate,
  maxDate,
  excludeDates,
  filterDate,
  showTimeSelect = false,
  showTimeSelectOnly = false,
  timeSelectMode = 'list',
  timeFormat = 'HH:mm',
  timeIntervals = 30,
  minTime,
  maxTime,
  onDateChange,
}: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const withTime = showTimeSelect || showTimeSelectOnly;
  const useSeparateTime = withTime && timeSelectMode === 'separate';
  const useListTime = withTime && !useSeparateTime;

  const resolvedDateFormat = useMemo(() => {
    if (dateFormat) return dateFormat;
    if (showTimeSelectOnly) return 'HH:mm';
    if (showTimeSelect) return 'yyyy.MM.dd HH:mm';
    return 'yyyy.MM.dd';
  }, [dateFormat, showTimeSelect, showTimeSelectOnly]);

  const resolvedPlaceholder = useMemo(() => {
    if (placeholder) return placeholder;
    if (showTimeSelectOnly) return '시간 선택';
    if (showTimeSelect) return '날짜 · 시간 선택';
    return '날짜 선택';
  }, [placeholder, showTimeSelect, showTimeSelectOnly]);

  const inputIconName = showTimeSelectOnly ? 'clock' : 'calendar';

  const separateTimeInput = useMemo(
    () => (
      <SeparateTimeInput
        timeIntervals={timeIntervals}
        minTime={minTime}
        maxTime={maxTime}
      />
    ),
    [maxTime, minTime, timeIntervals],
  );

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateChange?.(date);
  };

  return (
    <div className={styles.datePicker}>
      <ReactDatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat={resolvedDateFormat}
        disabled={disabled}
        minDate={minDate}
        maxDate={maxDate}
        excludeDates={excludeDates}
        filterDate={filterDate}
        showTimeSelect={useListTime}
        showTimeSelectOnly={showTimeSelectOnly}
        showTimeInput={useSeparateTime}
        timeFormat={timeFormat}
        timeIntervals={timeIntervals}
        minTime={minTime}
        maxTime={maxTime}
        timeInputLabel="시간"
        customTimeInput={useSeparateTime ? separateTimeInput : undefined}
        customInput={
          <DateInput
            iconName={inputIconName}
            label={label}
            placeholder={resolvedPlaceholder}
            size={size}
            disabled={disabled}
            readOnly
          />
        }
      />
    </div>
  );
};


DatePicker.displayName = 'SDatePicker';
