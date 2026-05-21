import type { Meta, StoryObj } from '@storybook/react';
import { FileInput as SFileInput } from './FileInput';

const meta: Meta<typeof SFileInput> = {
  title: 'Components/FileInput',
  component: SFileInput,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['dropzone', 'inline'] },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    accept: { control: 'text', description: 'MIME 타입 또는 확장자 (예: image/*, .pdf)' },
    multiple: { control: 'boolean' },
    maxSize: { control: 'number', description: '최대 파일 크기 (bytes)' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    error: { control: 'boolean' },
    errorText: { control: 'text' },
    helperText: { control: 'text' },
  },
  args: {
    variant: 'dropzone',
    label: '파일 업로드',
    multiple: false,
    disabled: false,
    required: false,
    error: false,
  },
  decorators: [(Story) => <div style={{ width: 480 }}><Story /></div>],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof SFileInput>;

export const Playground: Story = {};

export const ImageOnly: Story = {
  args: {
    label: '프로필 이미지',
    accept: 'image/*',
    helperText: 'JPG, PNG, GIF 형식만 허용합니다.',
  },
};

export const MultipleFiles: Story = {
  args: {
    label: '첨부파일',
    multiple: true,
    helperText: '여러 파일을 선택할 수 있습니다.',
  },
};

export const WithMaxSize: Story = {
  args: {
    label: '서류 업로드',
    accept: '.pdf,.doc,.docx',
    maxSize: 5 * 1024 * 1024, // 5MB
    helperText: 'PDF, DOC 형식 · 최대 5MB',
  },
};

export const WithError: Story = {
  args: {
    label: '신분증 업로드',
    error: true,
    errorText: '파일을 업로드해주세요.',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성화',
    disabled: true,
    helperText: '현재 파일 업로드가 불가합니다.',
  },
};

export const BankingExample: Story = {
  name: '뱅킹 서류 첨부 예시',
  args: {
    label: '계좌 개설 서류',
    accept: '.pdf,image/*',
    multiple: true,
    maxSize: 10 * 1024 * 1024,
    required: true,
    helperText: '신분증, 재직증명서 등 · PDF 또는 이미지 · 파일당 최대 10MB',
  },
};

/* ── Inline Variant ── */
export const Inline: Story = {
  name: '인라인 (텍스트 입력형)',
  args: {
    variant: 'inline',
    label: '첨부파일',
    placeholder: '파일을 선택하세요',
    helperText: '파일을 선택하거나 찾아보기를 클릭하세요.',
  },
};

export const InlineMultiple: Story = {
  name: '인라인 · 다중 선택',
  args: {
    variant: 'inline',
    label: '첨부파일',
    multiple: true,
    accept: '.pdf,.doc,.docx',
    helperText: 'PDF, DOC 형식',
  },
};

export const InlineWithError: Story = {
  name: '인라인 · 오류 상태',
  args: {
    variant: 'inline',
    label: '신분증 업로드',
    required: true,
    error: true,
    errorText: '파일을 업로드해주세요.',
  },
};

export const InlineDisabled: Story = {
  name: '인라인 · 비활성화',
  args: {
    variant: 'inline',
    label: '첨부파일',
    disabled: true,
    helperText: '현재 파일 업로드가 불가합니다.',
  },
};
