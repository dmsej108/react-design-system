import type { Meta, StoryObj } from '@storybook/react';
import { Card as SCard } from './Card';
import { Button as SButton } from '../Button/Button';
import { Badge as SBadge } from '../Badge/Badge';

const meta: Meta<typeof SCard> = {
  title: 'Components/Card',
  component: SCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['flat', 'raised', 'sunken'],
      description: '카드 스타일',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
  },
  args: {
    variant: 'raised',
    size: 'medium',
    title: '카드 제목',
    description: '카드에 대한 간단한 설명입니다.',
    children: '카드 본문 내용이 여기에 표시됩니다.',
  },
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof SCard>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <SCard variant="raised" title="Raised" description="기본 그림자 카드">
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-neutral-600)' }}>카드 본문입니다.</p>
      </SCard>
      <SCard variant="flat" title="Flat" description="테두리만 있는 카드">
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-neutral-600)' }}>카드 본문입니다.</p>
      </SCard>
      <SCard variant="sunken" title="Sunken" description="배경이 들어간 카드">
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-neutral-600)' }}>카드 본문입니다.</p>
      </SCard>
    </div>
  ),
};

export const WithHeaderAction: Story = {
  args: {
    title: '이번달 지출',
    description: '2026년 3월',
    headerAction: <SBadge variant="success" dot>정상</SBadge>,
    children: (
      <p style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-neutral-900)' }}>
        487,500원
      </p>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    title: '이체 확인',
    description: '아래 내용을 확인해주세요.',
    children: (
      <div style={{ fontSize: '0.875rem', color: 'var(--color-neutral-700)', lineHeight: 1.6 }}>
        <div>받는 분: 홍길동</div>
        <div>금액: 100,000원</div>
        <div>메모: 생일 축하</div>
      </div>
    ),
    footer: (
      <div style={{ display: 'flex', gap: 8 }}>
        <SButton variant="outline" size="small">취소</SButton>
        <SButton size="small">이체하기</SButton>
      </div>
    ),
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <SCard size="small" title="Small" description="작은 패딩">콘텐츠</SCard>
      <SCard size="medium" title="Medium" description="기본 패딩">콘텐츠</SCard>
      <SCard size="large" title="Large" description="넓은 패딩">콘텐츠</SCard>
    </div>
  ),
};
