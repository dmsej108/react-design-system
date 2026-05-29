import{j as a}from"./jsx-runtime-Z5uAzocK.js";import{R as m,r as J}from"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const K="_tabList_1clrr_2",M="_fullWidth_1clrr_7",P="_tab_1clrr_2",Q="_filled_1clrr_42",X="_active_1clrr_53",Y="_underline_1clrr_68",Z="_line_1clrr_94",r={tabList:K,fullWidth:M,tab:P,filled:Q,active:X,underline:Y,line:Z},c=m.forwardRef(({tabs:l,value:t,defaultValue:R,variant:E="filled",fullWidth:k=!1,onChange:p,className:z=""},B)=>{var f;const[U,O]=m.useState(R??((f=l[0])==null?void 0:f.value)??""),v=t!==void 0?t:U,G=e=>{t===void 0&&O(e),p==null||p(e)},H=[r.tabList,r[E],k?r.fullWidth:"",z].filter(Boolean).join(" ");return a.jsx("div",{ref:B,role:"tablist",className:H,children:l.map(e=>a.jsx("button",{role:"tab",type:"button","aria-selected":v===e.value,disabled:e.disabled,className:[r.tab,v===e.value?r.active:""].filter(Boolean).join(" "),onClick:()=>!e.disabled&&G(e.value),children:e.label},e.value))})});c.displayName="STab";c.__docgenInfo={description:"",methods:[],displayName:"STab",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'underline' | 'line'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'underline'"},{name:"literal",value:"'line'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const le={title:"Components/Tab",component:c,tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","underline","line"],description:"탭 스타일 variant"},fullWidth:{control:"boolean",description:"전체 너비 사용 여부"}}},b=[{label:"전체 이벤트",value:"all"},{label:"행운의 당첨자",value:"winner"},{label:"나의 이벤트",value:"my"}],I=[{label:"탭 1",value:"tab1"},{label:"탭 2",value:"tab2"},{label:"탭 3",value:"tab3"},{label:"탭 4",value:"tab4"}],s={args:{tabs:b,variant:"filled",defaultValue:"all"}},n={args:{tabs:b,variant:"filled",fullWidth:!0,defaultValue:"all"},decorators:[l=>a.jsx("div",{style:{width:"480px"},children:a.jsx(l,{})})]},i={args:{tabs:I,variant:"underline",defaultValue:"tab1"}},o={args:{tabs:I,variant:"line",defaultValue:"tab1"}},d={render:()=>{const[l,t]=J.useState("all");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[a.jsx(c,{tabs:b,variant:"filled",fullWidth:!0,value:l,onChange:t}),a.jsxs("p",{style:{fontSize:14,color:"#666"},children:["선택된 탭: ",a.jsx("strong",{children:l})]})]})}},u={args:{tabs:[{label:"탭 1",value:"tab1"},{label:"탭 2 (비활성)",value:"tab2",disabled:!0},{label:"탭 3",value:"tab3"}],variant:"underline",defaultValue:"tab1"}};var g,y,_;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tabs: eventTabs,
    variant: 'filled',
    defaultValue: 'all'
  }
}`,...(_=(y=s.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var h,T,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tabs: eventTabs,
    variant: 'filled',
    fullWidth: true,
    defaultValue: 'all'
  },
  decorators: [Story => <div style={{
    width: '480px'
  }}>
        <Story />
      </div>]
}`,...(x=(T=n.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var S,V,W;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    variant: 'underline',
    defaultValue: 'tab1'
  }
}`,...(W=(V=i.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var j,q,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    variant: 'line',
    defaultValue: 'tab1'
  }
}`,...(w=(q=o.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var F,L,C;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState('all');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <STab tabs={eventTabs} variant="filled" fullWidth value={active} onChange={setActive} />
        <p style={{
        fontSize: 14,
        color: '#666'
      }}>선택된 탭: <strong>{active}</strong></p>
      </div>;
  }
}`,...(C=(L=d.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var N,A,D;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    tabs: [{
      label: '탭 1',
      value: 'tab1'
    }, {
      label: '탭 2 (비활성)',
      value: 'tab2',
      disabled: true
    }, {
      label: '탭 3',
      value: 'tab3'
    }],
    variant: 'underline',
    defaultValue: 'tab1'
  }
}`,...(D=(A=u.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const te=["Filled","FilledFullWidth","Underline","Line","Controlled","WithDisabled"];export{d as Controlled,s as Filled,n as FilledFullWidth,o as Line,i as Underline,u as WithDisabled,te as __namedExportsOrder,le as default};
