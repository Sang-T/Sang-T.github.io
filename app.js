/* ------------------------------------------------------------------
 * i18n 사전 (Translation dictionary)
 * HTML 의 data-i18n="키" 와 아래 키가 1:1 로 대응합니다.
 * 문구를 바꾸려면 ko / en 양쪽을 모두 수정하세요.
 * ------------------------------------------------------------------ */
const TRANSLATIONS = {
  ko: {
    "meta.title": "김상민 (Sangmin Kim) — 중앙대학교 융합보안학과 박사과정",
    "meta.description":
      "중앙대학교 융합보안학과 Privacy, Unlearning, and Robust Engineering Lab 박사과정 김상민입니다.",

    skipLink: "본문으로 건너뛰기",

    "nav.about": "소개",
    "nav.research": "연구",
    "nav.publications": "논문",
    "nav.contact": "연락처",

    "hero.eyebrow": "안녕하세요 👋",
    "hero.name": "김상민",
    "hero.role": "박사과정 · 중앙대학교 융합보안학과",
    "hero.tagline":
      "Privacy, Unlearning, and Robust Engineering Lab에서 프라이버시 보호와 머신 언러닝, 그리고 강건한 AI 시스템을 연구하고 있습니다.",
    "hero.ctaPrimary": "논문 보기",
    "hero.ctaSecondary": "이메일 보내기",

    "about.title": "소개",
    "about.p1":
      "중앙대학교 융합보안학과 Privacy, Unlearning, and Robust Engineering Lab에서 박사과정을 밟고 있습니다.",
    "about.p2":
      "학습된 모델에서 특정 정보를 안전하게 지우는 문제와, 그 과정에서 모델의 성능과 신뢰성을 어떻게 지킬 수 있을지에 관심이 있습니다.",
    "about.factAffiliationLabel": "소속",
    "about.factAffiliationValue": "중앙대학교 융합보안학과",
    "about.factLabLabel": "연구실",
    "about.factLabValue": "Privacy, Unlearning, and Robust Engineering Lab",
    "about.factPositionLabel": "과정",
    "about.factPositionValue": "박사과정 (Ph.D. Student)",
    "about.factLocationLabel": "위치",
    "about.factLocationValue": "대한민국 서울",

    "research.title": "연구 관심사",
    "research.g1Title": "프라이버시",
    "research.g1t1": "데이터 프라이버시",
    "research.g1t2": "차분 프라이버시",
    "research.g1t3": "멤버십 추론 공격",
    "research.g2Title": "머신 언러닝",
    "research.g2t1": "머신 언러닝",
    "research.g2t2": "잊힐 권리",
    "research.g2t3": "언러닝 검증",
    "research.g3Title": "강건성 · 신뢰성",
    "research.g3t1": "적대적 강건성",
    "research.g3t2": "모델 신뢰성",
    "research.g3t3": "AI 보안",

    "publications.title": "논문",
    "publications.lead": "아래는 형식 예시입니다. 발표된 논문으로 교체해 주세요.",
    "publications.p1Title": "논문 제목을 입력하세요",
    "publications.p1Venue": "학회 또는 저널 이름, 2026",
    "publications.p2Title": "논문 제목을 입력하세요",
    "publications.p2Venue": "학회 또는 저널 이름, 2025",
    "publications.linkPaper": "논문",
    "publications.linkCode": "코드",

    "contact.title": "연락처",
    "contact.lead": "공동 연구나 궁금한 점이 있다면 언제든 편하게 연락 주세요.",

    "footer.built": "GitHub Pages로 만들었습니다.",
  },

  en: {
    "meta.title": "Sangmin Kim — Ph.D. Student, Chung-Ang University",
    "meta.description":
      "Sangmin Kim, Ph.D. student at the Privacy, Unlearning, and Robust Engineering Lab, Chung-Ang University.",

    skipLink: "Skip to main content",

    "nav.about": "About",
    "nav.research": "Research",
    "nav.publications": "Publications",
    "nav.contact": "Contact",

    "hero.eyebrow": "Hi there 👋",
    "hero.name": "Sangmin Kim",
    "hero.role": "Ph.D. Student · Chung-Ang University",
    "hero.tagline":
      "I study privacy protection, machine unlearning, and robust AI systems at the Privacy, Unlearning, and Robust Engineering Lab.",
    "hero.ctaPrimary": "View publications",
    "hero.ctaSecondary": "Send an email",

    "about.title": "About",
    "about.p1":
      "I am a Ph.D. student at the Privacy, Unlearning, and Robust Engineering Lab, Department of Convergence Security, Chung-Ang University.",
    "about.p2":
      "My interest lies in removing specific information from trained models safely, and in preserving model utility and trustworthiness while doing so.",
    "about.factAffiliationLabel": "Affiliation",
    "about.factAffiliationValue":
      "Dept. of Convergence Security, Chung-Ang University",
    "about.factLabLabel": "Lab",
    "about.factLabValue": "Privacy, Unlearning, and Robust Engineering Lab",
    "about.factPositionLabel": "Position",
    "about.factPositionValue": "Ph.D. Student",
    "about.factLocationLabel": "Location",
    "about.factLocationValue": "Seoul, South Korea",

    "research.title": "Research Interests",
    "research.g1Title": "Privacy",
    "research.g1t1": "Data privacy",
    "research.g1t2": "Differential privacy",
    "research.g1t3": "Membership inference",
    "research.g2Title": "Machine Unlearning",
    "research.g2t1": "Machine unlearning",
    "research.g2t2": "Right to be forgotten",
    "research.g2t3": "Unlearning verification",
    "research.g3Title": "Robustness & Trust",
    "research.g3t1": "Adversarial robustness",
    "research.g3t2": "Model reliability",
    "research.g3t3": "AI security",

    "publications.title": "Publications",
    "publications.lead":
      "The entries below are format examples — replace them with your published work.",
    "publications.p1Title": "Paper title goes here",
    "publications.p1Venue": "Venue or journal name, 2026",
    "publications.p2Title": "Paper title goes here",
    "publications.p2Venue": "Venue or journal name, 2025",
    "publications.linkPaper": "Paper",
    "publications.linkCode": "Code",

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
