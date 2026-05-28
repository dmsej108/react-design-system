import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as h}from"./index-pP6CS22B.js";import{a as t,C as P}from"./Checkbox-DS5f__cI.js";import"./_commonjsHelpers-Cpj98o6Y.js";const I={title:"Components/Checkbox",component:t,tags:["autodocs"],argTypes:{size:{control:"radio",options:["small","medium","large"]},disabled:{control:"boolean"},indeterminate:{control:"boolean"},label:{control:"text"}},args:{label:"체크박스",size:"medium",disabled:!1,indeterminate:!1}},c={render:o=>{function n(){const[l,a]=h.useState(!1);return e.jsx(t,{...o,checked:l,onChange:a})}return e.jsx(n,{})}},i={name:"크기",render:()=>{function o(){const[n,l]=h.useState({small:!1,medium:!0,large:!1});return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["small","medium","large"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsx("span",{style:{fontSize:11,color:"var(--ds-text-muted)",textTransform:"uppercase",letterSpacing:"0.06em"},children:a}),e.jsx(t,{size:a,label:`${a} 체크박스`,checked:n[a],onChange:r=>l(g=>({...g,[a]:r}))})]},a))})}return e.jsx(o,{})}},d={name:"상태",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(t,{label:"기본 (unchecked)",checked:!1,onChange:()=>{}}),e.jsx(t,{label:"선택됨 (checked)",checked:!0,onChange:()=>{}}),e.jsx(t,{label:"부분 선택 (indeterminate)",checked:!1,indeterminate:!0,onChange:()=>{}}),e.jsx(t,{label:"비활성 (disabled)",disabled:!0,checked:!1,onChange:()=>{}}),e.jsx(t,{label:"비활성 선택됨",disabled:!0,checked:!0,onChange:()=>{}})]})},m={name:"전체선택 패턴",render:()=>{function o(){const n=["입출금 내역","이체 내역","카드 결제","자동이체"],[l,a]=h.useState([]),r=l.length===n.length,g=l.length>0&&!r,_=s=>a(s?[...n]:[]),$=(s,x)=>a(b=>x?[...b,s]:b.filter(O=>O!==s));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(t,{label:e.jsx("strong",{children:"전체 선택"}),checked:r,indeterminate:g,onChange:_}),e.jsx("div",{style:{width:"100%",height:1,background:"var(--ds-border-light)",margin:"4px 0"}}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,paddingLeft:4},children:n.map(s=>e.jsx(t,{label:s,checked:l.includes(s),onChange:x=>$(s,x)},s))}),l.length>0&&e.jsxs("p",{style:{margin:"8px 0 0",fontSize:12,color:"var(--ds-text-muted)"},children:["선택: ",l.join(", ")]})]})}return e.jsx(o,{})}},u={name:"CheckboxGroup",render:()=>{function o(){const[n,l]=h.useState(["sms"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(P,{options:[{value:"sms",label:"SMS"},{value:"email",label:"이메일"},{value:"push",label:"앱 푸시"},{value:"kakao",label:"카카오톡",disabled:!0}],value:n,onChange:l}),e.jsxs("p",{style:{margin:0,fontSize:12,color:"var(--ds-text-muted)"},children:["선택: ",n.length>0?n.join(", "):"없음"]})]})}return e.jsx(o,{})}},p={name:"전체 비활성",render:()=>e.jsx(P,{disabled:!0,value:["option1"],options:[{value:"option1",label:"선택 불가 A (선택됨)"},{value:"option2",label:"선택 불가 B"},{value:"option3",label:"선택 불가 C"}]})};var f,k,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    function Demo() {
      const [checked, setChecked] = useState(false);
      return <SCheckbox {...args} checked={checked} onChange={setChecked} />;
    }
    return <Demo />;
  }
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var C,S,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '크기',
  render: () => {
    function Demo() {
      const [vals, setVals] = useState({
        small: false,
        medium: true,
        large: false
      });
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
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
              <SCheckbox size={size} label={\`\${size} 체크박스\`} checked={vals[size]} onChange={c => setVals(p => ({
            ...p,
            [size]: c
          }))} />
            </div>)}
        </div>;
    }
    return <Demo />;
  }
}`,...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var j,D,z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '상태',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <SCheckbox label="기본 (unchecked)" checked={false} onChange={() => {}} />
      <SCheckbox label="선택됨 (checked)" checked={true} onChange={() => {}} />
      <SCheckbox label="부분 선택 (indeterminate)" checked={false} indeterminate onChange={() => {}} />
      <SCheckbox label="비활성 (disabled)" disabled checked={false} onChange={() => {}} />
      <SCheckbox label="비활성 선택됨" disabled checked={true} onChange={() => {}} />
    </div>
}`,...(z=(D=d.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var A,G,V;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: '전체선택 패턴',
  render: () => {
    function Demo() {
      const items = ['입출금 내역', '이체 내역', '카드 결제', '자동이체'];
      const [selected, setSelected] = useState<string[]>([]);
      const allChecked = selected.length === items.length;
      const indeterminate = selected.length > 0 && !allChecked;
      const toggleAll = (checked: boolean) => setSelected(checked ? [...items] : []);
      const toggle = (item: string, checked: boolean) => setSelected(prev => checked ? [...prev, item] : prev.filter(v => v !== item));
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          <SCheckbox label={<strong>전체 선택</strong>} checked={allChecked} indeterminate={indeterminate} onChange={toggleAll} />
          <div style={{
          width: '100%',
          height: 1,
          background: 'var(--ds-border-light)',
          margin: '4px 0'
        }} />
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          paddingLeft: 4
        }}>
            {items.map(item => <SCheckbox key={item} label={item} checked={selected.includes(item)} onChange={c => toggle(item, c)} />)}
          </div>
          {selected.length > 0 && <p style={{
          margin: '8px 0 0',
          fontSize: 12,
          color: 'var(--ds-text-muted)'
        }}>
              선택: {selected.join(', ')}
            </p>}
        </div>;
    }
    return <Demo />;
  }
}`,...(V=(G=m.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var E,T,w;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'CheckboxGroup',
  render: () => {
    function Demo() {
      const [val, setVal] = useState<string[]>(['sms']);
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
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
        }]} value={val} onChange={setVal} />
          <p style={{
          margin: 0,
          fontSize: 12,
          color: 'var(--ds-text-muted)'
        }}>
            선택: {val.length > 0 ? val.join(', ') : '없음'}
          </p>
        </div>;
    }
    return <Demo />;
  }
}`,...(w=(T=u.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var B,L,M;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '전체 비활성',
  render: () => <SCheckboxGroup disabled value={['option1']} options={[{
    value: 'option1',
    label: '선택 불가 A (선택됨)'
  }, {
    value: 'option2',
    label: '선택 불가 B'
  }, {
    value: 'option3',
    label: '선택 불가 C'
  }]} />
}`,...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const J=["Playground","Sizes","States","SelectAll","Group","Disabled"];export{p as Disabled,u as Group,c as Playground,m as SelectAll,i as Sizes,d as States,J as __namedExportsOrder,I as default};
