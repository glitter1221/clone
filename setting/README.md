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

 4. ctrl+k+f : 자동 정렬

 5. File Utils : 파일 생성, 삭제, 이동*
  (1) ctrl + shift + P
  (2) File Utils: move
  (3) directory change   

 6. Auto Rename Tag : <>를 수정하면 </>도 같이 수정됨.

 7. Live Sass Compiler : sass compiler.
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

 8. HTML CSS Support : html과 css 자동완성

 9. IntelliSense for CSS class names in HTML : class를 중복 사용하지 않게 해 줌. (미설치)

 10. CSS peek : class 명 ctrl + click 시 바로가기 제공