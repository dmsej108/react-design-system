import{j as e}from"./jsx-runtime-Z5uAzocK.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const F={title:"Foundation/Design Tokens",tags:["autodocs"],parameters:{layout:"fullscreen"}};function a({name:r,cssVar:n}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,minWidth:64},children:[e.jsx("div",{style:{width:48,height:48,borderRadius:8,backgroundColor:`var(${n})`,border:"1px solid rgba(0,0,0,0.08)",boxShadow:"0 1px 3px rgba(0,0,0,0.08)"}}),e.jsx("span",{style:{fontSize:11,color:"var(--color-neutral-500)",textAlign:"center"},children:r})]})}function p({label:r,prefix:n,shades:k}){return e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{margin:"0 0 12px",fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500)"},children:r}),e.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:k.map(c=>e.jsx(a,{name:c,cssVar:`--color-${n}-${c}`},c))})]})}const s={name:"색상",render:()=>{const r=["50","100","200","300","400","500","600","700","800","900"];return e.jsxs("div",{style:{padding:32,fontFamily:"var(--font-family-base)"},children:[e.jsx(p,{label:"Primary / KB Yellow",prefix:"primary",shades:r}),e.jsx(p,{label:"Secondary / KB Gray",prefix:"secondary",shades:r}),e.jsx(p,{label:"Neutral",prefix:"neutral",shades:r}),e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{margin:"0 0 12px",fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500)"},children:"KB Brand"}),e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(a,{name:"yellow-positive",cssVar:"--color-brand-yellow-positive"}),e.jsx(a,{name:"yellow-negative",cssVar:"--color-brand-yellow-negative"}),e.jsx(a,{name:"gray",cssVar:"--color-brand-gray"}),e.jsx(a,{name:"dark-gray",cssVar:"--color-brand-dark-gray"}),e.jsx(a,{name:"gold",cssVar:"--color-brand-gold"}),e.jsx(a,{name:"silver",cssVar:"--color-brand-silver"})]})]}),e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("p",{style:{margin:"0 0 12px",fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500)"},children:"Semantic"}),e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(a,{name:"success",cssVar:"--color-success"}),e.jsx(a,{name:"success-light",cssVar:"--color-success-light"}),e.jsx(a,{name:"warning",cssVar:"--color-warning"}),e.jsx(a,{name:"warning-light",cssVar:"--color-warning-light"}),e.jsx(a,{name:"error",cssVar:"--color-error"}),e.jsx(a,{name:"error-light",cssVar:"--color-error-light"}),e.jsx(a,{name:"info",cssVar:"--color-info"}),e.jsx(a,{name:"info-light",cssVar:"--color-info-light"})]})]})]})}},l={name:"타이포그래피",render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"var(--font-family-base)"},children:[e.jsx("p",{style:{margin:"0 0 24px",fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500)"},children:"Font Size"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,marginBottom:40},children:[["xs","12px"],["sm","14px"],["md","16px"],["lg","18px"],["xl","20px"],["2xl","24px"],["3xl","30px"],["4xl","36px"]].map(([r,n])=>e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:16},children:[e.jsx("span",{style:{fontSize:"var(--font-size-"+r+")",color:"var(--ds-text)",lineHeight:1.3},children:"StarBanking"}),e.jsxs("span",{style:{fontSize:11,color:"var(--ds-text-muted)"},children:[r," / ",n]})]},r))}),e.jsx("p",{style:{margin:"0 0 16px",fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500)"},children:"Font Weight"}),e.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap",marginBottom:40},children:[["Regular (400)","400"],["Medium (500)","500"],["Semibold (600)","600"],["Bold (700)","700"]].map(([r,n])=>e.jsx("div",{style:{fontWeight:n,fontSize:16,color:"var(--ds-text)"},children:r},n))})]})},o={name:"스페이싱",render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"var(--font-family-base)"},children:[e.jsx("p",{style:{margin:"0 0 24px",fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--color-neutral-500)"},children:"Spacing Scale"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[["--space-1","4px"],["--space-2","8px"],["--space-3","12px"],["--space-4","16px"],["--space-5","20px"],["--space-6","24px"],["--space-8","32px"],["--space-10","40px"],["--space-12","48px"],["--space-16","64px"]].map(([r,n])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("div",{style:{width:`var(${r})`,height:20,backgroundColor:"var(--color-primary-400)",borderRadius:3,flexShrink:0}}),e.jsxs("span",{style:{fontSize:12,color:"var(--color-neutral-500)",whiteSpace:"nowrap"},children:[r," · ",n]})]},r))})]})},i={name:"그림자",render:()=>e.jsx("div",{style:{padding:32,fontFamily:"var(--font-family-base)"},children:e.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:["xs","sm","md","lg","xl"].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx("div",{style:{width:80,height:80,borderRadius:12,backgroundColor:"#fff",boxShadow:`var(--shadow-${r})`,border:"1px solid var(--color-neutral-100)"}}),e.jsxs("span",{style:{fontSize:12,color:"var(--color-neutral-500)"},children:["shadow-",r]})]},r))})})},t={name:"테두리 반경",render:()=>e.jsx("div",{style:{padding:32,fontFamily:"var(--font-family-base)"},children:e.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap",alignItems:"flex-end"},children:[["sm","4px"],["md","8px"],["lg","12px"],["xl","16px"],["full","9999px"]].map(([r,n])=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx("div",{style:{width:64,height:64,backgroundColor:"var(--color-primary-100)",border:"2px solid var(--color-primary-400)",borderRadius:`var(--radius-${r})`}}),e.jsxs("span",{style:{fontSize:12,color:"var(--color-neutral-500)",textAlign:"center"},children:["radius-",r,e.jsx("br",{}),n]})]},r))})})};var d,x,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '색상',
  render: () => {
    const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
    return <div style={{
      padding: 32,
      fontFamily: 'var(--font-family-base)'
    }}>
        <ColorRow label="Primary / KB Yellow" prefix="primary" shades={shades} />
        <ColorRow label="Secondary / KB Gray" prefix="secondary" shades={shades} />
        <ColorRow label="Neutral" prefix="neutral" shades={shades} />

        <div style={{
        marginBottom: 32
      }}>
          <p style={{
          margin: '0 0 12px',
          fontSize: 12,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'var(--color-neutral-500)'
        }}>KB Brand</p>
          <div style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap'
        }}>
            <Swatch name="yellow-positive" cssVar="--color-brand-yellow-positive" />
            <Swatch name="yellow-negative" cssVar="--color-brand-yellow-negative" />
            <Swatch name="gray" cssVar="--color-brand-gray" />
            <Swatch name="dark-gray" cssVar="--color-brand-dark-gray" />
            <Swatch name="gold" cssVar="--color-brand-gold" />
            <Swatch name="silver" cssVar="--color-brand-silver" />
          </div>
        </div>

        <div style={{
        marginBottom: 32
      }}>
          <p style={{
          margin: '0 0 12px',
          fontSize: 12,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'var(--color-neutral-500)'
        }}>Semantic</p>
          <div style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap'
        }}>
            <Swatch name="success" cssVar="--color-success" />
            <Swatch name="success-light" cssVar="--color-success-light" />
            <Swatch name="warning" cssVar="--color-warning" />
            <Swatch name="warning-light" cssVar="--color-warning-light" />
            <Swatch name="error" cssVar="--color-error" />
            <Swatch name="error-light" cssVar="--color-error-light" />
            <Swatch name="info" cssVar="--color-info" />
            <Swatch name="info-light" cssVar="--color-info-light" />
          </div>
        </div>
      </div>;
  }
}`,...(m=(x=s.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var g,y,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '타이포그래피',
  render: () => <div style={{
    padding: 32,
    fontFamily: 'var(--font-family-base)'
  }}>
      <p style={{
      margin: '0 0 24px',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--color-neutral-500)'
    }}>Font Size</p>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 40
    }}>
        {[['xs', '12px'], ['sm', '14px'], ['md', '16px'], ['lg', '18px'], ['xl', '20px'], ['2xl', '24px'], ['3xl', '30px'], ['4xl', '36px']].map(([key, px]) => <div key={key} style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 16
      }}>
            <span style={{
          fontSize: 'var(--font-size-' + key + ')',
          color: 'var(--ds-text)',
          lineHeight: 1.3
        }}>
              StarBanking
            </span>
            <span style={{
          fontSize: 11,
          color: 'var(--ds-text-muted)'
        }}>{key} / {px}</span>
          </div>)}
      </div>

      <p style={{
      margin: '0 0 16px',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--color-neutral-500)'
    }}>Font Weight</p>
      <div style={{
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      marginBottom: 40
    }}>
        {[['Regular (400)', '400'], ['Medium (500)', '500'], ['Semibold (600)', '600'], ['Bold (700)', '700']].map(([label, weight]) => <div key={weight} style={{
        fontWeight: weight,
        fontSize: 16,
        color: 'var(--ds-text)'
      }}>{label}</div>)}
      </div>
    </div>
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,h,u;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '스페이싱',
  render: () => <div style={{
    padding: 32,
    fontFamily: 'var(--font-family-base)'
  }}>
      <p style={{
      margin: '0 0 24px',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--color-neutral-500)'
    }}>Spacing Scale</p>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        {[['--space-1', '4px'], ['--space-2', '8px'], ['--space-3', '12px'], ['--space-4', '16px'], ['--space-5', '20px'], ['--space-6', '24px'], ['--space-8', '32px'], ['--space-10', '40px'], ['--space-12', '48px'], ['--space-16', '64px']].map(([token, px]) => <div key={token} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }}>
            <div style={{
          width: \`var(\${token})\`,
          height: 20,
          backgroundColor: 'var(--color-primary-400)',
          borderRadius: 3,
          flexShrink: 0
        }} />
            <span style={{
          fontSize: 12,
          color: 'var(--color-neutral-500)',
          whiteSpace: 'nowrap'
        }}>
              {token} · {px}
            </span>
          </div>)}
      </div>
    </div>
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var S,w,b;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '그림자',
  render: () => <div style={{
    padding: 32,
    fontFamily: 'var(--font-family-base)'
  }}>
      <div style={{
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap'
    }}>
        {['xs', 'sm', 'md', 'lg', 'xl'].map(s => <div key={s} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }}>
            <div style={{
          width: 80,
          height: 80,
          borderRadius: 12,
          backgroundColor: '#fff',
          boxShadow: \`var(--shadow-\${s})\`,
          border: '1px solid var(--color-neutral-100)'
        }} />
            <span style={{
          fontSize: 12,
          color: 'var(--color-neutral-500)'
        }}>shadow-{s}</span>
          </div>)}
      </div>
    </div>
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var j,V,z;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '테두리 반경',
  render: () => <div style={{
    padding: 32,
    fontFamily: 'var(--font-family-base)'
  }}>
      <div style={{
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      alignItems: 'flex-end'
    }}>
        {[['sm', '4px'], ['md', '8px'], ['lg', '12px'], ['xl', '16px'], ['full', '9999px']].map(([key, px]) => <div key={key} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }}>
            <div style={{
          width: 64,
          height: 64,
          backgroundColor: 'var(--color-primary-100)',
          border: '2px solid var(--color-primary-400)',
          borderRadius: \`var(--radius-\${key})\`
        }} />
            <span style={{
          fontSize: 12,
          color: 'var(--color-neutral-500)',
          textAlign: 'center'
        }}>
              radius-{key}<br />{px}
            </span>
          </div>)}
      </div>
    </div>
}`,...(z=(V=t.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const T=["Colors","Typography","Spacing","Shadows","BorderRadius"];export{t as BorderRadius,s as Colors,i as Shadows,o as Spacing,l as Typography,T as __namedExportsOrder,F as default};
