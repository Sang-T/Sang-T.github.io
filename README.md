# sang-t.github.io

개인 포트폴리오 사이트. 순수 HTML/CSS/JS로 만들었고 GitHub Pages로 배포합니다.

🔗 https://sang-t.github.io

## 구조

| 파일 | 역할 |
| --- | --- |
| `index.html` | 페이지 구조 (Hero / 소개 / 기술 / 프로젝트 / 연락처) |
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
<span class="hero__title-accent" data-i18n="hero.role">백엔드 개발자</span>
```

```js
// app.js
ko: { "hero.role": "백엔드 개발자" },
en: { "hero.role": "Backend Engineer" },
```

프로젝트 카드를 늘리려면 `index.html`의 `<article class="card">` 블록을 복사하고,
새 `data-i18n` 키(`projects.p4Title` 등)를 `app.js` 양쪽 언어에 추가하세요.

## 로컬에서 보기

```bash
python3 -m http.server 8000
# http://localhost:8000
```

파일을 더블클릭해서 열어도 동작하지만, 위 방식이 실제 배포 환경과 같습니다.

## 배포

`main` 브랜치에 push하면 GitHub Pages가 자동으로 반영합니다 (보통 1분 이내).

```bash
git add -A && git commit -m "내용 수정" && git push
```

## 남은 할 일

- [ ] 이름·직함·소개 문구를 실제 내용으로 교체
- [ ] 프로젝트 3개를 실제 프로젝트로 교체 (링크 포함)
- [ ] LinkedIn 링크를 본인 프로필 주소로 변경
- [ ] 필요하면 프로필 사진 / OG 이미지 추가
