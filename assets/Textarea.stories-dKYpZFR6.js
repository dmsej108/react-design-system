import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{R as oe,r as le}from"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const te="_wrapper_5z9p6_1",ne="_label_5z9p6_8",ie="_required_5z9p6_16",ce="_textareaWrapper_5z9p6_22",de="_textarea_5z9p6_22",pe="_small_5z9p6_61",me="_medium_5z9p6_62",ue="_large_5z9p6_63",xe="_error_5z9p6_66",he="_footer_5z9p6_69",ge="_helperText_5z9p6_76",fe="_errorText_5z9p6_82",_e="_count_5z9p6_88",r={wrapper:te,label:ne,required:ie,textareaWrapper:ce,textarea:de,small:pe,medium:me,large:ue,error:xe,footer:he,helperText:ge,errorText:fe,count:_e},s=oe.forwardRef(({label:a,size:G="medium",error:m=!1,helperText:f,errorText:_,required:w,resize:J="vertical",showCount:K=!1,id:Q,className:U="",onChange:u,value:x,defaultValue:h,maxLength:g,rows:X=3,...Y},Z)=>{const b=Q??(a==null?void 0:a.toLowerCase().replace(/\s+/g,"-")),[ee,re]=le.useState(()=>typeof x=="string"?x.length:typeof h=="string"?h.length:0),ae=T=>{re(T.target.value.length),u==null||u(T)},se=[r.textareaWrapper,r[G],m?r.error:"",U].filter(Boolean).join(" ");return e.jsxs("div",{className:r.wrapper,children:[a&&e.jsxs("label",{htmlFor:b,className:r.label,children:[a,w&&e.jsx("span",{className:r.required,children:"*"})]}),e.jsx("div",{className:se,children:e.jsx("textarea",{ref:Z,id:b,className:r.textarea,required:w,rows:X,maxLength:g,value:x,defaultValue:h,onChange:ae,style:{resize:J},...Y})}),e.jsxs("div",{className:r.footer,children:[e.jsxs("div",{children:[m&&_&&e.jsx("p",{className:r.errorText,children:_}),!m&&f&&e.jsx("p",{className:r.helperText,children:f})]}),K&&e.jsxs("span",{className:r.count,children:[ee,g!=null?`/${g}`:""]})]})]})});s.displayName="STextarea";s.__docgenInfo={description:"",methods:[],displayName:"STextarea",props:{label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:""},errorText:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},resize:{required:!1,tsType:{name:"union",raw:"'none' | 'vertical' | 'both'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'vertical'"},{name:"literal",value:"'both'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},showCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1},rows:{defaultValue:{value:"3",computed:!1},required:!1}},composes:["Omit"]};const ze={title:"Components/Textarea",component:s,tags:["autodocs"],argTypes:{size:{control:"radio",options:["small","medium","large"]},resize:{control:"radio",options:["none","vertical","both"]},label:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},errorText:{control:"text"},rows:{control:"number"},maxLength:{control:"number"},showCount:{control:"boolean"},disabled:{control:"boolean"},required:{control:"boolean"},error:{control:"boolean"}},args:{label:"내용",placeholder:"내용을 입력하세요",size:"medium",resize:"vertical",rows:3,disabled:!1,required:!1,error:!1,showCount:!1},decorators:[a=>e.jsx("div",{style:{width:400},children:e.jsx(a,{})})],parameters:{layout:"centered"}},o={},l={name:"크기",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:400},children:[e.jsx(s,{label:"Small",size:"small",placeholder:"small",rows:2}),e.jsx(s,{label:"Medium",size:"medium",placeholder:"medium",rows:2}),e.jsx(s,{label:"Large",size:"large",placeholder:"large",rows:2})]})},t={name:"글자 수 표시",args:{label:"메모",placeholder:"내용을 입력하세요",maxLength:200,showCount:!0,helperText:"최대 200자까지 입력 가능합니다.",rows:4}},n={name:"도움말",args:{label:"계좌 메모",placeholder:"이체 목적 또는 메모를 입력하세요",helperText:"수취인에게 표시되는 메모입니다.",rows:3}},i={name:"오류 상태",args:{label:"사유",required:!0,error:!0,errorText:"사유를 입력해주세요.",rows:3}},c={name:"비활성화",args:{label:"처리 내용",defaultValue:"2024년 1월 15일 처리 완료",disabled:!0,rows:3}},d={name:"리사이즈 없음",args:{label:"고정 크기",placeholder:"크기 조절이 비활성화됩니다.",resize:"none",rows:4,helperText:"resize: none"}},p={name:"뱅킹 이체 메모 예시",args:{label:"이체 메모",placeholder:"수취인에게 전달할 메모를 입력하세요",maxLength:100,showCount:!0,rows:3,required:!0,helperText:"이체 후 수취인 통장에 표시됩니다."}};var z,v,y;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:"{}",...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var q,S,j;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: 400
  }}>
      <STextarea label="Small" size="small" placeholder="small" rows={2} />
      <STextarea label="Medium" size="medium" placeholder="medium" rows={2} />
      <STextarea label="Large" size="large" placeholder="large" rows={2} />
    </div>
}`,...(j=(S=l.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var N,C,W;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '글자 수 표시',
  args: {
    label: '메모',
    placeholder: '내용을 입력하세요',
    maxLength: 200,
    showCount: true,
    helperText: '최대 200자까지 입력 가능합니다.',
    rows: 4
  }
}`,...(W=(C=t.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var L,R,V;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '도움말',
  args: {
    label: '계좌 메모',
    placeholder: '이체 목적 또는 메모를 입력하세요',
    helperText: '수취인에게 표시되는 메모입니다.',
    rows: 3
  }
}`,...(V=(R=n.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var E,D,M;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '오류 상태',
  args: {
    label: '사유',
    required: true,
    error: true,
    errorText: '사유를 입력해주세요.',
    rows: 3
  }
}`,...(M=(D=i.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var B,k,H;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '비활성화',
  args: {
    label: '처리 내용',
    defaultValue: '2024년 1월 15일 처리 완료',
    disabled: true,
    rows: 3
  }
}`,...(H=(k=c.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var I,O,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '리사이즈 없음',
  args: {
    label: '고정 크기',
    placeholder: '크기 조절이 비활성화됩니다.',
    resize: 'none',
    rows: 4,
    helperText: 'resize: none'
  }
}`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var F,$,A;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '뱅킹 이체 메모 예시',
  args: {
    label: '이체 메모',
    placeholder: '수취인에게 전달할 메모를 입력하세요',
    maxLength: 100,
    showCount: true,
    rows: 3,
    required: true,
    helperText: '이체 후 수취인 통장에 표시됩니다.'
  }
}`,...(A=($=p.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};const ve=["Playground","Sizes","WithCount","WithHelper","ErrorState","Disabled","ResizeNone","BankingMemo"];export{p as BankingMemo,c as Disabled,i as ErrorState,o as Playground,d as ResizeNone,l as Sizes,t as WithCount,n as WithHelper,ve as __namedExportsOrder,ze as default};
