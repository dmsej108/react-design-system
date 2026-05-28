import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{I as r}from"./Input-CddHtW2J.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const A=()=>e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("circle",{cx:"7",cy:"7",r:"4.5",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M10.5 10.5L13 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),H=()=>e.jsx("span",{style:{fontSize:"0.8rem",fontWeight:600,color:"var(--color-neutral-500)"},children:"원"}),J={title:"Components/Input",component:r,tags:["autodocs"],argTypes:{size:{control:"radio",options:["small","medium","large"],description:"입력 필드 크기"},label:{control:"text",description:"레이블"},placeholder:{control:"text"},helperText:{control:"text",description:"도움말 텍스트"},errorText:{control:"text",description:"오류 메시지"},error:{control:"boolean"},disabled:{control:"boolean"},required:{control:"boolean"}},args:{label:"레이블",placeholder:"입력하세요",size:"medium",error:!1,disabled:!1,required:!1},decorators:[_=>e.jsx("div",{style:{width:320},children:e.jsx(_,{})})]},l={},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(r,{size:"small",label:"Small",placeholder:"Small input"}),e.jsx(r,{size:"medium",label:"Medium",placeholder:"Medium input"}),e.jsx(r,{size:"large",label:"Large",placeholder:"Large input"})]})},o={args:{label:"비밀번호",placeholder:"비밀번호 입력",helperText:"8자 이상, 영문·숫자 포함",type:"password"}},s={args:{label:"이메일",placeholder:"example@bank.com",error:!0,errorText:"올바른 이메일 형식이 아닙니다.",defaultValue:"not-an-email"}},t={args:{label:"검색",placeholder:"거래내역 검색",prefix:e.jsx(A,{})}},n={args:{label:"이체 금액",placeholder:"0",suffix:e.jsx(H,{}),type:"number"}},c={args:{label:"계좌번호",placeholder:"숫자만 입력",required:!0}},d={args:{label:"비활성화 입력",defaultValue:"수정 불가",disabled:!0}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(r,{label:"기본",placeholder:"입력하세요"}),e.jsx(r,{label:"필수",placeholder:"필수 항목",required:!0}),e.jsx(r,{label:"오류",error:!0,errorText:"오류가 발생했습니다.",defaultValue:"잘못된 값"}),e.jsx(r,{label:"도움말",placeholder:"입력하세요",helperText:"8자 이상 입력해주세요."}),e.jsx(r,{label:"접두 아이콘",placeholder:"검색",prefix:e.jsx(A,{})}),e.jsx(r,{label:"접미 텍스트",placeholder:"0",suffix:e.jsx(H,{})}),e.jsx(r,{label:"비활성화",defaultValue:"수정 불가",disabled:!0})]})};var p,u,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var x,h,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <SInput size="small" label="Small" placeholder="Small input" />
      <SInput size="medium" label="Medium" placeholder="Medium input" />
      <SInput size="large" label="Large" placeholder="Large input" />
    </div>
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,g,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: '비밀번호',
    placeholder: '비밀번호 입력',
    helperText: '8자 이상, 영문·숫자 포함',
    type: 'password'
  }
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var j,I,y;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: '이메일',
    placeholder: 'example@bank.com',
    error: true,
    errorText: '올바른 이메일 형식이 아닙니다.',
    defaultValue: 'not-an-email'
  }
}`,...(y=(I=s.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var W,T,z;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: '검색',
    placeholder: '거래내역 검색',
    prefix: <SearchIcon />
  }
}`,...(z=(T=t.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var v,q,V;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: '이체 금액',
    placeholder: '0',
    suffix: <WonIcon />,
    type: 'number'
  }
}`,...(V=(q=n.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var k,D,L;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: '계좌번호',
    placeholder: '숫자만 입력',
    required: true
  }
}`,...(L=(D=c.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var w,M,E;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: '비활성화 입력',
    defaultValue: '수정 불가',
    disabled: true
  }
}`,...(E=(M=d.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var P,C,R;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <SInput label="기본" placeholder="입력하세요" />
      <SInput label="필수" placeholder="필수 항목" required />
      <SInput label="오류" error errorText="오류가 발생했습니다." defaultValue="잘못된 값" />
      <SInput label="도움말" placeholder="입력하세요" helperText="8자 이상 입력해주세요." />
      <SInput label="접두 아이콘" placeholder="검색" prefix={<SearchIcon />} />
      <SInput label="접미 텍스트" placeholder="0" suffix={<WonIcon />} />
      <SInput label="비활성화" defaultValue="수정 불가" disabled />
    </div>
}`,...(R=(C=i.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const K=["Playground","Sizes","WithHelperText","WithError","WithPrefix","WithSuffix","Required","Disabled","AllStates"];export{i as AllStates,d as Disabled,l as Playground,c as Required,a as Sizes,s as WithError,o as WithHelperText,t as WithPrefix,n as WithSuffix,K as __namedExportsOrder,J as default};
