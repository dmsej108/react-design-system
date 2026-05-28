import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as u}from"./index-pP6CS22B.js";import{M as s}from"./Modal-bX49C5qL.js";import{B as t}from"./Button-DWSf26AH.js";import{I as m}from"./Input-CddHtW2J.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DLHbBEj9.js";const A={title:"Components/Modal",component:s,tags:["autodocs"],argTypes:{open:{control:"boolean"},size:{control:"radio",options:["small","medium","large","xl","full"]},footerAlign:{control:"radio",options:["left","center","right","spaceBetween"]},closeOnBackdrop:{control:"boolean"},closeOnEsc:{control:"boolean"},hideCloseButton:{control:"boolean"},title:{control:"text"},description:{control:"text"}},parameters:{layout:"centered"}};function M(n){const[r,o]=u.useState(!1),{triggerLabel:l="모달 열기",...D}=n;return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>o(!0),children:l}),e.jsx(s,{open:r,onClose:()=>o(!1),...D})]})}const a={render:n=>{const[r,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>o(!0),children:"모달 열기"}),e.jsx(s,{...n,open:r,onClose:()=>o(!1)})]})},args:{title:"모달 제목",description:"모달에 대한 간단한 설명입니다.",children:e.jsx("p",{style:{margin:0},children:"모달 본문 내용이 여기에 들어갑니다."}),size:"medium",footerAlign:"right",closeOnBackdrop:!0,closeOnEsc:!0}},i={render:()=>e.jsx(M,{triggerLabel:"확인 모달",title:"이체 확인",description:"아래 내용을 다시 한번 확인해주세요.",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",onClick:()=>{},children:"취소"}),e.jsx(t,{onClick:()=>{},children:"이체하기"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontSize:"0.875rem",color:"var(--color-neutral-700)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--color-neutral-500)"},children:"받는 분"}),e.jsx("strong",{children:"홍길동"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--color-neutral-500)"},children:"은행"}),e.jsx("strong",{children:"스타뱅크"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--color-neutral-500)"},children:"계좌번호"}),e.jsx("strong",{children:"110-123-456789"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",borderTop:"1px solid var(--color-neutral-100)",paddingTop:12,marginTop:4},children:[e.jsx("span",{style:{color:"var(--color-neutral-500)"},children:"이체 금액"}),e.jsx("strong",{style:{fontSize:"1.125rem",color:"var(--color-primary-600)"},children:"100,000원"})]})]})})},c={render:()=>{const[n,r]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>r(!0),children:"계좌 추가"}),e.jsx(s,{open:n,onClose:()=>r(!1),title:"새 계좌 추가",description:"연결할 계좌 정보를 입력해주세요.",size:"small",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",onClick:()=>r(!1),children:"취소"}),e.jsx(t,{onClick:()=>r(!1),children:"추가하기"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(m,{label:"은행명",placeholder:"예) 스타뱅크",required:!0}),e.jsx(m,{label:"계좌번호",placeholder:"숫자만 입력",required:!0}),e.jsx(m,{label:"예금주명",placeholder:"본인 이름",required:!0})]})})]})}},d={render:()=>e.jsx(M,{triggerLabel:"계좌 해지",title:"계좌를 해지하시겠습니까?",size:"small",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",onClick:()=>{},children:"취소"}),e.jsx(t,{variant:"danger",onClick:()=>{},children:"해지하기"})]}),children:e.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"var(--color-neutral-600)",lineHeight:1.6},children:"계좌를 해지하면 모든 거래내역과 설정이 삭제됩니다. 이 작업은 되돌릴 수 없습니다."})})},p={render:()=>{const n=["small","medium","large","xl"],[r,o]=u.useState(null);return e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[n.map(l=>e.jsx(t,{variant:"outline",size:"small",onClick:()=>o(l),children:l.toUpperCase()},l)),r&&e.jsx(s,{open:!0,onClose:()=>o(null),title:`Size: ${r}`,description:"모달 크기 예시입니다.",size:r,footer:e.jsx(t,{onClick:()=>o(null),children:"닫기"}),children:e.jsxs("p",{style:{margin:0,fontSize:"0.875rem",color:"var(--color-neutral-600)"},children:["이 모달의 max-width는 ",e.jsx("strong",{children:r})," 사이즈입니다."]})})]})}};var x,g,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <SButton onClick={() => setOpen(true)}>모달 열기</SButton>
        <SModal {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  },
  args: {
    title: '모달 제목',
    description: '모달에 대한 간단한 설명입니다.',
    children: <p style={{
      margin: 0
    }}>모달 본문 내용이 여기에 들어갑니다.</p>,
    size: 'medium',
    footerAlign: 'right',
    closeOnBackdrop: true,
    closeOnEsc: true
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,y,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <ModalDemo triggerLabel="확인 모달" title="이체 확인" description="아래 내용을 다시 한번 확인해주세요." footer={<>
          <SButton variant="outline" onClick={() => {}}>취소</SButton>
          <SButton onClick={() => {}}>이체하기</SButton>
        </>}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontSize: '0.875rem',
      color: 'var(--color-neutral-700)'
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
          <span style={{
          color: 'var(--color-neutral-500)'
        }}>받는 분</span>
          <strong>홍길동</strong>
        </div>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
          <span style={{
          color: 'var(--color-neutral-500)'
        }}>은행</span>
          <strong>스타뱅크</strong>
        </div>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
          <span style={{
          color: 'var(--color-neutral-500)'
        }}>계좌번호</span>
          <strong>110-123-456789</strong>
        </div>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '1px solid var(--color-neutral-100)',
        paddingTop: 12,
        marginTop: 4
      }}>
          <span style={{
          color: 'var(--color-neutral-500)'
        }}>이체 금액</span>
          <strong style={{
          fontSize: '1.125rem',
          color: 'var(--color-primary-600)'
        }}>100,000원</strong>
        </div>
      </div>
    </ModalDemo>
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var S,v,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <SButton onClick={() => setOpen(true)}>계좌 추가</SButton>
        <SModal open={open} onClose={() => setOpen(false)} title="새 계좌 추가" description="연결할 계좌 정보를 입력해주세요." size="small" footer={<>
              <SButton variant="outline" onClick={() => setOpen(false)}>취소</SButton>
              <SButton onClick={() => setOpen(false)}>추가하기</SButton>
            </>}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
            <SInput label="은행명" placeholder="예) 스타뱅크" required />
            <SInput label="계좌번호" placeholder="숫자만 입력" required />
            <SInput label="예금주명" placeholder="본인 이름" required />
          </div>
        </SModal>
      </>;
  }
}`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var z,B,b;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ModalDemo triggerLabel="계좌 해지" title="계좌를 해지하시겠습니까?" size="small" footer={<>
          <SButton variant="outline" onClick={() => {}}>취소</SButton>
          <SButton variant="danger" onClick={() => {}}>해지하기</SButton>
        </>}>
      <p style={{
      margin: 0,
      fontSize: '0.875rem',
      color: 'var(--color-neutral-600)',
      lineHeight: 1.6
    }}>
        계좌를 해지하면 모든 거래내역과 설정이 삭제됩니다. 이 작업은 되돌릴 수 없습니다.
      </p>
    </ModalDemo>
}`,...(b=(B=d.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var k,O,w;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const sizes = ['small', 'medium', 'large', 'xl'] as const;
    const [current, setCurrent] = useState<typeof sizes[number] | null>(null);
    return <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        {sizes.map(s => <SButton key={s} variant="outline" size="small" onClick={() => setCurrent(s)}>
            {s.toUpperCase()}
          </SButton>)}
        {current && <SModal open onClose={() => setCurrent(null)} title={\`Size: \${current}\`} description="모달 크기 예시입니다." size={current} footer={<SButton onClick={() => setCurrent(null)}>닫기</SButton>}>
            <p style={{
          margin: 0,
          fontSize: '0.875rem',
          color: 'var(--color-neutral-600)'
        }}>
              이 모달의 max-width는 <strong>{current}</strong> 사이즈입니다.
            </p>
          </SModal>}
      </div>;
  }
}`,...(w=(O=p.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const H=["Playground","WithFooter","WithForm","Danger","Sizes"];export{d as Danger,a as Playground,p as Sizes,i as WithFooter,c as WithForm,H as __namedExportsOrder,A as default};
