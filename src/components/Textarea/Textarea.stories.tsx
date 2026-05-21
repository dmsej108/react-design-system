import type { Meta, StoryObj } from '@storybook/react';
import { Textarea as STextarea } from './Textarea';

const meta: Meta<typeof STextarea> = {
  title: 'Components/Textarea',
  component: STextarea,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    resize: { control: 'radio', options: ['none', 'vertical', 'both'] },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorText: { control: 'text' },
    rows: { control: 'number' },
    maxLength: { control: 'number' },
    showCount: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    error: { control: 'boolean' },
  },
  args: {
    label: '내용',
    placeholder: '내용을 입력하세요',
    size: 'medium',
    resize: 'vertical',
    rows: 3,
    disabled: false,
    required: false,
    error: false,
    showCount: false,
  },
  decorators: [(Story) => <div style={{ width: 400 }}><Story /></div>],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof STextarea>;

export const Playground: Story = {};

export const Sizes: Story = {
  name: '크기',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 400 }}>
      <STextarea label="Small" size="small" placeholder="small" rows={2} />
      <STextarea label="Medium" size="medium" placeholder="medium" rows={2} />
      <STextarea label="Large" size="large" placeholder="large" rows={2} />
    </div>
  ),
};

export const WithCount: Story = {
  name: '글자 수 표시',
  args: {
    label: '메모',
    placeholder: '내용을 입력하세요',
    maxLength: 200,
    showCount: true,
    helperText: '최대 200자까지 입력 가능합니다.',
    rows: 4,
  },
};

export const WithHelper: Story = {
  name: '도움말',
  args: {
    label: '계좌 메모',
    placeholder: '이체 목적 또는 메모를 입력하세요',
    helperText: '수취인에게 표시되는 메모입니다.',
    rows: 3,
  },
};

export const ErrorState: Story = {
  name: '오류 상태',
  args: {
    label: '사유',
    required: true,
    error: true,
    errorText: '사유를 입력해주세요.',
    rows: 3,
  },
};

export const Disabled: Story = {
  name: '비활성화',
  args: {
    label: '처리 내용',
    defaultValue: '2024년 1월 15일 처리 완료',
    disabled: true,
    rows: 3,
  },
};

export const ResizeNone: Story = {
  name: '리사이즈 없음',
  args: {
    label: '고정 크기',
    placeholder: '크기 조절이 비활성화됩니다.',
    resize: 'none',
    rows: 4,
    helperText: 'resize: none',
  },
};

export const BankingMemo: Story = {
  name: '뱅킹 이체 메모 예시',
  args: {
    label: '이체 메모',
    placeholder: '수취인에게 전달할 메모를 입력하세요',
    maxLength: 100,
    showCount: true,
    rows: 3,
    required: true,
    helperText: '이체 후 수취인 통장에 표시됩니다.',
  },
};
