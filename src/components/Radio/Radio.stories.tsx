import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup as SRadioGroup } from './Radio';

const meta: Meta<typeof SRadioGroup> = {
  title: 'Components/Radio',
  component: SRadioGroup,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'radio', options: ['vertical', 'horizontal'] },
    size:      { control: 'radio', options: ['small', 'medium', 'large'] },
    disabled:  { control: 'boolean' },
  },
  args: {
    name:      'playground',
    direction: 'horizontal',
    size:      'medium',
    disabled:  false,
    options: [
      { value: 'a', label: '옵션 A' },
      { value: 'b', label: '옵션 B' },
      { value: 'c', label: '옵션 C' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof SRadioGroup>;

/* ── Playground ── */
export const Playground: Story = {
  render: (args) => {
    function Demo() {
      const [val, setVal] = useState('a');
      return <SRadioGroup {...args} value={val} onChange={setVal} />;
    }
    return <Demo />;
  },
};

/* ── 크기 ── */
export const Sizes: Story = {
  name: '크기',
  render: () => {
    function Demo() {
      const [val, setVal] = useState('b');
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 11, color: 'var(--ds-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{size}</span>
              <SRadioGroup
                name={`size-${size}`}
                direction="horizontal"
                size={size}
                value={val}
                onChange={setVal}
                options={[
                  { value: 'a', label: '옵션 A' },
                  { value: 'b', label: '옵션 B' },
                  { value: 'c', label: '옵션 C' },
                ]}
              />
            </div>
          ))}
        </div>
      );
    }
    return <Demo />;
  },
};

/* ── 기본 세로 ── */
export const Vertical: Story = {
  name: '세로 (기본)',
  render: () => {
    function Demo() {
      const [val, setVal] = useState('option1');
      return (
        <SRadioGroup
          name="vertical"
          value={val}
          onChange={setVal}
          options={[
            { value: 'option1', label: '입출금 계좌' },
            { value: 'option2', label: '적금 계좌' },
            { value: 'option3', label: '청약 계좌' },
          ]}
        />
      );
    }
    return <Demo />;
  },
};

/* ── 가로 ── */
export const Horizontal: Story = {
  name: '가로',
  render: () => {
    function Demo() {
      const [val, setVal] = useState('card');
      return (
        <SRadioGroup
          name="horizontal"
          direction="horizontal"
          value={val}
          onChange={setVal}
          options={[
            { value: 'card',     label: '카드' },
            { value: 'transfer', label: '계좌이체' },
            { value: 'mobile',   label: '간편결제' },
          ]}
        />
      );
    }
    return <Demo />;
  },
};

/* ── 일부 비활성 ── */
export const PartialDisabled: Story = {
  name: '일부 항목 비활성',
  render: () => {
    function Demo() {
      const [val, setVal] = useState('usd');
      return (
        <SRadioGroup
          name="partial"
          value={val}
          onChange={setVal}
          options={[
            { value: 'krw', label: '원화 (KRW)' },
            { value: 'usd', label: '달러 (USD)' },
            { value: 'jpy', label: '엔화 (JPY)', disabled: true },
            { value: 'eur', label: '유로 (EUR)', disabled: true },
          ]}
        />
      );
    }
    return <Demo />;
  },
};

/* ── 전체 비활성 ── */
export const Disabled: Story = {
  name: '전체 비활성',
  render: () => (
    <SRadioGroup
      name="disabled"
      value="b"
      disabled
      options={[
        { value: 'a', label: '선택 불가 A' },
        { value: 'b', label: '선택 불가 B (선택됨)' },
        { value: 'c', label: '선택 불가 C' },
      ]}
    />
  ),
};

/* ── 선택값 표시 ── */
export const WithOutput: Story = {
  name: '선택값 확인',
  render: () => {
    function Demo() {
      const [val, setVal] = useState('');
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SRadioGroup
            name="output"
            direction="horizontal"
            value={val}
            onChange={setVal}
            options={[
              { value: 'daily',   label: '일별' },
              { value: 'weekly',  label: '주별' },
              { value: 'monthly', label: '월별' },
              { value: 'yearly',  label: '연별' },
            ]}
          />
          {val && (
            <p style={{ margin: 0, fontSize: 13, color: 'var(--ds-text-muted)' }}>
              선택: <strong style={{ color: 'var(--ds-text)' }}>{val}</strong>
            </p>
          )}
        </div>
      );
    }
    return <Demo />;
  },
};
