/* ==================================================================
 * 번역 사전
 *
 * HTML 의 data-i18n="키"      → 해당 요소의 텍스트를 바꿉니다.
 * HTML 의 data-i18n-html="키" → 마크업이 포함된 값을 넣습니다.
 *                               (저자 이름의 <span class="me"> 강조용)
 *
 * 문구를 고칠 때는 ko / en 두 곳을 함께 수정하세요.
 * ================================================================== */
const TRANSLATIONS = {
  /* ---------------------------------------------------------------- 한국어 */
  ko: {
    "meta.title": "김상민 (Sangmin Kim)",
    "meta.description":
      "중앙대학교 융합보안학과 박사과정 김상민입니다. 머신 언러닝과 프라이버시 보호, 신뢰할 수 있는 AI를 연구합니다.",

    skipLink: "본문으로 건너뛰기",

    "nav.brand": "김상민",
    "nav.research": "연구",
    "nav.publications": "논문",
    "nav.experience": "경력",
    "nav.awards": "수상",
    "nav.contact": "연락처",

    "intro.name": "김상민",
    "intro.nameSub": "Sangmin Kim",
    "intro.role": "박사과정 (Ph.D. Student)",
    "intro.affil":
      "중앙대학교 융합보안학과 · Privacy, Unlearning, and Robust Engineering Lab",
    "intro.bio":
      "시계열과 텍스트 등 다양한 도메인의 데이터를 예측하고 분류하는 연구를 해 왔습니다. 보이스피싱 의심 발언 탐지, 온라인 그루밍 탐지처럼 AI로 사회 문제를 풀어 공공 영역에 기여하는 연구를 수행했고, 최근에는 머신 언러닝을 활용해 개인정보 보호와 신뢰성을 동시에 만족하는 AI 모델을 만드는 연구에 집중하고 있습니다.",
    "intro.linkEmail": "이메일",
    "intro.linkPortfolio": "포트폴리오",
    "intro.linkPubs": "논문",

    "research.title": "연구 관심사",
    "research.i1Title": "머신 언러닝",
    "research.i1Desc":
      "전체 재학습 없이 학습된 모델에서 특정 클래스나 데이터의 영향을 선택적으로 제거하는 방법을 연구합니다. 소프트 결정 트리로의 지식 증류, 판별자를 활용한 조건부 GAN 언러닝, 스트리밍 환경의 온라인 언러닝을 다뤘습니다.",
    "research.i1t1": "클래스 단위 언러닝",
    "research.i1t2": "생성 모델 언러닝",
    "research.i1t3": "온라인 언러닝",
    "research.i2Title": "프라이버시와 신뢰할 수 있는 AI",
    "research.i2Desc":
      "GDPR의 잊힐 권리처럼 강화되는 규제 환경에서, 모델이 민감 정보를 실제로 잊었는지 검증하는 문제에 관심이 있습니다. 멤버십 추론 공격과 모델 역전 공격을 이용한 언러닝 검증, 그리고 SHAP 기반 해석 가능성을 함께 다룹니다.",
    "research.i2t1": "잊힐 권리",
    "research.i2t2": "멤버십 추론 공격",
    "research.i2t3": "설명 가능한 AI",
    "research.i3Title": "보안 문제에 적용하는 AI",
    "research.i3Desc":
      "보이스피싱과 온라인 그루밍처럼 실제 피해가 발생하는 문제를 자연어 처리와 OCR로 탐지하고, 산업 제어 시스템의 시계열 이상 탐지와 네트워크 침입 탐지로 범위를 넓혀 왔습니다.",
    "research.i3t1": "자연어 처리",
    "research.i3t2": "이상 탐지",
    "research.i3t3": "침입 탐지",

    "badge.first": "제1저자",
    "badge.journal": "저널",
    "badge.conference": "학회",
    "badge.workshop": "워크숍",
    "badge.granted": "등록",
    "badge.filed": "출원",
    "link.paper": "논문",

    "publications.title": "논문",
    "publications.note": "최신순 · 굵은 이름이 본인입니다.",

    "publications.p1Title":
      "비가시성 워터마킹과 선택적 클래스 언러닝을 통합한 이미지 생성 프레임워크",
    "publications.p1Authors":
      '<span class="todo">저자 확인 필요</span> · <span class="me">김상민</span> 제3저자',

    "publications.p2Venue": "ECAI 2025 Workshop on Trustworthy AI (TRUST-AI)",
    "publications.p2Desc":
      "판별자의 판별 능력을 의도적으로 약화시켜 생성자가 특정 클래스를 만들지 않도록 유도합니다. 재학습 대비 80% 이상 시간을 줄이면서 나머지 클래스의 이미지 품질을 유지했습니다.",

    "publications.p3Venue": "FedCSIS 2025, Thematic Session",
    "publications.p3Desc":
      "CNN 교사 모델의 지식을 소프트 결정 트리로 증류한 뒤, 리프 노드의 확률 분포와 경로 가중치를 조정해 클래스 단위로 언러닝합니다. 전체 재학습보다 빠르면서 비대상 클래스의 성능 손실을 최소화했습니다.",

    "publications.p4Desc":
      "SNS 대화 이미지에서 OCR로 텍스트를 추출하고 KcELECTRA로 성적 발언·일반 발언·혐오 표현을 분류합니다. 정확도 0.953으로 비교한 트랜스포머 계열 모델들을 앞섰습니다.",

    "publications.p5Title":
      "딥러닝 기반 NLP 및 지식증류기법을 활용한 보이스피싱 의심 발언 탐지",
    "publications.p5Authors": '<span class="me">김상민</span>, 노승민',
    "publications.p5Venue": "한국전자거래학회지",
    "publications.p5Desc":
      "Whisper로 통화 음성을 텍스트로 바꾸고, KoELECTRA-base를 교사, small을 학생으로 지식 증류를 적용했습니다. 모바일 온디바이스 적용을 염두에 둔 경량 모델입니다.",

    "publications.p6Desc":
      "1D 합성곱과 양방향 LSTM을 결합한 ConvBiLSTM-AE로 산업 제어 시스템의 다변량 시계열 이상을 비지도 학습으로 탐지합니다. HAI 23.05 데이터셋으로 검증했습니다.",

    "publications.p7Title":
      "교통안전시설물 및 보행자 유무에 따른 차량 속도와의 관계 연구",
    "publications.p7Authors":
      '<span class="todo">저자 확인 필요</span> · <span class="me">김상민</span> 제3저자',
    "publications.p7Venue": "한국통신학회 인공지능 학술대회 논문집",
    "publications.p7Desc":
      "YOLOv7과 DeepSORT로 어린이 보호구역 CCTV 영상을 분석해, 신호등·과속방지턱과 보행자 유무가 차량 속도에 미치는 영향을 정량적으로 비교했습니다.",

    "publications.p8Desc":
      "요일별로 분리한 7개의 MLP로 건물 일일 최대 전력 수요를 예측하고, Kernel SHAP으로 각 입력 변수의 기여도를 설명합니다.",

    "publications.p9Title": "감성대화 말뭉치로 보는 청소년의 문제 도출",
    "publications.p9Authors": '<span class="me">김상민</span>, 이병천, 우지영',
    "publications.p9Venue": "한국컴퓨터정보학회 학술발표논문집",
    "publications.p9Desc":
      "AI-Hub 감성대화 말뭉치 40,879건을 분석해 청소년이 겪는 주요 문제와 감정 분포의 관계를 밝혔습니다.",

    "patents.title": "특허",
    "patents.t1Title":
      "통화 중 실시간으로 보이스피싱의 맥락을 인식하는 장치 및 동작 방법",
    "patents.t1Authors":
      '노병준, <span class="me">김상민</span>, 이병천, 정운영',
    "patents.t1Meta": "등록특허 제10-2984271호 · 순천향대학교 산학협력단",
    "patents.t1Sub":
      "출원 2024.04.11 (10-2024-0048439) · 공개 2025.10.20 (10-2025-0150195) · 등록 2026.06.25",
    "patents.t1Desc":
      "통화 음성을 텍스트로 변환하는 경로와 속도·음조·음량 등 음성 특징을 추출하는 경로를 병렬로 두고, 두 정보를 함께 사용해 위험도를 산출합니다. 서버 통신 없이 단말에서 실시간으로 보이스피싱을 탐지합니다. 청구항 9항.",
    "patents.t2Title":
      "통화 중 실시간으로 보이스피싱의 맥락을 인식하는 장치 및 동작 방법",
    "patents.t2Authors":
      '노병준, <span class="me">김상민</span>, 이병천, 정운영',
    "patents.t2Meta": "PCT 국제 출원 (PCT/KR2025-004854) · 순천향대학교",

    "experience.title": "경력",
    "experience.e1Title": "한국전자통신연구원 (ETRI) · 연구연수생",
    "experience.e1Desc":
      "SNS상 온라인 그루밍 위험성 자가탐지 기술 개발 과제에 참여했습니다. 텍스트 수집과 라벨링 기준 수립, 전처리 코드 구현을 맡았고 KoBERT·RoBERTa·KcELECTRA 등 한국어 사전학습 모델을 파인튜닝해 비교했습니다.",
    "experience.e2Title": "LG CNS · 스마트팩토리 부서 인턴",
    "experience.e2Desc":
      "생산 실행 시스템(GMES)에 없던 소형 Cell 반품 확정 기능을 개발했습니다. 반품 요청 인터페이스 발송 로직과 종료 로직을 수정하고, C#/WPF로 프로시저 조회 시스템을 구현했습니다.",
    "experience.e3Title": "한국전자통신연구원 (ETRI) · 연구연수생",
    "experience.e3Desc":
      "공공기반 재활운동 빅데이터 플랫폼 기술 개발 과제에 참여했습니다. 임상 raw 데이터를 자동으로 전처리해 JSON으로 변환하고 RESTful API로 DB에 적재하는 코드를 만들었습니다.",

    "education.title": "학력",
    "education.d1Year": "2026.03<br />– 현재",
    "education.d1Title": "중앙대학교 융합보안학과 박사과정",
    "education.d1Desc": "Privacy, Unlearning, and Robust Engineering Lab",
    "education.d2Title": "중앙대학교 융합보안학과 석사",
    "education.d2Desc": "산업보안기술 전공 · 학점 4.35 / 4.5",
    "education.d3Title": "순천향대학교 AI·빅데이터학과 학사",
    "education.d3Desc": "융합창업학부 SW스타트업 복수전공 · 학점 4.08 / 4.5",

    "awards.title": "수상 및 활동",
    "awards.a1Title": "우수 논문상 · 한국전자거래학회 추계학술대회",
    "awards.a1Desc": "패턴 보존 기반 생성 모델의 클래스 선택적 언러닝 프레임워크",
    "awards.a2Title": "최우수상 · 한국전자거래학회 대학(원)생 아이디어 공모전",
    "awards.a2Desc": "OMU-NIDS — 온라인 머신 언러닝 기반 네트워크 침입 탐지 시스템",
    "awards.a3Title": "2025 금융 AI Challenge · 283팀 중 15위",
    "awards.a3Desc":
      "금융 법령 문서를 지식베이스로 삼는 RAG 기반 질의응답 모델. BM25와 FAISS 하이브리드 검색, 재순위화, 문서 압축을 적용했습니다.",
    "awards.a4Title": "LG Aimers 6기 · 794팀 중 45위 (상위 5%)",
    "awards.a4Desc":
      "난임 환자 대상 임신 성공 확률 예측. LGBM·XGBoost·CatBoost 앙상블.",
    "awards.a5Title": "장려상 · 중앙대학교 가상자산 추적대회",
    "awards.a5Desc": "Chainalysis 활용",
    "awards.a6Title": "장려상 · DID 비즈니스 모델 특허 공모전",
    "awards.a6Desc": "한국전자거래학회 · 분산 신원 인증 기반 캠퍼스 통합 로그인",
    "awards.a7Title": "실습 조교 · 안전한 데이터 활용 전문가 과정",
    "awards.a7Desc": "중앙대학교 재직자 대상 단기교육 (Data & Privacy)",
    "awards.a8Title": "LG Aimers 4기 · 상위 7%",
    "awards.a8Desc": "MQL 데이터 기반 B2B 영업 기회 창출 예측",
    "awards.a9Title": "대상 · 순천향대학교 SW·AI 페스티벌",
    "awards.a9Desc": "딥러닝과 OCR을 이용한 SNS상 온라인 그루밍 탐지",

    "contact.title": "연락처",
    "contact.lead": "공동 연구나 궁금한 점이 있다면 편하게 연락 주세요.",
    "contact.emailLabel": "이메일",
    "contact.portfolioLabel": "포트폴리오",
    "contact.portfolioValue": "Notion 포트폴리오",
    "contact.locationLabel": "위치",
    "contact.locationValue": "서울특별시 동작구",
  },

  /* ------------------------------------------------------------------ 영어 */
  en: {
    "meta.title": "Sangmin Kim",
    "meta.description":
      "Sangmin Kim, Ph.D. student at Chung-Ang University. Machine unlearning, privacy, and trustworthy AI.",

    skipLink: "Skip to main content",

    "nav.brand": "Sangmin Kim",
    "nav.research": "Research",
    "nav.publications": "Publications",
    "nav.experience": "Experience",
    "nav.awards": "Awards",
    "nav.contact": "Contact",

    "intro.name": "Sangmin Kim",
    "intro.nameSub": "김상민",
    "intro.role": "Ph.D. Student",
    "intro.affil":
      "Dept. of Security Convergence, Chung-Ang University · Privacy, Unlearning, and Robust Engineering Lab",
    "intro.bio":
      "My work has centered on forecasting and classification across domains such as time series and text. I have applied AI to problems with real social cost — detecting voice-phishing utterances and online grooming — and I now focus on machine unlearning: building models that satisfy privacy requirements and remain trustworthy at the same time.",
    "intro.linkEmail": "Email",
    "intro.linkPortfolio": "Portfolio",
    "intro.linkPubs": "Publications",

    "research.title": "Research Interests",
    "research.i1Title": "Machine Unlearning",
    "research.i1Desc":
      "I study how to selectively remove the influence of a class or a dataset from a trained model without retraining it from scratch — through knowledge distillation into soft decision trees, discriminator-guided unlearning for conditional GANs, and online unlearning in streaming settings.",
    "research.i1t1": "Class-level unlearning",
    "research.i1t2": "Generative model unlearning",
    "research.i1t3": "Online unlearning",
    "research.i2Title": "Privacy & Trustworthy AI",
    "research.i2Desc":
      "As regulations such as the GDPR right to be forgotten tighten, verifying that a model has genuinely forgotten sensitive information becomes the harder question. I work on unlearning verification through membership inference and model inversion attacks, alongside SHAP-based interpretability.",
    "research.i2t1": "Right to be forgotten",
    "research.i2t2": "Membership inference",
    "research.i2t3": "Explainable AI",
    "research.i3Title": "AI for Security Problems",
    "research.i3Desc":
      "Detecting voice phishing and online grooming with NLP and OCR, then extending the same lens to time-series anomaly detection in industrial control systems and to network intrusion detection.",
    "research.i3t1": "Natural language processing",
    "research.i3t2": "Anomaly detection",
    "research.i3t3": "Intrusion detection",

    "badge.first": "First author",
    "badge.journal": "Journal",
    "badge.conference": "Conference",
    "badge.workshop": "Workshop",
    "badge.granted": "Granted",
    "badge.filed": "Filed",
    "link.paper": "Paper",

    "publications.title": "Publications",
    "publications.note": "Reverse chronological · my name in bold.",

    "publications.p1Title":
      "An Image Generation Framework Integrating Invisible Watermarking and Selective Class Unlearning",
    "publications.p1Authors":
      '<span class="todo">Authors to be confirmed</span> · <span class="me">Kim, S.</span> third author',

    "publications.p2Venue": "ECAI 2025 Workshop on Trustworthy AI (TRUST-AI)",
    "publications.p2Desc":
      "Deliberately weakening the discriminator so the generator stops producing a target class. Cuts more than 80% of the time retraining would take while preserving image quality for the remaining classes.",

    "publications.p3Venue": "FedCSIS 2025, Thematic Session",
    "publications.p3Desc":
      "Distills a CNN teacher into a soft decision tree, then unlearns a class by redistributing leaf-node probabilities and weakening the routing weights along the path. Faster than full retraining, with minimal loss on non-target classes.",

    "publications.p4Desc":
      "Extracts text from SNS conversation images via OCR and classifies it into sexually explicit, normal, and hate speech with KcELECTRA, reaching 0.953 accuracy and outperforming the Transformer baselines compared.",

    "publications.p5Title":
      "Detection of Suspicious Voice Phishing Utterances Using Deep Learning-Based NLP and Knowledge Distillation",
    "publications.p5Authors":
      '<span class="me">Kim, S.</span>, &amp; Rho, S.',
    "publications.p5Venue": "The Journal of Society for e-Business Studies",
    "publications.p5Desc":
      "Transcribes call audio with Whisper, then distills KoELECTRA-base into KoELECTRA-small — a lightweight model designed with on-device mobile deployment in mind.",

    "publications.p6Desc":
      "ConvBiLSTM-AE combines 1D convolution with bidirectional LSTM to detect anomalies in multivariate industrial control-system time series through unsupervised learning, validated on the HAI 23.05 dataset.",

    "publications.p7Title":
      "A Study on the Relationship Between Vehicle Speed, Traffic Safety Facilities, and Pedestrian Presence",
    "publications.p7Authors":
      '<span class="todo">Authors to be confirmed</span> · <span class="me">Kim, S.</span> third author',
    "publications.p7Venue":
      "Proceedings of the KICS Conference on Artificial Intelligence",
    "publications.p7Desc":
      "Analyzes school-zone CCTV footage with YOLOv7 and DeepSORT to quantify how traffic lights, speed bumps, and pedestrian presence affect vehicle speed.",

    "publications.p8Desc":
      "Forecasts daily peak load for buildings using seven day-of-week-specific MLPs, and explains each input variable's contribution with Kernel SHAP.",

    "publications.p9Title":
      "Deriving Adolescent Problems from an Emotional Dialogue Corpus",
    "publications.p9Authors":
      '<span class="me">Kim, S.</span>, Lee, B., &amp; Woo, J.',
    "publications.p9Venue":
      "Proceedings of the Korean Society of Computer Information Conference",
    "publications.p9Desc":
      "Analyzes 40,879 utterances from the AI-Hub emotional dialogue corpus to relate the problems adolescents face to their emotional distribution.",

    "patents.title": "Patents",
    "patents.t1Title":
      "Apparatus and Method for Real-Time Recognition of Voice Phishing Context During a Call",
    "patents.t1Authors":
      'Noh, B., <span class="me">Kim, S.</span>, Lee, B., &amp; Jeong, W.',
    "patents.t1Meta":
      "Korean Patent No. 10-2984271 · Soonchunhyang University IACF",
    "patents.t1Sub":
      "Filed 2024.04.11 (10-2024-0048439) · Published 2025.10.20 (10-2025-0150195) · Granted 2026.06.25",
    "patents.t1Desc":
      "Runs two parallel paths over call audio — one transcribing speech to text, the other extracting acoustic features such as rate, pitch, and volume — and combines both to score risk. Detects voice phishing in real time on the device, with no server round trip. 9 claims.",
    "patents.t2Title":
      "Apparatus and Method for Real-Time Recognition of Voice Phishing Context During a Call",
    "patents.t2Authors":
      'Noh, B., <span class="me">Kim, S.</span>, Lee, B., &amp; Jeong, W.',
    "patents.t2Meta":
      "PCT international application (PCT/KR2025-004854) · Soonchunhyang University",

    "experience.title": "Experience",
    "experience.e1Title":
      "ETRI (Electronics and Telecommunications Research Institute) · Research Intern",
    "experience.e1Desc":
      "Worked on a project for self-detection of online grooming risk on social networks. Collected and labeled text, defined the labeling criteria, wrote the preprocessing pipeline, and fine-tuned Korean pretrained models including KoBERT, RoBERTa, and KcELECTRA for comparison.",
    "experience.e2Title": "LG CNS · Smart Factory Intern",
    "experience.e2Desc":
      "Built a small-cell return confirmation feature that the GMES manufacturing execution system lacked — revising the return-request interface and termination logic, and implementing a procedure lookup tool in C#/WPF.",
    "experience.e3Title":
      "ETRI (Electronics and Telecommunications Research Institute) · Research Intern",
    "experience.e3Desc":
      "Worked on a public rehabilitation-exercise big data platform. Wrote code that automatically preprocessed raw clinical data into JSON and loaded it into the database through a RESTful API.",

    "education.title": "Education",
    "education.d1Year": "2026.03<br />– present",
    "education.d1Title":
      "Ph.D. in Security Convergence, Chung-Ang University",
    "education.d1Desc": "Privacy, Unlearning, and Robust Engineering Lab",
    "education.d2Title":
      "M.S. in Security Convergence, Chung-Ang University",
    "education.d2Desc": "Industrial Security Technology · GPA 4.35 / 4.5",
    "education.d3Title":
      "B.S. in AI & Big Data, Soonchunhyang University",
    "education.d3Desc":
      "Double major in SW Startup, School of Convergence Entrepreneurship · GPA 4.08 / 4.5",

    "awards.title": "Awards & Activities",
    "awards.a1Title":
      "Best Paper Award · KSEBS Fall Conference",
    "awards.a1Desc":
      "A pattern-preserving class-selective unlearning framework for generative models",
    "awards.a2Title":
      "Grand Prize · KSEBS Student Idea Competition",
    "awards.a2Desc":
      "OMU-NIDS — an online machine unlearning-based network intrusion detection system",
    "awards.a3Title": "2025 Financial AI Challenge · 15th of 283 teams",
    "awards.a3Desc":
      "A RAG question-answering model over financial regulation documents, using hybrid BM25 + FAISS retrieval, reranking, and contextual compression.",
    "awards.a4Title": "LG Aimers 6th · 45th of 794 teams (top 5%)",
    "awards.a4Desc":
      "Predicting pregnancy success for infertility patients with an LGBM / XGBoost / CatBoost ensemble.",
    "awards.a5Title":
      "Encouragement Award · Chung-Ang University Cryptocurrency Tracing Competition",
    "awards.a5Desc": "Using Chainalysis",
    "awards.a6Title":
      "Encouragement Award · DID Business Model Patent Competition",
    "awards.a6Desc":
      "KSEBS · Campus single sign-on based on decentralized identifiers",
    "awards.a7Title":
      "Teaching Assistant · Safe Data Utilization Expert Program",
    "awards.a7Desc":
      "Chung-Ang University short course for working professionals (Data & Privacy)",
    "awards.a8Title": "LG Aimers 4th · Top 7%",
    "awards.a8Desc":
      "Predicting B2B sales opportunity conversion from MQL data",
    "awards.a9Title":
      "Grand Prize · Soonchunhyang University SW·AI Festival",
    "awards.a9Desc":
      "Detecting online grooming on social networks with deep learning and OCR",

    "contact.title": "Contact",
    "contact.lead":
      "Feel free to reach out about collaborations or anything you're curious about.",
    "contact.emailLabel": "Email",
    "contact.portfolioLabel": "Portfolio",
    "contact.portfolioValue": "Notion portfolio",
    "contact.locationLabel": "Location",
    "contact.locationValue": "Dongjak-gu, Seoul, South Korea",
  },
};

const LANG_KEY = "site:lang";
const THEME_KEY = "site:theme";

/* ---------------------------------------------------------------- 언어 */

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });

  // 마크업이 포함된 문구 (사전 값은 우리가 직접 작성한 것만 들어갑니다)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const value = dict[el.dataset.i18nHtml];
    if (value !== undefined) el.innerHTML = value;
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
    /* 시크릿 모드 등에서 저장이 막혀도 동작에는 문제가 없습니다 */
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

/* ---------------------------------------------------------------- 테마 */

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

/* ---------------------------------------------------------------- 연결 */

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
