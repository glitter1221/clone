VScode extension
1. Code Spell Checker : 스펠링 체크
2. REST Client : POSTMAN 대체 가능. REST API 실행 결과를 보여줌
3. 단축키로 파일 생성하기(Mac은 Ctrl = Cmd)
 (1) Command Pallet(Ctrl + shift + p)
 (2) Open Keyboard shortcut(JSON) 검색
 (3) [
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

  (4) ctrl+k+f : 자동 정렬