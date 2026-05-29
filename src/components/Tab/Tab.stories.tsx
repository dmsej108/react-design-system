import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tab as STab } from './Tab';

const meta: Meta<typeof STab> = {
  title: 'Components/Tab',
  component: STab,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'underline', 'line'],
      description: '탭 스타일 variant',
    },
    fullWidth: {
      control: 'boolean',
      description: '전체 너비 사용 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof STab>;

const eventTabs = [
  { label: '전체 이벤트', value: 'all' },
  { label: '행운의 당첨자', value: 'winner' },
  { label: '나의 이벤트', value: 'my' },
];

const defaultTabs = [
  { label: '탭 1', value: 'tab1' },
  { label: '탭 2', value: 'tab2' },
  { label: '탭 3', value: 'tab3' },
  { label: '탭 4', value: 'tab4' },
];

export const Filled: Story = {
  args: {
    tabs: eventTabs,
    variant: 'filled',
    defaultValue: 'all',
  },
};

export const FilledFullWidth: Story = {
  args: {
    tabs: eventTabs,
    variant: 'filled',
    fullWidth: true,
    defaultValue: 'all',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '480px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Underline: Story = {
  args: {
    tabs: defaultTabs,
    variant: 'underline',
    defaultValue: 'tab1',
  },
};

export const Line: Story = {
  args: {
    tabs: defaultTabs,
    variant: 'line',
    defaultValue: 'tab1',
  },
};

export const Controlled: Story = {
  render: () => {
    const [active, setActive] = useState('all');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <STab
          tabs={eventTabs}
          variant="filled"
          fullWidth
          value={active}
          onChange={setActive}
        />
        <p style={{ fontSize: 14, color: '#666' }}>선택된 탭: <strong>{active}</strong></p>
      </div>
    );
  },
};

export const WithDisabled: Story = {
  args: {
    tabs: [
      { label: '탭 1', value: 'tab1' },
      { label: '탭 2 (비활성)', value: 'tab2', disabled: true },
      { label: '탭 3', value: 'tab3' },
    ],
    variant: 'underline',
    defaultValue: 'tab1',
  },
};
