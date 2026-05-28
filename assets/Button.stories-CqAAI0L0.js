import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{B as r}from"./Button-DWSf26AH.js";import{I as n}from"./Icon-uRheoC7T.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const y=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M13.5 2.5L7 9M13.5 2.5L9 13.5L7 9M13.5 2.5L2.5 6.5L7 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),S=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),ce={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger"],description:"버튼 스타일 변형"},size:{control:"radio",options:["small","medium","large"],description:"버튼 크기"},loading:{control:"boolean",description:"로딩 상태"},disabled:{control:"boolean",description:"비활성화"},fullWidth:{control:"boolean",description:"전체 너비"},children:{control:"text"}},args:{children:"Button",variant:"primary",size:"medium",loading:!1,disabled:!1,fullWidth:!1}},a={},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(r,{size:"small",children:"Small"}),e.jsx(r,{size:"medium",children:"Medium"}),e.jsx(r,{size:"large",children:"Large"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(r,{leftIcon:e.jsx(y,{}),children:"이체하기"}),e.jsx(r,{variant:"outline",rightIcon:e.jsx(S,{}),children:"추가하기"}),e.jsx(r,{variant:"secondary",leftIcon:e.jsx(S,{}),rightIcon:e.jsx(y,{}),children:"양쪽 아이콘"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{children:"Normal"}),e.jsx(r,{loading:!0,children:"Loading"}),e.jsx(r,{disabled:!0,children:"Disabled"})]})},l={args:{fullWidth:!0,children:"전체 너비 버튼"},decorators:[ae=>e.jsx("div",{style:{width:320},children:e.jsx(ae,{})})]},c={name:"Icon Only",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(r,{variant:"ghost",iconOnly:!0,size:"small",children:e.jsx(n,{name:"search",size:"small"})}),e.jsx(r,{variant:"ghost",iconOnly:!0,size:"medium",children:e.jsx(n,{name:"search",size:"medium"})}),e.jsx(r,{variant:"ghost",iconOnly:!0,size:"large",children:e.jsx(n,{name:"search",size:"large"})})]}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(r,{variant:"outline",iconOnly:!0,size:"small",children:e.jsx(n,{name:"edit",size:"small"})}),e.jsx(r,{variant:"outline",iconOnly:!0,size:"medium",children:e.jsx(n,{name:"edit",size:"medium"})}),e.jsx(r,{variant:"outline",iconOnly:!0,size:"large",children:e.jsx(n,{name:"edit",size:"large"})})]}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(r,{variant:"danger",iconOnly:!0,size:"small",children:e.jsx(n,{name:"trash",size:"small"})}),e.jsx(r,{variant:"primary",iconOnly:!0,size:"small",children:e.jsx(n,{name:"plus",size:"small"})}),e.jsx(r,{variant:"ghost",iconOnly:!0,disabled:!0,children:e.jsx(n,{name:"settings",size:"medium"})})]})]})},d={args:{variant:"primary",children:"Primary"}},m={args:{variant:"secondary",children:"Secondary"}},u={args:{variant:"outline",children:"Outline"}},p={args:{variant:"ghost",children:"Ghost"}},g={args:{variant:"danger",children:"Danger"}},h={args:{loading:!0,children:"처리 중..."}};var x,v,j;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(j=(v=a.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var B,z,I;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <SButton variant="primary">Primary</SButton>
      <SButton variant="secondary">Secondary</SButton>
      <SButton variant="outline">Outline</SButton>
      <SButton variant="ghost">Ghost</SButton>
    </div>
}`,...(I=(z=s.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var f,O,W;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <SButton size="small">Small</SButton>
      <SButton size="medium">Medium</SButton>
      <SButton size="large">Large</SButton>
    </div>
}`,...(W=(O=t.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var L,w,b;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>
      <SButton leftIcon={<SendIcon />}>이체하기</SButton>
      <SButton variant="outline" rightIcon={<PlusIcon />}>추가하기</SButton>
      <SButton variant="secondary" leftIcon={<PlusIcon />} rightIcon={<SendIcon />}>양쪽 아이콘</SButton>
    </div>
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var P,D,k;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <SButton>Normal</SButton>
      <SButton loading>Loading</SButton>
      <SButton disabled>Disabled</SButton>
    </div>
}`,...(k=(D=o.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var M,G,C;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: '전체 너비 버튼'
  },
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(C=(G=l.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};var E,F,N;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Icon Only',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>
        <SButton variant="ghost" iconOnly size="small"><SIcon name="search" size="small" /></SButton>
        <SButton variant="ghost" iconOnly size="medium"><SIcon name="search" size="medium" /></SButton>
        <SButton variant="ghost" iconOnly size="large"><SIcon name="search" size="large" /></SButton>
      </div>
      <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>
        <SButton variant="outline" iconOnly size="small"><SIcon name="edit" size="small" /></SButton>
        <SButton variant="outline" iconOnly size="medium"><SIcon name="edit" size="medium" /></SButton>
        <SButton variant="outline" iconOnly size="large"><SIcon name="edit" size="large" /></SButton>
      </div>
      <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>
        <SButton variant="danger" iconOnly size="small"><SIcon name="trash" size="small" /></SButton>
        <SButton variant="primary" iconOnly size="small"><SIcon name="plus" size="small" /></SButton>
        <SButton variant="ghost" iconOnly disabled><SIcon name="settings" size="medium" /></SButton>
      </div>
    </div>
}`,...(N=(F=c.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var V,_,R;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary'
  }
}`,...(R=(_=d.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var T,q,A;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...(A=(q=m.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost'
  }
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Danger'
  }
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ne;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: '처리 중...'
  }
}`,...(ne=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const de=["Playground","Variants","Sizes","WithIcons","States","FullWidth","IconOnly","Primary","Secondary","Outline","Ghost","Danger","Loading"];export{g as Danger,l as FullWidth,p as Ghost,c as IconOnly,h as Loading,u as Outline,a as Playground,d as Primary,m as Secondary,t as Sizes,o as States,s as Variants,i as WithIcons,de as __namedExportsOrder,ce as default};
