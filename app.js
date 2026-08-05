/* ------------------------------------------------------------------
 * i18n 사전 (Translation dictionary)
 * HTML 의 data-i18n="키" 와 아래 키가 1:1 로 대응합니다.
 * 문구를 바꾸려면 ko / en 양쪽을 모두 수정하세요.
 * ------------------------------------------------------------------ */
const TRANSLATIONS = {
  ko: {
    "meta.title": "김상민 — 포트폴리오",
    "meta.description": "김상민의 개인 포트폴리오 사이트",

    skipLink: "본문으로 건너뛰기",

    "nav.about": "소개",
    "nav.skills": "기술",
    "nav.projects": "프로젝트",
    "nav.contact": "연락처",

    "hero.eyebrow": "안녕하세요 👋",
    "hero.name": "김상민",
    "hero.role": "백엔드 개발자",
    "hero.tagline":
      "견고한 시스템을 설계하고, 복잡한 문제를 단순하게 만드는 일을 좋아합니다.",
    "hero.ctaPrimary": "프로젝트 보기",
    "hero.ctaSecondary": "이메일 보내기",

    "about.title": "소개",
    "about.p1":
      "사용자에게 실제로 가치를 주는 제품을 만드는 데 관심이 많습니다. 읽기 쉬운 코드와 명확한 문서가 좋은 소프트웨어의 시작이라고 믿습니다.",
    "about.p2":
      "현재는 웹 백엔드와 인프라 자동화를 중심으로 일하고 있으며, 새로운 기술을 배워 팀에 전파하는 것을 즐깁니다.",
    "about.factLocationLabel": "위치",
    "about.factLocationValue": "대한민국 서울",
    "about.factFocusLabel": "관심 분야",
    "about.factFocusValue": "백엔드 · 분산 시스템 · DX",
    "about.factStatusLabel": "상태",
    "about.factStatusValue": "새로운 기회에 열려 있습니다",

    "skills.title": "기술",
    "skills.g1Title": "언어",
    "skills.g2Title": "프레임워크",
    "skills.g3Title": "인프라 · 도구",

    "projects.title": "프로젝트",
    "projects.p1Title": "프로젝트 이름 1",
    "projects.p1Desc":
      "프로젝트에 대한 두세 줄 설명을 적으세요. 무엇을 만들었고, 어떤 문제를 풀었으며, 어떤 결과를 냈는지 쓰면 좋습니다.",
    "projects.p2Title": "프로젝트 이름 2",
    "projects.p2Desc":
      "사용한 기술 스택과 맡은 역할을 함께 적으면 읽는 사람이 이해하기 쉽습니다.",
    "projects.p3Title": "프로젝트 이름 3",
    "projects.p3Desc":
      "숫자로 표현할 수 있는 성과가 있다면 꼭 넣으세요. 예: 응답 시간 40% 개선.",
    "projects.linkCode": "코드",
    "projects.linkDemo": "데모",

    "contact.title": "연락처",
    "contact.lead": "협업 제안이나 궁금한 점이 있다면 언제든 편하게 연락 주세요.",

    "footer.built": "GitHub Pages로 만들었습니다.",
  },

  en: {
    "meta.title": "Sangmin Kim — Portfolio",
    "meta.description": "Personal portfolio of Sangmin Kim",

    skipLink: "Skip to main content",

    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.eyebrow": "Hi there 👋",
    "hero.name": "Sangmin Kim",
    "hero.role": "Backend Engineer",
    "hero.tagline":
      "I design dependable systems and enjoy turning complicated problems into simple ones.",
    "hero.ctaPrimary": "View projects",
    "hero.ctaSecondary": "Send an email",

    "about.title": "About",
    "about.p1":
      "I care about building products that create real value for the people using them. Readable code and clear documentation are where good software starts.",
    "about.p2":
      "These days I focus on web backends and infrastructure automation, and I enjoy learning new tools and sharing them with my team.",
    "about.factLocationLabel": "Location",
    "about.factLocationValue": "Seoul, South Korea",
    "about.factFocusLabel": "Focus",
    "about.factFocusValue": "Backend · Distributed systems · DX",
    "about.factStatusLabel": "Status",
    "about.factStatusValue": "Open to new opportunities",

    "skills.title": "Skills",
    "skills.g1Title": "Languages",
    "skills.g2Title": "Frameworks",
    "skills.g3Title": "Infrastructure & Tools",

    "projects.title": "Projects",
    "projects.p1Title": "Project name 1",
    "projects.p1Desc":
      "Write two or three lines about the project: what you built, which problem it solved, and what the outcome was.",
    "projects.p2Title": "Project name 2",
    "projects.p2Desc":
      "Mentioning the stack you used along with your own role makes it much easier to follow.",
    "projects.p3Title": "Project name 3",
    "projects.p3Desc":
      "Include measurable results whenever you have them — e.g. cut response time by 40%.",
    "projects.linkCode": "Code",
    "projects.linkDemo": "Demo",

    "contact.title": "Contact",
    "contact.lead":
      "Feel free to reach out about collaborations or anything you're curious about.",

    "footer.built": "Built with GitHub Pages.",
  },
};

const LANG_KEY = "site:lang";
const THEME_KEY = "site:theme";

/* ---------------- Language ---------------- */

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });

  document.title = dict["meta.title"];
  document
    .querySelectorAll('meta[name="description"], meta[property="og:description"]')
    .forEach((el) => el.setAttribute("content", dict["meta.description"]));
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute("content", dict["meta.title"]);

  document.querySelectorAll(".lang-toggle__btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    /* private mode 등에서 저장 실패는 무시 */
  }
}

function initialLanguage() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && TRANSLATIONS[saved]) return saved;
  } catch {
    /* ignore */
  }
  return navigator.language?.toLowerCase().startsWith("ko") ? "ko" : "en";
}

/* ---------------- Theme ---------------- */

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  const icon = document.querySelector("[data-theme-icon]");
  if (icon) icon.textContent = theme === "dark" ? "☾" : "☀";

  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* ignore */
  }
}

function initialTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* ignore */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/* ---------------- Wire up ---------------- */

applyLanguage(initialLanguage());
applyTheme(initialTheme());

document.querySelectorAll(".lang-toggle__btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

document.getElementById("theme-toggle")?.addEventListener("click", () => {
  const next =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
});

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
