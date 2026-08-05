# sang-t.github.io

김상민 (Sangmin Kim) 개인 학술 홈페이지.
순수 HTML/CSS/JS로 만들었고 GitHub Pages로 배포합니다.

🔗 https://sang-t.github.io

## 구조

| 파일 | 역할 |
| --- | --- |
| `index.html` | 페이지 구조 (Hero / 소개 / 연구 관심사 / 논문 / 연락처) |
| `styles.css` | 스타일. 맨 위 `:root` 블록에서 색·폰트를 한 번에 바꿀 수 있습니다 |
| `app.js` | 한국어/영어 번역 사전, 언어 토글, 다크모드 토글 |
| `.nojekyll` | GitHub Pages의 Jekyll 처리를 끕니다 (`_` 로 시작하는 파일 보호) |

## 내용 수정하기

텍스트는 두 군데를 함께 고쳐야 합니다.

1. `index.html` — 화면에 보이는 기본(한국어) 문구
2. `app.js`의 `TRANSLATIONS` — 같은 `data-i18n` 키의 `ko` / `en` 값

예를 들어 직함을 바꾸려면:

```html
<!-- index.html -->
<span class="hero__title-accent" data-i18n="hero.role">박사과정 · 중앙대학교 융합보안학과</span>
```

```js
// app.js
ko: { "hero.role": "박사과정 · 중앙대학교 융합보안학과" },
en: { "hero.role": "Ph.D. Student · Chung-Ang University" },
```

### 논문 추가하기

`index.html`의 `<li class="pub">` 블록을 복사한 뒤, 새 `data-i18n` 키
(`publications.p3Title`, `publications.p3Venue` 등)를 `app.js`의 `ko`/`en`
양쪽에 추가하세요. 저자 이름은 언어에 상관없이 같으므로 `data-i18n` 없이
HTML에 직접 씁니다. 본인 이름은 `<strong>`으로 감싸면 강조됩니다.

번호(`[1]`, `[2]`)는 CSS `counter`가 자동으로 매깁니다.

## 로컬에서 보기

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## 배포

`main` 브랜치에 push하면 GitHub Pages가 자동으로 반영합니다 (보통 1분 이내).

```bash
git add -A && git commit -m "내용 수정" && git push
```

## 남은 할 일

- [ ] 소개 두 번째 문단(`about.p2`)을 실제 연구 동기·지향점으로 교체
- [ ] 연구 관심사 태그를 실제 세부 주제로 조정
- [ ] 예시 논문 2건을 실제 논문으로 교체 (링크 포함), 없으면 섹션 삭제
- [ ] Google Scholar 링크를 본인 프로필 주소로 변경
- [ ] 필요하면 학력(Education) 섹션, 프로필 사진, OG 이미지 추가
- [ ] 영문 소속 표기 확인 — 현재 "Department of Convergence Security, Chung-Ang University"
