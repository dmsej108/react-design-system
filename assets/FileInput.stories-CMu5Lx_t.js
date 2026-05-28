import{j as d}from"./jsx-runtime-Z5uAzocK.js";import{F as L}from"./FileInput-CJzP9zw5.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Y={title:"Components/FileInput",component:L,tags:["autodocs"],argTypes:{variant:{control:"radio",options:["dropzone","inline"]},size:{control:"radio",options:["small","medium","large"]},label:{control:"text"},placeholder:{control:"text"},accept:{control:"text",description:"MIME 타입 또는 확장자 (예: image/*, .pdf)"},multiple:{control:"boolean"},maxSize:{control:"number",description:"최대 파일 크기 (bytes)"},disabled:{control:"boolean"},required:{control:"boolean"},error:{control:"boolean"},errorText:{control:"text"},helperText:{control:"text"}},args:{variant:"dropzone",label:"파일 업로드",multiple:!1,disabled:!1,required:!1,error:!1},decorators:[K=>d.jsx("div",{style:{width:480},children:d.jsx(K,{})})],parameters:{layout:"centered"}},e={},r={args:{label:"프로필 이미지",accept:"image/*",helperText:"JPG, PNG, GIF 형식만 허용합니다."}},a={args:{label:"첨부파일",multiple:!0,helperText:"여러 파일을 선택할 수 있습니다."}},n={args:{label:"서류 업로드",accept:".pdf,.doc,.docx",maxSize:5*1024*1024,helperText:"PDF, DOC 형식 · 최대 5MB"}},t={args:{label:"신분증 업로드",error:!0,errorText:"파일을 업로드해주세요.",required:!0}},o={args:{label:"비활성화",disabled:!0,helperText:"현재 파일 업로드가 불가합니다."}},s={name:"뱅킹 서류 첨부 예시",args:{label:"계좌 개설 서류",accept:".pdf,image/*",multiple:!0,maxSize:10*1024*1024,required:!0,helperText:"신분증, 재직증명서 등 · PDF 또는 이미지 · 파일당 최대 10MB"}},l={name:"인라인 (텍스트 입력형)",args:{variant:"inline",label:"첨부파일",placeholder:"파일을 선택하세요",helperText:"파일을 선택하거나 찾아보기를 클릭하세요."}},i={name:"인라인 · 다중 선택",args:{variant:"inline",label:"첨부파일",multiple:!0,accept:".pdf,.doc,.docx",helperText:"PDF, DOC 형식"}},c={name:"인라인 · 오류 상태",args:{variant:"inline",label:"신분증 업로드",required:!0,error:!0,errorText:"파일을 업로드해주세요."}},p={name:"인라인 · 비활성화",args:{variant:"inline",label:"첨부파일",disabled:!0,helperText:"현재 파일 업로드가 불가합니다."}};var m,u,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,b,h;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: '프로필 이미지',
    accept: 'image/*',
    helperText: 'JPG, PNG, GIF 형식만 허용합니다.'
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var T,S,I;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: '첨부파일',
    multiple: true,
    helperText: '여러 파일을 선택할 수 있습니다.'
  }
}`,...(I=(S=a.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var f,D,F;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: '서류 업로드',
    accept: '.pdf,.doc,.docx',
    maxSize: 5 * 1024 * 1024,
    // 5MB
    helperText: 'PDF, DOC 형식 · 최대 5MB'
  }
}`,...(F=(D=n.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var M,P,v;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: '신분증 업로드',
    error: true,
    errorText: '파일을 업로드해주세요.',
    required: true
  }
}`,...(v=(P=t.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var z,E,q;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: '비활성화',
    disabled: true,
    helperText: '현재 파일 업로드가 불가합니다.'
  }
}`,...(q=(E=o.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var y,B,O;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '뱅킹 서류 첨부 예시',
  args: {
    label: '계좌 개설 서류',
    accept: '.pdf,image/*',
    multiple: true,
    maxSize: 10 * 1024 * 1024,
    required: true,
    helperText: '신분증, 재직증명서 등 · PDF 또는 이미지 · 파일당 최대 10MB'
  }
}`,...(O=(B=s.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var G,W,C;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '인라인 (텍스트 입력형)',
  args: {
    variant: 'inline',
    label: '첨부파일',
    placeholder: '파일을 선택하세요',
    helperText: '파일을 선택하거나 찾아보기를 클릭하세요.'
  }
}`,...(C=(W=l.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var j,k,J;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '인라인 · 다중 선택',
  args: {
    variant: 'inline',
    label: '첨부파일',
    multiple: true,
    accept: '.pdf,.doc,.docx',
    helperText: 'PDF, DOC 형식'
  }
}`,...(J=(k=i.parameters)==null?void 0:k.docs)==null?void 0:J.source}}};var N,_,w;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '인라인 · 오류 상태',
  args: {
    variant: 'inline',
    label: '신분증 업로드',
    required: true,
    error: true,
    errorText: '파일을 업로드해주세요.'
  }
}`,...(w=(_=c.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var R,A,H;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '인라인 · 비활성화',
  args: {
    variant: 'inline',
    label: '첨부파일',
    disabled: true,
    helperText: '현재 파일 업로드가 불가합니다.'
  }
}`,...(H=(A=p.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};const Z=["Playground","ImageOnly","MultipleFiles","WithMaxSize","WithError","Disabled","BankingExample","Inline","InlineMultiple","InlineWithError","InlineDisabled"];export{s as BankingExample,o as Disabled,r as ImageOnly,l as Inline,p as InlineDisabled,i as InlineMultiple,c as InlineWithError,a as MultipleFiles,e as Playground,t as WithError,n as WithMaxSize,Z as __namedExportsOrder,Y as default};
