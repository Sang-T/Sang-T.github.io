# sang-t.github.io

김상민 (Sangmin Kim) 개인 홈페이지.

중앙대학교 융합보안학과 박사과정, [PURE Lab](https://cau-purelab.github.io/).
연구 관심사와 논문, 특허, 프로젝트, 경력을 한 페이지에 정리했습니다.
한국어/영어 전환과 다크모드를 지원합니다.

🔗 **https://sang-t.github.io**

## 구조

빌드 도구 없이 HTML/CSS/JS 파일 그대로 GitHub Pages로 배포합니다.

```
index.html    페이지 내용
styles.css    스타일 (맨 위 :root 에서 색·폰트·본문 폭 조절)
app.js        한/영 번역 사전, 언어·테마 토글, 상단 탭 표시
assets/       프로필 사진
papers/       논문 PDF
```

## 수정하기

텍스트는 `index.html`(한국어)과 `app.js`의 `TRANSLATIONS`(`ko`/`en`)를
함께 고칩니다. 두 파일은 `data-i18n` 키로 연결됩니다.

```html
<p class="intro__role" data-i18n="intro.role">박사과정 (Ph.D. Student)</p>
```

```js
ko: { "intro.role": "박사과정 (Ph.D. Student)" },
en: { "intro.role": "Ph.D. Student" },
```

항목을 추가할 때는 `<li class="entry">` 한 덩어리를 복사해서 쓰면 됩니다.

로컬에서 확인:

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## 배포

```bash
./deploy.sh "수정 내용"
```

`styles.css`와 `app.js`의 내용 해시를 `index.html`의 `?v=` 에 다시 써넣은 뒤
커밋하고 push합니다. 해시가 바뀌면 브라우저가 캐시를 무시하고 새로 받아가므로
"고쳤는데 화면이 그대로"인 일이 없습니다. 반영까지 1분 정도 걸립니다.

## 주의

`.gitignore`가 `*.pdf`를 제외합니다 (`papers/` 는 예외).
이력서·포트폴리오 같은 문서에는 휴대폰 번호와 주소가 들어 있으니
이 규칙은 그대로 두세요.
