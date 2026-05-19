import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker as SDatePicker } from './DatePicker';

const meta: Meta<typeof SDatePicker> = {
  title: 'Components/DatePicker',
  component: SDatePicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SDatePicker>;

export const Playground: Story = {};

export const WithCallback: Story = {
  name: '날짜 변경 콜백',
  render: () => (
    <SDatePicker onDateChange={(date) => console.log('선택된 날짜:', date)} />
  ),
};
