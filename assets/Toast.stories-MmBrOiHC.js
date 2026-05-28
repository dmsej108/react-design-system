import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{T as b,u as a}from"./Toast-Dv0QIUXn.js";import{B as t}from"./Button-DWSf26AH.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DLHbBEj9.js";const I={title:"Components/Toast",tags:["autodocs"],parameters:{layout:"centered"},decorators:[n=>e.jsx(b,{children:e.jsx(n,{})})]};function z(){const n=a();return e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:[e.jsx(t,{variant:"primary",onClick:()=>n.success("이체가 완료되었습니다.",{message:"홍길동님 계좌로 100,000원이 이체되었습니다."}),children:"Success"}),e.jsx(t,{variant:"danger",onClick:()=>n.error("이체에 실패했습니다.",{message:"잔액이 부족합니다. 잔액을 확인해주세요."}),children:"Error"}),e.jsx(t,{variant:"outline",onClick:()=>n.warning("주의가 필요합니다.",{message:"하루 이체 한도의 90%에 도달했습니다."}),children:"Warning"}),e.jsx(t,{variant:"ghost",onClick:()=>n.info("공지사항",{message:"3월 10일 새벽 2시~4시 시스템 점검이 예정되어 있습니다."}),children:"Info"}),e.jsx(t,{variant:"ghost",onClick:()=>n.toast("알림",{message:"새로운 메시지가 도착했습니다.",variant:"neutral"}),children:"Neutral"})]})}const r={render:()=>e.jsx(z,{})},o={name:"모든 Variant",render:()=>{function n(){const s=a();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,alignItems:"center"},children:[e.jsx(t,{size:"small",onClick:()=>s.success("성공!",{message:"작업이 완료되었습니다."}),children:"success 토스트"}),e.jsx(t,{size:"small",variant:"danger",onClick:()=>s.error("오류 발생",{message:"다시 시도해주세요."}),children:"error 토스트"}),e.jsx(t,{size:"small",variant:"outline",onClick:()=>s.warning("경고",{message:"한도 초과 직전입니다."}),children:"warning 토스트"}),e.jsx(t,{size:"small",variant:"ghost",onClick:()=>s.info("안내",{message:"서비스 점검 예정입니다."}),children:"info 토스트"}),e.jsx(t,{size:"small",variant:"ghost",onClick:()=>s.toast("알림",{variant:"neutral"}),children:"neutral 토스트"})]})}return e.jsx(n,{})}},i={name:"지속 토스트 (닫기 전까지 유지)",render:()=>{function n(){const s=a();return e.jsx(t,{onClick:()=>s.info("중요 공지",{message:"닫기 버튼을 클릭할 때까지 사라지지 않습니다.",duration:0}),children:"지속 토스트 열기"})}return e.jsx(n,{})}},l={name:"뱅킹 시나리오 예시",render:()=>{function n(){const s=a(),T=[{label:"이체 성공",action:()=>s.success("이체 완료",{message:"홍길동 · 스타뱅크 · 100,000원"})},{label:"잔액 부족",action:()=>s.error("이체 실패",{message:"잔액이 부족합니다. 현재 잔액: 5,000원"})},{label:"한도 경고",action:()=>s.warning("한도 주의",{message:"일일 이체 한도의 90%를 사용했습니다."})},{label:"점검 안내",action:()=>s.info("시스템 점검",{message:"3/10 새벽 2시~4시 서비스가 중단됩니다.",duration:6e3})},{label:"로그인 알림",action:()=>s.warning("새 기기 로그인",{message:"서울 · iPhone · 방금 전",duration:6e3})}];return e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:T.map(({label:u,action:w})=>e.jsx(t,{size:"small",variant:"outline",onClick:w,children:u},u))})}return e.jsx(n,{})}},c={name:"위치별 예시 (별도 Provider)",render:()=>{const n=["topRight","topLeft","bottomRight","bottomLeft"];return e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:n.map(s=>e.jsx(b,{position:s,children:e.jsx(V,{position:s})},s))})}};function V({position:n}){const s=a();return e.jsx(t,{size:"small",variant:"outline",onClick:()=>s.info(n,{message:"이 위치에서 표시됩니다."}),children:n})}var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <ToastTriggers />
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,f,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '모든 Variant',
  render: () => {
    function AllVariants() {
      const toast = useToast();
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'center'
      }}>
          <SButton size="small" onClick={() => toast.success('성공!', {
          message: '작업이 완료되었습니다.'
        })}>
            success 토스트
          </SButton>
          <SButton size="small" variant="danger" onClick={() => toast.error('오류 발생', {
          message: '다시 시도해주세요.'
        })}>
            error 토스트
          </SButton>
          <SButton size="small" variant="outline" onClick={() => toast.warning('경고', {
          message: '한도 초과 직전입니다.'
        })}>
            warning 토스트
          </SButton>
          <SButton size="small" variant="ghost" onClick={() => toast.info('안내', {
          message: '서비스 점검 예정입니다.'
        })}>
            info 토스트
          </SButton>
          <SButton size="small" variant="ghost" onClick={() => toast.toast('알림', {
          variant: 'neutral'
        })}>
            neutral 토스트
          </SButton>
        </div>;
    }
    return <AllVariants />;
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,j,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '지속 토스트 (닫기 전까지 유지)',
  render: () => {
    function PersistentDemo() {
      const toast = useToast();
      return <SButton onClick={() => toast.info('중요 공지', {
        message: '닫기 버튼을 클릭할 때까지 사라지지 않습니다.',
        duration: 0
      })}>
          지속 토스트 열기
        </SButton>;
    }
    return <PersistentDemo />;
  }
}`,...(h=(j=i.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var k,C,y;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '뱅킹 시나리오 예시',
  render: () => {
    function BankingToasts() {
      const toast = useToast();
      const scenarios = [{
        label: '이체 성공',
        action: () => toast.success('이체 완료', {
          message: '홍길동 · 스타뱅크 · 100,000원'
        })
      }, {
        label: '잔액 부족',
        action: () => toast.error('이체 실패', {
          message: '잔액이 부족합니다. 현재 잔액: 5,000원'
        })
      }, {
        label: '한도 경고',
        action: () => toast.warning('한도 주의', {
          message: '일일 이체 한도의 90%를 사용했습니다.'
        })
      }, {
        label: '점검 안내',
        action: () => toast.info('시스템 점검', {
          message: '3/10 새벽 2시~4시 서비스가 중단됩니다.',
          duration: 6000
        })
      }, {
        label: '로그인 알림',
        action: () => toast.warning('새 기기 로그인', {
          message: '서울 · iPhone · 방금 전',
          duration: 6000
        })
      }];
      return <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
          {scenarios.map(({
          label,
          action
        }) => <SButton key={label} size="small" variant="outline" onClick={action}>
              {label}
            </SButton>)}
        </div>;
    }
    return <BankingToasts />;
  }
}`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var B,S,P;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '위치별 예시 (별도 Provider)',
  render: () => {
    const positions = ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'] as const;
    return <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
        {positions.map(pos => <SToastProvider key={pos} position={pos}>
            <PositionButton position={pos} />
          </SToastProvider>)}
      </div>;
  }
}`,...(P=(S=c.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const O=["Playground","Variants","Persistent","BankingExamples","PositionOptions"];export{l as BankingExamples,i as Persistent,r as Playground,c as PositionOptions,o as Variants,O as __namedExportsOrder,I as default};
