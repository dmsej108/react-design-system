import { useCallback, useMemo, type ChangeEvent } from 'react';
import styles from './DatePicker.module.css';

export interface SeparateTimeInputProps {
  value?: string;
  onChange?: (time: string) => void;
  timeIntervals?: number;
  minTime?: Date;
  maxTime?: Date;
}

const padTimeUnit = (value: number) => String(value).padStart(2, '0');

const toMinutes = (hour: number, minute: number) => hour * 60 + minute;

const getDateMinutes = (date: Date) => toMinutes(date.getHours(), date.getMinutes());

const isTimeOutOfRange = (
  hour: number,
  minute: number,
  minTime?: Date,
  maxTime?: Date,
) => {
  const candidateMinutes = toMinutes(hour, minute);

  if (minTime && maxTime) {
    const minMinutes = getDateMinutes(minTime);
    const maxMinutes = getDateMinutes(maxTime);

    if (minMinutes <= maxMinutes) {
      return candidateMinutes < minMinutes || candidateMinutes > maxMinutes;
    }

    return candidateMinutes < minMinutes && candidateMinutes > maxMinutes;
  }

  if (minTime) {
    return candidateMinutes < getDateMinutes(minTime);
  }

  if (maxTime) {
    return candidateMinutes > getDateMinutes(maxTime);
  }

  return false;
};

const parseTimeValue = (value?: string) => {
  if (!value?.includes(':')) {
    return { hours: '', minutes: '' };
  }

  const [hours, minutes] = value.split(':');
  return { hours, minutes };
};

export const SeparateTimeInput = ({
  value = '',
  onChange,
  timeIntervals = 30,
  minTime,
  maxTime,
}: SeparateTimeInputProps) => {
  const { hours, minutes } = parseTimeValue(value);

  const minuteOptions = useMemo(() => {
    const options: number[] = [];
    for (let minute = 0; minute < 60; minute += timeIntervals) {
      options.push(minute);
    }
    return options;
  }, [timeIntervals]);

  const hourOptions = useMemo(
    () => Array.from({ length: 24 }, (_, hour) => hour),
    [],
  );

  const isMinuteDisabled = useCallback(
    (hour: number, minute: number) => isTimeOutOfRange(hour, minute, minTime, maxTime),
    [minTime, maxTime],
  );

  const isHourDisabled = useCallback(
    (hour: number) => {
      const hasEnabledMinute = minuteOptions.some(
        (minute) => !isMinuteDisabled(hour, minute),
      );
      return !hasEnabledMinute;
    },
    [isMinuteDisabled, minuteOptions],
  );

  const emitTimeChange = useCallback(
    (nextHours: string, nextMinutes: string) => {
      onChange?.(`${nextHours}:${nextMinutes}`);
    },
    [onChange],
  );

  const handleHourChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const nextHours = event.target.value;
      const nextMinutes = minutes || padTimeUnit(minuteOptions[0] ?? 0);
      emitTimeChange(nextHours, nextMinutes);
    },
    [emitTimeChange, minuteOptions, minutes],
  );

  const handleMinuteChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const nextMinutes = event.target.value;
      const nextHours = hours || padTimeUnit(hourOptions[0] ?? 0);
      emitTimeChange(nextHours, nextMinutes);
    },
    [emitTimeChange, hourOptions, hours],
  );

  return (
    <div className={styles.separateTime}>
      <select
        className={styles.timeSelect}
        value={hours}
        onChange={handleHourChange}
        aria-label="시"
      >
        {hourOptions.map((hour) => {
          const hourValue = padTimeUnit(hour);
          return (
            <option key={hourValue} value={hourValue} disabled={isHourDisabled(hour)}>
              {hourValue}
            </option>
          );
        })}
      </select>
      <span className={styles.timeSeparator} aria-hidden="true">
        :
      </span>
      <select
        className={styles.timeSelect}
        value={minutes}
        onChange={handleMinuteChange}
        aria-label="분"
      >
        {minuteOptions.map((minute) => {
          const minuteValue = padTimeUnit(minute);
          const selectedHour = hours ? Number(hours) : hourOptions[0] ?? 0;
          return (
            <option
              key={minuteValue}
              value={minuteValue}
              disabled={isMinuteDisabled(selectedHour, minute)}
            >
              {minuteValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

SeparateTimeInput.displayName = 'SeparateTimeInput';
