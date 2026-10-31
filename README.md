# 스칼렛 UI 컴포넌트

디자인 가이드에 맞춘 브라우저 기본 Web Components입니다. 별도 프레임워크나 패키지 설치가 필요하지 않습니다. 모든 파일은 UTF-8입니다.

## 실행

이 폴더에서 정적 웹 서버를 실행하고 index.html을 엽니다. Python이 설치되어 있다면 `python -m http.server 8000` 실행 후 http://localhost:8000 에 접속합니다. ES 모듈을 사용하므로 파일을 직접 더블 클릭하는 방식 대신 HTTP 서버가 필요합니다.

## 사용

페이지에 components/theme.css와 type="module"인 components/index.js를 불러옵니다. 개별 컴포넌트 파일만 불러올 수도 있습니다. 전역 CSS 변수로 테마를 바꿀 수 있습니다.

| 파일 | 태그 | 설정 |
| --- | --- | --- |
| button.js | scarlett-button | variant=secondary 또는 danger, size=small 또는 large, disabled, loading |
| field.js | scarlett-field | label, help, type, value, required, maxlength, multiline |
| tag.js | scarlett-tag | 태그 내부에 표시할 텍스트 |
| card.js | scarlett-card | title, summary, category, href, src, alt |
| filter.js | scarlett-filter | filter-change 이벤트의 detail.category |
| header.js | scarlett-header | active=journal로 기록 메뉴 선택 |
| alert.js | scarlett-alert | kind=error로 오류 표시 |

필드는 value 속성으로 현재 값을 읽고 setError('오류 문구')로 오류를 표시합니다. value-change 이벤트도 제공합니다. 기본 form 자동 제출에 연결된 요소는 아니므로 저장 핸들러에서 값을 읽고 서버 검증에 연결해야 합니다. 버튼은 내부 네이티브 버튼의 click 이벤트로 동작을 연결합니다. 페이지 이동에는 실제 a 태그를 사용하세요.

index.html은 컴포넌트 쇼케이스이며 카테고리 필터를 실제로 조작할 수 있습니다. 카드와 대표 버튼은 예시이며 저장·인증·데이터 서버는 연결하지 않았습니다. 실제 사진은 src와 alt로 전달합니다. 사용자 문자열은 textContent로 처리합니다.

## 검증 범위

파일 구성과 로컬 참조를 확인했습니다. 현재 환경에 Node/npm 실행기가 없어 번들 빌드 및 브라우저 자동 검사는 수행하지 않았습니다. 실제 배포 전 키보드 조작, 320px 화면, 사진 로딩, 글자 확대를 브라우저에서 확인해주세요.

