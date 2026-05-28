import type { Meta, StoryObj } from '@storybook/react';
import { Button as SButton } from './Button';
import { Icon as SIcon } from '../Icon/Icon';

const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M13.5 2.5L7 9M13.5 2.5L9 13.5L7 9M13.5 2.5L2.5 6.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const meta: Meta<typeof SButton> = {
  title: 'Components/Button',
  component: SButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: '버튼 스타일 변형',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
    },
    loading: { control: 'boolean', description: '로딩 상태' },
    disabled: { control: 'boolean', description: '비활성화' },
    fullWidth: { control: 'boolean', description: '전체 너비' },
    children: { control: 'text' },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    loading: false,
    disabled: false,
    fullWidth: false,
  },
};

export default meta;
type Story = StoryObj<typeof SButton>;

/* ── Playground ── */
export const Playground: Story = {};

/* ── Variants ── */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <SButton variant="primary">Primary</SButton>
      <SButton variant="secondary">Secondary</SButton>
      <SButton variant="outline">Outline</SButton>
      <SButton variant="ghost">Ghost</SButton>
    </div>
  ),
};

/* ── Sizes ── */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <SButton size="small">Small</SButton>
      <SButton size="medium">Medium</SButton>
      <SButton size="large">Large</SButton>
    </div>
  ),
};

/* ── With Icons ── */
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <SButton leftIcon={<SendIcon />}>이체하기</SButton>
      <SButton variant="outline" rightIcon={<PlusIcon />}>추가하기</SButton>
      <SButton variant="secondary" leftIcon={<PlusIcon />} rightIcon={<SendIcon />}>양쪽 아이콘</SButton>
    </div>
  ),
};

/* ── States ── */
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <SButton>Normal</SButton>
      <SButton loading>Loading</SButton>
      <SButton disabled>Disabled</SButton>
    </div>
  ),
};

/* ── Full Width ── */
export const FullWidth: Story = {
  args: { fullWidth: true, children: '전체 너비 버튼' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};

/* ── Icon Only ── */
export const IconOnly: Story = {
  name: 'Icon Only',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <SButton variant="ghost"   iconOnly size="small" ><SIcon name="search"   size="small"  /></SButton>
        <SButton variant="ghost"   iconOnly size="medium"><SIcon name="search"   size="medium" /></SButton>
        <SButton variant="ghost"   iconOnly size="large" ><SIcon name="search"   size="large"  /></SButton>
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <SButton variant="outline" iconOnly size="small" ><SIcon name="edit"     size="small"  /></SButton>
        <SButton variant="outline" iconOnly size="medium"><SIcon name="edit"     size="medium" /></SButton>
        <SButton variant="outline" iconOnly size="large" ><SIcon name="edit"     size="large"  /></SButton>
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <SButton variant="danger"  iconOnly size="small" ><SIcon name="trash"    size="small"  /></SButton>
        <SButton variant="primary" iconOnly size="small" ><SIcon name="plus"     size="small"  /></SButton>
        <SButton variant="ghost"   iconOnly disabled     ><SIcon name="settings" size="medium" /></SButton>
      </div>
    </div>
  ),
};

/* ── Individual variants as stories ── */
export const Primary: Story   = { args: { variant: 'primary',   children: 'Primary' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Secondary' } };
export const Outline: Story   = { args: { variant: 'outline',   children: 'Outline' } };
export const Ghost: Story     = { args: { variant: 'ghost',     children: 'Ghost' } };
export const Danger: Story    = { args: { variant: 'danger',    children: 'Danger' } };
export const Loading: Story   = { args: { loading: true,        children: '처리 중...' } };
