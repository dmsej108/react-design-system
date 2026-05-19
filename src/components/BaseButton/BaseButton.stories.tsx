import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BaseButton as SBaseButton } from './BaseButton';

const meta: Meta<typeof SBaseButton> = {
  title: 'Components/BaseButton',
  component: SBaseButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: '버튼 텍스트' },
    type: {
      control: 'select',
      options: ['icon', undefined],
      description: '버튼 타입 (icon이면 아이콘 표시)',
    },
    btnsize: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
    },
    iconClass: { control: 'text', description: '아이콘 클래스명' },
    iconSize: {
      control: 'radio',
      options: ['sg', 'mg', 'lg'],
      description: '아이콘 크기',
    },
    offscreen: { control: 'boolean', description: '라벨을 스크린리더 전용으로 숨김' },
    changeValue: { action: 'changeValue', description: '클릭 콜백' },
  },
  args: {
    label: '버튼',
    btnsize: 'small',
    offscreen: false,
  },
};

export default meta;
type Story = StoryObj<typeof SBaseButton>;

/* ── Playground ── */
export const Playground: Story = {};

/* ── 크기 ── */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <SBaseButton label="Small" btnsize="small" />
      <SBaseButton label="Medium" btnsize="medium" />
      <SBaseButton label="Large" btnsize="large" />
    </div>
  ),
};

/* ── 아이콘 버튼 ── */
export const IconButton: Story = {
  args: {
    type: 'icon',
    iconClass: 'ico-search',
    iconSize: 'mg',
    label: '검색',
    offscreen: true,
  },
};

/* ── 텍스트 + 아이콘 ── */
export const IconWithLabel: Story = {
  args: {
    type: 'icon',
    iconClass: 'ico-search',
    label: '검색',
    offscreen: false,
  },
};
