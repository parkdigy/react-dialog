---
name: npm-package-development
description: 이 저장소의 React 다이얼로그 npm 라이브러리 기능, 공개 타입, 의존성 또는 빌드 설정을 변경할 때 사용한다. Provider·훅·예제·패키지 소비에 미치는 영향을 확인한다.
---

# 다이얼로그 패키지 개발

먼저 [저장소 지침](../../../AGENTS.md)과 관련 소스를 읽고 `git status --short`로 기존 변경을 확인한다. 필요한 경우 [프로젝트 구조](../../../docs/agents/project.md)를 참고한다. 여러 세션에 걸치거나 인계가 필요한 작업에는 [작업 기록 양식](templates/task.md)을 `_workspace/<작업명>/task.md`에 복사한다.

## 구현 시 확인

- `src/index.ts`의 실제 공개 내보내기와 관련 타입을 확인한다. API나 사용법을 바꾸면 README와 `examples/src/component/Home/`, `examples/src/dialog/TestDialog/`에도 미치는 영향을 검토한다.
- `DialogContextProvider`는 생성한 다이얼로그를 상태에 보관하고 `onShow`·`onClose`로 관리한다. `useDialog`의 사용자 정의 다이얼로그는 오류 경계로 감싸며, `useAlertDialog`와 `useConfirmDialog`는 Provider의 함수를 사용한다. Provider 밖에서 각 훅은 오류를 던진다. 이 경로를 바꾸면 표시·종료, 콜백, 동시 다이얼로그와 오류 처리를 확인한다.
- `Dialog`는 자체 open 상태와 `DialogCommands` ref를 사용한다. 닫기 요청, 전환 후 `onClose`, backdrop·Escape 설정과 alert/confirm 버튼 동작은 관련 구현을 함께 확인한다.
- 예제는 배포된 패키지가 아니라 루트 소스를 직접 가져온다. React와 React DOM의 peer 범위, 예제 의존성과 실제 번들에서 React 중복 여부를 확인한다. 예제 별칭은 `examples/tsconfig.json`을 Rspack 설정이 읽는다.
- 의존성 변경 시 양쪽 `package.json`, 사용처, peer 및 `.nvmrc` 호환성을 확인한다. 루트 ESLint는 `@pdg/eslint-plugin-react-hook`을 별도 사용한다. 잠금 파일과 `node_modules`를 임의로 삭제하지 않는다.
- 배포 설정 변경 시 Rollup 출력과 `exports`를 함께 보고 실제 소비자의 import·require·타입 해석 및 공개 선언을 검증한다.

## 검증과 인계

`AGENTS.md`의 검증 명령을 따르고 동작 변경에는 공개 API 관점의 적절한 테스트를 추가한다. 현재 Jest는 Node 환경이고 `.tsx` 변환과 `test` 스크립트가 없으므로 필요한 환경과 실행 명령을 마련한다. 예제 빌드는 패키지 소비 검증을 대신하지 않는다.

빌드는 추적 중인 `dist/` 또는 `examples/dist/` 파일을 정리·덮어쓸 수 있으므로 실행 전 기존 변경을 보존한다. Watchman 실패 시 별도 Rollup 검증 결과와 구분한다. 렌더링·HMR은 브라우저에서 확인했을 때만 검증했다고 보고한다. 마지막으로 diff, 공개 API, 생성물과 검증 결과를 확인하고 실패·미확인 사항을 한글로 보고한다.
