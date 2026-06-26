import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker as SDatePicker } from './DatePicker';

const createTime = (hours: number, minutes: number) =>
  new Date(2024, 0, 1, hours, minutes, 0, 0);

const businessHours = {
  minTime: createTime(9, 0),
  maxTime: createTime(18, 0),
};

const meta: Meta<typeof SDatePicker> = {
  title: 'Components/DatePicker',
  component: SDatePicker,
  tags: ['autodocs'],
  argTypes: {
    label:               { control: 'text' },
    placeholder:         { control: 'text' },
    size:                { control: 'radio', options: ['small', 'medium', 'large'] },
    dateFormat:          { control: 'text' },
    disabled:            { control: 'boolean' },
    showTimeSelect:      { control: 'boolean' },
    showTimeSelectOnly:  { control: 'boolean' },
    timeSelectMode:      { control: 'radio', options: ['list', 'separate'] },
    timeFormat:          { control: 'text' },
    timeIntervals:       { control: { type: 'number', min: 1, step: 1 } },
  },
  args: {
    label:               '날짜',
    placeholder:         '날짜 선택',
    size:                'medium',
    dateFormat:          'yyyy.MM.dd',
    disabled:            false,
    showTimeSelect:      false,
    showTimeSelectOnly:  false,
    timeSelectMode:      'list',
    timeFormat:          'HH:mm',
    timeIntervals:       30,
  },
};

export default meta;
type Story = StoryObj<typeof SDatePicker>;

/* ── Playground ── */
export const Playground: Story = {};

/* ── 기본 ── */
export const Default: Story = {
  name: '기본',
  render: () => <SDatePicker label="날짜 선택" />,
};

/* ── 비활성화 ── */
export const Disabled: Story = {
  name: '비활성화',
  render: () => <SDatePicker label="비활성화" disabled />,
};

/* ── 최소/최대 날짜 ── */
export const MinMax: Story = {
  name: '최소 · 최대 날짜',
  render: () => {
    const today = new Date();
    const nextMonth = new Date(today);
    nextMonth.setMonth(today.getMonth() + 1);
    return (
      <SDatePicker
        label="예약 날짜 (오늘 ~ 1개월)"
        minDate={today}
        maxDate={nextMonth}
      />
    );
  },
};

/* ── 특정 날짜 비활성 ── */
export const ExcludeDates: Story = {
  name: '특정 날짜 비활성',
  render: () => {
    const today = new Date();
    const exclude = [
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7),
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14),
    ];
    return (
      <SDatePicker
        label="비활성 날짜 포함 (+3일, +7일, +14일)"
        excludeDates={exclude}
      />
    );
  },
};

/* ── 주말 비활성 ── */
export const WeekdayOnly: Story = {
  name: '평일만 선택',
  render: () => (
    <SDatePicker
      label="영업일 선택 (주말 제외)"
      filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
    />
  ),
};

/* ── 날짜 + 시간 ── */
export const DateTime: Story = {
  name: '날짜 · 시간',
  render: () => (
    <SDatePicker
      label="예약 일시"
      showTimeSelect
      timeIntervals={10}
    />
  ),
};

/* ── 시간만 ── */
export const TimeOnly: Story = {
  name: '시간만',
  render: () => (
    <SDatePicker
      label="시간"
      showTimeSelectOnly
      timeIntervals={15}
    />
  ),
};

/* ── 날짜 + 시간 (시·분 분리) ── */
export const DateTimeSeparate: Story = {
  name: '날짜 · 시간 (시·분 분리)',
  render: () => (
    <SDatePicker
      label="예약 일시"
      showTimeSelect
      timeSelectMode="separate"
      timeIntervals={15}
    />
  ),
};

/* ── 시간만 (시·분 분리) ── */
export const TimeOnlySeparate: Story = {
  name: '시간만 (시·분 분리)',
  render: () => (
    <SDatePicker
      label="시간"
      showTimeSelectOnly
      timeSelectMode="separate"
      timeIntervals={15}
    />
  ),
};

/* ── 시간 범위 (목록) ── */
export const TimeRange: Story = {
  name: '시간 범위 (09:00 ~ 18:00)',
  render: () => (
    <SDatePicker
      label="예약 일시"
      showTimeSelect
      timeIntervals={15}
      {...businessHours}
    />
  ),
};

/* ── 시간 범위 (시·분 분리) ── */
export const TimeRangeSeparate: Story = {
  name: '시간 범위 · 시·분 분리',
  render: () => (
    <SDatePicker
      label="예약 일시"
      showTimeSelect
      timeSelectMode="separate"
      timeIntervals={15}
      {...businessHours}
    />
  ),
};

/* ── 콜백 ── */
export const WithCallback: Story = {
  name: '날짜 변경 콜백',
  render: () => {
    function Demo() {
      const [selected, setSelected] = useState<Date | null>(null);
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <SDatePicker label="날짜" onDateChange={setSelected} />
          {selected && (
            <p style={{ margin: 0, fontSize: 13, color: 'var(--ds-text-muted)' }}>
              선택된 날짜: {selected.toLocaleDateString('ko-KR')}
            </p>
          )}
        </div>
      );
    }
    return <Demo />;
  },
};
