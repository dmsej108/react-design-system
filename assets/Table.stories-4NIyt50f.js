import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{R as c}from"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const I="_wrapper_1moh3_2",E="_table_1moh3_8",A="_fixed_1moh3_17",F="_auto_1moh3_21",H="_th_1moh3_26",O="_td_1moh3_38",U="_bordered_1moh3_49",k="_striped_1moh3_60",a={wrapper:I,table:E,fixed:A,auto:F,th:H,td:O,bordered:U,striped:k},d=c.forwardRef(({rows:g,columns:T=2,layout:R="fixed",bordered:j=!0,striped:N=!1,className:C="",...V},B)=>{const q=[a.table,j?a.bordered:"",N?a.striped:"",a[R],C].filter(Boolean).join(" ");return e.jsx("div",{className:a.wrapper,children:e.jsx("table",{ref:B,className:q,...V,children:e.jsx("tbody",{children:g.map((P,D)=>e.jsx("tr",{children:P.cells.map((l,G)=>{const u=l.labelSpan??1,K=l.fullValue?T*2-u:l.valueSpan??1;return e.jsxs(c.Fragment,{children:[e.jsx("th",{className:a.th,colSpan:u,scope:"row",children:l.label}),e.jsx("td",{className:a.td,colSpan:K,children:l.value})]},G)})},D))})})})});d.displayName="STable";d.__docgenInfo={description:"",methods:[],displayName:"STable",props:{rows:{required:!0,tsType:{name:"Array",elements:[{name:"TableRow"}],raw:"TableRow[]"},description:""},columns:{required:!1,tsType:{name:"number"},description:"열 수 (label+value 쌍 기준, 기본 2열 = label 1 + value 1)",defaultValue:{value:"2",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'fixed' | 'auto'",elements:[{name:"literal",value:"'fixed'"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"'fixed'",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const Q={title:"Components/Table",component:d,tags:["autodocs"],argTypes:{columns:{control:"number",description:"label+value 쌍 열 수"},bordered:{control:"boolean",description:"테두리 표시 여부"},striped:{control:"boolean",description:"홀짝 행 배경색 구분"},layout:{control:"select",options:["fixed","auto"],description:"table-layout 속성"}}},n=[{cells:[{label:"이벤트 ID",value:"112"}]},{cells:[{label:"이벤트명",value:"KB GS Pay동반 신를고 스페셜 버드뱃스 응모이벤트"}]},{cells:[{label:"이벤트 유형",value:"일반"}]},{cells:[{label:"이벤트 대상",value:"KB GS Pay동반 미기입 기업 고객"}]},{cells:[{label:"이벤트 기간",value:"2026.05.28 ~ 2026.07.12"}]}],r={args:{rows:n,bordered:!0,striped:!1,layout:"fixed"}},z=[{cells:[{label:"이벤트 ID",value:"112"},{label:"조회수",value:"166"}]},{cells:[{label:"이벤트명",value:"KB GS Pay동반 신를고 스페셜 버드뱃스 응모이벤트",fullValue:!0}]},{cells:[{label:"이벤트 유형",value:"일반"},{label:"게시 여부",value:"게시"}]},{cells:[{label:"이벤트 대상",value:"KB GS Pay동반 미기입 기업 고객",fullValue:!0}]},{cells:[{label:"이벤트 기간",value:"2026.05.28 ~ 2026.07.12"},{label:"당첨자 발표일",value:"2026.07.20"}]},{cells:[{label:"PUSH 수신동의",value:"전수"},{label:"바드 형",value:"씨우기기"}]}],s={args:{rows:z,columns:2,bordered:!0,striped:!1,layout:"fixed"}},o={args:{rows:n,bordered:!0,striped:!0,layout:"fixed"}},t={args:{rows:n,bordered:!1,striped:!1}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    rows: basicRows,
    bordered: true,
    striped: false,
    layout: 'fixed'
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,f,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    rows: twoColRows,
    columns: 2,
    bordered: true,
    striped: false,
    layout: 'fixed'
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var w,_,x;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    rows: basicRows,
    bordered: true,
    striped: true,
    layout: 'fixed'
  }
}`,...(x=(_=o.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var y,h,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    rows: basicRows,
    bordered: false,
    striped: false
  }
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const W=["Default","TwoColumns","Striped","NoBorder"];export{r as Default,t as NoBorder,o as Striped,s as TwoColumns,W as __namedExportsOrder,Q as default};
