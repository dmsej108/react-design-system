import{j as v}from"./jsx-runtime-Z5uAzocK.js";import{r as I}from"./index-pP6CS22B.js";import{P as f}from"./Pagination-V6ap2jXh.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-DWSf26AH.js";import"./Icon-uRheoC7T.js";const T={title:"Components/Pagination",component:f,tags:["autodocs"],argTypes:{itemCount:{control:"number",description:"전체 아이템 수"},cntPerPage:{control:"number",description:"페이지당 아이템 수"},currentPage:{control:"number",description:"현재 페이지"},onChangedPage:{action:"onChangedPage",description:"페이지 변경 콜백"}},args:{itemCount:100,cntPerPage:10,currentPage:1}},e={},r={render:h=>{const[b,j]=I.useState(1);return v.jsx(f,{...h,currentPage:b,onChangedPage:E=>j(E)})}},a={args:{itemCount:5,cntPerPage:10,currentPage:1}},t={args:{itemCount:500,cntPerPage:10,currentPage:25}},n={args:{itemCount:100,cntPerPage:10,currentPage:10}};var o,s,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var g,i,m;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(1);
    return <SPagination {...args} currentPage={page} onChangedPage={pageNo => setPage(pageNo)} />;
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,P,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    itemCount: 5,
    cntPerPage: 10,
    currentPage: 1
  }
}`,...(p=(P=a.parameters)==null?void 0:P.docs)==null?void 0:p.source}}};var d,l,C;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    itemCount: 500,
    cntPerPage: 10,
    currentPage: 25
  }
}`,...(C=(l=t.parameters)==null?void 0:l.docs)==null?void 0:C.source}}};var S,x,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    itemCount: 100,
    cntPerPage: 10,
    currentPage: 10
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const k=["Playground","Interactive","SinglePage","ManyPages","LastPage"];export{r as Interactive,n as LastPage,t as ManyPages,e as Playground,a as SinglePage,k as __namedExportsOrder,T as default};
