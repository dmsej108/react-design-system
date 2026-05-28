import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as c}from"./index-pP6CS22B.js";import{B as a}from"./Button-DWSf26AH.js";import{B as p}from"./Badge-DRjiUpTK.js";import{C as f}from"./Card-BtRqHh9H.js";import{I as u}from"./Input-CddHtW2J.js";import{S as v}from"./Select-eYk-0lVv.js";import{F as b}from"./FileInput-CJzP9zw5.js";import{M as Me}from"./Modal-bX49C5qL.js";import{T as Je,u as Ee}from"./Toast-Dv0QIUXn.js";import{T as l}from"./Typography-BABwl0jj.js";import{I as d}from"./Icon-uRheoC7T.js";import{P as H}from"./Pagination-V6ap2jXh.js";import{R as S}from"./Radio-mCAkdJyy.js";import{C as Ne,a as x}from"./Checkbox-DS5f__cI.js";import{C as y}from"./Chip-Bwmxk1Af.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DLHbBEj9.js";const m=({title:i,children:t})=>e.jsxs("section",{style:{marginBottom:40},children:[e.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#767676",borderBottom:"1px solid #ebebeb",paddingBottom:8,marginBottom:16},children:i}),t]}),ha={title:"Showcase/전체 컴포넌트",parameters:{layout:"padded"},decorators:[i=>e.jsx(Je,{position:"topRight",children:e.jsx(i,{})})]};function _e(){const[i,t]=c.useState(""),[s,n]=c.useState(""),[g,o]=c.useState(!1),[j,B]=c.useState("medium"),[T,h]=c.useState([]),[C,k]=c.useState(1),[Y,Ue]=c.useState("card"),[Ye,$e]=c.useState(["sms"]),[K,He]=c.useState(["서울","부산","대구","인천"]),[Ke,qe]=c.useState("전체"),z=Ee();return e.jsxs("div",{style:{maxWidth:900,margin:"0 auto"},children:[e.jsxs("div",{style:{marginBottom:32},children:[e.jsx(l,{variant:"h3",children:"디자인 시스템"}),e.jsx(l,{variant:"body2",color:"muted",children:"@starbanking/design-system 컴포넌트 쇼케이스"})]}),e.jsx(m,{title:"Button",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"Variants"}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"outline",children:"Outline"}),e.jsx(a,{variant:"ghost",children:"Ghost"}),e.jsx(a,{variant:"danger",children:"Danger"}),e.jsx(a,{disabled:!0,children:"Disabled"}),e.jsx(a,{loading:!0,children:"Loading"})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"Sizes"}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{size:"small",children:"Small"}),e.jsx(a,{size:"medium",children:"Medium"}),e.jsx(a,{size:"large",children:"Large"})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"With Icons"}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{leftIcon:e.jsx(d,{name:"send",size:"small"}),children:"이체하기"}),e.jsx(a,{variant:"outline",rightIcon:e.jsx(d,{name:"download",size:"small"}),children:"다운로드"}),e.jsx(a,{variant:"secondary",leftIcon:e.jsx(d,{name:"plus",size:"small"}),children:"추가"})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"Icon Only"}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{variant:"ghost",iconOnly:!0,size:"small",children:e.jsx(d,{name:"search",size:"small"})}),e.jsx(a,{variant:"ghost",iconOnly:!0,size:"medium",children:e.jsx(d,{name:"search",size:"medium"})}),e.jsx(a,{variant:"ghost",iconOnly:!0,size:"large",children:e.jsx(d,{name:"search",size:"large"})}),e.jsx(a,{variant:"outline",iconOnly:!0,size:"small",children:e.jsx(d,{name:"edit",size:"small"})}),e.jsx(a,{variant:"outline",iconOnly:!0,size:"medium",children:e.jsx(d,{name:"edit",size:"medium"})}),e.jsx(a,{variant:"danger",iconOnly:!0,size:"medium",children:e.jsx(d,{name:"trash",size:"medium"})}),e.jsx(a,{variant:"ghost",iconOnly:!0,disabled:!0,children:e.jsx(d,{name:"settings",size:"medium"})})]})]})]})}),e.jsx(m,{title:"Badge",children:e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(p,{variant:"primary",children:"Primary"}),e.jsx(p,{variant:"secondary",children:"Secondary"}),e.jsx(p,{variant:"success",dot:!0,children:"완료"}),e.jsx(p,{variant:"warning",dot:!0,children:"처리중"}),e.jsx(p,{variant:"error",dot:!0,children:"실패"}),e.jsx(p,{variant:"info",children:"정보"}),e.jsx(p,{variant:"neutral",children:"중립"}),e.jsx(p,{variant:"success",size:"large",children:"Large"}),e.jsx(p,{variant:"neutral",size:"small",children:"Small"})]})}),e.jsx(m,{title:"Chip",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"필터 선택 (클릭)"}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["전체","입출금","이체","카드","대출"].map(r=>e.jsx(y,{label:r,variant:Ke===r?"primary":"neutral",onClick:()=>qe(r)},r))})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"태그 (닫기)"}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[K.map(r=>e.jsx(y,{label:r,variant:"primary",onClose:()=>He($=>$.filter(D=>D!==r))},r)),K.length===0&&e.jsx(l,{variant:"caption",color:"muted",children:"모두 삭제됐습니다."})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"Variants"}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["primary","secondary","success","warning","error","info","neutral"].map(r=>e.jsx(y,{label:r,variant:r},r))})]})]})}),e.jsx(m,{title:"Radio",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"결제 수단"}),e.jsx(S,{name:"payment",value:Y,onChange:Ue,options:[{value:"card",label:"카드"},{value:"transfer",label:"계좌이체"},{value:"mobile",label:"간편결제"}]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"비활성"}),e.jsx(S,{name:"payment-disabled",value:"card",disabled:!0,options:[{value:"card",label:"카드"},{value:"transfer",label:"계좌이체"}]})]})]})}),e.jsx(m,{title:"Checkbox",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"알림 수단"}),e.jsx(Ne,{options:[{value:"sms",label:"SMS"},{value:"email",label:"이메일"},{value:"push",label:"앱 푸시"},{value:"kakao",label:"카카오톡",disabled:!0}],value:Ye,onChange:$e})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"상태"}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(x,{label:"미선택",checked:!1,onChange:()=>{}}),e.jsx(x,{label:"선택됨",checked:!0,onChange:()=>{}}),e.jsx(x,{label:"부분선택",checked:!1,indeterminate:!0,onChange:()=>{}}),e.jsx(x,{label:"비활성",disabled:!0,checked:!1,onChange:()=>{}})]})]})]})}),e.jsx(m,{title:"Input",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16},children:[e.jsx(u,{label:"기본 입력",placeholder:"텍스트를 입력하세요"}),e.jsx(u,{label:"검색",placeholder:"검색어 입력",prefix:e.jsx(d,{name:"search",size:"small"}),value:i,onChange:r=>t(r.target.value)}),e.jsx(u,{label:"필수 항목",placeholder:"필수 값",required:!0}),e.jsx(u,{label:"오류 상태",placeholder:"잘못된 값",error:!0,errorText:"올바른 형식으로 입력해주세요."}),e.jsx(u,{label:"도움말",placeholder:"입력",helperText:"8자 이상 입력해주세요."}),e.jsx(u,{label:"비활성화",placeholder:"입력 불가",disabled:!0})]})}),e.jsx(m,{title:"Select",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16},children:[e.jsx(v,{label:"기본 선택",placeholder:"선택하세요",options:[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"}],value:s,onChange:r=>n(r.target.value)}),e.jsx(v,{label:"Small",size:"small",placeholder:"선택",options:[{value:"a",label:"Small A"},{value:"b",label:"Small B"}]}),e.jsx(v,{label:"Large",size:"large",placeholder:"선택",options:[{value:"a",label:"Large A"},{value:"b",label:"Large B"}]}),e.jsx(v,{label:"오류 상태",placeholder:"선택하세요",error:!0,errorText:"항목을 선택해주세요.",options:[{value:"a",label:"옵션 A"}]}),e.jsx(v,{label:"도움말",placeholder:"선택",helperText:"하나를 선택해주세요.",options:[{value:"a",label:"옵션 A"},{value:"b",label:"옵션 B"}]}),e.jsx(v,{label:"비활성화",placeholder:"선택 불가",disabled:!0,options:[{value:"a",label:"옵션 A"}]})]})}),e.jsx(m,{title:"FileInput",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:520},children:[e.jsx(b,{label:"기본 파일 업로드",helperText:"모든 파일 형식 허용",onChange:h}),e.jsx(b,{label:"이미지 전용",accept:".jpg,.jpeg,.png,.webp",maxSize:5*1024*1024,helperText:"JPG, PNG, WEBP · 최대 5MB",onChange:h}),T.length>0&&e.jsxs(l,{variant:"caption",color:"muted",children:["선택된 파일: ",T.map(r=>r.name).join(", ")]}),e.jsx(b,{label:"비활성화",disabled:!0,onChange:()=>{}})]})}),e.jsxs(m,{title:"Modal",children:[e.jsx("div",{style:{display:"flex",gap:8},children:["small","medium","large"].map(r=>e.jsxs(a,{variant:"outline",onClick:()=>{B(r),o(!0)},children:[r.toUpperCase()," 모달 열기"]},r))}),e.jsx(Me,{open:g,onClose:()=>o(!1),title:`${j.toUpperCase()} 모달`,size:j,footer:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{variant:"outline",onClick:()=>o(!1),children:"취소"}),e.jsx(a,{onClick:()=>o(!1),children:"확인"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(l,{variant:"body2",children:"모달 컴포넌트입니다. 사이즈는 small / medium / large 를 지원합니다."}),e.jsx(u,{label:"모달 내부 입력",placeholder:"텍스트 입력"}),e.jsx(v,{label:"모달 내부 선택",placeholder:"선택하세요",options:[{value:"1",label:"옵션 1"},{value:"2",label:"옵션 2"}]})]})})]}),e.jsx(m,{title:"Toast",children:e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",onClick:()=>z.success("성공!",{message:"작업이 성공적으로 완료되었습니다."}),children:"Success Toast"}),e.jsx(a,{variant:"danger",onClick:()=>z.error("오류 발생",{message:"처리 중 문제가 발생했습니다."}),children:"Error Toast"}),e.jsx(a,{variant:"outline",onClick:()=>z.warning("주의",{message:"이 작업은 되돌릴 수 없습니다."}),children:"Warning Toast"}),e.jsx(a,{variant:"ghost",onClick:()=>z.info("안내",{message:"새로운 업데이트가 있습니다."}),children:"Info Toast"})]})}),e.jsx(m,{title:"Card",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:16},children:[e.jsx(f,{variant:"raised",title:"Raised Card",description:"기본 그림자 카드입니다.",children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})}),e.jsx(f,{variant:"flat",title:"Flat Card",description:"테두리만 있는 플랫 카드입니다.",children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})}),e.jsx(f,{variant:"raised",title:"With Footer",description:"푸터가 있는 카드입니다.",footer:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{size:"small",variant:"outline",children:"취소"}),e.jsx(a,{size:"small",children:"확인"})]}),children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})})]})}),e.jsx(m,{title:"Pagination",children:e.jsx(H,{itemCount:100,cntPerPage:10,currentPage:C,onChangedPage:r=>k(r)})}),e.jsx(m,{title:"Typography",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[["h1","h2","h3","h4","h5","h6"].map(r=>e.jsxs(l,{variant:r,children:[r.toUpperCase()," — StarBanking 디자인 시스템"]},r)),e.jsx("div",{style:{height:8}}),e.jsx(l,{variant:"body1",children:"Body1 — 본문 텍스트. StarBanking 디자인 시스템은 뱅킹 서비스에 최적화된 React 컴포넌트 라이브러리입니다."}),e.jsx(l,{variant:"body2",children:"Body2 — 보조 본문 텍스트. 좀 더 작은 본문에 사용됩니다."}),e.jsx(l,{variant:"caption",children:"Caption — 보조 설명 텍스트"}),e.jsx(l,{variant:"overline",children:"Overline — 섹션 레이블"}),e.jsx(l,{variant:"label",children:"Label — 폼 레이블"}),e.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:["primary","secondary","success","warning","error","muted"].map(r=>e.jsx(l,{variant:"label",color:r,children:r},r))})]})}),e.jsx(m,{title:"Color Tokens",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[{label:"KB Brand",colors:[{name:"Yellow Positive",value:"#FFBC00"},{name:"Yellow Negative",value:"#FFCC00"},{name:"Gray",value:"#60584C"},{name:"Dark Gray",value:"#545045"},{name:"Gold",value:"#C5A028"},{name:"Silver",value:"#A8AAAD"}]},{label:"Button / Surface",colors:[{name:"Primary (KB Yellow)",value:"#FFBC00"},{name:"Secondary (Navy)",value:"#253349"},{name:"Danger",value:"#ff3232"}]},{label:"Semantic",colors:[{name:"Success",value:"#36b37e"},{name:"Warning",value:"#ff8b00"},{name:"Error",value:"#ff5630"},{name:"Info",value:"#2563eb"}]},{label:"Text",colors:[{name:"Strong",value:"#222222"},{name:"Base",value:"#444444"},{name:"Muted",value:"#767676"},{name:"Placeholder",value:"#999999"},{name:"Disabled",value:"#ababab"}]},{label:"Border / Surface",colors:[{name:"Border",value:"#d2d2d2"},{name:"Border Light",value:"#ebebeb"},{name:"Surface Hover",value:"#f2f2f2"},{name:"Surface",value:"#ffffff"}]}].map(({label:r,colors:$})=>e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:r}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:$.map(({name:D,value:q})=>e.jsxs("div",{style:{minWidth:100,flex:"0 0 auto"},children:[e.jsx("div",{style:{height:36,borderRadius:4,backgroundColor:q,border:"1px solid rgba(0,0,0,0.08)"}}),e.jsx("div",{style:{fontSize:11,color:"#444",marginTop:4,lineHeight:1.4},children:D}),e.jsx("div",{style:{fontSize:11,color:"#767676",fontFamily:"monospace"},children:q})]},D))})]},r))})})]})}const I={name:"전체 쇼케이스",render:()=>e.jsx(_e,{})},w={name:"Button — 전체",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"Variants"}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"outline",children:"Outline"}),e.jsx(a,{variant:"ghost",children:"Ghost"}),e.jsx(a,{variant:"danger",children:"Danger"}),e.jsx(a,{disabled:!0,children:"Disabled"}),e.jsx(a,{loading:!0,children:"Loading"})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"Sizes"}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{size:"small",children:"Small"}),e.jsx(a,{size:"medium",children:"Medium"}),e.jsx(a,{size:"large",children:"Large"})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"With Icons"}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{leftIcon:e.jsx(d,{name:"send",size:"small"}),children:"이체하기"}),e.jsx(a,{variant:"outline",rightIcon:e.jsx(d,{name:"download",size:"small"}),children:"다운로드"}),e.jsx(a,{variant:"secondary",leftIcon:e.jsx(d,{name:"plus",size:"small"}),children:"추가"})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"Icon Only"}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{variant:"ghost",iconOnly:!0,size:"small",children:e.jsx(d,{name:"search",size:"small"})}),e.jsx(a,{variant:"ghost",iconOnly:!0,size:"medium",children:e.jsx(d,{name:"search",size:"medium"})}),e.jsx(a,{variant:"ghost",iconOnly:!0,size:"large",children:e.jsx(d,{name:"search",size:"large"})}),e.jsx(a,{variant:"outline",iconOnly:!0,size:"small",children:e.jsx(d,{name:"edit",size:"small"})}),e.jsx(a,{variant:"outline",iconOnly:!0,size:"medium",children:e.jsx(d,{name:"edit",size:"medium"})}),e.jsx(a,{variant:"danger",iconOnly:!0,size:"medium",children:e.jsx(d,{name:"trash",size:"medium"})}),e.jsx(a,{variant:"ghost",iconOnly:!0,disabled:!0,children:e.jsx(d,{name:"settings",size:"medium"})})]})]})]})},P={name:"Badge — 전체",render:()=>e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(p,{variant:"primary",children:"Primary"}),e.jsx(p,{variant:"secondary",children:"Secondary"}),e.jsx(p,{variant:"success",dot:!0,children:"완료"}),e.jsx(p,{variant:"warning",dot:!0,children:"처리중"}),e.jsx(p,{variant:"error",dot:!0,children:"실패"}),e.jsx(p,{variant:"info",children:"정보"}),e.jsx(p,{variant:"neutral",children:"중립"}),e.jsx(p,{variant:"success",size:"large",children:"Large"}),e.jsx(p,{variant:"neutral",size:"small",children:"Small"})]})},W={name:"Chip — 전체",render:()=>{function i(){const[t,s]=c.useState("전체"),[n,g]=c.useState(["React","TypeScript","Vite","Storybook"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"Variants"}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["primary","secondary","success","warning","error","info","neutral"].map(o=>e.jsx(y,{label:o,variant:o},o))})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"클릭 (필터)"}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["전체","입출금","이체","카드","대출"].map(o=>e.jsx(y,{label:o,variant:t===o?"primary":"neutral",onClick:()=>s(o)},o))})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"닫기"}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:n.map(o=>e.jsx(y,{label:o,variant:"info",onClose:()=>g(j=>j.filter(B=>B!==o))},o))})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"비활성"}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(y,{label:"비활성",variant:"neutral",disabled:!0}),e.jsx(y,{label:"비활성 + 닫기",variant:"primary",disabled:!0,onClose:()=>{}})]})]})]})}return e.jsx(i,{})}},F={name:"Radio — 전체",render:()=>{function i(){const[t,s]=c.useState("card");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"가로 (기본)"}),e.jsx(S,{name:"r1",value:t,onChange:s,options:[{value:"card",label:"카드"},{value:"transfer",label:"계좌이체"},{value:"mobile",label:"간편결제"}]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"세로"}),e.jsx(S,{name:"r2",direction:"vertical",value:t,onChange:s,options:[{value:"card",label:"카드"},{value:"transfer",label:"계좌이체"},{value:"mobile",label:"간편결제"}]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"크기"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:["small","medium","large"].map(n=>e.jsx(S,{name:`r-${n}`,value:"a",size:n,options:[{value:"a",label:`${n} A`},{value:"b",label:`${n} B`}]},n))})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"비활성"}),e.jsx(S,{name:"r3",value:"card",disabled:!0,options:[{value:"card",label:"카드"},{value:"transfer",label:"계좌이체"}]})]})]})}return e.jsx(i,{})}},A={name:"Checkbox — 전체",render:()=>{function i(){const[t,s]=c.useState(["sms"]),n=["입출금 내역","이체 내역","카드 결제","자동이체"],[g,o]=c.useState([]),j=g.length===n.length,B=g.length>0&&!j,T=(h,C)=>o(k=>C?[...k,h]:k.filter(Y=>Y!==h));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"상태"}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(x,{label:"미선택",checked:!1,onChange:()=>{}}),e.jsx(x,{label:"선택됨",checked:!0,onChange:()=>{}}),e.jsx(x,{label:"부분선택",checked:!1,indeterminate:!0,onChange:()=>{}}),e.jsx(x,{label:"비활성",disabled:!0,checked:!1,onChange:()=>{}})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"전체선택 패턴"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(x,{label:e.jsx("strong",{children:"전체 선택"}),checked:j,indeterminate:B,onChange:h=>o(h?[...n]:[])}),e.jsx("div",{style:{width:"100%",height:1,background:"var(--ds-border-light)"}}),n.map(h=>e.jsx(x,{label:h,checked:g.includes(h),onChange:C=>T(h,C)},h))]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"그룹"}),e.jsx(Ne,{options:[{value:"sms",label:"SMS"},{value:"email",label:"이메일"},{value:"push",label:"앱 푸시"},{value:"kakao",label:"카카오톡",disabled:!0}],value:t,onChange:s})]})]})}return e.jsx(i,{})}},O={name:"Input — 전체",render:()=>{function i(){const[t,s]=c.useState("");return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16},children:[e.jsx(u,{label:"기본 입력",placeholder:"텍스트를 입력하세요"}),e.jsx(u,{label:"검색",placeholder:"검색어 입력",prefix:e.jsx(d,{name:"search",size:"small"}),value:t,onChange:n=>s(n.target.value)}),e.jsx(u,{label:"필수 항목",placeholder:"필수 값",required:!0}),e.jsx(u,{label:"오류 상태",placeholder:"잘못된 값",error:!0,errorText:"올바른 형식으로 입력해주세요."}),e.jsx(u,{label:"도움말",placeholder:"입력",helperText:"8자 이상 입력해주세요."}),e.jsx(u,{label:"비활성화",placeholder:"입력 불가",disabled:!0})]})}return e.jsx(i,{})}},V={name:"Select — 전체",render:()=>{function i(){const[t,s]=c.useState("");return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16},children:[e.jsx(v,{label:"기본 선택",placeholder:"선택하세요",options:[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"}],value:t,onChange:n=>s(n.target.value)}),e.jsx(v,{label:"Small",size:"small",placeholder:"선택",options:[{value:"a",label:"Small A"},{value:"b",label:"Small B"}]}),e.jsx(v,{label:"Large",size:"large",placeholder:"선택",options:[{value:"a",label:"Large A"},{value:"b",label:"Large B"}]}),e.jsx(v,{label:"오류 상태",placeholder:"선택하세요",error:!0,errorText:"항목을 선택해주세요.",options:[{value:"a",label:"옵션 A"}]}),e.jsx(v,{label:"도움말",placeholder:"선택",helperText:"하나를 선택해주세요.",options:[{value:"a",label:"옵션 A"},{value:"b",label:"옵션 B"}]}),e.jsx(v,{label:"비활성화",placeholder:"선택 불가",disabled:!0,options:[{value:"a",label:"옵션 A"}]})]})}return e.jsx(i,{})}},G={name:"FileInput — 전체",render:()=>{function i(){const[t,s]=c.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:520},children:[e.jsx(b,{label:"기본 파일 업로드",helperText:"모든 파일 형식 허용",onChange:s}),e.jsx(b,{label:"이미지 전용",accept:".jpg,.jpeg,.png,.webp",maxSize:5*1024*1024,helperText:"JPG, PNG, WEBP · 최대 5MB",onChange:s}),t.length>0&&e.jsxs(l,{variant:"caption",color:"muted",children:["선택된 파일: ",t.map(n=>n.name).join(", ")]}),e.jsx(b,{label:"비활성화",disabled:!0,onChange:()=>{}})]})}return e.jsx(i,{})}},R={name:"Modal — 전체",render:()=>{function i(){const[t,s]=c.useState(!1),[n,g]=c.useState("medium");return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:8},children:["small","medium","large"].map(o=>e.jsxs(a,{variant:"outline",onClick:()=>{g(o),s(!0)},children:[o.toUpperCase()," 모달 열기"]},o))}),e.jsx(Me,{open:t,onClose:()=>s(!1),title:`${n.toUpperCase()} 모달`,size:n,footer:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{variant:"outline",onClick:()=>s(!1),children:"취소"}),e.jsx(a,{onClick:()=>s(!1),children:"확인"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(l,{variant:"body2",children:"모달 컴포넌트입니다. 사이즈는 small / medium / large 를 지원합니다."}),e.jsx(u,{label:"모달 내부 입력",placeholder:"텍스트 입력"}),e.jsx(v,{label:"모달 내부 선택",placeholder:"선택하세요",options:[{value:"1",label:"옵션 1"},{value:"2",label:"옵션 2"}]})]})})]})}return e.jsx(i,{})}},L={name:"Toast — 전체",render:()=>{function i(){const t=Ee();return e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",onClick:()=>t.success("성공!",{message:"작업이 성공적으로 완료되었습니다."}),children:"Success Toast"}),e.jsx(a,{variant:"danger",onClick:()=>t.error("오류 발생",{message:"처리 중 문제가 발생했습니다."}),children:"Error Toast"}),e.jsx(a,{variant:"outline",onClick:()=>t.warning("주의",{message:"이 작업은 되돌릴 수 없습니다."}),children:"Warning Toast"}),e.jsx(a,{variant:"ghost",onClick:()=>t.info("안내",{message:"새로운 업데이트가 있습니다."}),children:"Info Toast"})]})}return e.jsx(i,{})}},M={name:"Card — 전체",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:16},children:[e.jsx(f,{variant:"raised",title:"Raised Card",description:"기본 그림자 카드입니다.",children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})}),e.jsx(f,{variant:"flat",title:"Flat Card",description:"테두리만 있는 플랫 카드입니다.",children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})}),e.jsx(f,{variant:"raised",title:"With Footer",description:"푸터가 있는 카드입니다.",footer:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{size:"small",variant:"outline",children:"취소"}),e.jsx(a,{size:"small",children:"확인"})]}),children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})})]})},E={name:"Pagination — 전체",render:()=>{function i(){const[t,s]=c.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsxs(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:["100개 · 10개씩 (현재: ",t,"페이지)"]}),e.jsx(H,{itemCount:100,cntPerPage:10,currentPage:t,onChangedPage:n=>s(n)})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"500개 · 10개씩"}),e.jsx(H,{itemCount:500,cntPerPage:10,currentPage:1})]})]})}return e.jsx(i,{})}},N={name:"Typography — 전체",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[["h1","h2","h3","h4","h5","h6"].map(i=>e.jsxs(l,{variant:i,children:[i.toUpperCase()," — StarBanking 디자인 시스템"]},i)),e.jsx("div",{style:{height:8}}),e.jsx(l,{variant:"body1",children:"Body1 — 본문 텍스트. StarBanking 디자인 시스템은 뱅킹 서비스에 최적화된 React 컴포넌트 라이브러리입니다."}),e.jsx(l,{variant:"body2",children:"Body2 — 보조 본문 텍스트. 좀 더 작은 본문에 사용됩니다."}),e.jsx(l,{variant:"caption",children:"Caption — 보조 설명 텍스트"}),e.jsx(l,{variant:"overline",children:"Overline — 섹션 레이블"}),e.jsx(l,{variant:"label",children:"Label — 폼 레이블"}),e.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",marginTop:4},children:["primary","secondary","success","warning","error","muted"].map(i=>e.jsx(l,{variant:"label",color:i,children:i},i))})]})},U={name:"Color Tokens",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[{label:"KB Brand",colors:[{name:"Yellow Positive",value:"#FFBC00"},{name:"Yellow Negative",value:"#FFCC00"},{name:"Gray",value:"#60584C"},{name:"Dark Gray",value:"#545045"},{name:"Gold",value:"#C5A028"},{name:"Silver",value:"#A8AAAD"}]},{label:"Button / Surface",colors:[{name:"Primary (KB Yellow)",value:"#FFBC00"},{name:"Secondary (Navy)",value:"#253349"},{name:"Danger",value:"#ff3232"}]},{label:"Semantic",colors:[{name:"Success",value:"#36b37e"},{name:"Warning",value:"#ff8b00"},{name:"Error",value:"#ff5630"},{name:"Info",value:"#2563eb"}]},{label:"Text",colors:[{name:"Strong",value:"#222222"},{name:"Base",value:"#444444"},{name:"Muted",value:"#767676"},{name:"Placeholder",value:"#999999"},{name:"Disabled",value:"#ababab"}]},{label:"Border / Surface",colors:[{name:"Border",value:"#d2d2d2"},{name:"Border Light",value:"#ebebeb"},{name:"Surface Hover",value:"#f2f2f2"},{name:"Surface",value:"#ffffff"}]}].map(({label:i,colors:t})=>e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:i}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:t.map(({name:s,value:n})=>e.jsxs("div",{style:{minWidth:100,flex:"0 0 auto"},children:[e.jsx("div",{style:{height:36,borderRadius:4,backgroundColor:n,border:"1px solid rgba(0,0,0,0.08)"}}),e.jsx("div",{style:{fontSize:11,color:"#444",marginTop:4,lineHeight:1.4},children:s}),e.jsx("div",{style:{fontSize:11,color:"#767676",fontFamily:"monospace"},children:n})]},s))})]},i))})};var J,_,Q;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: '전체 쇼케이스',
  render: () => <ShowcaseAll />
}`,...(Q=(_=I.parameters)==null?void 0:_.docs)==null?void 0:Q.source}}};var X,Z,ee;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Button — 전체',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }}>
      <div>
        <STypography variant="caption" color="muted" as="div" style={{
        marginBottom: 8
      }}>Variants</STypography>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <SButton variant="primary">Primary</SButton>
          <SButton variant="secondary">Secondary</SButton>
          <SButton variant="outline">Outline</SButton>
          <SButton variant="ghost">Ghost</SButton>
          <SButton variant="danger">Danger</SButton>
          <SButton disabled>Disabled</SButton>
          <SButton loading>Loading</SButton>
        </div>
      </div>
      <div>
        <STypography variant="caption" color="muted" as="div" style={{
        marginBottom: 8
      }}>Sizes</STypography>
        <div style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }}>
          <SButton size="small">Small</SButton>
          <SButton size="medium">Medium</SButton>
          <SButton size="large">Large</SButton>
        </div>
      </div>
      <div>
        <STypography variant="caption" color="muted" as="div" style={{
        marginBottom: 8
      }}>With Icons</STypography>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <SButton leftIcon={<SIcon name="send" size="small" />}>이체하기</SButton>
          <SButton variant="outline" rightIcon={<SIcon name="download" size="small" />}>다운로드</SButton>
          <SButton variant="secondary" leftIcon={<SIcon name="plus" size="small" />}>추가</SButton>
        </div>
      </div>
      <div>
        <STypography variant="caption" color="muted" as="div" style={{
        marginBottom: 8
      }}>Icon Only</STypography>
        <div style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }}>
          <SButton variant="ghost" iconOnly size="small"><SIcon name="search" size="small" /></SButton>
          <SButton variant="ghost" iconOnly size="medium"><SIcon name="search" size="medium" /></SButton>
          <SButton variant="ghost" iconOnly size="large"><SIcon name="search" size="large" /></SButton>
          <SButton variant="outline" iconOnly size="small"><SIcon name="edit" size="small" /></SButton>
          <SButton variant="outline" iconOnly size="medium"><SIcon name="edit" size="medium" /></SButton>
          <SButton variant="danger" iconOnly size="medium"><SIcon name="trash" size="medium" /></SButton>
          <SButton variant="ghost" iconOnly disabled><SIcon name="settings" size="medium" /></SButton>
        </div>
      </div>
    </div>
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,le,re;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Badge — 전체',
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <SBadge variant="primary">Primary</SBadge>
      <SBadge variant="secondary">Secondary</SBadge>
      <SBadge variant="success" dot>완료</SBadge>
      <SBadge variant="warning" dot>처리중</SBadge>
      <SBadge variant="error" dot>실패</SBadge>
      <SBadge variant="info">정보</SBadge>
      <SBadge variant="neutral">중립</SBadge>
      <SBadge variant="success" size="large">Large</SBadge>
      <SBadge variant="neutral" size="small">Small</SBadge>
    </div>
}`,...(re=(le=P.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var ie,te,ne;W.parameters={...W.parameters,docs:{...(ie=W.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Chip — 전체',
  render: () => {
    function ChipDemo() {
      const [active, setActive] = useState('전체');
      const [tags, setTags] = useState(['React', 'TypeScript', 'Vite', 'Storybook']);
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{
            marginBottom: 8
          }}>Variants</STypography>
            <div style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap'
          }}>
              {(['primary', 'secondary', 'success', 'warning', 'error', 'info', 'neutral'] as ChipVariant[]).map(v => <SChip key={v} label={v} variant={v} />)}
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{
            marginBottom: 8
          }}>클릭 (필터)</STypography>
            <div style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap'
          }}>
              {['전체', '입출금', '이체', '카드', '대출'].map(f => <SChip key={f} label={f} variant={active === f ? 'primary' : 'neutral'} onClick={() => setActive(f)} />)}
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{
            marginBottom: 8
          }}>닫기</STypography>
            <div style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap'
          }}>
              {tags.map(t => <SChip key={t} label={t} variant="info" onClose={() => setTags(p => p.filter(x => x !== t))} />)}
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{
            marginBottom: 8
          }}>비활성</STypography>
            <div style={{
            display: 'flex',
            gap: 8
          }}>
              <SChip label="비활성" variant="neutral" disabled />
              <SChip label="비활성 + 닫기" variant="primary" disabled onClose={() => {}} />
            </div>
          </div>
        </div>;
    }
    return <ChipDemo />;
  }
}`,...(ne=(te=W.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,oe,de;F.parameters={...F.parameters,docs:{...(se=F.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Radio — 전체',
  render: () => {
    function RadioDemo() {
      const [val, setVal] = useState('card');
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{
            marginBottom: 8
          }}>가로 (기본)</STypography>
            <SRadioGroup name="r1" value={val} onChange={setVal} options={[{
            value: 'card',
            label: '카드'
          }, {
            value: 'transfer',
            label: '계좌이체'
          }, {
            value: 'mobile',
            label: '간편결제'
          }]} />
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{
            marginBottom: 8
          }}>세로</STypography>
            <SRadioGroup name="r2" direction="vertical" value={val} onChange={setVal} options={[{
            value: 'card',
            label: '카드'
          }, {
            value: 'transfer',
            label: '계좌이체'
          }, {
            value: 'mobile',
            label: '간편결제'
          }]} />
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{
            marginBottom: 8
          }}>크기</STypography>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
              {(['small', 'medium', 'large'] as const).map(size => <SRadioGroup key={size} name={\`r-\${size}\`} value="a" size={size} options={[{
              value: 'a',
              label: \`\${size} A\`
            }, {
              value: 'b',
              label: \`\${size} B\`
            }]} />)}
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{
            marginBottom: 8
          }}>비활성</STypography>
            <SRadioGroup name="r3" value="card" disabled options={[{
            value: 'card',
            label: '카드'
          }, {
            value: 'transfer',
            label: '계좌이체'
          }]} />
          </div>
        </div>;
    }
    return <RadioDemo />;
  }
}`,...(de=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ce,pe,me;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Checkbox — 전체',
  render: () => {
    function CheckboxDemo() {
      const [groupVal, setGroupVal] = useState<string[]>(['sms']);
      const items = ['입출금 내역', '이체 내역', '카드 결제', '자동이체'];
      const [selected, setSelected] = useState<string[]>([]);
      const allChecked = selected.length === items.length;
      const indeterminate = selected.length > 0 && !allChecked;
      const toggle = (item: string, checked: boolean) => setSelected(p => checked ? [...p, item] : p.filter(v => v !== item));
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{
            marginBottom: 8
          }}>상태</STypography>
            <div style={{
            display: 'flex',
            gap: 16
          }}>
              <SCheckbox label="미선택" checked={false} onChange={() => {}} />
              <SCheckbox label="선택됨" checked={true} onChange={() => {}} />
              <SCheckbox label="부분선택" checked={false} indeterminate onChange={() => {}} />
              <SCheckbox label="비활성" disabled checked={false} onChange={() => {}} />
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{
            marginBottom: 8
          }}>전체선택 패턴</STypography>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }}>
              <SCheckbox label={<strong>전체 선택</strong>} checked={allChecked} indeterminate={indeterminate} onChange={c => setSelected(c ? [...items] : [])} />
              <div style={{
              width: '100%',
              height: 1,
              background: 'var(--ds-border-light)'
            }} />
              {items.map(item => <SCheckbox key={item} label={item} checked={selected.includes(item)} onChange={c => toggle(item, c)} />)}
            </div>
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{
            marginBottom: 8
          }}>그룹</STypography>
            <SCheckboxGroup options={[{
            value: 'sms',
            label: 'SMS'
          }, {
            value: 'email',
            label: '이메일'
          }, {
            value: 'push',
            label: '앱 푸시'
          }, {
            value: 'kakao',
            label: '카카오톡',
            disabled: true
          }]} value={groupVal} onChange={setGroupVal} />
          </div>
        </div>;
    }
    return <CheckboxDemo />;
  }
}`,...(me=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ue,ve,he;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Input — 전체',
  render: () => {
    function InputDemo() {
      const [val, setVal] = useState('');
      return <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 16
      }}>
          <SInput label="기본 입력" placeholder="텍스트를 입력하세요" />
          <SInput label="검색" placeholder="검색어 입력" prefix={<SIcon name="search" size="small" />} value={val} onChange={e => setVal(e.target.value)} />
          <SInput label="필수 항목" placeholder="필수 값" required />
          <SInput label="오류 상태" placeholder="잘못된 값" error errorText="올바른 형식으로 입력해주세요." />
          <SInput label="도움말" placeholder="입력" helperText="8자 이상 입력해주세요." />
          <SInput label="비활성화" placeholder="입력 불가" disabled />
        </div>;
    }
    return <InputDemo />;
  }
}`,...(he=(ve=O.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var xe,ge,ye;V.parameters={...V.parameters,docs:{...(xe=V.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Select — 전체',
  render: () => {
    function SelectDemo() {
      const [val, setVal] = useState('');
      return <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 16
      }}>
          <SSelect label="기본 선택" placeholder="선택하세요" options={[{
          value: 'option1',
          label: '옵션 1'
        }, {
          value: 'option2',
          label: '옵션 2'
        }, {
          value: 'option3',
          label: '옵션 3'
        }]} value={val} onChange={e => setVal(e.target.value)} />
          <SSelect label="Small" size="small" placeholder="선택" options={[{
          value: 'a',
          label: 'Small A'
        }, {
          value: 'b',
          label: 'Small B'
        }]} />
          <SSelect label="Large" size="large" placeholder="선택" options={[{
          value: 'a',
          label: 'Large A'
        }, {
          value: 'b',
          label: 'Large B'
        }]} />
          <SSelect label="오류 상태" placeholder="선택하세요" error errorText="항목을 선택해주세요." options={[{
          value: 'a',
          label: '옵션 A'
        }]} />
          <SSelect label="도움말" placeholder="선택" helperText="하나를 선택해주세요." options={[{
          value: 'a',
          label: '옵션 A'
        }, {
          value: 'b',
          label: '옵션 B'
        }]} />
          <SSelect label="비활성화" placeholder="선택 불가" disabled options={[{
          value: 'a',
          label: '옵션 A'
        }]} />
        </div>;
    }
    return <SelectDemo />;
  }
}`,...(ye=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var je,Se,fe;G.parameters={...G.parameters,docs:{...(je=G.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'FileInput — 전체',
  render: () => {
    function FileInputDemo() {
      const [files, setFiles] = useState<File[]>([]);
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 520
      }}>
          <SFileInput label="기본 파일 업로드" helperText="모든 파일 형식 허용" onChange={setFiles} />
          <SFileInput label="이미지 전용" accept=".jpg,.jpeg,.png,.webp" maxSize={5 * 1024 * 1024} helperText="JPG, PNG, WEBP · 최대 5MB" onChange={setFiles} />
          {files.length > 0 && <STypography variant="caption" color="muted">선택된 파일: {files.map(f => f.name).join(', ')}</STypography>}
          <SFileInput label="비활성화" disabled onChange={() => {}} />
        </div>;
    }
    return <FileInputDemo />;
  }
}`,...(fe=(Se=G.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var be,Be,Ce;R.parameters={...R.parameters,docs:{...(be=R.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Modal — 전체',
  render: () => {
    function ModalDemo() {
      const [open, setOpen] = useState(false);
      const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
      return <>
          <div style={{
          display: 'flex',
          gap: 8
        }}>
            {(['small', 'medium', 'large'] as const).map(s => <SButton key={s} variant="outline" onClick={() => {
            setSize(s);
            setOpen(true);
          }}>
                {s.toUpperCase()} 모달 열기
              </SButton>)}
          </div>
          <SModal open={open} onClose={() => setOpen(false)} title={\`\${size.toUpperCase()} 모달\`} size={size} footer={<div style={{
          display: 'flex',
          gap: 8
        }}>
                <SButton variant="outline" onClick={() => setOpen(false)}>취소</SButton>
                <SButton onClick={() => setOpen(false)}>확인</SButton>
              </div>}>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
              <STypography variant="body2">모달 컴포넌트입니다. 사이즈는 small / medium / large 를 지원합니다.</STypography>
              <SInput label="모달 내부 입력" placeholder="텍스트 입력" />
              <SSelect label="모달 내부 선택" placeholder="선택하세요" options={[{
              value: '1',
              label: '옵션 1'
            }, {
              value: '2',
              label: '옵션 2'
            }]} />
            </div>
          </SModal>
        </>;
    }
    return <ModalDemo />;
  }
}`,...(Ce=(Be=R.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var Te,ke,ze;L.parameters={...L.parameters,docs:{...(Te=L.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'Toast — 전체',
  render: () => {
    function ToastDemo() {
      const toast = useToast();
      return <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <SButton variant="primary" onClick={() => toast.success('성공!', {
          message: '작업이 성공적으로 완료되었습니다.'
        })}>Success Toast</SButton>
          <SButton variant="danger" onClick={() => toast.error('오류 발생', {
          message: '처리 중 문제가 발생했습니다.'
        })}>Error Toast</SButton>
          <SButton variant="outline" onClick={() => toast.warning('주의', {
          message: '이 작업은 되돌릴 수 없습니다.'
        })}>Warning Toast</SButton>
          <SButton variant="ghost" onClick={() => toast.info('안내', {
          message: '새로운 업데이트가 있습니다.'
        })}>Info Toast</SButton>
        </div>;
    }
    return <ToastDemo />;
  }
}`,...(ze=(ke=L.parameters)==null?void 0:ke.docs)==null?void 0:ze.source}}};var De,Ie,we;M.parameters={...M.parameters,docs:{...(De=M.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'Card — 전체',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: 16
  }}>
      <SCard variant="raised" title="Raised Card" description="기본 그림자 카드입니다.">
        <STypography variant="body2">카드 본문 내용이 여기에 들어갑니다.</STypography>
      </SCard>
      <SCard variant="flat" title="Flat Card" description="테두리만 있는 플랫 카드입니다.">
        <STypography variant="body2">카드 본문 내용이 여기에 들어갑니다.</STypography>
      </SCard>
      <SCard variant="raised" title="With Footer" description="푸터가 있는 카드입니다." footer={<div style={{
      display: 'flex',
      gap: 8
    }}>
            <SButton size="small" variant="outline">취소</SButton>
            <SButton size="small">확인</SButton>
          </div>}>
        <STypography variant="body2">카드 본문 내용이 여기에 들어갑니다.</STypography>
      </SCard>
    </div>
}`,...(we=(Ie=M.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var Pe,We,Fe;E.parameters={...E.parameters,docs:{...(Pe=E.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'Pagination — 전체',
  render: () => {
    function PaginationDemo() {
      const [page, setPage] = useState(1);
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{
            marginBottom: 8
          }}>100개 · 10개씩 (현재: {page}페이지)</STypography>
            <SPagination itemCount={100} cntPerPage={10} currentPage={page} onChangedPage={p => setPage(p)} />
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{
            marginBottom: 8
          }}>500개 · 10개씩</STypography>
            <SPagination itemCount={500} cntPerPage={10} currentPage={1} />
          </div>
        </div>;
    }
    return <PaginationDemo />;
  }
}`,...(Fe=(We=E.parameters)==null?void 0:We.docs)==null?void 0:Fe.source}}};var Ae,Oe,Ve;N.parameters={...N.parameters,docs:{...(Ae=N.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: 'Typography — 전체',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).map(v => <STypography key={v} variant={v}>{v.toUpperCase()} — StarBanking 디자인 시스템</STypography>)}
      <div style={{
      height: 8
    }} />
      <STypography variant="body1">Body1 — 본문 텍스트. StarBanking 디자인 시스템은 뱅킹 서비스에 최적화된 React 컴포넌트 라이브러리입니다.</STypography>
      <STypography variant="body2">Body2 — 보조 본문 텍스트. 좀 더 작은 본문에 사용됩니다.</STypography>
      <STypography variant="caption">Caption — 보조 설명 텍스트</STypography>
      <STypography variant="overline">Overline — 섹션 레이블</STypography>
      <STypography variant="label">Label — 폼 레이블</STypography>
      <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 4
    }}>
        {(['primary', 'secondary', 'success', 'warning', 'error', 'muted'] as const).map(c => <STypography key={c} variant="label" color={c}>{c}</STypography>)}
      </div>
    </div>
}`,...(Ve=(Oe=N.parameters)==null?void 0:Oe.docs)==null?void 0:Ve.source}}};var Ge,Re,Le;U.parameters={...U.parameters,docs:{...(Ge=U.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'Color Tokens',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {[{
      label: 'KB Brand',
      colors: [{
        name: 'Yellow Positive',
        value: '#FFBC00'
      }, {
        name: 'Yellow Negative',
        value: '#FFCC00'
      }, {
        name: 'Gray',
        value: '#60584C'
      }, {
        name: 'Dark Gray',
        value: '#545045'
      }, {
        name: 'Gold',
        value: '#C5A028'
      }, {
        name: 'Silver',
        value: '#A8AAAD'
      }]
    }, {
      label: 'Button / Surface',
      colors: [{
        name: 'Primary (KB Yellow)',
        value: '#FFBC00'
      }, {
        name: 'Secondary (Navy)',
        value: '#253349'
      }, {
        name: 'Danger',
        value: '#ff3232'
      }]
    }, {
      label: 'Semantic',
      colors: [{
        name: 'Success',
        value: '#36b37e'
      }, {
        name: 'Warning',
        value: '#ff8b00'
      }, {
        name: 'Error',
        value: '#ff5630'
      }, {
        name: 'Info',
        value: '#2563eb'
      }]
    }, {
      label: 'Text',
      colors: [{
        name: 'Strong',
        value: '#222222'
      }, {
        name: 'Base',
        value: '#444444'
      }, {
        name: 'Muted',
        value: '#767676'
      }, {
        name: 'Placeholder',
        value: '#999999'
      }, {
        name: 'Disabled',
        value: '#ababab'
      }]
    }, {
      label: 'Border / Surface',
      colors: [{
        name: 'Border',
        value: '#d2d2d2'
      }, {
        name: 'Border Light',
        value: '#ebebeb'
      }, {
        name: 'Surface Hover',
        value: '#f2f2f2'
      }, {
        name: 'Surface',
        value: '#ffffff'
      }]
    }].map(({
      label,
      colors
    }) => <div key={label}>
          <STypography variant="caption" color="muted" as="div" style={{
        marginBottom: 8
      }}>{label}</STypography>
          <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
            {colors.map(({
          name,
          value
        }) => <div key={name} style={{
          minWidth: 100,
          flex: '0 0 auto'
        }}>
                <div style={{
            height: 36,
            borderRadius: 4,
            backgroundColor: value,
            border: '1px solid rgba(0,0,0,0.08)'
          }} />
                <div style={{
            fontSize: 11,
            color: '#444',
            marginTop: 4,
            lineHeight: 1.4
          }}>{name}</div>
                <div style={{
            fontSize: 11,
            color: '#767676',
            fontFamily: 'monospace'
          }}>{value}</div>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(Le=(Re=U.parameters)==null?void 0:Re.docs)==null?void 0:Le.source}}};const xa=["All","Buttons","Badges","Chips","Radios","Checkboxes","Inputs","Selects","FileInputs","Modals","Toasts","Cards","Paginations","Typographies","ColorTokens"];export{I as All,P as Badges,w as Buttons,M as Cards,A as Checkboxes,W as Chips,U as ColorTokens,G as FileInputs,O as Inputs,R as Modals,E as Paginations,F as Radios,V as Selects,L as Toasts,N as Typographies,xa as __namedExportsOrder,ha as default};
