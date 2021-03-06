VScode extension

1. Code Spell Checker : 스펠링 체크

2. REST Client : POSTMAN 대체 가능. REST API 실행 결과를 보여줌

3. 단축키로 파일 생성하기(Mac은 Ctrl = Cmd)
   (1) Command Pallet(Ctrl + shift + p)
   (2) Open Keyboard shortcut(JSON) 검색
   (3)
   [
   { "key": "ctrl+n",
   "command": "explorer.newFile",
   "when": "!editorFocus" },

{ "key": "ctrl+m",
"command": "explorer.newFolder",
"when": "!editorFocus" }
]

key : 설정할 단축키
command : 액션
when : 단축키로 액션이 실행되는 조건입니다. explorerViewletFocus의 경우 탐색기에 포커스가 위치할 때에만 단축키가 동작하게 합니다.

- 탐색기에서 새 파일 생성 : ctrl + n
- 탐색기에서 새 폴더 생성 : ctrl + m

4.  ctrl+k+f : 자동 정렬

5.  File Utils : 파일 생성, 삭제, 이동\*
    (1) ctrl + shift + P
    (2) File Utils: move
    (3) directory change

6.  Auto Rename Tag : <>를 수정하면 </>도 같이 수정됨.

7.  Sass, Live Sass Compiler : sass compiler.
    (1) ctrl + , (설정)
    (2) ctrl + shift + p , settings.json
    (3)
    "liveSassCompile.settings.formats":[
    {
    "format": "compressed", // defalt는 "expanded",
    "extensionName": ".min.css", // defalt는 ".css",
    "savePath": "/dist/css" // 저장 경로, defalt는 null
    }
    ],
    "liveSassCompile.settings.generateMap": false, // false시 .map 파일 생성 안 함

8.  HTML CSS Support : html과 css 자동완성

9.  IntelliSense for CSS class names in HTML : class를 중복 사용하지 않게 해 줌. (미설치)

10. CSS peek : class 명 ctrl + click 시 바로가기 제공

11. Live Server : html 파일을 localhost에서 오픈함

12. ESLint, Prettier : code 정리
    (1) setting 들어가서 format on save 체크, 파일 저장할 때 Prettier 자동 적용
    (2) Single Quote 체크, 큰따옴표 전부 작은 따옴표로 변경
    (3) (sudo) npm i eslint (-g)
    (4) npm init -y
    (5) npm i prettier eslint-plugin-prettier eslint-config-prettier -D
    (6) npx install-peerdeps --dev eslint-config-airbnb-base (airbnb에서 만든 eslint 기준)
    (6-1) npm i eslint-config-airbnb -D
    (6-2) npx i prettier eslint-plugin-node eslint-config-node -D (nodejs eslint)
    (7) eslint 설정
    (7-1) eslint를 -g로 설치했을 경우 eslint --init
    (7-2) eslint를 그냥 설치했을 경우 cd node_modules/ 후에 eslint --init
    (7-3) 설정을 다 하면 eslintrc.js 생성됨.
    (8) eslintrc.js 추가 내용
    (8-1) extends: 'airbnb', 'prettier',
    (8-2) plugins: 'prettier'
    (8-3) rules: {
    quotes: ['error', 'single'], // (2)와 맞추기 위한 설정
    'no-unused-vars': 'warn', // var 안 씀, 경고만 출력 실무에선 error
    'prettier/prettier': 'error', // prettier에 위배되면 실행 안 됨
    'no-console': 'off', // console에 나오지 않음이 off?
    'func-names': 'off', // arrow func 이름 없어도 아무 표시 없음
    'object-shorthand': 'off', // ?
    'class-methods-use-this': 'off', // this를 사용하는 class method 아무 표시 없음
    }
    (9) eslint 실행 안 될시 console에서 eslint . 하면 해당 dir 파일 전부 검사

13. JavaScript (ES6) code snippets & ES7+ React/Redux/React-Native snippets : 자동완성기능

14. Turbo Console log : 설치 안 함. console.log 자동 생성, 자동 전체 주석, 자동 전체 삭제 기능

15. 그 외
    (1) Git Lens : 라인에 마우스를 올려놓으면 해당 라인 commit 시 입력한 message 봄
    (2) Version Lens : npm 버전 체크해줌
    (3) Live Share : 원격으로 여럿이 코딩
    (4) Debugger for Chrome : Chrome 처럼 debug 함
    (5) Settings sync : github gist에 vscode 단축키 설정이나 Extension 설정등을 저장해줌
    (6) Quokka.js : ctrl + shift + P 로 Quokka.js start currunt file.. 하면 console.log 결과가 코드 부분에 자동으로 나옴, 콘솔에는 어떤 라인에서 출력됐는지 표시됨
    (7) GraphQL, Appolo GraphQL
    (8) SVG Previewer
    (9) CSS Grid Snippets
    (10) CSS flexbox CheatSheet
