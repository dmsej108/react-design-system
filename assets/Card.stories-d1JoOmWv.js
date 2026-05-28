import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{C as r}from"./Card-BtRqHh9H.js";import{B as l}from"./Button-DWSf26AH.js";import{B}from"./Badge-DRjiUpTK.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const R={title:"Components/Card",component:r,tags:["autodocs"],argTypes:{variant:{control:"radio",options:["flat","raised","sunken"],description:"카드 스타일"},size:{control:"radio",options:["small","medium","large"]},title:{control:"text"},description:{control:"text"}},args:{variant:"raised",size:"medium",title:"카드 제목",description:"카드에 대한 간단한 설명입니다.",children:"카드 본문 내용이 여기에 표시됩니다."},decorators:[C=>e.jsx("div",{style:{width:360},children:e.jsx(C,{})})]},i={},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(r,{variant:"raised",title:"Raised",description:"기본 그림자 카드",children:e.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"var(--color-neutral-600)"},children:"카드 본문입니다."})}),e.jsx(r,{variant:"flat",title:"Flat",description:"테두리만 있는 카드",children:e.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"var(--color-neutral-600)"},children:"카드 본문입니다."})}),e.jsx(r,{variant:"sunken",title:"Sunken",description:"배경이 들어간 카드",children:e.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"var(--color-neutral-600)"},children:"카드 본문입니다."})})]})},a={args:{title:"이번달 지출",description:"2026년 3월",headerAction:e.jsx(B,{variant:"success",dot:!0,children:"정상"}),children:e.jsx("p",{style:{margin:0,fontSize:"1.5rem",fontWeight:700,color:"var(--color-neutral-900)"},children:"487,500원"})}},o={args:{title:"이체 확인",description:"아래 내용을 확인해주세요.",children:e.jsxs("div",{style:{fontSize:"0.875rem",color:"var(--color-neutral-700)",lineHeight:1.6},children:[e.jsx("div",{children:"받는 분: 홍길동"}),e.jsx("div",{children:"금액: 100,000원"}),e.jsx("div",{children:"메모: 생일 축하"})]}),footer:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(l,{variant:"outline",size:"small",children:"취소"}),e.jsx(l,{size:"small",children:"이체하기"})]})}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(r,{size:"small",title:"Small",description:"작은 패딩",children:"콘텐츠"}),e.jsx(r,{size:"medium",title:"Medium",description:"기본 패딩",children:"콘텐츠"}),e.jsx(r,{size:"large",title:"Large",description:"넓은 패딩",children:"콘텐츠"})]})};var n,d,c;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <SCard variant="raised" title="Raised" description="기본 그림자 카드">
        <p style={{
        margin: 0,
        fontSize: '0.875rem',
        color: 'var(--color-neutral-600)'
      }}>카드 본문입니다.</p>
      </SCard>
      <SCard variant="flat" title="Flat" description="테두리만 있는 카드">
        <p style={{
        margin: 0,
        fontSize: '0.875rem',
        color: 'var(--color-neutral-600)'
      }}>카드 본문입니다.</p>
      </SCard>
      <SCard variant="sunken" title="Sunken" description="배경이 들어간 카드">
        <p style={{
        margin: 0,
        fontSize: '0.875rem',
        color: 'var(--color-neutral-600)'
      }}>카드 본문입니다.</p>
      </SCard>
    </div>
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var v,g,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: '이번달 지출',
    description: '2026년 3월',
    headerAction: <SBadge variant="success" dot>정상</SBadge>,
    children: <p style={{
      margin: 0,
      fontSize: '1.5rem',
      fontWeight: 700,
      color: 'var(--color-neutral-900)'
    }}>
        487,500원
      </p>
  }
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var x,h,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: '이체 확인',
    description: '아래 내용을 확인해주세요.',
    children: <div style={{
      fontSize: '0.875rem',
      color: 'var(--color-neutral-700)',
      lineHeight: 1.6
    }}>
        <div>받는 분: 홍길동</div>
        <div>금액: 100,000원</div>
        <div>메모: 생일 축하</div>
      </div>,
    footer: <div style={{
      display: 'flex',
      gap: 8
    }}>
        <SButton variant="outline" size="small">취소</SButton>
        <SButton size="small">이체하기</SButton>
      </div>
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,j,z;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <SCard size="small" title="Small" description="작은 패딩">콘텐츠</SCard>
      <SCard size="medium" title="Medium" description="기본 패딩">콘텐츠</SCard>
      <SCard size="large" title="Large" description="넓은 패딩">콘텐츠</SCard>
    </div>
}`,...(z=(j=s.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const E=["Playground","Variants","WithHeaderAction","WithFooter","Sizes"];export{i as Playground,s as Sizes,t as Variants,o as WithFooter,a as WithHeaderAction,E as __namedExportsOrder,R as default};
