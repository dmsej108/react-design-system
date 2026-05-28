import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{B as a}from"./Badge-DRjiUpTK.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const M={title:"Components/Badge",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","success","warning","error","info","neutral"],description:"배지 스타일 변형"},size:{control:"radio",options:["small","medium","large"]},dot:{control:"boolean",description:"상태 점 표시"},contorl:{control:"radio",options:["a","b","c"]},children:{control:"text"}},args:{children:"Badge",variant:"primary",size:"medium",dot:!1}},n={},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"error",children:"Error"}),e.jsx(a,{variant:"info",children:"Info"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{variant:"success",dot:!0,children:"완료"}),e.jsx(a,{variant:"warning",dot:!0,children:"처리중"}),e.jsx(a,{variant:"error",dot:!0,children:"실패"}),e.jsx(a,{variant:"neutral",dot:!0,children:"대기"}),e.jsx(a,{variant:"info",dot:!0,children:"정보"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{size:"small",variant:"primary",children:"Small"}),e.jsx(a,{size:"medium",variant:"primary",children:"Medium"}),e.jsx(a,{size:"large",variant:"primary",children:"Large"})]})},d={name:"data-type (contorl)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:["a","b","c"].map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(a,{contorl:r,children:"Badge"}),e.jsxs("span",{style:{fontSize:"0.75rem",color:"#667085"},children:['data-type="',r,'"']})]},r))})},o={name:"로고 컨텍스트 예시",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"12px 16px",background:"#1d2939",borderRadius:8},children:[e.jsx("div",{style:{width:32,height:32,borderRadius:8,background:"#0052cc",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700},children:"S"}),e.jsx("span",{style:{color:"#fff",fontWeight:600,fontSize:"1rem"},children:"StarBanking"}),e.jsx(a,{children:"Badge"})]})},l={name:"뱅킹 상태 예시",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[{label:"거래 완료",variant:"success",dot:!0},{label:"처리 중",variant:"warning",dot:!0},{label:"이체 실패",variant:"error",dot:!0},{label:"승인 대기",variant:"neutral",dot:!0},{label:"VIP 회원",variant:"primary"},{label:"신규 계좌",variant:"info"}].map(({label:r,variant:P,dot:R})=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:8},children:e.jsx(a,{variant:P,dot:R,children:r})},r))})};var c,p,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,u,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <SBadge variant="primary">Primary</SBadge>
      <SBadge variant="secondary">Secondary</SBadge>
      <SBadge variant="success">Success</SBadge>
      <SBadge variant="warning">Warning</SBadge>
      <SBadge variant="error">Error</SBadge>
      <SBadge variant="info">Info</SBadge>
    </div>
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var v,x,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <SBadge variant="success" dot>완료</SBadge>
      <SBadge variant="warning" dot>처리중</SBadge>
      <SBadge variant="error" dot>실패</SBadge>
      <SBadge variant="neutral" dot>대기</SBadge>
      <SBadge variant="info" dot>정보</SBadge>
    </div>
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,B,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>
      <SBadge size="small" variant="primary">Small</SBadge>
      <SBadge size="medium" variant="primary">Medium</SBadge>
      <SBadge size="large" variant="primary">Large</SBadge>
    </div>
}`,...(h=(B=i.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var j,b,I;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'data-type (contorl)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      {(['a', 'b', 'c'] as const).map(type => <div key={type} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
          <SBadge contorl={type}>Badge</SBadge>
          <span style={{
        fontSize: '0.75rem',
        color: '#667085'
      }}>data-type="{type}"</span>
        </div>)}
    </div>
}`,...(I=(b=d.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var z,w,W;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '로고 컨텍스트 예시',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '12px 16px',
    background: '#1d2939',
    borderRadius: 8
  }}>
      <div style={{
      width: 32,
      height: 32,
      borderRadius: 8,
      background: '#0052cc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 700
    }}>S</div>
      <span style={{
      color: '#fff',
      fontWeight: 600,
      fontSize: '1rem'
    }}>StarBanking</span>
      <SBadge>Badge</SBadge>
    </div>
}`,...(W=(w=o.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var k,C,D;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '뱅킹 상태 예시',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      {[{
      label: '거래 완료',
      variant: 'success' as const,
      dot: true
    }, {
      label: '처리 중',
      variant: 'warning' as const,
      dot: true
    }, {
      label: '이체 실패',
      variant: 'error' as const,
      dot: true
    }, {
      label: '승인 대기',
      variant: 'neutral' as const,
      dot: true
    }, {
      label: 'VIP 회원',
      variant: 'primary' as const
    }, {
      label: '신규 계좌',
      variant: 'info' as const
    }].map(({
      label,
      variant,
      dot
    }) => <div key={label} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
          <SBadge variant={variant} dot={dot}>{label}</SBadge>
        </div>)}
    </div>
}`,...(D=(C=l.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const _=["Playground","Variants","WithDot","Sizes","ContorlTypes","InLogoContext","BankingStatuses"];export{l as BankingStatuses,d as ContorlTypes,o as InLogoContext,n as Playground,i as Sizes,t as Variants,s as WithDot,_ as __namedExportsOrder,M as default};
