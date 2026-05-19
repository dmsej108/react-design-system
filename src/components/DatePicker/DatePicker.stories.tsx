import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker as SDatePicker } from './DatePicker';

const meta: Meta<typeof SDatePicker> = {
  title: 'Components/DatePicker',
  component: SDatePicker,
  tags: ['autodocs'],
  argTypes: {
    label:       { control: 'text' },
    placeholder: { control: 'text' },
    disabled:    { control: 'boolean' },
  },
  args: {
    label:       '날짜',
    placeholder: '날짜 선택',
    disabled:    false,
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
