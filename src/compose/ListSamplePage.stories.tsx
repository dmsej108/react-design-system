import React, { useState, useCallback, useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AgGridReact } from 'ag-grid-react';
import type { ColDef, GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

import { Button as SButton } from '../components/Button/Button';
import { Input as SInput } from '../components/Input/Input';
import { Select as SSelect } from '../components/Select/Select';
import { Pagination as SPagination } from '../components/Pagination/Pagination';
import { Icon as SIcon } from '../components/Icon/Icon';

ModuleRegistry.registerModules([AllCommunityModule]);

interface RowData {
  id: number;
  name: string;
  category: string;
  status: string;
  startDate: string;
  endDate: string;
  count: number;
}

const CATEGORY_OPTIONS = [
  { value: '', label: '전체' },
  { value: '일반', label: '일반' },
  { value: '응모', label: '응모' },
  { value: '즉시혜택', label: '즉시혜택' },
];

const STATUS_OPTIONS = [
  { value: '', label: '전체' },
  { value: '활성', label: '활성' },
  { value: '비활성', label: '비활성' },
];

const CNT_OPTIONS = [
  { value: '5',  label: '5개씩 보기' },
  { value: '10', label: '10개씩 보기' },
  { value: '20', label: '20개씩 보기' },
  { value: '30', label: '30개씩 보기' },
];

const mockData: RowData[] = [
  { id: 1,  name: 'KB 스타뱅킹 출석체크',   category: '일반',   status: '활성',   startDate: '2026.01.01', endDate: '2026.06.30', count: 120 },
  { id: 2,  name: 'KB Pay 첫 결제 캐시백',  category: '즉시혜택', status: '비활성', startDate: '2026.02.01', endDate: '2026.07.31', count: 45  },
  { id: 3,  name: '주택청약 가입 기념',      category: '일반',   status: '활성',   startDate: '2026.03.01', endDate: '2026.08.31', count: 230 },
  { id: 4,  name: '여름 적금 특별',          category: '응모',   status: '활성',   startDate: '2026.03.15', endDate: '2026.09.15', count: 88  },
  { id: 5,  name: '신규 카드 발급',          category: '응모',   status: '비활성', startDate: '2026.04.01', endDate: '2026.10.31', count: 0   },
  { id: 6,  name: 'GS Pay 동반 신규',       category: '즉시혜택', status: '활성',  startDate: '2026.04.15', endDate: '2026.11.30', count: 512 },
  { id: 7,  name: 'KB 통장 만들기',          category: '일반',   status: '활성',   startDate: '2026.05.01', endDate: '2026.12.31', count: 74  },
  { id: 8,  name: '적금 이자 더받기',        category: '응모',   status: '비활성', startDate: '2026.05.15', endDate: '2026.12.31', count: 319 },
  { id: 9,  name: 'KB 마이핏 통장 개설',     category: '일반',   status: '활성',   startDate: '2026.05.20', endDate: '2026.12.31', count: 201 },
  { id: 10, name: '비대면 대출 이벤트',      category: '응모',   status: '활성',   startDate: '2026.06.01', endDate: '2026.09.30', count: 158 },
  { id: 11, name: '외화 통장 개설 혜택',     category: '즉시혜택', status: '비활성', startDate: '2026.06.01', endDate: '2026.08.31', count: 62  },
  { id: 12, name: '펀드 첫 가입 캐시백',     category: '즉시혜택', status: '활성',  startDate: '2026.06.15', endDate: '2026.12.31', count: 397 },
];

const ListSamplePage = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');
  const [filtered, setFiltered] = useState(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const [cntPerPage, setCntPerPage] = useState(5);

  const pagedData = useMemo(() => {
    const start = (currentPage - 1) * cntPerPage;
    return filtered.slice(start, start + cntPerPage);
  }, [filtered, currentPage, cntPerPage]);

  const handleSearch = useCallback(() => {
    const result = mockData.filter((row) => {
      const matchKeyword = keyword === '' || row.name.includes(keyword);
      const matchCategory = category === '' || row.category === category;
      const matchStatus = status === '' || row.status === status;
      return matchKeyword && matchCategory && matchStatus;
    });
    setFiltered(result);
    setCurrentPage(1);
  }, [keyword, category, status]);

  const handleReset = useCallback(() => {
    setKeyword('');
    setCategory('');
    setStatus('');
    setFiltered(mockData);
    setCurrentPage(1);
  }, []);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    params.api.sizeColumnsToFit();
  }, []);

  const onRowClicked = useCallback((e: RowClickedEvent<RowData>) => {
    alert(`선택된 항목: ${e.data?.name}`);
  }, []);

  const colDefs: ColDef<RowData>[] = useMemo(() => [
    { headerName: 'No', valueGetter: (p) => (currentPage - 1) * cntPerPage + (p.node?.rowIndex ?? 0) + 1, width: 60, sortable: false },
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: '이름', flex: 1, minWidth: 160 },
    { field: 'category', headerName: '카테고리', width: 110 },
    {
      field: 'status',
      headerName: '상태',
      width: 100,
      cellRenderer: (p: { value: string }) => (
        <span style={{ color: p.value === '활성' ? '#36b37e' : '#ff5630', fontWeight: 600 }}>
          {p.value}
        </span>
      ),
    },
    { field: 'startDate', headerName: '시작일', width: 120 },
    { field: 'endDate', headerName: '종료일', width: 120 },
    { field: 'count', headerName: '건수', width: 90 },
  ], [currentPage, cntPerPage]);

  return (
    <div style={{ fontFamily: 'Pretendard, sans-serif', maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: '#222' }}>
        목록 템플릿
      </h2>

      <div style={{
        background: '#f7f8fa',
        border: '1px solid #e4e7ec',
        borderRadius: 8,
        padding: '16px 20px',
        marginBottom: 20,
        display: 'flex',
        gap: 12,
        alignItems: 'flex-end',
        flexWrap: 'wrap',
      }}>
        <SInput
          label="이름"
          placeholder="이름을 입력하세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          style={{ width: 220 }}
        />
        <SSelect
          label="카테고리"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={CATEGORY_OPTIONS}
          style={{ width: 120 }}
        />
        <SSelect
          label="상태"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          options={STATUS_OPTIONS}
          style={{ width: 120 }}
        />
        <div style={{ display: 'flex', gap: 8 }}>
          <SButton variant="outline" leftIcon={<SIcon name="search" size="small" aria-hidden />} onClick={handleSearch}>검색</SButton>
          <SButton variant="secondary" onClick={handleReset}>초기화</SButton>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 13, color: '#667085' }}>
          조회결과 총 <strong style={{ color: '#222' }}>{filtered.length}</strong>건
        </span>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <SSelect
            value={String(cntPerPage)}
            onChange={(e) => { setCntPerPage(Number(e.target.value)); setCurrentPage(1); }}
            options={CNT_OPTIONS}
            size="small"
            style={{ width: 120 }}
          />
          <SButton variant="primary" size="small">+ 등록</SButton>
        </div>
      </div>

      <div>
        <AgGridReact<RowData>
          rowData={pagedData}
          columnDefs={colDefs}
          domLayout="autoHeight"
          onGridReady={onGridReady}
          onRowClicked={onRowClicked}
          rowStyle={{ cursor: 'pointer' }}
          noRowsOverlayComponent={() => (
            <span style={{ color: '#999', fontSize: 14 }}>검색 결과가 없습니다.</span>
          )}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <SPagination
          itemCount={filtered.length}
          cntPerPage={cntPerPage}
          currentPage={currentPage}
          onChangedPage={(pageNo) => setCurrentPage(pageNo)}
        />
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Compose/목록 템플릿',
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <ListSamplePage />,
  name: '목록 템플릿',
};
