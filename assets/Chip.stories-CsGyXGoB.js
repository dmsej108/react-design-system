import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as x}from"./index-pP6CS22B.js";import{C as n}from"./Chip-Bwmxk1Af.js";import"./_commonjsHelpers-Cpj98o6Y.js";const G={title:"Components/Chip",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","success","warning","error","info","neutral"]},size:{control:"radio",options:["small","medium","large"]},disabled:{control:"boolean"},label:{control:"text"}},args:{label:"칩",variant:"neutral",size:"medium",disabled:!1}},d={},p={name:"변형",render:()=>e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:["primary","secondary","success","warning","error","info","neutral"].map(i=>e.jsx(n,{label:i,variant:i},i))})},c={name:"크기",render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(n,{label:"Small",size:"small",variant:"primary"}),e.jsx(n,{label:"Medium",size:"medium",variant:"primary"}),e.jsx(n,{label:"Large",size:"large",variant:"primary"})]})},m={name:"닫기 버튼",render:()=>{function i(){const t=[{id:1,label:"서울",variant:"primary"},{id:2,label:"부산",variant:"primary"},{id:3,label:"대구",variant:"primary"},{id:4,label:"인천",variant:"primary"},{id:5,label:"광주",variant:"primary"}],[l,s]=x.useState(t);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[l.map(r=>e.jsx(n,{label:r.label,variant:r.variant,onClose:()=>s(a=>a.filter(o=>o.id!==r.id))},r.id)),l.length===0&&e.jsx("span",{style:{fontSize:13,color:"var(--ds-text-muted)"},children:"모두 삭제됐습니다."})]}),l.length<t.length&&e.jsx("button",{style:{alignSelf:"flex-start",fontSize:12,color:"var(--ds-text-muted)",background:"none",border:"none",cursor:"pointer",padding:0},onClick:()=>s(t),children:"초기화"})]})}return e.jsx(i,{})}},u={name:"클릭 가능",render:()=>{function i(){const t=["전체","입출금","이체","카드","대출"],[l,s]=x.useState("전체");return e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:t.map(r=>e.jsx(n,{label:r,variant:l===r?"primary":"neutral",onClick:()=>s(r)},r))})}return e.jsx(i,{})}},v={name:"클릭 + 닫기",render:()=>{function i(){const t=["React","TypeScript","Vite","Storybook","CSS Modules"],[l,s]=x.useState([]),r=a=>s(o=>o.includes(a)?o.filter(_=>_!==a):[...o,a]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",fontSize:12,color:"var(--ds-text-muted)"},children:"태그 선택"}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:t.map(a=>e.jsx(n,{label:a,variant:l.includes(a)?"info":"neutral",onClick:()=>r(a)},a))})]}),l.length>0&&e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",fontSize:12,color:"var(--ds-text-muted)"},children:"선택됨"}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:l.map(a=>e.jsx(n,{label:a,variant:"info",onClose:()=>r(a)},a))})]})]})}return e.jsx(i,{})}},y={name:"비활성",render:()=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(n,{label:"비활성",variant:"neutral",disabled:!0}),e.jsx(n,{label:"비활성 + 닫기",variant:"primary",disabled:!0,onClose:()=>{}}),e.jsx(n,{label:"비활성 + 클릭",variant:"info",disabled:!0,onClick:()=>{}})]})};var g,f,b;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(b=(f=d.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,S,C;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '변형',
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      {(['primary', 'secondary', 'success', 'warning', 'error', 'info', 'neutral'] as ChipVariant[]).map(v => <SChip key={v} label={v} variant={v} />)}
    </div>
}`,...(C=(S=p.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var j,k,z;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>
      <SChip label="Small" size="small" variant="primary" />
      <SChip label="Medium" size="medium" variant="primary" />
      <SChip label="Large" size="large" variant="primary" />
    </div>
}`,...(z=(k=c.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var D,w,W;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '닫기 버튼',
  render: () => {
    function Demo() {
      const initial: {
        id: number;
        label: string;
        variant: ChipVariant;
      }[] = [{
        id: 1,
        label: '서울',
        variant: 'primary'
      }, {
        id: 2,
        label: '부산',
        variant: 'primary'
      }, {
        id: 3,
        label: '대구',
        variant: 'primary'
      }, {
        id: 4,
        label: '인천',
        variant: 'primary'
      }, {
        id: 5,
        label: '광주',
        variant: 'primary'
      }];
      const [chips, setChips] = useState(initial);
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <div style={{
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap'
        }}>
            {chips.map(chip => <SChip key={chip.id} label={chip.label} variant={chip.variant} onClose={() => setChips(prev => prev.filter(c => c.id !== chip.id))} />)}
            {chips.length === 0 && <span style={{
            fontSize: 13,
            color: 'var(--ds-text-muted)'
          }}>모두 삭제됐습니다.</span>}
          </div>
          {chips.length < initial.length && <button style={{
          alignSelf: 'flex-start',
          fontSize: 12,
          color: 'var(--ds-text-muted)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0
        }} onClick={() => setChips(initial)}>
              초기화
            </button>}
        </div>;
    }
    return <Demo />;
  }
}`,...(W=(w=m.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var V,A,M;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: '클릭 가능',
  render: () => {
    function Demo() {
      const filters = ['전체', '입출금', '이체', '카드', '대출'];
      const [active, setActive] = useState('전체');
      return <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          {filters.map(f => <SChip key={f} label={f} variant={active === f ? 'primary' : 'neutral'} onClick={() => setActive(f)} />)}
        </div>;
    }
    return <Demo />;
  }
}`,...(M=(A=u.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var E,R,T;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '클릭 + 닫기',
  render: () => {
    function Demo() {
      const all = ['React', 'TypeScript', 'Vite', 'Storybook', 'CSS Modules'];
      const [selected, setSelected] = useState<string[]>([]);
      const toggle = (tag: string) => setSelected(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          <div>
            <p style={{
            margin: '0 0 8px',
            fontSize: 12,
            color: 'var(--ds-text-muted)'
          }}>태그 선택</p>
            <div style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap'
          }}>
              {all.map(tag => <SChip key={tag} label={tag} variant={selected.includes(tag) ? 'info' : 'neutral'} onClick={() => toggle(tag)} />)}
            </div>
          </div>
          {selected.length > 0 && <div>
              <p style={{
            margin: '0 0 8px',
            fontSize: 12,
            color: 'var(--ds-text-muted)'
          }}>선택됨</p>
              <div style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap'
          }}>
                {selected.map(tag => <SChip key={tag} label={tag} variant="info" onClose={() => toggle(tag)} />)}
              </div>
            </div>}
        </div>;
    }
    return <Demo />;
  }
}`,...(T=(R=v.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var I,L,P;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '비활성',
  render: () => <div style={{
    display: 'flex',
    gap: 8
  }}>
      <SChip label="비활성" variant="neutral" disabled />
      <SChip label="비활성 + 닫기" variant="primary" disabled onClose={() => {}} />
      <SChip label="비활성 + 클릭" variant="info" disabled onClick={() => {}} />
    </div>
}`,...(P=(L=y.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const H=["Playground","Variants","Sizes","Closeable","Clickable","ClickableAndCloseable","Disabled"];export{u as Clickable,v as ClickableAndCloseable,m as Closeable,y as Disabled,d as Playground,c as Sizes,p as Variants,H as __namedExportsOrder,G as default};
