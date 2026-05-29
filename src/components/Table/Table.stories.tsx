import type { Meta, StoryObj } from '@storybook/react';
import { Table as STable } from './Table';
import type { TableRow } from './Table';

const meta: Meta<typeof STable> = {
  title: 'Components/Table',
  component: STable,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'number',
      description: 'label+value 쌍 열 수',
    },
    bordered: {
      control: 'boolean',
      description: '테두리 표시 여부',
    },
    striped: {
      control: 'boolean',
      description: '홀짝 행 배경색 구분',
    },
    layout: {
      control: 'select',
      options: ['fixed', 'auto'],
      description: 'table-layout 속성',
    },
  },
};

export default meta;
type Story = StoryObj<typeof STable>;

/* ── 기본 1열 (label + value) ── */
const basicRows: TableRow[] = [
  { cells: [{ label: '이벤트 ID', value: '112' }] },
  { cells: [{ label: '이벤트명', value: 'KB GS Pay동반 신를고 스페셜 버드뱃스 응모이벤트' }] },
  { cells: [{ label: '이벤트 유형', value: '일반' }] },
  { cells: [{ label: '이벤트 대상', value: 'KB GS Pay동반 미기입 기업 고객' }] },
  { cells: [{ label: '이벤트 기간', value: '2026.05.28 ~ 2026.07.12' }] },
];

export const Default: Story = {
  args: {
    rows: basicRows,
    bordered: true,
    striped: false,
    layout: 'fixed',
  },
};

/* ── 2열 (한 행에 label+value 2쌍) ── */
const twoColRows: TableRow[] = [
  {
    cells: [
      { label: '이벤트 ID', value: '112' },
      { label: '조회수', value: '166' },
    ],
  },
  {
    cells: [
      { label: '이벤트명', value: 'KB GS Pay동반 신를고 스페셜 버드뱃스 응모이벤트', fullValue: true },
    ],
  },
  {
    cells: [
      { label: '이벤트 유형', value: '일반' },
      { label: '게시 여부', value: '게시' },
    ],
  },
  {
    cells: [
      { label: '이벤트 대상', value: 'KB GS Pay동반 미기입 기업 고객', fullValue: true },
    ],
  },
  {
    cells: [
      { label: '이벤트 기간', value: '2026.05.28 ~ 2026.07.12' },
      { label: '당첨자 발표일', value: '2026.07.20' },
    ],
  },
  {
    cells: [
      { label: 'PUSH 수신동의', value: '전수' },
      { label: '바드 형', value: '씨우기기' },
    ],
  },
];

export const TwoColumns: Story = {
  args: {
    rows: twoColRows,
    columns: 2,
    bordered: true,
    striped: false,
    layout: 'fixed',
  },
};

export const Striped: Story = {
  args: {
    rows: basicRows,
    bordered: true,
    striped: true,
    layout: 'fixed',
  },
};

export const NoBorder: Story = {
  args: {
    rows: basicRows,
    bordered: false,
    striped: false,
  },
};
