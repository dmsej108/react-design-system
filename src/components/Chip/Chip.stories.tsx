import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chip as SChip } from './Chip';
import type { ChipVariant } from './Chip';

const meta: Meta<typeof SChip> = {
  title: 'Components/Chip',
  component: SChip,
  tags: ['autodocs'],
  argTypes: {
    variant:  { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'neutral'] },
    size:     { control: 'radio',  options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    label:    { control: 'text' },
  },
  args: {
    label:    '칩',
    variant:  'neutral',
    size:     'medium',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof SChip>;

/* ── Playground ── */
export const Playground: Story = {};

/* ── Variants ── */
export const Variants: Story = {
  name: '변형',
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {(['primary', 'secondary', 'success', 'warning', 'error', 'info', 'neutral'] as ChipVariant[]).map((v) => (
        <SChip key={v} label={v} variant={v} />
      ))}
    </div>
  ),
};

/* ── Sizes ── */
export const Sizes: Story = {
  name: '크기',
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <SChip label="Small"  size="small"  variant="primary" />
      <SChip label="Medium" size="medium" variant="primary" />
      <SChip label="Large"  size="large"  variant="primary" />
    </div>
  ),
};

/* ── Closeable ── */
export const Closeable: Story = {
  name: '닫기 버튼',
  render: () => {
    function Demo() {
      const initial: { id: number; label: string; variant: ChipVariant }[] = [
        { id: 1, label: '서울',   variant: 'primary' },
        { id: 2, label: '부산',   variant: 'primary' },
        { id: 3, label: '대구',   variant: 'primary' },
        { id: 4, label: '인천',   variant: 'primary' },
        { id: 5, label: '광주',   variant: 'primary' },
      ];
      const [chips, setChips] = useState(initial);
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {chips.map((chip) => (
              <SChip
                key={chip.id}
                label={chip.label}
                variant={chip.variant}
                onClose={() => setChips((prev) => prev.filter((c) => c.id !== chip.id))}
              />
            ))}
            {chips.length === 0 && (
              <span style={{ fontSize: 13, color: 'var(--ds-text-muted)' }}>모두 삭제됐습니다.</span>
            )}
          </div>
          {chips.length < initial.length && (
            <button
              style={{ alignSelf: 'flex-start', fontSize: 12, color: 'var(--ds-text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              onClick={() => setChips(initial)}
            >
              초기화
            </button>
          )}
        </div>
      );
    }
    return <Demo />;
  },
};

/* ── Clickable ── */
export const Clickable: Story = {
  name: '클릭 가능',
  render: () => {
    function Demo() {
      const filters = ['전체', '입출금', '이체', '카드', '대출'];
      const [active, setActive] = useState('전체');
      return (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {filters.map((f) => (
            <SChip
              key={f}
              label={f}
              variant={active === f ? 'primary' : 'neutral'}
              onClick={() => setActive(f)}
            />
          ))}
        </div>
      );
    }
    return <Demo />;
  },
};

/* ── Clickable + Closeable ── */
export const ClickableAndCloseable: Story = {
  name: '클릭 + 닫기',
  render: () => {
    function Demo() {
      const all = ['React', 'TypeScript', 'Vite', 'Storybook', 'CSS Modules'];
      const [selected, setSelected] = useState<string[]>([]);

      const toggle = (tag: string) =>
        setSelected((prev) =>
          prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <p style={{ margin: '0 0 8px', fontSize: 12, color: 'var(--ds-text-muted)' }}>태그 선택</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {all.map((tag) => (
                <SChip
                  key={tag}
                  label={tag}
                  variant={selected.includes(tag) ? 'info' : 'neutral'}
                  onClick={() => toggle(tag)}
                />
              ))}
            </div>
          </div>
          {selected.length > 0 && (
            <div>
              <p style={{ margin: '0 0 8px', fontSize: 12, color: 'var(--ds-text-muted)' }}>선택됨</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {selected.map((tag) => (
                  <SChip
                    key={tag}
                    label={tag}
                    variant="info"
                    onClose={() => toggle(tag)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }
    return <Demo />;
  },
};

/* ── Disabled ── */
export const Disabled: Story = {
  name: '비활성',
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <SChip label="비활성" variant="neutral" disabled />
      <SChip label="비활성 + 닫기" variant="primary" disabled onClose={() => {}} />
      <SChip label="비활성 + 클릭" variant="info" disabled onClick={() => {}} />
    </div>
  ),
};
