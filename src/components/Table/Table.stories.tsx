import type { Meta, StoryObj } from '@storybook/react';
import { Table as STable } from './Table';
import type { TableColumn } from './Table';

const meta: Meta<typeof STable> = {
  title: 'Components/Table',
  component: STable,
  tags: ['autodocs'],
  argTypes: {
    columnsPerRow: {
      control: 'number',
      description: '한 행에 배치할 label+value 쌍 수',
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
    },
  },
};

export default meta;
type Story = StoryObj<typeof STable>;

// ── API 응답 데이터 (실제 사용 예시) ──
interface EventDetail {
  eventId: number;
  viewCount: number;
  eventName: string;
  isPublished: string;
  eventType: string;
  eventTarget: string;
  eventPeriod: string;
  announcementDate: string;
  pushEnabled: string;
  winnerExists: string;
  bannerType: string;
  isActive: string;
  winnerCount: number;
  participation: string;
}

const apiData: EventDetail = {
  eventId: 112,
  viewCount: 166,
  eventName: 'KB GS Pay동반 신규고 스페셜 버드뱃스 응모이벤트',
  isPublished: '게시',
  eventType: '일반',
  eventTarget: 'KB GS Pay동반 미기입 기업 고객',
  eventPeriod: '2026.05.28 ~ 2026.07.12',
  announcementDate: '2026.07.20',
  pushEnabled: '전수',
  winnerExists: '없음',
  bannerType: '씨우기기',
  isActive: '사용',
  winnerCount: 100,
  participation: 'KB GS Pay통장 가입하기',
};

// ── 1열 columns 정의 ──
const singleColumns: TableColumn<EventDetail>[] = [
  { key: 'eventId', label: '이벤트 ID' },
  { key: 'eventName', label: '이벤트명' },
  { key: 'eventType', label: '이벤트 유형' },
  { key: 'eventTarget', label: '이벤트 대상' },
  { key: 'eventPeriod', label: '이벤트 기간' },
];

// ── 2열 columns 정의 ──
const twoColumns: TableColumn<EventDetail>[] = [
  { key: 'eventId', label: '이벤트 ID' },
  { key: 'viewCount', label: '조회수' },
  { key: 'eventName', label: '이벤트명', fullValue: true },
  { key: 'eventType', label: '이벤트 유형' },
  { key: 'isPublished', label: '게시 여부' },
  { key: 'eventTarget', label: '이벤트 대상', fullValue: true },
  { key: 'eventPeriod', label: '이벤트 기간' },
  { key: 'announcementDate', label: '당첨자 발표일' },
  { key: 'pushEnabled', label: 'PUSH 수신동의' },
  { key: 'bannerType', label: '바드 형' },
];

const data = apiData as unknown as Record<string, unknown>;

export const Default: Story = {
  args: {
    columns: singleColumns,
    data,
    bordered: true,
    striped: false,
    layout: 'fixed',
  },
};

export const TwoColumnsPerRow: Story = {
  args: {
    columns: twoColumns,
    data,
    columnsPerRow: 2,
    bordered: true,
    layout: 'fixed',
  },
};

export const Striped: Story = {
  args: {
    columns: singleColumns,
    data,
    bordered: true,
    striped: true,
  },
};

export const WithRender: Story = {
  args: {
    columns: [
      { key: 'eventId', label: '이벤트 ID' },
      {
        key: 'isPublished',
        label: '게시 여부',
        render: (value) => (
          <span style={{
            color: value === '게시' ? '#36b37e' : '#ff5630',
            fontWeight: 600,
          }}>
            {value as string}
          </span>
        ),
      },
      { key: 'eventName', label: '이벤트명', fullValue: true },
      { key: 'winnerCount', label: '당첨자 수', render: (v) => `${v}명`, fullValue: true },
    ] satisfies TableColumn<EventDetail>[],
    data,
    columnsPerRow: 2,
    bordered: true,
  },
};
