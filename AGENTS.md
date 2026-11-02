# 에이전트 코딩 가이드

## 프로젝트

`@pdg/react-dialog`는 React 19 기반의 TypeScript 다이얼로그 라이브러리다. 공개 API는 `src/index.ts`가 결정한다.

- `src/Dialog/`: MUI 기반 공통 다이얼로그, 닫기와 스크롤 명령
- `src/DialogContextProvider/`, `src/DialogContext/`: 다이얼로그 생성·목록·종료 관리와 context 계약
- `src/AlertDialog/`, `src/ConfirmDialog/`, `src/uses/`: 알림·확인 구현과 공개 훅 및 기본 오류 처리 설정
- `src/DialogErrorBoundary/`, `src/DialogActionButton/`: 사용자 정의 다이얼로그 오류 경계와 버튼
- `examples/`: 라이브러리 소스를 직접 사용하는 별도 Rspack 앱. `@comp`, `@dialog` 별칭과 개발 서버 포트 9807을 사용한다.
- 빌드·배포는 `package.json`, `rollup.config.js`, 예제 번들은 `examples/rspack.config.js`를 따른다.
- 추가 탐색: [프로젝트 구조](docs/agents/project.md), [npm 패키지 코딩 스킬](.agents/skills/npm-package-development/SKILL.md)

## 작업 원칙

1. 시작할 때 `git status --short`와 관련 구현·설정을 읽고 기존 변경을 보존한다.
2. 범위에 맞게 변경하고 공개 API 변경 시 `src/index.ts`, 타입, 소비자, README와 예제를 함께 확인한다. 문서와 완료 보고는 한글로 작성한다.
3. Provider와 훅을 변경할 때 생성·표시·종료 콜백, 다중 다이얼로그, 오류 경계 및 명령 ref에 미치는 영향을 살핀다. 실제 계약은 관련 소스와 타입을 기준으로 한다.
4. React와 React DOM은 peer dependency다. 의존성 변경 시 루트와 예제의 사용처, peer 범위, Node 호환성 및 React 중복 가능성을 확인한다. 루트 ESLint 설정의 `@pdg/eslint-plugin-react-hook` 의존성도 유지한다.
5. `dist/`, `examples/dist/`, 루트 `index.html`, `404.html`에는 Git 추적 파일이 있다. 생성물을 직접 수정하지 않고, 빌드가 기존 파일을 지우거나 덮어쓰므로 실행 전 변경 상태를 확인하고 기존 작업을 보존한다.
6. 배포 설정을 변경하면 패키지 파일과 실제 소비자의 import·require·타입 해석을 확인한다. `type: module`과 CommonJS의 `.js` 출력 경로는 별도 호환성 검증이 필요하다.
7. 커밋·푸시·npm 게시 명령은 요청된 경우에만 실행한다. `npm run pub`는 실제 게시한다. `reinstall:module`은 `node_modules`와 잠금 파일을 삭제한다.

## 검증

`.nvmrc`의 Node 버전과 npm을 사용한다. 루트와 예제의 의존성은 별도이며, Git에서 제외된 `package-lock.json`이 선언과 다를 수 있으므로 설치 전 기존 파일과 옵션을 확인한다.

```sh
npm run tsc
npm run lint
cd examples && npm run tsc && npm run lint
```

현재 테스트 파일과 npm `test` 스크립트는 없다. 동작 변경에는 적절한 테스트와 실행 명령을 마련한다. Jest 설정은 Node 환경이며 변환 패턴에 `.tsx`가 없으므로 컴포넌트 테스트의 환경·변환을 확인한다.

라이브러리 빌드 변경 시 `npm run build`를 실행한다. Watchman 접근 실패 시 `./node_modules/.bin/rollup -c --bundleConfigAsCjs`로 별도 확인하고 표준 빌드 성공과 구분한다. 두 명령 모두 `dist/*`를 정리한다. 예제 변경 시 `cd examples && npm run build:rspack`으로 확인한다. 프로덕션 Rspack은 `examples/dist/`를 정리하며 예제 전체 `npm run build`는 루트 `index.html`, `404.html`도 덮어쓴다.

개발 서버의 HTTP 응답만으로 렌더링이나 HMR을 검증했다고 보지 않는다. 문서만 수정하면 링크·경로·명령을 설정과 대조한다. 완료 보고에는 변경 사항, 검증 결과와 미확인 사항을 남긴다.
