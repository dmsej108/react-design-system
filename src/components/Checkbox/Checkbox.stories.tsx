import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox as SCheckbox, CheckboxGroup as SCheckboxGroup } from './Checkbox';

const meta: Meta<typeof SCheckbox> = {
  title: 'Components/Checkbox',
  component: SCheckbox,
  tags: ['autodocs'],
  argTypes: {
    size:          { control: 'radio', options: ['small', 'medium', 'large'] },
    disabled:      { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    label:         { control: 'text' },
  },
  args: {
    label:         '체크박스',
    size:          'medium',
    disabled:      false,
    indeterminate: false,
  },
};

export default meta;
type Story = StoryObj<typeof SCheckbox>;

/* ── Playground ── */
export const Playground: Story = {
  render: (args) => {
    function Demo() {
      const [checked, setChecked] = useState(false);
      return <SCheckbox {...args} checked={checked} onChange={setChecked} />;
    }
    return <Demo />;
  },
};

/* ── 크기 ── */
export const Sizes: Story = {
  name: '크기',
  render: () => {
    function Demo() {
      const [vals, setVals] = useState({ small: false, medium: true, large: false });
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 11, color: 'var(--ds-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{size}</span>
              <SCheckbox
                size={size}
                label={`${size} 체크박스`}
                checked={vals[size]}
                onChange={(c) => setVals((p) => ({ ...p, [size]: c }))}
              />
            </div>
          ))}
        </div>
      );
    }
    return <Demo />;
  },
};

/* ── 상태 ── */
export const States: Story = {
  name: '상태',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <SCheckbox label="기본 (unchecked)" checked={false} onChange={() => {}} />
      <SCheckbox label="선택됨 (checked)" checked={true} onChange={() => {}} />
      <SCheckbox label="부분 선택 (indeterminate)" checked={false} indeterminate onChange={() => {}} />
      <SCheckbox label="비활성 (disabled)" disabled checked={false} onChange={() => {}} />
      <SCheckbox label="비활성 선택됨" disabled checked={true} onChange={() => {}} />
    </div>
  ),
};

/* ── 전체선택 패턴 ── */
export const SelectAll: Story = {
  name: '전체선택 패턴',
  render: () => {
    function Demo() {
      const items = ['입출금 내역', '이체 내역', '카드 결제', '자동이체'];
      const [selected, setSelected] = useState<string[]>([]);

      const allChecked = selected.length === items.length;
      const indeterminate = selected.length > 0 && !allChecked;

      const toggleAll = (checked: boolean) => setSelected(checked ? [...items] : []);
      const toggle = (item: string, checked: boolean) =>
        setSelected((prev) => checked ? [...prev, item] : prev.filter((v) => v !== item));

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <SCheckbox
            label={<strong>전체 선택</strong>}
            checked={allChecked}
            indeterminate={indeterminate}
            onChange={toggleAll}
          />
          <div style={{ width: '100%', height: 1, background: 'var(--ds-border-light)', margin: '4px 0' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 4 }}>
            {items.map((item) => (
              <SCheckbox
                key={item}
                label={item}
                checked={selected.includes(item)}
                onChange={(c) => toggle(item, c)}
              />
            ))}
          </div>
          {selected.length > 0 && (
            <p style={{ margin: '8px 0 0', fontSize: 12, color: 'var(--ds-text-muted)' }}>
              선택: {selected.join(', ')}
            </p>
          )}
        </div>
      );
    }
    return <Demo />;
  },
};

/* ── CheckboxGroup ── */
export const Group: Story = {
  name: 'CheckboxGroup',
  render: () => {
    function Demo() {
      const [val, setVal] = useState<string[]>(['sms']);
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <SCheckboxGroup
            options={[
              { value: 'sms',   label: 'SMS' },
              { value: 'email', label: '이메일' },
              { value: 'push',  label: '앱 푸시' },
              { value: 'kakao', label: '카카오톡', disabled: true },
            ]}
            value={val}
            onChange={setVal}
          />
          <p style={{ margin: 0, fontSize: 12, color: 'var(--ds-text-muted)' }}>
            선택: {val.length > 0 ? val.join(', ') : '없음'}
          </p>
        </div>
      );
    }
    return <Demo />;
  },
};

/* ── 비활성 ── */
export const Disabled: Story = {
  name: '전체 비활성',
  render: () => (
    <SCheckboxGroup
      disabled
      value={['option1']}
      options={[
        { value: 'option1', label: '선택 불가 A (선택됨)' },
        { value: 'option2', label: '선택 불가 B' },
        { value: 'option3', label: '선택 불가 C' },
      ]}
    />
  ),
};
