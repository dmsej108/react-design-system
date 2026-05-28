# Dependencies

`@dmsej108/design-system` v1.1.11 기준 의존성 정리

---

## dependencies (런타임 의존성)

패키지를 설치한 소비자 앱에도 함께 설치되는 패키지.

| 패키지 | 버전 | 설명 |
|--------|------|------|
| `react-datepicker` | ^9.1.0 | DatePicker 컴포넌트의 캘린더 UI 기반 라이브러리 |

---

## peerDependencies (소비자가 직접 설치해야 하는 패키지)

이 라이브러리를 사용하는 앱에 반드시 설치되어 있어야 하는 패키지.  
중복 설치를 방지하기 위해 직접 번들에 포함하지 않는다.

| 패키지 | 버전 | 설명 |
|--------|------|------|
| `react` | ^18.0.0 | React 핵심 라이브러리 |
| `react-dom` | ^18.0.0 | React를 브라우저 DOM에 렌더링하는 패키지 |

---

## devDependencies (개발 전용 의존성)

로컬 개발 및 빌드 시에만 사용되며, 배포 패키지에는 포함되지 않는다.

### Storybook

| 패키지 | 버전 | 설명 |
|--------|------|------|
| `storybook` | ^8.6.17 | Storybook 핵심 CLI 및 코어 |
| `@storybook/react` | ^8.6.17 | React 환경용 Storybook 렌더러 |
| `@storybook/react-vite` | ^8.6.17 | Vite 기반 Storybook 빌더 |
| `@storybook/addon-essentials` | ^8.6.14 | 기본 애드온 묶음 (Controls, Actions, Docs 등) |
| `@storybook/addon-a11y` | ^8.6.17 | 접근성(a11y) 검사 애드온 |
| `@storybook/addon-interactions` | ^8.6.14 | 스토리 내 인터랙션 테스트 애드온 |
| `@storybook/blocks` | ^8.6.14 | MDX 문서 작성용 UI 블록 컴포넌트 |

### 빌드 도구

| 패키지 | 버전 | 설명 |
|--------|------|------|
| `vite` | ^5.3.4 | 라이브러리 빌드 및 개발 서버 도구 |
| `@vitejs/plugin-react` | ^4.7.0 | Vite에서 React(JSX/TSX)를 처리하는 플러그인 |
| `vite-plugin-dts` | ^5.0.0 | 빌드 시 TypeScript 타입 선언 파일(`.d.ts`) 자동 생성 |
| `tsup` | ^8.5.1 | esbuild 기반 TypeScript 번들러 (현재 미사용, 레거시) |

### TypeScript

| 패키지 | 버전 | 설명 |
|--------|------|------|
| `typescript` | ^5.4.5 | TypeScript 컴파일러 |
| `@types/react` | ^18.3.3 | React TypeScript 타입 정의 |
| `@types/react-dom` | ^18.3.0 | React DOM TypeScript 타입 정의 |
| `@types/react-datepicker` | ^7.0.0 | react-datepicker TypeScript 타입 정의 |

### React (개발용)

| 패키지 | 버전 | 설명 |
|--------|------|------|
| `react` | 18.3.1 | Storybook 로컬 실행용 React (peerDependencies와 별도) |
| `react-dom` | 18.3.1 | Storybook 로컬 실행용 React DOM |
