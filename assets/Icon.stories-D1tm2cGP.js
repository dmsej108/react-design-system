import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as E}from"./index-pP6CS22B.js";import{I as n}from"./Icon-uRheoC7T.js";import"./_commonjsHelpers-Cpj98o6Y.js";const U=["arrowUp","arrowDown","arrowLeft","arrowRight","chevronUp","chevronDown","chevronLeft","chevronRight","chevronLeftDouble","chevronRightDouble","search","send","plus","minus","close","check","download","upload","edit","trash","copy","user","users","settings","home","menu","bell","eye","eyeOff","lock","unlock","info","warning","error","success","calendar","clock","filter","sort","refresh","externalLink","link","attach","image","creditCard","transfer","wallet","monitor","laptop","server","database","cpu","cloud","cloudUpload","cloudDownload","wifi","globe","terminal","code","gitBranch","layers","package","bug","activity","shield","shieldCheck","rocket"],O=[{label:"Arrow",icons:["arrowUp","arrowDown","arrowLeft","arrowRight"]},{label:"Chevron",icons:["chevronUp","chevronDown","chevronLeft","chevronRight","chevronLeftDouble","chevronRightDouble"]},{label:"Actions",icons:["search","send","plus","minus","close","check","download","upload","edit","trash","copy"]},{label:"People",icons:["user","users"]},{label:"System",icons:["settings","home","menu","bell","eye","eyeOff","lock","unlock"]},{label:"Status",icons:["info","warning","error","success"]},{label:"Utility",icons:["calendar","clock","filter","sort","refresh","externalLink","link","attach","image"]},{label:"Banking",icons:["creditCard","transfer","wallet"]},{label:"Tech",icons:["monitor","laptop","server","database","cpu"]},{label:"Cloud",icons:["cloud","cloudUpload","cloudDownload","wifi","globe"]},{label:"Dev Tools",icons:["terminal","code","gitBranch","layers","package","bug","activity"]},{label:"Security",icons:["shield","shieldCheck"]},{label:"Deploy",icons:["rocket"]}],_={title:"Components/Icon",component:n,tags:["autodocs"],argTypes:{name:{control:"select",options:U},size:{control:"radio",options:["xs","small","medium","large","xl"]},color:{control:"color"}},args:{name:"search",size:"medium"}},i={},t={name:"전체 아이콘",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:O.map(({label:l,icons:a})=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#767676",marginBottom:12},children:l}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:a.map(o=>e.jsxs("div",{title:o,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,padding:"12px 10px",borderRadius:6,border:"1px solid #ebebeb",minWidth:72,cursor:"default",transition:"background 0.15s"},onMouseEnter:s=>{s.currentTarget.style.background="#f7f7f7"},onMouseLeave:s=>{s.currentTarget.style.background=""},children:[e.jsx(n,{name:o,size:"large"}),e.jsx("span",{style:{fontSize:10,color:"#767676",textAlign:"center",lineHeight:1.3},children:o})]},o))})]},l))})},c={name:"크기",render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-end",flexWrap:"wrap"},children:[["xs","small","medium","large","xl"].map(l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(n,{name:"send",size:l}),e.jsx("span",{style:{fontSize:11,color:"#767676"},children:l})]},l)),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(n,{name:"send",size:32}),e.jsx("span",{style:{fontSize:11,color:"#767676"},children:"32px"})]})]})},d={name:"색상",render:()=>e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"},children:[{label:"default",color:void 0},{label:"primary",color:"#287eff"},{label:"success",color:"#00b074"},{label:"warning",color:"#f59e0b"},{label:"error",color:"#ff3232"},{label:"muted",color:"#767676"},{label:"brand",color:"#253349"}].map(({label:l,color:a})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(n,{name:"bell",size:"xl",color:a}),e.jsx("span",{style:{fontSize:11,color:"#767676"},children:l})]},l))})},p={name:"상태 아이콘",render:()=>e.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[{name:"success",color:"#00b074",label:"성공"},{name:"error",color:"#ff3232",label:"오류"},{name:"warning",color:"#f59e0b",label:"경고"},{name:"info",color:"#287eff",label:"정보"}].map(({name:l,color:a,label:o})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",borderRadius:6,border:"1px solid #ebebeb"},children:[e.jsx(n,{name:l,size:"medium",color:a}),e.jsx("span",{style:{fontSize:13,color:"#444"},children:o})]},l))})},m={name:"뱅킹 아이콘",render:()=>e.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[{name:"creditCard",label:"카드"},{name:"transfer",label:"이체"},{name:"wallet",label:"지갑"},{name:"send",label:"송금"},{name:"download",label:"입금"},{name:"lock",label:"보안"},{name:"bell",label:"알림"},{name:"calendar",label:"일정"}].map(({name:l,label:a})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8,padding:"16px 12px",borderRadius:8,border:"1px solid #ebebeb",minWidth:72},children:[e.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"#f0f6ff",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(n,{name:l,size:"large",color:"#287eff"})}),e.jsx("span",{style:{fontSize:11,color:"#444"},children:a})]},l))})},f={name:"아이콘 검색",render:()=>{function l(){const[a,o]=E.useState(""),s=U.filter(r=>r.toLowerCase().includes(a.toLowerCase()));return e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:16},children:e.jsx("input",{value:a,onChange:r=>o(r.target.value),placeholder:"아이콘 이름 검색...",style:{width:"100%",maxWidth:320,padding:"8px 12px",fontSize:14,border:"1px solid #d2d2d2",borderRadius:6,outline:"none",boxSizing:"border-box"}})}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[s.map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,padding:"10px 8px",borderRadius:6,border:"1px solid #ebebeb",minWidth:68,cursor:"pointer"},onClick:()=>{var x;return(x=navigator.clipboard)==null?void 0:x.writeText(r)},title:`클릭하여 "${r}" 복사`,children:[e.jsx(n,{name:r,size:"large"}),e.jsx("span",{style:{fontSize:10,color:"#767676",textAlign:"center"},children:r})]},r)),s.length===0&&e.jsx("span",{style:{fontSize:13,color:"#999"},children:"검색 결과 없음"})]})]})}return e.jsx(l,{})}};var u,b,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,h,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '전체 아이콘',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      {GROUPS.map(({
      label,
      icons
    }) => <div key={label}>
          <div style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#767676',
        marginBottom: 12
      }}>
            {label}
          </div>
          <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }}>
            {icons.map(name => <div key={name} title={name} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          padding: '12px 10px',
          borderRadius: 6,
          border: '1px solid #ebebeb',
          minWidth: 72,
          cursor: 'default',
          transition: 'background 0.15s'
        }} onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.background = '#f7f7f7';
        }} onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.background = '';
        }}>
                <SIcon name={name} size="large" />
                <span style={{
            fontSize: 10,
            color: '#767676',
            textAlign: 'center',
            lineHeight: 1.3
          }}>{name}</span>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var S,w,I;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'flex-end',
    flexWrap: 'wrap'
  }}>
      {(['xs', 'small', 'medium', 'large', 'xl'] as IconSize[]).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <SIcon name="send" size={size} />
          <span style={{
        fontSize: 11,
        color: '#767676'
      }}>{size}</span>
        </div>)}
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <SIcon name="send" size={32} />
        <span style={{
        fontSize: 11,
        color: '#767676'
      }}>32px</span>
      </div>
    </div>
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var z,j,k;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '색상',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      {[{
      label: 'default',
      color: undefined
    }, {
      label: 'primary',
      color: '#287eff'
    }, {
      label: 'success',
      color: '#00b074'
    }, {
      label: 'warning',
      color: '#f59e0b'
    }, {
      label: 'error',
      color: '#ff3232'
    }, {
      label: 'muted',
      color: '#767676'
    }, {
      label: 'brand',
      color: '#253349'
    }].map(({
      label,
      color
    }) => <div key={label} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }}>
          <SIcon name="bell" size="xl" color={color} />
          <span style={{
        fontSize: 11,
        color: '#767676'
      }}>{label}</span>
        </div>)}
    </div>
}`,...(k=(j=d.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var D,C,W;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '상태 아이콘',
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap'
  }}>
      {[{
      name: 'success' as IconName,
      color: '#00b074',
      label: '성공'
    }, {
      name: 'error' as IconName,
      color: '#ff3232',
      label: '오류'
    }, {
      name: 'warning' as IconName,
      color: '#f59e0b',
      label: '경고'
    }, {
      name: 'info' as IconName,
      color: '#287eff',
      label: '정보'
    }].map(({
      name,
      color,
      label
    }) => <div key={name} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 12px',
      borderRadius: 6,
      border: '1px solid #ebebeb'
    }}>
          <SIcon name={name} size="medium" color={color} />
          <span style={{
        fontSize: 13,
        color: '#444'
      }}>{label}</span>
        </div>)}
    </div>
}`,...(W=(C=p.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var R,L,N;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '뱅킹 아이콘',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>
      {[{
      name: 'creditCard' as IconName,
      label: '카드'
    }, {
      name: 'transfer' as IconName,
      label: '이체'
    }, {
      name: 'wallet' as IconName,
      label: '지갑'
    }, {
      name: 'send' as IconName,
      label: '송금'
    }, {
      name: 'download' as IconName,
      label: '입금'
    }, {
      name: 'lock' as IconName,
      label: '보안'
    }, {
      name: 'bell' as IconName,
      label: '알림'
    }, {
      name: 'calendar' as IconName,
      label: '일정'
    }].map(({
      name,
      label
    }) => <div key={name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      padding: '16px 12px',
      borderRadius: 8,
      border: '1px solid #ebebeb',
      minWidth: 72
    }}>
          <div style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        background: '#f0f6ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
            <SIcon name={name} size="large" color="#287eff" />
          </div>
          <span style={{
        fontSize: 11,
        color: '#444'
      }}>{label}</span>
        </div>)}
    </div>
}`,...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var T,A,B;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '아이콘 검색',
  render: () => {
    function SearchDemo() {
      const [query, setQuery] = useState('');
      const filtered = ALL_ICONS.filter(n => n.toLowerCase().includes(query.toLowerCase()));
      return <div>
          <div style={{
          marginBottom: 16
        }}>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="아이콘 이름 검색..." style={{
            width: '100%',
            maxWidth: 320,
            padding: '8px 12px',
            fontSize: 14,
            border: '1px solid #d2d2d2',
            borderRadius: 6,
            outline: 'none',
            boxSizing: 'border-box'
          }} />
          </div>
          <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8
        }}>
            {filtered.map(name => <div key={name} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            padding: '10px 8px',
            borderRadius: 6,
            border: '1px solid #ebebeb',
            minWidth: 68,
            cursor: 'pointer'
          }} onClick={() => navigator.clipboard?.writeText(name)} title={\`클릭하여 "\${name}" 복사\`}>
                <SIcon name={name} size="large" />
                <span style={{
              fontSize: 10,
              color: '#767676',
              textAlign: 'center'
            }}>{name}</span>
              </div>)}
            {filtered.length === 0 && <span style={{
            fontSize: 13,
            color: '#999'
          }}>검색 결과 없음</span>}
          </div>
        </div>;
    }
    return <SearchDemo />;
  }
}`,...(B=(A=f.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const Q=["Playground","AllIcons","Sizes","Colors","StatusIcons","BankingIcons","IconSearch"];export{t as AllIcons,m as BankingIcons,d as Colors,f as IconSearch,i as Playground,c as Sizes,p as StatusIcons,Q as __namedExportsOrder,_ as default};
