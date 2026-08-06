/* ==================================================================
 * 번역 사전
 *
 * HTML 의 data-i18n="키"      → 해당 요소의 텍스트를 바꿉니다.
 * HTML 의 data-i18n-html="키" → 마크업이 포함된 값을 넣습니다.
 *                               (저자 이름의 <span class="me"> 강조용)
 * HTML 의 data-i18n-alt="키"  → 이미지의 alt 속성을 바꿉니다.
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
    "nav.patents": "특허",
    "nav.projects": "프로젝트",
    "nav.experience": "경력",
    "nav.education": "학력",
    "nav.awards": "수상",
    "nav.contact": "연락처",

    "intro.photoAlt": "김상민",
    "intro.name": "김상민",
    "intro.nameSub": "Sangmin Kim",
    "intro.role": "박사과정 (Ph.D. Student)",
    "intro.affil":
      '중앙대학교 융합보안학과 · <a href="https://cau-purelab.github.io/" target="_blank" rel="noopener">PURE Lab</a>',
    "intro.bio":
      "시계열과 텍스트 등 여러 도메인의 데이터를 예측하고 분류하는 연구를 해 왔습니다. 보이스피싱과 온라인 그루밍 탐지처럼 AI로 사회 문제를 푸는 연구를 수행했습니다. 지금은 머신 언러닝으로 개인정보 보호와 신뢰성을 함께 만족하는 모델을 만듭니다.",
    "intro.linkEmail": "이메일 보내기",
    "intro.linkPortfolio": "포트폴리오",

    "research.title": "연구 관심사",
    "research.i1Desc":
      "학습이 끝난 모델에서 특정 클래스나 데이터의 영향만 골라 지우는 방법을 연구합니다. 트리 모델과 GAN에서의 언러닝을 다뤘고, 최근에는 LLM을 활용한 효율적인 언러닝 기법을 연구하고 있습니다.",
    "research.i2Desc":
      "보이스피싱과 온라인 그루밍처럼 실질적인 피해로 이어지는 범죄를 AI로 탐지하고, 잊힐 권리 같은 규제 아래에서 모델이 민감 정보를 실제로 잊었는지 공격 기법으로 검증합니다.",
    "research.i3Desc":
      "법령처럼 방대한 문서를 근거로 답하게 하는 검색 증강 생성, 큰 모델의 성능을 유지하면서 크기를 줄이는 경량화, 환각을 줄이는 검색 구조 설계를 함께 다룹니다.",

    "badge.first": "제1저자",
    "badge.journal": "저널",
    "badge.conference": "학회",
    "badge.workshop": "워크숍",
    "badge.granted": "등록",
    "badge.filed": "출원",
    "badge.grandPrize": "최우수상",
    "badge.encouragement": "장려상",

    "publications.title": "논문",
    "publications.note":
      "최신순 · 굵은 이름이 본인입니다. 제목을 누르면 원문으로 이동합니다.",

    "publications.p1Title":
      "비가시성 워터마킹과 선택적 클래스 언러닝을 통합한 이미지 생성 프레임워크",
    "publications.p1Authors":
      '박성우, 이병천, <span class="me">김상민</span>, 채승엽, 이미영, 노승민',
    "publications.p1Desc":
      "생성 모델에서 특정 클래스를 지우는 언러닝과, 생성물의 출처를 확인하는 비가시성 워터마킹을 하나의 프레임워크로 묶었습니다. 두 기술을 따로 다뤄 온 기존 연구와 다른 접근입니다.",

    "publications.p2Venue": "ECAI 2025 Workshop on Trustworthy AI (TRUST-AI)",
    "publications.p2Desc":
      "판별자의 판별 능력을 의도적으로 약화시켜 생성자가 특정 클래스를 만들지 않도록 유도합니다. 재학습 대비 80% 이상 시간을 줄이면서 나머지 클래스의 이미지 품질을 유지했습니다.",

    "publications.p3Venue": "FedCSIS 2025, Thematic Session",
    "publications.p3Desc":
      "CNN 교사 모델의 지식을 소프트 결정 트리로 증류한 뒤, 리프 노드의 확률 분포와 경로 가중치를 조정해 클래스 단위로 언러닝합니다. 재학습보다 빠르고 손실도 적습니다.",

    "publications.p4Desc":
      "SNS 대화 이미지에서 OCR로 텍스트를 추출하고 KcELECTRA로 성적 발언·일반 발언·혐오 표현을 분류합니다. 정확도 0.953으로 비교한 트랜스포머 계열 모델들을 앞섰습니다.",

    "publications.p5Title":
      "딥러닝 기반 NLP 및 지식증류기법을 활용한 보이스피싱 의심 발언 탐지",
    "publications.p5Authors": '<span class="me">김상민</span>, 노승민',
    "publications.p5Venue": "한국전자거래학회지",
    "publications.p5Desc":
      "Whisper로 통화 음성을 텍스트로 바꾸고, KoELECTRA-base를 교사로 small 모델에 지식을 증류했습니다. 정확도 0.96을 지키면서 온디바이스 적용 가능성을 보였습니다.",

    "publications.p6Desc":
      "1D 합성곱과 양방향 LSTM을 결합한 ConvBiLSTM-AE로 산업 제어 시스템의 다변량 시계열 이상을 비지도 학습으로 탐지합니다. HAI 23.05 데이터셋으로 검증했습니다.",

    "publications.p7Title":
      "교통안전시설물 및 보행자 유무에 따른 차량 속도와의 관계 연구",
    "publications.p7Authors":
      '김성훈, 이병천, <span class="me">김상민</span>, 노병준',
    "publications.p7Venue": "한국통신학회 인공지능 학술대회 논문집",
    "publications.p7Desc":
      "YOLOv7과 DeepSORT로 어린이 보호구역 CCTV 영상을 분석했습니다. 신호등·과속방지턱과 보행자 유무가 차량 속도에 미치는 영향을 지점별로 비교했습니다.",

    "publications.p8Desc":
      "요일별로 나눈 7개의 MLP로 건물 일일 최대 전력 수요를 예측하고, Kernel SHAP으로 각 입력 변수가 예측값에 얼마나 기여했는지 정량적으로 설명합니다.",

    "publications.p9Title": "감성대화 말뭉치로 보는 청소년의 문제 도출",
    "publications.p9Authors": '<span class="me">김상민</span>, 이병천, 우지영',
    "publications.p9Venue": "한국컴퓨터정보학회 동계학술대회 논문집",
    "publications.p9Desc":
      "AI-Hub 감성대화 말뭉치 40,879건을 분석해, 청소년이 겪는 주요 문제와 감정 분포가 어떻게 이어지는지 살펴봤습니다. 학교·가족 관련 단어가 두드러졌습니다.",

    "patents.title": "특허",
    "patents.note": "등록 2건 · 출원 4건",

    "patents.t1Title":
      "통화 중 실시간으로 보이스피싱의 맥락을 인식하는 장치 및 동작 방법",
    "patents.t1Authors":
      '노병준, <span class="me">김상민</span>, 이병천, 정운영',
    "patents.t1Meta": "등록특허 제10-2984271호 · 순천향대학교 산학협력단",
    "patents.t1Sub":
      "출원 2024.04.11 (10-2024-0048439) · 공고 2026.06.30 · 청구항 9항",
    "patents.t1Desc":
      "통화 음성을 텍스트로 바꾸는 경로와 속도·음조·음량 등 음성 특징을 뽑는 경로를 병렬로 두고, 두 정보를 함께 써서 위험도를 냅니다. 서버 없이 단말에서 처리합니다.",

    "patents.t2Title":
      "딥 러닝 기반 자연어 처리 모델을 활용한, 온라인 그루밍 범죄 탐지 방법 및 그 장치",
    "patents.t2Authors":
      '<span class="me">김상민</span>, 이병천, 문지훈, 노승민, 무아잠 마쿠수드',
    "patents.t2Meta": "등록특허 제10-2934580호 · 중앙대학교 산학협력단",
    "patents.t2Sub":
      "출원 2024.11.14 (10-2024-0161744) · 공고 2026.03.05 · 청구항 12항",
    "patents.t2Desc":
      "SNS 대화 데이터를 전처리해 텍스트 분류 모델을 학습하고, 그 출력으로 온라인 그루밍 범죄를 탐지합니다. CMES 2025 논문의 바탕이 된 발명입니다.",

    "patents.t3Title":
      "판별기 기반 조건부 생성적 적대 신경망에서의 선택적 데이터 망각 방법 및 그 장치",
    "patents.t3Authors":
      '노승민, <span class="me">김상민</span>, 이미영, 이병천',
    "patents.t3Meta": "출원 10-2025-0133282 · 중앙대학교 산학협력단",

    "patents.t4Title":
      "선택적 지식 증류를 이용한 소프트 의사결정 트리 기반 머신 언러닝 방법",
    "patents.t4Authors":
      '이미영, 노승민, 이병천, <span class="me">김상민</span>, 박성우',
    "patents.t4Meta": "출원 10-2025-0109528 · 중앙대학교 산학협력단",

    "patents.t5Title":
      "통화 중 실시간으로 보이스피싱의 맥락을 인식하는 장치 및 동작 방법",
    "patents.t5Authors":
      '노병준, <span class="me">김상민</span>, 이병천, 정운영',
    "patents.t5Meta": "PCT 국제 출원 (PCT/KR2025-004854) · 순천향대학교",

    "patents.t6Title":
      "다변수 산업 사물 단말 관련 시계열 데이터에서 딥 러닝 모델을 기초로 한 이상 탐지 방법 및 그 장치",
    "patents.t6Authors":
      '<span class="me">김상민</span>, 이병천, 문지훈, 노승민, 무아잠 마쿠수드',
    "patents.t6Meta": "출원 10-2024-0161756 · 중앙대학교 산학협력단",

    "projects.title": "프로젝트",
    "projects.j1Title":
      "OMU-NIDS — 온라인 머신 언러닝 기반 네트워크 침입 탐지 시스템",
    "projects.j1Team":
      '팀 랜덤포레스트벌목꾼 · 임태인, <span class="me">김상민</span>, 이병천',
    "projects.j1Meta":
      "한국전자거래학회 추계학술대회 대학(원)생 아이디어 공모전",
    "projects.j1Desc":
      "오염 데이터가 섞인 침입 탐지 시스템을 전체 재학습 없이 되살리는 구조를 제안했습니다. 위험도로 삭제 순서를 정하는 큐, 희귀 클래스를 지키는 Adaptive k, 백그라운드 재구성을 묶었습니다.",
    "projects.j1t1": "머신 언러닝",
    "projects.j1t2": "스트림 학습",
    "projects.j1t3": "트리 앙상블",

    "projects.j2Title": "금융보안 법령 질의응답 RAG 모델",
    "projects.j2Meta": "2025 금융 AI Challenge (DACON) · 283팀 중 15위",
    "projects.j2Desc":
      "금융위원회 등의 규제 문서를 조항 단위로 잘라 FAISS 지식베이스를 만들고, BM25 키워드 검색과 임베딩 의미 검색을 앙상블했습니다. 재순위화와 문서 압축을 거쳐 4bit 양자화 모델로 답변을 생성합니다.",
    "projects.j2t1": "양자화",

    "projects.j3Title": "캠퍼스 로그인 혁신 — DID 기반 신원 인증 시스템",
    "projects.j3Team":
      '전승훈, 강윤석, <span class="me">김상민</span>, 이병천',
    "projects.j3Meta": "한국전자거래학회 DID 비즈니스 모델 특허 공모전",
    "projects.j3Desc":
      "자격 정보를 중앙 서버에 두지 않는 분산 신원(DID) 기반 캠퍼스 통합 로그인입니다. 비밀번호 입력이나 주기적 갱신 없이 개인 키와 분산원장으로 인증해, 중앙 서버를 노리는 공격 표면 자체를 없앱니다.",
    "projects.j3t1": "분산원장",
    "projects.j3t2": "신원 인증",

    "projects.j4Title": "난임 환자 임신 성공 확률 예측",
    "projects.j4Meta": "LG Aimers 6기 · 794팀 중 45위 (상위 5%)",
    "projects.j4Desc":
      "결측치를 그룹별 통계로 채우고 배아 보존율 같은 파생변수를 만들었습니다. LGBM, XGBoost, CatBoost를 Optuna로 튜닝한 뒤 세 모델의 예측 확률을 가중 평균했습니다.",

    "projects.j5Title": "MQL 데이터 기반 B2B 영업 기회 예측",
    "projects.j5Meta": "LG Aimers 4기 · 상위 7%",
    "projects.j5Desc":
      "고객 관련 28개 피처로 영업 전환 여부를 분류했습니다. 범주형 변수는 Word2Vec으로 임베딩하고, SMOTEENN으로 클래스 불균형을 다룬 뒤 LightGBM에 AdaBoost를 얹었습니다.",

    "experience.title": "경력",
    "experience.e1Title": "한국전자통신연구원 (ETRI) · 연구연수생",
    "experience.e1Desc":
      "SNS상 온라인 그루밍 위험성 자가탐지 기술 개발 과제에 참여했습니다. 텍스트 수집과 라벨링 기준 수립, 전처리 코드를 맡았고 한국어 사전학습 모델들을 파인튜닝해 비교했습니다.",
    "experience.e2Title": "LG CNS · 스마트팩토리 부서 인턴",
    "experience.e2Desc":
      "생산 실행 시스템(GMES)에 없던 소형 Cell 반품 확정 기능을 개발했습니다. 반품 요청 인터페이스와 종료 로직을 수정하고, C#/WPF로 프로시저 조회 시스템을 만들었습니다.",
    "experience.e3Title": "한국전자통신연구원 (ETRI) · 연구연수생",
    "experience.e3Desc":
      "공공기반 재활운동 빅데이터 플랫폼 기술 개발 과제에 참여했습니다. 임상 raw 데이터를 자동으로 전처리해 JSON으로 바꾸고, RESTful API로 DB에 적재하는 코드를 만들었습니다.",

    "education.title": "학력",
    "education.d1Year": "2026.03<br />– 현재",
    "education.d1Title": "중앙대학교 융합보안학과 박사과정",
    "education.d1Desc":
      '<a href="https://cau-purelab.github.io/" target="_blank" rel="noopener">Privacy, Unlearning, and Robust Engineering Lab</a>',
    "education.d2Title": "중앙대학교 융합보안학과 석사",
    "education.d2Desc": "산업보안기술 전공 · 학점 4.35 / 4.5 · 지도교수 노승민",
    "education.d2Thesis":
      '석사학위논문 — <span class="entry__thesis">선택적 지식 증류를 통한 소프트 결정 트리에서의 머신 언러닝 프레임워크</span>',
    "education.d3Title": "순천향대학교 AI·빅데이터학과 학사",
    "education.d3Desc": "융합창업학부 SW스타트업 복수전공 · 학점 4.08 / 4.5",
    "education.d4Title": "대전대신고등학교",
    "education.d4Desc": "대전광역시",

    "awards.title": "수상",
    "awards.a1Title": "우수 논문상 · 한국전자거래학회 추계학술대회",
    "awards.a2Title": "최우수상 · 한국전자거래학회 대학(원)생 아이디어 공모전",
    "awards.a3Title": "장려상 · 중앙대학교 가상자산 추적대회",
    "awards.a4Title": "장려상 · DID 비즈니스 모델 특허 공모전",
    "awards.a5Title": "대상 · 순천향대학교 SW·AI 페스티벌",

    "contact.title": "연락처",
    "contact.lead": "공동 연구나 궁금한 점이 있다면 편하게 연락 주세요.",
    "contact.emailLabel": "이메일",
    "contact.labLabel": "연구실",
    "contact.portfolioLabel": "포트폴리오",
    "contact.portfolioValue": "Notion 포트폴리오",
    "contact.locationLabel": "위치",
    "contact.locationValue": "서울특별시 동작구 흑석로 84, 중앙대학교 310관",
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
    "nav.patents": "Patents",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.awards": "Awards",
    "nav.contact": "Contact",

    "intro.photoAlt": "Sangmin Kim",
    "intro.name": "Sangmin Kim",
    "intro.nameSub": "김상민",
    "intro.role": "Ph.D. Student",
    "intro.affil":
      'Dept. of Security Convergence, Chung-Ang University · <a href="https://cau-purelab.github.io/" target="_blank" rel="noopener">PURE Lab</a>',
    "intro.bio":
      "My work has centered on forecasting and classifying data across domains such as time series and text. I have applied AI to problems with real social cost, including voice phishing and online grooming detection. I now use machine unlearning to build models that protect privacy and stay trustworthy at once.",
    "intro.linkEmail": "Send an email",
    "intro.linkPortfolio": "Portfolio",

    "research.title": "Research Interests",
    "research.i1Desc":
      "I study how to erase the influence of a single class or dataset from a model that has already finished training. My work has covered unlearning in tree models and GANs, and lately efficient unlearning for LLMs.",
    "research.i2Desc":
      "I use AI to detect crimes that cause tangible harm, such as voice phishing and online grooming, and verify with attack techniques whether a model has genuinely forgotten sensitive data under rules like the right to be forgotten.",
    "research.i3Desc":
      "Retrieval-augmented generation that grounds answers in large document sets such as regulations, distillation that keeps a large model's performance at a much smaller size, and retrieval design that cuts hallucination.",

    "badge.first": "First author",
    "badge.journal": "Journal",
    "badge.conference": "Conference",
    "badge.workshop": "Workshop",
    "badge.granted": "Granted",
    "badge.filed": "Filed",
    "badge.grandPrize": "Grand Prize",
    "badge.encouragement": "Encouragement Award",

    "publications.title": "Publications",
    "publications.note":
      "Reverse chronological · my name in bold. Titles link to the full text.",

    "publications.p1Title":
      "An Image Generation Framework Integrating Invisible Watermarking and Selective Class Unlearning",
    "publications.p1Authors":
      'Park, S., Lee, B., <span class="me">Kim, S.</span>, Chae, S., Lee, M., &amp; Rho, S.',
    "publications.p1Desc":
      "Combines class-selective unlearning for generative models with invisible watermarking for provenance verification in a single framework — two lines of work that prior research had treated separately.",

    "publications.p2Venue": "ECAI 2025 Workshop on Trustworthy AI (TRUST-AI)",
    "publications.p2Desc":
      "Deliberately weakening the discriminator so the generator stops producing a target class. Cuts more than 80% of the time retraining would take while preserving image quality for the remaining classes.",

    "publications.p3Venue": "FedCSIS 2025, Thematic Session",
    "publications.p3Desc":
      "Distills a CNN teacher into a soft decision tree, then unlearns a class by redistributing leaf probabilities and pruning routing weights. Faster than retraining, with little loss elsewhere.",

    "publications.p4Desc":
      "Extracts text from SNS conversation images via OCR and classifies it into sexually explicit, normal, and hate speech with KcELECTRA, reaching 0.953 accuracy and outperforming the Transformer baselines compared.",

    "publications.p5Title":
      "Voice Phishing Detection Using Deep Learning-based NLP and Knowledge Distillation Techniques",
    "publications.p5Authors":
      '<span class="me">Kim, S.</span>, &amp; Rho, S.',
    "publications.p5Venue": "The Journal of Society for e-Business Studies",
    "publications.p5Desc":
      "Transcribes call audio with Whisper, then distills KoELECTRA-base into the small variant. Holds 0.96 accuracy while shrinking enough to suggest it could run on a phone.",

    "publications.p6Desc":
      "ConvBiLSTM-AE combines 1D convolution with bidirectional LSTM to detect anomalies in multivariate industrial control-system time series through unsupervised learning, validated on the HAI 23.05 dataset.",

    "publications.p7Title":
      "A Study on the Relationship between Vehicle Speed and the Presence of Traffic Safety Infrastructure and Pedestrians",
    "publications.p7Authors":
      'Kim, S., Lee, B., <span class="me">Kim, S.</span>, &amp; Noh, B.',
    "publications.p7Venue":
      "Proceedings of the KICS Conference on Artificial Intelligence",
    "publications.p7Desc":
      "Analyzes school-zone CCTV footage with YOLOv7 and DeepSORT, comparing how traffic lights, speed bumps, and the presence of pedestrians change vehicle speed at each site.",

    "publications.p8Desc":
      "Forecasts a building's daily peak load with seven day-of-week-specific MLPs, then quantifies how much each input variable contributed using Kernel SHAP.",

    "publications.p9Title":
      "Identifying Issues Facing Youth through an Emotional Dialogue Corpus",
    "publications.p9Authors":
      '<span class="me">Kim, S.</span>, Lee, B., &amp; Woo, J.',
    "publications.p9Venue":
      "Proceedings of the KSCI Winter Conference",
    "publications.p9Desc":
      "Analyzes 40,879 utterances from the AI-Hub emotional dialogue corpus to trace how the problems adolescents face relate to their emotions. School and family words dominated.",

    "patents.title": "Patents",
    "patents.note": "2 granted · 4 filed",

    "patents.t1Title":
      "Apparatus and Method for Real-Time Recognition of Voice Phishing Context During a Call",
    "patents.t1Authors":
      'Noh, B., <span class="me">Kim, S.</span>, Lee, B., &amp; Jeong, W.',
    "patents.t1Meta":
      "Korean Patent No. 10-2984271 · Soonchunhyang University IACF",
    "patents.t1Sub":
      "Filed 2024.04.11 (10-2024-0048439) · Published 2026.06.30 · 9 claims",
    "patents.t1Desc":
      "Runs two paths over call audio in parallel — one transcribing speech, the other extracting rate, pitch, and volume — and scores risk from both. Everything happens on the device.",

    "patents.t2Title":
      "Method and Apparatus for Detecting Online Grooming Crimes Using Deep Learning-Based Natural Language Processing Models",
    "patents.t2Authors":
      '<span class="me">Kim, S.</span>, Lee, B., Moon, J., Rho, S., &amp; Maqsood, M.',
    "patents.t2Meta":
      "Korean Patent No. 10-2934580 · Chung-Ang University IACF",
    "patents.t2Sub":
      "Filed 2024.11.14 (10-2024-0161744) · Published 2026.03.05 · 12 claims",
    "patents.t2Desc":
      "Preprocesses SNS conversation data, trains a text classification model on it, and flags online grooming from the model's output. This is the invention behind the CMES 2025 paper.",

    "patents.t3Title":
      "Method and Apparatus for Selective Data Forgetting in Discriminator-Based Conditional Generative Adversarial Networks",
    "patents.t3Authors":
      'Rho, S., <span class="me">Kim, S.</span>, Lee, M., &amp; Lee, B.',
    "patents.t3Meta":
      "Application 10-2025-0133282 · Chung-Ang University IACF",

    "patents.t4Title":
      "Machine Unlearning Method Based on a Soft Decision Tree Using Selective Knowledge Distillation",
    "patents.t4Authors":
      'Lee, M., Rho, S., Lee, B., <span class="me">Kim, S.</span>, &amp; Park, S.',
    "patents.t4Meta":
      "Application 10-2025-0109528 · Chung-Ang University IACF",

    "patents.t5Title":
      "Apparatus and Method for Real-Time Recognition of Voice Phishing Context During a Call",
    "patents.t5Authors":
      'Noh, B., <span class="me">Kim, S.</span>, Lee, B., &amp; Jeong, W.',
    "patents.t5Meta":
      "PCT international application (PCT/KR2025-004854) · Soonchunhyang University",

    "patents.t6Title":
      "Method and Apparatus for Anomaly Detection Based on Deep Learning Models in Time Series Data Related to Multivariate Industrial Things Terminals",
    "patents.t6Authors":
      '<span class="me">Kim, S.</span>, Lee, B., Moon, J., Rho, S., &amp; Maqsood, M.',
    "patents.t6Meta": "Application 10-2024-0161756 · Chung-Ang University IACF",

    "projects.title": "Projects",
    "projects.j1Title":
      "OMU-NIDS — Online Machine Unlearning-Based Network Intrusion Detection System",
    "projects.j1Team":
      'Team RandomForest Loggers · Lim, T., <span class="me">Kim, S.</span>, &amp; Lee, B.',
    "projects.j1Meta":
      "KSEBS Fall Conference Student Idea Competition",
    "projects.j1Desc":
      "A design for recovering a poisoned intrusion detection system without full retraining: a queue that orders deletions by risk, an adaptive k that protects rare classes, and background rebuilding that swaps in weakened subtrees.",
    "projects.j1t1": "Machine unlearning",
    "projects.j1t2": "Stream learning",
    "projects.j1t3": "Tree ensembles",

    "projects.j2Title":
      "RAG Question Answering over Financial Security Regulations",
    "projects.j2Meta": "2025 Financial AI Challenge (DACON) · 15th of 283 teams",
    "projects.j2Desc":
      "Chunks financial regulation documents article by article into a FAISS knowledge base, then ensembles BM25 keyword search with embedding-based semantic search. Reranking and contextual compression trim the context before a 4-bit quantized model writes the answer.",
    "projects.j2t1": "Quantization",

    "projects.j3Title":
      "Campus Login Reimagined — DID-Based Identity Authentication",
    "projects.j3Team":
      'Jeon, S., Kang, Y., <span class="me">Kim, S.</span>, &amp; Lee, B.',
    "projects.j3Meta": "KSEBS DID Business Model Patent Competition",
    "projects.j3Desc":
      "A campus single sign-on built on decentralized identifiers, keeping credentials off any central server. Users authenticate with a private key checked against a distributed ledger — no password to enter or rotate — which removes the server-side attack surface entirely.",
    "projects.j3t1": "Distributed ledger",
    "projects.j3t2": "Identity authentication",

    "projects.j4Title": "Predicting Pregnancy Success for Infertility Patients",
    "projects.j4Meta": "LG Aimers 6th · 45th of 794 teams (top 5%)",
    "projects.j4Desc":
      "Filled missing values from group-level statistics and engineered features such as the embryo preservation rate, then tuned LGBM, XGBoost, and CatBoost with Optuna and averaged their predicted probabilities.",

    "projects.j5Title": "Predicting B2B Sales Opportunities from MQL Data",
    "projects.j5Meta": "LG Aimers 4th · Top 7%",
    "projects.j5Desc":
      "Classified sales conversion from 28 customer features. Categorical variables were embedded with Word2Vec, class imbalance handled with SMOTEENN, and LightGBM served as the base learner under AdaBoost.",

    "experience.title": "Experience",
    "experience.e1Title":
      "ETRI (Electronics and Telecommunications Research Institute) · Research Intern",
    "experience.e1Desc":
      "Worked on a project for self-detecting online grooming risk on social networks. I handled text collection, defined the labeling criteria, wrote the preprocessing pipeline, and fine-tuned Korean pretrained models to compare them.",
    "experience.e2Title": "LG CNS · Smart Factory Intern",
    "experience.e2Desc":
      "Built a small-cell return confirmation feature the GMES manufacturing execution system was missing. I revised the return-request interface and termination logic, and wrote a procedure lookup tool in C#/WPF.",
    "experience.e3Title":
      "ETRI (Electronics and Telecommunications Research Institute) · Research Intern",
    "experience.e3Desc":
      "Worked on a public rehabilitation-exercise big data platform. I wrote code that automatically preprocessed raw clinical data into JSON and loaded it into the database through a RESTful API.",

    "education.title": "Education",
    "education.d1Year": "2026.03<br />– present",
    "education.d1Title":
      "Ph.D. in Security Convergence, Chung-Ang University",
    "education.d1Desc":
      '<a href="https://cau-purelab.github.io/" target="_blank" rel="noopener">Privacy, Unlearning, and Robust Engineering Lab</a>',
    "education.d2Title":
      "M.S. in Security Convergence, Chung-Ang University",
    "education.d2Desc":
      "Industrial Security Technology · GPA 4.35 / 4.5 · Advisor: Seungmin Rho",
    "education.d2Thesis":
      'M.S. thesis — <span class="entry__thesis">A Machine Unlearning Framework Based on Selective Knowledge Distillation into a Soft Decision Tree</span>',
    "education.d3Title":
      "B.S. in AI & Big Data, Soonchunhyang University",
    "education.d3Desc":
      "Double major in SW Startup, School of Convergence Entrepreneurship · GPA 4.08 / 4.5",
    "education.d4Title": "Daejeon Daeshin High School",
    "education.d4Desc": "Daejeon, South Korea",

    "awards.title": "Awards",
    "awards.a1Title": "Best Paper Award · KSEBS Fall Conference",
    "awards.a2Title": "Grand Prize · KSEBS Student Idea Competition",
    "awards.a3Title": "Encouragement Award · Chung-Ang University Cryptocurrency Tracing Competition",
    "awards.a4Title": "Encouragement Award · DID Business Model Patent Competition",
    "awards.a5Title": "Grand Prize · Soonchunhyang University SW·AI Festival",

    "contact.title": "Contact",
    "contact.lead":
      "Feel free to reach out about collaborations or anything you're curious about.",
    "contact.emailLabel": "Email",
    "contact.labLabel": "Lab",
    "contact.portfolioLabel": "Portfolio",
    "contact.portfolioValue": "Notion portfolio",
    "contact.locationLabel": "Location",
    "contact.locationValue":
      "Bldg. 310, Chung-Ang University, 84 Heukseok-ro, Dongjak-gu, Seoul",
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

  // 이미지 대체 텍스트
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = dict[el.dataset.i18nAlt];
    if (value !== undefined) el.setAttribute("alt", value);
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

/* ------------------------------------------------- 상단 탭 현재 위치 표시 */

(function initScrollSpy() {
  const tabs = [...document.querySelectorAll(".nav__tab")];
  if (!tabs.length) return;

  // 탭과 섹션을 짝지어 둡니다 (문서 순서 = 탭 순서).
  const pairs = tabs
    .map((tab) => {
      const id = tab.getAttribute("href")?.slice(1);
      return { tab, section: id ? document.getElementById(id) : null };
    })
    .filter((p) => p.section);

  if (!pairs.length) return;

  // 헤더 바로 아래 지점을 기준선으로 삼고, 그 선을 지나는 섹션을 현재 섹션으로 봅니다.
  const PROBE_OFFSET = 96;

  function activeSection() {
    const hit = pairs.find(({ section }) => {
      const r = section.getBoundingClientRect();
      return r.top <= PROBE_OFFSET && r.bottom > PROBE_OFFSET;
    });
    if (hit) return hit.section;

    // 페이지 맨 아래에서는 마지막 섹션을 현재로 둡니다.
    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;
    return atBottom ? pairs[pairs.length - 1].section : null;
  }

  function update() {
    const current = activeSection();
    pairs.forEach(({ tab, section }) => {
      if (section === current) tab.setAttribute("aria-current", "true");
      else tab.removeAttribute("aria-current");
    });
  }

  let ticking = false;
  function schedule() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      update();
    });
  }

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  window.addEventListener("hashchange", schedule);
  update();
})();
