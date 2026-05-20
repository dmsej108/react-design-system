import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button as SButton } from './components/Button/Button';
import { Badge as SBadge } from './components/Badge/Badge';
import { Card as SCard } from './components/Card/Card';
import { Input as SInput } from './components/Input/Input';
import { Select as SSelect } from './components/Select/Select';
import { FileInput as SFileInput } from './components/FileInput/FileInput';
import { Modal as SModal } from './components/Modal/Modal';
import { ToastProvider as SToastProvider, useToast } from './components/Toast/Toast';
import { Typography as STypography } from './components/Typography/Typography';
import { Icon as SIcon } from './components/Icon/Icon';
import { Pagination as SPagination } from './components/Pagination/Pagination';
import { Radio as SRadio, RadioGroup as SRadioGroup } from './components/Radio/Radio';
import { Checkbox as SCheckbox, CheckboxGroup as SCheckboxGroup } from './components/Checkbox/Checkbox';
import { Chip as SChip } from './components/Chip/Chip';
import type { ChipVariant } from './components/Chip/Chip';

/* ── Shared section wrapper ── */
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ marginBottom: 40 }}>
    <div style={{
      fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: '#767676', borderBottom: '1px solid #ebebeb', paddingBottom: 8, marginBottom: 16,
    }}>
      {title}
    </div>
    {children}
  </section>
);

/* ════════════════════════════════════════
   Storybook meta
════════════════════════════════════════ */
const meta: Meta = {
  title: 'Showcase/전체 컴포넌트',
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <SToastProvider position="topRight">
        <Story />
      </SToastProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

/* ════════════════════════════════════════
   Full Showcase (모든 컴포넌트)
════════════════════════════════════════ */
function ShowcaseAll() {
  const [inputVal, setInputVal] = useState('');
  const [selectVal, setSelectVal] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSize, setModalSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [fileList, setFileList] = useState<File[]>([]);
  const [page, setPage] = useState(1);
  const [radioVal, setRadioVal] = useState('card');
  const [checkboxVal, setCheckboxVal] = useState<string[]>(['sms']);
  const [chips, setChips] = useState(['서울', '부산', '대구', '인천']);
  const [activeFilter, setActiveFilter] = useState('전체');
  const toast = useToast();

  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <div style={{ marginBottom: 32 }}>
        <STypography variant="h3">디자인 시스템</STypography>
        <STypography variant="body2" color="muted">@starbanking/design-system 컴포넌트 쇼케이스</STypography>
      </div>

      {/* Button */}
      <Section title="Button">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>Variants</STypography>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <SButton variant="primary">Primary</SButton>
              <SButton variant="secondary">Secondary</SButton>
              <SButton variant="outline">Outline</SButton>
              <SButton variant="ghost">Ghost</SButton>
              <SButton variant="danger">Danger</SButton>
              <SButton disabled>Disabled</SButton>
              <SButton loading>Loading</SButton>
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>Sizes</STypography>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <SButton size="small">Small</SButton>
              <SButton size="medium">Medium</SButton>
              <SButton size="large">Large</SButton>
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>With Icons</STypography>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <SButton leftIcon={<SIcon name="send" size="small" />}>이체하기</SButton>
              <SButton variant="outline" rightIcon={<SIcon name="download" size="small" />}>다운로드</SButton>
              <SButton variant="secondary" leftIcon={<SIcon name="plus" size="small" />}>추가</SButton>
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>Icon Only</STypography>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <SButton variant="ghost"   iconOnly size="small" ><SIcon name="search"   size="small"  /></SButton>
              <SButton variant="ghost"   iconOnly size="medium"><SIcon name="search"   size="medium" /></SButton>
              <SButton variant="ghost"   iconOnly size="large" ><SIcon name="search"   size="large"  /></SButton>
              <SButton variant="outline" iconOnly size="small" ><SIcon name="edit"     size="small"  /></SButton>
              <SButton variant="outline" iconOnly size="medium"><SIcon name="edit"     size="medium" /></SButton>
              <SButton variant="danger"  iconOnly size="medium"><SIcon name="trash"    size="medium" /></SButton>
              <SButton variant="ghost"   iconOnly disabled     ><SIcon name="settings" size="medium" /></SButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Badge */}
      <Section title="Badge">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <SBadge variant="primary">Primary</SBadge>
          <SBadge variant="secondary">Secondary</SBadge>
          <SBadge variant="success" dot>완료</SBadge>
          <SBadge variant="warning" dot>처리중</SBadge>
          <SBadge variant="error" dot>실패</SBadge>
          <SBadge variant="info">정보</SBadge>
          <SBadge variant="neutral">중립</SBadge>
          <SBadge variant="success" size="large">Large</SBadge>
          <SBadge variant="neutral" size="small">Small</SBadge>
        </div>
      </Section>

      {/* Chip */}
      <Section title="Chip">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>필터 선택 (클릭)</STypography>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['전체', '입출금', '이체', '카드', '대출'].map((f) => (
                <SChip key={f} label={f} variant={activeFilter === f ? 'primary' : 'neutral'} onClick={() => setActiveFilter(f)} />
              ))}
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>태그 (닫기)</STypography>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {chips.map((c) => (
                <SChip key={c} label={c} variant="primary" onClose={() => setChips((prev) => prev.filter((x) => x !== c))} />
              ))}
              {chips.length === 0 && <STypography variant="caption" color="muted">모두 삭제됐습니다.</STypography>}
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>Variants</STypography>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {(['primary', 'secondary', 'success', 'warning', 'error', 'info', 'neutral'] as ChipVariant[]).map((v) => (
                <SChip key={v} label={v} variant={v} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Radio */}
      <Section title="Radio">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>결제 수단</STypography>
            <SRadioGroup
              name="payment"
              value={radioVal}
              onChange={setRadioVal}
              options={[
                { value: 'card',     label: '카드' },
                { value: 'transfer', label: '계좌이체' },
                { value: 'mobile',   label: '간편결제' },
              ]}
            />
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>비활성</STypography>
            <SRadioGroup
              name="payment-disabled"
              value="card"
              disabled
              options={[
                { value: 'card',     label: '카드' },
                { value: 'transfer', label: '계좌이체' },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Checkbox */}
      <Section title="Checkbox">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>알림 수단</STypography>
            <SCheckboxGroup
              options={[
                { value: 'sms',   label: 'SMS' },
                { value: 'email', label: '이메일' },
                { value: 'push',  label: '앱 푸시' },
                { value: 'kakao', label: '카카오톡', disabled: true },
              ]}
              value={checkboxVal}
              onChange={setCheckboxVal}
            />
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>상태</STypography>
            <div style={{ display: 'flex', gap: 16 }}>
              <SCheckbox label="미선택" checked={false} onChange={() => {}} />
              <SCheckbox label="선택됨" checked={true} onChange={() => {}} />
              <SCheckbox label="부분선택" checked={false} indeterminate onChange={() => {}} />
              <SCheckbox label="비활성" disabled checked={false} onChange={() => {}} />
            </div>
          </div>
        </div>
      </Section>

      {/* Input */}
      <Section title="Input">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          <SInput label="기본 입력" placeholder="텍스트를 입력하세요" />
          <SInput label="검색" placeholder="검색어 입력" prefix={<SIcon name="search" size="small" />} value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
          <SInput label="필수 항목" placeholder="필수 값" required />
          <SInput label="오류 상태" placeholder="잘못된 값" error errorText="올바른 형식으로 입력해주세요." />
          <SInput label="도움말" placeholder="입력" helperText="8자 이상 입력해주세요." />
          <SInput label="비활성화" placeholder="입력 불가" disabled />
        </div>
      </Section>

      {/* Select */}
      <Section title="Select">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          <SSelect
            label="기본 선택" placeholder="선택하세요"
            options={[{ value: 'option1', label: '옵션 1' }, { value: 'option2', label: '옵션 2' }, { value: 'option3', label: '옵션 3' }]}
            value={selectVal} onChange={(e) => setSelectVal(e.target.value)}
          />
          <SSelect label="Small" size="small" placeholder="선택" options={[{ value: 'a', label: 'Small A' }, { value: 'b', label: 'Small B' }]} />
          <SSelect label="Large" size="large" placeholder="선택" options={[{ value: 'a', label: 'Large A' }, { value: 'b', label: 'Large B' }]} />
          <SSelect label="오류 상태" placeholder="선택하세요" error errorText="항목을 선택해주세요." options={[{ value: 'a', label: '옵션 A' }]} />
          <SSelect label="도움말" placeholder="선택" helperText="하나를 선택해주세요." options={[{ value: 'a', label: '옵션 A' }, { value: 'b', label: '옵션 B' }]} />
          <SSelect label="비활성화" placeholder="선택 불가" disabled options={[{ value: 'a', label: '옵션 A' }]} />
        </div>
      </Section>

      {/* FileInput */}
      <Section title="FileInput">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 520 }}>
          <SFileInput label="기본 파일 업로드" helperText="모든 파일 형식 허용" onChange={setFileList} />
          <SFileInput label="이미지 전용" accept=".jpg,.jpeg,.png,.webp" maxSize={5 * 1024 * 1024} helperText="JPG, PNG, WEBP · 최대 5MB" onChange={setFileList} />
          {fileList.length > 0 && (
            <STypography variant="caption" color="muted">선택된 파일: {fileList.map((f) => f.name).join(', ')}</STypography>
          )}
          <SFileInput label="비활성화" disabled onChange={() => {}} />
        </div>
      </Section>

      {/* Modal */}
      <Section title="Modal">
        <div style={{ display: 'flex', gap: 8 }}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <SButton key={size} variant="outline" onClick={() => { setModalSize(size); setModalOpen(true); }}>
              {size.toUpperCase()} 모달 열기
            </SButton>
          ))}
        </div>
        <SModal
          open={modalOpen} onClose={() => setModalOpen(false)}
          title={`${modalSize.toUpperCase()} 모달`} size={modalSize}
          footer={
            <div style={{ display: 'flex', gap: 8 }}>
              <SButton variant="outline" onClick={() => setModalOpen(false)}>취소</SButton>
              <SButton onClick={() => setModalOpen(false)}>확인</SButton>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <STypography variant="body2">모달 컴포넌트입니다. 사이즈는 small / medium / large 를 지원합니다.</STypography>
            <SInput label="모달 내부 입력" placeholder="텍스트 입력" />
            <SSelect label="모달 내부 선택" placeholder="선택하세요" options={[{ value: '1', label: '옵션 1' }, { value: '2', label: '옵션 2' }]} />
          </div>
        </SModal>
      </Section>

      {/* Toast */}
      <Section title="Toast">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <SButton variant="primary" onClick={() => toast.success('성공!', { message: '작업이 성공적으로 완료되었습니다.' })}>Success Toast</SButton>
          <SButton variant="danger" onClick={() => toast.error('오류 발생', { message: '처리 중 문제가 발생했습니다.' })}>Error Toast</SButton>
          <SButton variant="outline" onClick={() => toast.warning('주의', { message: '이 작업은 되돌릴 수 없습니다.' })}>Warning Toast</SButton>
          <SButton variant="ghost" onClick={() => toast.info('안내', { message: '새로운 업데이트가 있습니다.' })}>Info Toast</SButton>
        </div>
      </Section>

      {/* Card */}
      <Section title="Card">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
          <SCard variant="raised" title="Raised Card" description="기본 그림자 카드입니다.">
            <STypography variant="body2">카드 본문 내용이 여기에 들어갑니다.</STypography>
          </SCard>
          <SCard variant="flat" title="Flat Card" description="테두리만 있는 플랫 카드입니다.">
            <STypography variant="body2">카드 본문 내용이 여기에 들어갑니다.</STypography>
          </SCard>
          <SCard
            variant="raised" title="With Footer" description="푸터가 있는 카드입니다."
            footer={
              <div style={{ display: 'flex', gap: 8 }}>
                <SButton size="small" variant="outline">취소</SButton>
                <SButton size="small">확인</SButton>
              </div>
            }
          >
            <STypography variant="body2">카드 본문 내용이 여기에 들어갑니다.</STypography>
          </SCard>
        </div>
      </Section>

      {/* Pagination */}
      <Section title="Pagination">
        <SPagination itemCount={100} cntPerPage={10} currentPage={page} onChangedPage={(p) => setPage(p)} />
      </Section>

      {/* Typography */}
      <Section title="Typography">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).map((v) => (
            <STypography key={v} variant={v}>{v.toUpperCase()} — StarBanking 디자인 시스템</STypography>
          ))}
          <div style={{ height: 8 }} />
          <STypography variant="body1">Body1 — 본문 텍스트. StarBanking 디자인 시스템은 뱅킹 서비스에 최적화된 React 컴포넌트 라이브러리입니다.</STypography>
          <STypography variant="body2">Body2 — 보조 본문 텍스트. 좀 더 작은 본문에 사용됩니다.</STypography>
          <STypography variant="caption">Caption — 보조 설명 텍스트</STypography>
          <STypography variant="overline">Overline — 섹션 레이블</STypography>
          <STypography variant="label">Label — 폼 레이블</STypography>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {(['primary', 'secondary', 'success', 'warning', 'error', 'muted'] as const).map((c) => (
              <STypography key={c} variant="label" color={c}>{c}</STypography>
            ))}
          </div>
        </div>
      </Section>

      {/* Color Tokens */}
      <Section title="Color Tokens">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {[
            {
              label: 'KB Brand', colors: [
                { name: 'Yellow Positive', value: '#FFBC00' },
                { name: 'Yellow Negative', value: '#FFCC00' },
                { name: 'Gray', value: '#60584C' },
                { name: 'Dark Gray', value: '#545045' },
                { name: 'Gold', value: '#C5A028' },
                { name: 'Silver', value: '#A8AAAD' },
              ],
            },
            {
              label: 'Button / Surface', colors: [
                { name: 'Primary (KB Yellow)', value: '#FFBC00' },
                { name: 'Secondary (Navy)', value: '#253349' },
                { name: 'Danger', value: '#ff3232' },
              ],
            },
            {
              label: 'Semantic', colors: [
                { name: 'Success', value: '#36b37e' },
                { name: 'Warning', value: '#ff8b00' },
                { name: 'Error', value: '#ff5630' },
                { name: 'Info', value: '#2563eb' },
              ],
            },
            {
              label: 'Text', colors: [
                { name: 'Strong', value: '#222222' },
                { name: 'Base', value: '#444444' },
                { name: 'Muted', value: '#767676' },
                { name: 'Placeholder', value: '#999999' },
                { name: 'Disabled', value: '#ababab' },
              ],
            },
            {
              label: 'Border / Surface', colors: [
                { name: 'Border', value: '#d2d2d2' },
                { name: 'Border Light', value: '#ebebeb' },
                { name: 'Surface Hover', value: '#f2f2f2' },
                { name: 'Surface', value: '#ffffff' },
              ],
            },
          ].map(({ label, colors }) => (
            <div key={label}>
              <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>{label}</STypography>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {colors.map(({ name, value }) => (
                  <div key={name} style={{ minWidth: 100, flex: '0 0 auto' }}>
                    <div style={{ height: 36, borderRadius: 4, backgroundColor: value, border: '1px solid rgba(0,0,0,0.08)' }} />
                    <div style={{ fontSize: 11, color: '#444', marginTop: 4, lineHeight: 1.4 }}>{name}</div>
                    <div style={{ fontSize: 11, color: '#767676', fontFamily: 'monospace' }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export const All: Story = {
  name: '전체 쇼케이스',
  render: () => <ShowcaseAll />,
};

/* ════════════════════════════════════════
   개별 섹션 스토리
════════════════════════════════════════ */
export const Buttons: Story = {
  name: 'Button — 전체',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>Variants</STypography>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <SButton variant="primary">Primary</SButton>
          <SButton variant="secondary">Secondary</SButton>
          <SButton variant="outline">Outline</SButton>
          <SButton variant="ghost">Ghost</SButton>
          <SButton variant="danger">Danger</SButton>
          <SButton disabled>Disabled</SButton>
          <SButton loading>Loading</SButton>
        </div>
      </div>
      <div>
        <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>Sizes</STypography>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <SButton size="small">Small</SButton>
          <SButton size="medium">Medium</SButton>
          <SButton size="large">Large</SButton>
        </div>
      </div>
      <div>
        <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>With Icons</STypography>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <SButton leftIcon={<SIcon name="send" size="small" />}>이체하기</SButton>
          <SButton variant="outline" rightIcon={<SIcon name="download" size="small" />}>다운로드</SButton>
          <SButton variant="secondary" leftIcon={<SIcon name="plus" size="small" />}>추가</SButton>
        </div>
      </div>
      <div>
        <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>Icon Only</STypography>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <SButton variant="ghost"   iconOnly size="small" ><SIcon name="search" size="small"  /></SButton>
          <SButton variant="ghost"   iconOnly size="medium"><SIcon name="search" size="medium" /></SButton>
          <SButton variant="ghost"   iconOnly size="large" ><SIcon name="search" size="large"  /></SButton>
          <SButton variant="outline" iconOnly size="small" ><SIcon name="edit"   size="small"  /></SButton>
          <SButton variant="outline" iconOnly size="medium"><SIcon name="edit"   size="medium" /></SButton>
          <SButton variant="danger"  iconOnly size="medium"><SIcon name="trash"  size="medium" /></SButton>
          <SButton variant="ghost"   iconOnly disabled     ><SIcon name="settings" size="medium" /></SButton>
        </div>
      </div>
    </div>
  ),
};

export const Badges: Story = {
  name: 'Badge — 전체',
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
      <SBadge variant="primary">Primary</SBadge>
      <SBadge variant="secondary">Secondary</SBadge>
      <SBadge variant="success" dot>완료</SBadge>
      <SBadge variant="warning" dot>처리중</SBadge>
      <SBadge variant="error" dot>실패</SBadge>
      <SBadge variant="info">정보</SBadge>
      <SBadge variant="neutral">중립</SBadge>
      <SBadge variant="success" size="large">Large</SBadge>
      <SBadge variant="neutral" size="small">Small</SBadge>
    </div>
  ),
};

export const Chips: Story = {
  name: 'Chip — 전체',
  render: () => {
    function ChipDemo() {
      const [active, setActive] = useState('전체');
      const [tags, setTags] = useState(['React', 'TypeScript', 'Vite', 'Storybook']);
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>Variants</STypography>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {(['primary', 'secondary', 'success', 'warning', 'error', 'info', 'neutral'] as ChipVariant[]).map((v) => (
                <SChip key={v} label={v} variant={v} />
              ))}
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>클릭 (필터)</STypography>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['전체', '입출금', '이체', '카드', '대출'].map((f) => (
                <SChip key={f} label={f} variant={active === f ? 'primary' : 'neutral'} onClick={() => setActive(f)} />
              ))}
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>닫기</STypography>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {tags.map((t) => (
                <SChip key={t} label={t} variant="info" onClose={() => setTags((p) => p.filter((x) => x !== t))} />
              ))}
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>비활성</STypography>
            <div style={{ display: 'flex', gap: 8 }}>
              <SChip label="비활성" variant="neutral" disabled />
              <SChip label="비활성 + 닫기" variant="primary" disabled onClose={() => {}} />
            </div>
          </div>
        </div>
      );
    }
    return <ChipDemo />;
  },
};

export const Radios: Story = {
  name: 'Radio — 전체',
  render: () => {
    function RadioDemo() {
      const [val, setVal] = useState('card');
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>가로 (기본)</STypography>
            <SRadioGroup
              name="r1"
              value={val}
              onChange={setVal}
              options={[{ value: 'card', label: '카드' }, { value: 'transfer', label: '계좌이체' }, { value: 'mobile', label: '간편결제' }]}
            />
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>세로</STypography>
            <SRadioGroup
              name="r2"
              direction="vertical"
              value={val}
              onChange={setVal}
              options={[{ value: 'card', label: '카드' }, { value: 'transfer', label: '계좌이체' }, { value: 'mobile', label: '간편결제' }]}
            />
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>크기</STypography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {(['small', 'medium', 'large'] as const).map((size) => (
                <SRadioGroup key={size} name={`r-${size}`} value="a" size={size}
                  options={[{ value: 'a', label: `${size} A` }, { value: 'b', label: `${size} B` }]}
                />
              ))}
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>비활성</STypography>
            <SRadioGroup name="r3" value="card" disabled
              options={[{ value: 'card', label: '카드' }, { value: 'transfer', label: '계좌이체' }]}
            />
          </div>
        </div>
      );
    }
    return <RadioDemo />;
  },
};

export const Checkboxes: Story = {
  name: 'Checkbox — 전체',
  render: () => {
    function CheckboxDemo() {
      const [groupVal, setGroupVal] = useState<string[]>(['sms']);
      const items = ['입출금 내역', '이체 내역', '카드 결제', '자동이체'];
      const [selected, setSelected] = useState<string[]>([]);
      const allChecked = selected.length === items.length;
      const indeterminate = selected.length > 0 && !allChecked;
      const toggle = (item: string, checked: boolean) =>
        setSelected((p) => checked ? [...p, item] : p.filter((v) => v !== item));

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>상태</STypography>
            <div style={{ display: 'flex', gap: 16 }}>
              <SCheckbox label="미선택" checked={false} onChange={() => {}} />
              <SCheckbox label="선택됨" checked={true} onChange={() => {}} />
              <SCheckbox label="부분선택" checked={false} indeterminate onChange={() => {}} />
              <SCheckbox label="비활성" disabled checked={false} onChange={() => {}} />
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>전체선택 패턴</STypography>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <SCheckbox label={<strong>전체 선택</strong>} checked={allChecked} indeterminate={indeterminate} onChange={(c) => setSelected(c ? [...items] : [])} />
              <div style={{ width: '100%', height: 1, background: 'var(--ds-border-light)' }} />
              {items.map((item) => (
                <SCheckbox key={item} label={item} checked={selected.includes(item)} onChange={(c) => toggle(item, c)} />
              ))}
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>그룹</STypography>
            <SCheckboxGroup
              options={[{ value: 'sms', label: 'SMS' }, { value: 'email', label: '이메일' }, { value: 'push', label: '앱 푸시' }, { value: 'kakao', label: '카카오톡', disabled: true }]}
              value={groupVal}
              onChange={setGroupVal}
            />
          </div>
        </div>
      );
    }
    return <CheckboxDemo />;
  },
};

export const Inputs: Story = {
  name: 'Input — 전체',
  render: () => {
    function InputDemo() {
      const [val, setVal] = useState('');
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          <SInput label="기본 입력" placeholder="텍스트를 입력하세요" />
          <SInput label="검색" placeholder="검색어 입력" prefix={<SIcon name="search" size="small" />} value={val} onChange={(e) => setVal(e.target.value)} />
          <SInput label="필수 항목" placeholder="필수 값" required />
          <SInput label="오류 상태" placeholder="잘못된 값" error errorText="올바른 형식으로 입력해주세요." />
          <SInput label="도움말" placeholder="입력" helperText="8자 이상 입력해주세요." />
          <SInput label="비활성화" placeholder="입력 불가" disabled />
        </div>
      );
    }
    return <InputDemo />;
  },
};

export const Selects: Story = {
  name: 'Select — 전체',
  render: () => {
    function SelectDemo() {
      const [val, setVal] = useState('');
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          <SSelect
            label="기본 선택" placeholder="선택하세요"
            options={[{ value: 'option1', label: '옵션 1' }, { value: 'option2', label: '옵션 2' }, { value: 'option3', label: '옵션 3' }]}
            value={val} onChange={(e) => setVal(e.target.value)}
          />
          <SSelect label="Small" size="small" placeholder="선택" options={[{ value: 'a', label: 'Small A' }, { value: 'b', label: 'Small B' }]} />
          <SSelect label="Large" size="large" placeholder="선택" options={[{ value: 'a', label: 'Large A' }, { value: 'b', label: 'Large B' }]} />
          <SSelect label="오류 상태" placeholder="선택하세요" error errorText="항목을 선택해주세요." options={[{ value: 'a', label: '옵션 A' }]} />
          <SSelect label="도움말" placeholder="선택" helperText="하나를 선택해주세요." options={[{ value: 'a', label: '옵션 A' }, { value: 'b', label: '옵션 B' }]} />
          <SSelect label="비활성화" placeholder="선택 불가" disabled options={[{ value: 'a', label: '옵션 A' }]} />
        </div>
      );
    }
    return <SelectDemo />;
  },
};

export const FileInputs: Story = {
  name: 'FileInput — 전체',
  render: () => {
    function FileInputDemo() {
      const [files, setFiles] = useState<File[]>([]);
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 520 }}>
          <SFileInput label="기본 파일 업로드" helperText="모든 파일 형식 허용" onChange={setFiles} />
          <SFileInput label="이미지 전용" accept=".jpg,.jpeg,.png,.webp" maxSize={5 * 1024 * 1024} helperText="JPG, PNG, WEBP · 최대 5MB" onChange={setFiles} />
          {files.length > 0 && (
            <STypography variant="caption" color="muted">선택된 파일: {files.map((f) => f.name).join(', ')}</STypography>
          )}
          <SFileInput label="비활성화" disabled onChange={() => {}} />
        </div>
      );
    }
    return <FileInputDemo />;
  },
};

export const Modals: Story = {
  name: 'Modal — 전체',
  render: () => {
    function ModalDemo() {
      const [open, setOpen] = useState(false);
      const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
      return (
        <>
          <div style={{ display: 'flex', gap: 8 }}>
            {(['small', 'medium', 'large'] as const).map((s) => (
              <SButton key={s} variant="outline" onClick={() => { setSize(s); setOpen(true); }}>
                {s.toUpperCase()} 모달 열기
              </SButton>
            ))}
          </div>
          <SModal
            open={open} onClose={() => setOpen(false)}
            title={`${size.toUpperCase()} 모달`} size={size}
            footer={
              <div style={{ display: 'flex', gap: 8 }}>
                <SButton variant="outline" onClick={() => setOpen(false)}>취소</SButton>
                <SButton onClick={() => setOpen(false)}>확인</SButton>
              </div>
            }
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <STypography variant="body2">모달 컴포넌트입니다. 사이즈는 small / medium / large 를 지원합니다.</STypography>
              <SInput label="모달 내부 입력" placeholder="텍스트 입력" />
              <SSelect label="모달 내부 선택" placeholder="선택하세요" options={[{ value: '1', label: '옵션 1' }, { value: '2', label: '옵션 2' }]} />
            </div>
          </SModal>
        </>
      );
    }
    return <ModalDemo />;
  },
};

export const Toasts: Story = {
  name: 'Toast — 전체',
  render: () => {
    function ToastDemo() {
      const toast = useToast();
      return (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <SButton variant="primary" onClick={() => toast.success('성공!', { message: '작업이 성공적으로 완료되었습니다.' })}>Success Toast</SButton>
          <SButton variant="danger" onClick={() => toast.error('오류 발생', { message: '처리 중 문제가 발생했습니다.' })}>Error Toast</SButton>
          <SButton variant="outline" onClick={() => toast.warning('주의', { message: '이 작업은 되돌릴 수 없습니다.' })}>Warning Toast</SButton>
          <SButton variant="ghost" onClick={() => toast.info('안내', { message: '새로운 업데이트가 있습니다.' })}>Info Toast</SButton>
        </div>
      );
    }
    return <ToastDemo />;
  },
};

export const Cards: Story = {
  name: 'Card — 전체',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
      <SCard variant="raised" title="Raised Card" description="기본 그림자 카드입니다.">
        <STypography variant="body2">카드 본문 내용이 여기에 들어갑니다.</STypography>
      </SCard>
      <SCard variant="flat" title="Flat Card" description="테두리만 있는 플랫 카드입니다.">
        <STypography variant="body2">카드 본문 내용이 여기에 들어갑니다.</STypography>
      </SCard>
      <SCard
        variant="raised" title="With Footer" description="푸터가 있는 카드입니다."
        footer={
          <div style={{ display: 'flex', gap: 8 }}>
            <SButton size="small" variant="outline">취소</SButton>
            <SButton size="small">확인</SButton>
          </div>
        }
      >
        <STypography variant="body2">카드 본문 내용이 여기에 들어갑니다.</STypography>
      </SCard>
    </div>
  ),
};

export const Paginations: Story = {
  name: 'Pagination — 전체',
  render: () => {
    function PaginationDemo() {
      const [page, setPage] = useState(1);
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>100개 · 10개씩 (현재: {page}페이지)</STypography>
            <SPagination itemCount={100} cntPerPage={10} currentPage={page} onChangedPage={(p) => setPage(p)} />
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>500개 · 10개씩</STypography>
            <SPagination itemCount={500} cntPerPage={10} currentPage={1} />
          </div>
        </div>
      );
    }
    return <PaginationDemo />;
  },
};

export const Typographies: Story = {
  name: 'Typography — 전체',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).map((v) => (
        <STypography key={v} variant={v}>{v.toUpperCase()} — StarBanking 디자인 시스템</STypography>
      ))}
      <div style={{ height: 8 }} />
      <STypography variant="body1">Body1 — 본문 텍스트. StarBanking 디자인 시스템은 뱅킹 서비스에 최적화된 React 컴포넌트 라이브러리입니다.</STypography>
      <STypography variant="body2">Body2 — 보조 본문 텍스트. 좀 더 작은 본문에 사용됩니다.</STypography>
      <STypography variant="caption">Caption — 보조 설명 텍스트</STypography>
      <STypography variant="overline">Overline — 섹션 레이블</STypography>
      <STypography variant="label">Label — 폼 레이블</STypography>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
        {(['primary', 'secondary', 'success', 'warning', 'error', 'muted'] as const).map((c) => (
          <STypography key={c} variant="label" color={c}>{c}</STypography>
        ))}
      </div>
    </div>
  ),
};

export const ColorTokens: Story = {
  name: 'Color Tokens',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {[
        {
          label: 'KB Brand', colors: [
            { name: 'Yellow Positive', value: '#FFBC00' },
            { name: 'Yellow Negative', value: '#FFCC00' },
            { name: 'Gray', value: '#60584C' },
            { name: 'Dark Gray', value: '#545045' },
            { name: 'Gold', value: '#C5A028' },
            { name: 'Silver', value: '#A8AAAD' },
          ],
        },
        {
          label: 'Button / Surface', colors: [
            { name: 'Primary (KB Yellow)', value: '#FFBC00' },
            { name: 'Secondary (Navy)', value: '#253349' },
            { name: 'Danger', value: '#ff3232' },
          ],
        },
        {
          label: 'Semantic', colors: [
            { name: 'Success', value: '#36b37e' },
            { name: 'Warning', value: '#ff8b00' },
            { name: 'Error', value: '#ff5630' },
            { name: 'Info', value: '#2563eb' },
          ],
        },
        {
          label: 'Text', colors: [
            { name: 'Strong', value: '#222222' },
            { name: 'Base', value: '#444444' },
            { name: 'Muted', value: '#767676' },
            { name: 'Placeholder', value: '#999999' },
            { name: 'Disabled', value: '#ababab' },
          ],
        },
        {
          label: 'Border / Surface', colors: [
            { name: 'Border', value: '#d2d2d2' },
            { name: 'Border Light', value: '#ebebeb' },
            { name: 'Surface Hover', value: '#f2f2f2' },
            { name: 'Surface', value: '#ffffff' },
          ],
        },
      ].map(({ label, colors }) => (
        <div key={label}>
          <STypography variant="caption" color="muted" as="div" style={{ marginBottom: 8 }}>{label}</STypography>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {colors.map(({ name, value }) => (
              <div key={name} style={{ minWidth: 100, flex: '0 0 auto' }}>
                <div style={{ height: 36, borderRadius: 4, backgroundColor: value, border: '1px solid rgba(0,0,0,0.08)' }} />
                <div style={{ fontSize: 11, color: '#444', marginTop: 4, lineHeight: 1.4 }}>{name}</div>
                <div style={{ fontSize: 11, color: '#767676', fontFamily: 'monospace' }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
