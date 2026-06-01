import{j as t}from"./jsx-runtime-Z5uAzocK.js";import{R as w}from"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const $="_wrapper_166rp_2",F="_table_166rp_8",H="_fixed_166rp_17",O="_auto_166rp_21",U="_th_166rp_26",z="_td_166rp_38",J="_bordered_166rp_49",L="_striped_166rp_60",s={wrapper:$,table:F,fixed:H,auto:O,th:U,td:z,bordered:J,striped:L};function M(e,n,f){const o=[];let a=0;for(;a<e.length;){const r=e[a];if(r.fullValue){o.push({cells:[{label:r.label,value:r.render?r.render(n[r.key],n):n[r.key]??"-",fullValue:!0}]}),a+=1;continue}const u=[];for(;u.length<f&&a<e.length&&!e[a].fullValue;)u.push(e[a]),a+=1;o.push({cells:u.map(l=>({label:l.label,value:l.render?l.render(n[l.key],n):n[l.key]??"-",fullValue:l.fullValue}))})}return o}const y=w.forwardRef(({columns:e,data:n,rows:f,columnsPerRow:o=1,layout:a="fixed",bordered:r=!0,striped:u=!1,className:l="",...D},I)=>{const q=f??M(e??[],n??{},o),E=o*2,B=[s.table,r?s.bordered:"",u?s.striped:"",s[a],l].filter(Boolean).join(" ");return t.jsx("div",{className:s.wrapper,children:t.jsx("table",{ref:I,className:B,...D,children:t.jsx("tbody",{children:q.map((W,A)=>t.jsx("tr",{children:W.cells.map((d,G)=>{const v=d.labelSpan??1,K=d.fullValue?E-v:d.valueSpan??1;return t.jsxs(w.Fragment,{children:[t.jsx("th",{className:s.th,colSpan:v,scope:"row",children:d.label}),t.jsx("td",{className:s.td,colSpan:K,children:d.value})]},G)})},A))})})})});y.displayName="STable";y.__docgenInfo={description:"",methods:[],displayName:"STable",props:{columns:{required:!1,tsType:{name:"Array",elements:[{name:"TableColumn",elements:[{name:"any"}],raw:"TableColumn<any>"}],raw:"TableColumn<any>[]"},description:"columns + data 방식"},data:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},rows:{required:!1,tsType:{name:"Array",elements:[{name:"TableRow"}],raw:"TableRow[]"},description:"rows 방식"},columnsPerRow:{required:!1,tsType:{name:"number"},description:"한 행에 배치할 label+value 쌍 수 (기본 1)",defaultValue:{value:"1",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'fixed' | 'auto'",elements:[{name:"literal",value:"'fixed'"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"'fixed'",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const ae={title:"Components/Table",component:y,tags:["autodocs"],argTypes:{columnsPerRow:{control:"number",description:"한 행에 배치할 label+value 쌍 수"},bordered:{control:"boolean",description:"테두리 표시 여부"},striped:{control:"boolean",description:"홀짝 행 배경색 구분"},layout:{control:"select",options:["fixed","auto"]}}},Q={eventId:112,viewCount:166,eventName:"KB GS Pay동반 신규고 스페셜 버드뱃스 응모이벤트",isPublished:"게시",eventType:"일반",eventTarget:"KB GS Pay동반 미기입 기업 고객",eventPeriod:"2026.05.28 ~ 2026.07.12",announcementDate:"2026.07.20",pushEnabled:"전수",winnerExists:"없음",bannerType:"씨우기기",isActive:"사용",winnerCount:100,participation:"KB GS Pay통장 가입하기"},j=[{key:"eventId",label:"이벤트 ID"},{key:"eventName",label:"이벤트명"},{key:"eventType",label:"이벤트 유형"},{key:"eventTarget",label:"이벤트 대상"},{key:"eventPeriod",label:"이벤트 기간"}],X=[{key:"eventId",label:"이벤트 ID"},{key:"viewCount",label:"조회수"},{key:"eventName",label:"이벤트명",fullValue:!0},{key:"eventType",label:"이벤트 유형"},{key:"isPublished",label:"게시 여부"},{key:"eventTarget",label:"이벤트 대상",fullValue:!0},{key:"eventPeriod",label:"이벤트 기간"},{key:"announcementDate",label:"당첨자 발표일"},{key:"pushEnabled",label:"PUSH 수신동의"},{key:"bannerType",label:"바드 형"}],b=Q,i={args:{columns:j,data:b,bordered:!0,striped:!1,layout:"fixed"}},c={args:{columns:X,data:b,columnsPerRow:2,bordered:!0,layout:"fixed"}},p={args:{columns:j,data:b,bordered:!0,striped:!0}},m={args:{columns:[{key:"eventId",label:"이벤트 ID"},{key:"isPublished",label:"게시 여부",render:e=>t.jsx("span",{style:{color:e==="게시"?"#36b37e":"#ff5630",fontWeight:600},children:e})},{key:"eventName",label:"이벤트명",fullValue:!0},{key:"winnerCount",label:"당첨자 수",render:e=>`${e}명`,fullValue:!0}],data:b,columnsPerRow:2,bordered:!0}};var h,g,k;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    columns: singleColumns,
    data,
    bordered: true,
    striped: false,
    layout: 'fixed'
  }
}`,...(k=(g=i.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var T,_,x;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    columns: twoColumns,
    data,
    columnsPerRow: 2,
    bordered: true,
    layout: 'fixed'
  }
}`,...(x=(_=c.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var C,P,R;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    columns: singleColumns,
    data,
    bordered: true,
    striped: true
  }
}`,...(R=(P=p.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var S,V,N;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'eventId',
      label: '이벤트 ID'
    }, {
      key: 'isPublished',
      label: '게시 여부',
      render: value => <span style={{
        color: value === '게시' ? '#36b37e' : '#ff5630',
        fontWeight: 600
      }}>
            {value as string}
          </span>
    }, {
      key: 'eventName',
      label: '이벤트명',
      fullValue: true
    }, {
      key: 'winnerCount',
      label: '당첨자 수',
      render: v => \`\${v}명\`,
      fullValue: true
    }] satisfies TableColumn<EventDetail>[],
    data,
    columnsPerRow: 2,
    bordered: true
  }
}`,...(N=(V=m.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const ne=["Default","TwoColumnsPerRow","Striped","WithRender"];export{i as Default,p as Striped,c as TwoColumnsPerRow,m as WithRender,ne as __namedExportsOrder,ae as default};
