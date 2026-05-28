import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as t}from"./index-pP6CS22B.js";import{R as n}from"./Radio-mCAkdJyy.js";import"./_commonjsHelpers-Cpj98o6Y.js";const H={title:"Components/Radio",component:n,tags:["autodocs"],argTypes:{direction:{control:"radio",options:["vertical","horizontal"]},size:{control:"radio",options:["small","medium","large"]},disabled:{control:"boolean"}},args:{name:"playground",direction:"horizontal",size:"medium",disabled:!1,options:[{value:"a",label:"옵션 A"},{value:"b",label:"옵션 B"},{value:"c",label:"옵션 C"}]}},s={render:l=>{function a(){const[r,o]=t.useState("a");return e.jsx(n,{...l,value:r,onChange:o})}return e.jsx(a,{})}},i={name:"크기",render:()=>{function l(){const[a,r]=t.useState("b");return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:["small","medium","large"].map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsx("span",{style:{fontSize:11,color:"var(--ds-text-muted)",textTransform:"uppercase",letterSpacing:"0.06em"},children:o}),e.jsx(n,{name:`size-${o}`,direction:"horizontal",size:o,value:a,onChange:r,options:[{value:"a",label:"옵션 A"},{value:"b",label:"옵션 B"},{value:"c",label:"옵션 C"}]})]},o))})}return e.jsx(l,{})}},u={name:"세로 (기본)",render:()=>{function l(){const[a,r]=t.useState("option1");return e.jsx(n,{name:"vertical",value:a,onChange:r,options:[{value:"option1",label:"입출금 계좌"},{value:"option2",label:"적금 계좌"},{value:"option3",label:"청약 계좌"}]})}return e.jsx(l,{})}},c={name:"가로",render:()=>{function l(){const[a,r]=t.useState("card");return e.jsx(n,{name:"horizontal",direction:"horizontal",value:a,onChange:r,options:[{value:"card",label:"카드"},{value:"transfer",label:"계좌이체"},{value:"mobile",label:"간편결제"}]})}return e.jsx(l,{})}},d={name:"일부 항목 비활성",render:()=>{function l(){const[a,r]=t.useState("usd");return e.jsx(n,{name:"partial",value:a,onChange:r,options:[{value:"krw",label:"원화 (KRW)"},{value:"usd",label:"달러 (USD)"},{value:"jpy",label:"엔화 (JPY)",disabled:!0},{value:"eur",label:"유로 (EUR)",disabled:!0}]})}return e.jsx(l,{})}},m={name:"전체 비활성",render:()=>e.jsx(n,{name:"disabled",value:"b",disabled:!0,options:[{value:"a",label:"선택 불가 A"},{value:"b",label:"선택 불가 B (선택됨)"},{value:"c",label:"선택 불가 C"}]})},p={name:"선택값 확인",render:()=>{function l(){const[a,r]=t.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(n,{name:"output",direction:"horizontal",value:a,onChange:r,options:[{value:"daily",label:"일별"},{value:"weekly",label:"주별"},{value:"monthly",label:"월별"},{value:"yearly",label:"연별"}]}),a&&e.jsxs("p",{style:{margin:0,fontSize:13,color:"var(--ds-text-muted)"},children:["선택: ",e.jsx("strong",{style:{color:"var(--ds-text)"},children:a})]})]})}return e.jsx(l,{})}};var v,b,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    function Demo() {
      const [val, setVal] = useState('a');
      return <SRadioGroup {...args} value={val} onChange={setVal} />;
    }
    return <Demo />;
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var g,f,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '크기',
  render: () => {
    function Demo() {
      const [val, setVal] = useState('b');
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6
        }}>
              <span style={{
            fontSize: 11,
            color: 'var(--ds-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>{size}</span>
              <SRadioGroup name={\`size-\${size}\`} direction="horizontal" size={size} value={val} onChange={setVal} options={[{
            value: 'a',
            label: '옵션 A'
          }, {
            value: 'b',
            label: '옵션 B'
          }, {
            value: 'c',
            label: '옵션 C'
          }]} />
            </div>)}
        </div>;
    }
    return <Demo />;
  }
}`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var y,h,D;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '세로 (기본)',
  render: () => {
    function Demo() {
      const [val, setVal] = useState('option1');
      return <SRadioGroup name="vertical" value={val} onChange={setVal} options={[{
        value: 'option1',
        label: '입출금 계좌'
      }, {
        value: 'option2',
        label: '적금 계좌'
      }, {
        value: 'option3',
        label: '청약 계좌'
      }]} />;
    }
    return <Demo />;
  }
}`,...(D=(h=u.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var z,j,V;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '가로',
  render: () => {
    function Demo() {
      const [val, setVal] = useState('card');
      return <SRadioGroup name="horizontal" direction="horizontal" value={val} onChange={setVal} options={[{
        value: 'card',
        label: '카드'
      }, {
        value: 'transfer',
        label: '계좌이체'
      }, {
        value: 'mobile',
        label: '간편결제'
      }]} />;
    }
    return <Demo />;
  }
}`,...(V=(j=c.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var C,R,G;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '일부 항목 비활성',
  render: () => {
    function Demo() {
      const [val, setVal] = useState('usd');
      return <SRadioGroup name="partial" value={val} onChange={setVal} options={[{
        value: 'krw',
        label: '원화 (KRW)'
      }, {
        value: 'usd',
        label: '달러 (USD)'
      }, {
        value: 'jpy',
        label: '엔화 (JPY)',
        disabled: true
      }, {
        value: 'eur',
        label: '유로 (EUR)',
        disabled: true
      }]} />;
    }
    return <Demo />;
  }
}`,...(G=(R=d.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var P,k,A;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '전체 비활성',
  render: () => <SRadioGroup name="disabled" value="b" disabled options={[{
    value: 'a',
    label: '선택 불가 A'
  }, {
    value: 'b',
    label: '선택 불가 B (선택됨)'
  }, {
    value: 'c',
    label: '선택 불가 C'
  }]} />
}`,...(A=(k=m.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var B,E,w;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '선택값 확인',
  render: () => {
    function Demo() {
      const [val, setVal] = useState('');
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          <SRadioGroup name="output" direction="horizontal" value={val} onChange={setVal} options={[{
          value: 'daily',
          label: '일별'
        }, {
          value: 'weekly',
          label: '주별'
        }, {
          value: 'monthly',
          label: '월별'
        }, {
          value: 'yearly',
          label: '연별'
        }]} />
          {val && <p style={{
          margin: 0,
          fontSize: 13,
          color: 'var(--ds-text-muted)'
        }}>
              선택: <strong style={{
            color: 'var(--ds-text)'
          }}>{val}</strong>
            </p>}
        </div>;
    }
    return <Demo />;
  }
}`,...(w=(E=p.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};const J=["Playground","Sizes","Vertical","Horizontal","PartialDisabled","Disabled","WithOutput"];export{m as Disabled,c as Horizontal,d as PartialDisabled,s as Playground,i as Sizes,u as Vertical,p as WithOutput,J as __namedExportsOrder,H as default};
