# sang-t.github.io

김상민 (Sangmin Kim) 개인 학술 홈페이지.
순수 HTML/CSS/JS로 만들었고 GitHub Pages로 배포합니다.

🔗 https://sang-t.github.io

## 구조

| 파일 | 역할 |
| --- | --- |
| `index.html` | 페이지 구조 (인트로 / 연구 / 논문 / 특허 / 경력 / 학력 / 수상 / 연락처) |
| `styles.css` | 스타일. 맨 위 `:root` 블록에서 색·폰트·본문 폭을 한 번에 바꿀 수 있습니다 |
| `app.js` | 한국어/영어 번역 사전, 언어 토글, 다크모드 토글, 상단 탭 현재 위치 표시 |
| `papers/` | 온라인 공개본이 없는 논문 원문 PDF |
| `.nojekyll` | GitHub Pages의 Jekyll 처리를 끕니다 |

본문은 [Pretendard](https://github.com/orioncactus/pretendard),
장식용 숫자·영문 이름은 Playfair Display를 CDN에서 불러옵니다.
강조색은 [PURE Lab 홈페이지](https://cau-purelab.github.io/)의 네이비 계열에 맞췄습니다.

## ⚠️ 개인정보

`.gitignore`가 `*.pdf`와 `*.docx`를 제외합니다.
이력서·포트폴리오 PDF에는 **휴대폰 번호, 집 주소, 생년월일**이 들어 있어
공개 저장소에 올라가면 안 됩니다. 이 규칙을 지우지 마세요.

CV를 사이트에 올리고 싶다면 개인정보를 지운 별도 PDF를 만들어서
`cv.pdf` 같은 이름으로 두고 `.gitignore`에 예외(`!cv.pdf`)를 추가하세요.

## 내용 수정하기

텍스트는 두 군데를 함께 고쳐야 합니다.

1. `index.html` — 화면에 보이는 기본(한국어) 문구
2. `app.js`의 `TRANSLATIONS` — 같은 키의 `ko` / `en` 값

```html
<!-- index.html -->
<p class="intro__role" data-i18n="intro.role">박사과정 (Ph.D. Student)</p>
```

```js
// app.js
ko: { "intro.role": "박사과정 (Ph.D. Student)" },
en: { "intro.role": "Ph.D. Student" },
```

속성이 두 종류입니다.

- `data-i18n` — 텍스트만 바꿉니다. 대부분 여기에 해당합니다.
- `data-i18n-html` — `<span class="me">`처럼 마크업이 섞인 문구에 씁니다.
  저자 목록에서 본인 이름을 굵게 표시할 때 사용합니다.

영문 저자 목록(`Lee, B., Kim, S., …`)처럼 두 언어에서 같은 문구는
`data-i18n` 없이 HTML에 그대로 두었습니다.

### 논문 추가하기

`index.html`의 `<li class="entry">` 한 덩어리를 복사해 맨 위에 붙이고,
연도와 내용을 채웁니다. 배지는 선택 사항입니다.

```html
<li class="entry">
  <div class="entry__year">2026.03</div>
  <div class="entry__body">
    <h3 class="entry__title">논문 제목</h3>
    <p class="entry__authors"><span class="me">Kim, S.</span>, Rho, S.</p>
    <p class="entry__meta">
      <span class="entry__venue">학회 이름</span>, 2026
      <span class="badge badge--first" data-i18n="badge.first">제1저자</span>
    </p>
  </div>
</li>
```

한국어 제목이라 영문 번역이 필요하면 `data-i18n` 키를 새로 만들어
`app.js`의 `ko` / `en` 양쪽에 추가하세요.

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

## 논문 링크

9편 중 8편은 제목을 누르면 원문이 열립니다.

| 논문 | 링크 |
| --- | --- |
| 비가시성 워터마킹 (JPT 2025) | `papers/` 로컬 PDF |
| Discriminator-Guided Unlearning (TRUST-AI 2025) | CEUR-WS |
| Machine Unlearning into SDT (FedCSIS 2025) | Annals of CSIS |
| Online Grooming (CMES 2025) | DOI |
| 보이스피싱 탐지 (한국전자거래학회지 2024) | **없음** |
| Advancing Autoencoder (CMC 2024) | TechScience |
| 교통안전시설물 (KICS 2023) | `papers/` 로컬 PDF |
| RAID (Sustainability 2023) | MDPI |
| 감성대화 말뭉치 (KSCI 2022) | `papers/` 로컬 PDF + DBpia |

## 남은 항목

- [ ] 보이스피싱 논문 (한국전자거래학회지 2024) 링크 — DBpia/KCI 주소나 PDF를
      `papers/` 에 넣고 `index.html`의 해당 항목을 다른 논문처럼 바꾸면 됩니다
- [ ] Google Scholar · ORCID 링크 추가
- [ ] 프로필 사진, OG 이미지
- [ ] 개인정보를 지운 CV PDF
