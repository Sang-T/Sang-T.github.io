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
      "시계열과 텍스트 등 다양한 도메인의 데이터를 예측하고 분류하는 연구를 해 왔습니다. 보이스피싱 의심 발언 탐지, 온라인 그루밍 탐지처럼 AI로 사회 문제를 풀어 공공 영역에 기여하는 연구를 수행했고, 최근에는 머신 언러닝을 활용해 개인정보 보호와 신뢰성을 동시에 만족하는 AI 모델을 만드는 연구에 집중하고 있습니다.",
    "intro.linkEmail": "이메일 보내기",
    "intro.linkPortfolio": "포트폴리오",

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
      "CNN 교사 모델의 지식을 소프트 결정 트리로 증류한 뒤, 리프 노드의 확률 분포와 경로 가중치를 조정해 클래스 단위로 언러닝합니다. 전체 재학습보다 빠르면서 비대상 클래스의 성능 손실을 최소화했습니다.",

    "publications.p4Desc":
      "SNS 대화 이미지에서 OCR로 텍스트를 추출하고 KcELECTRA로 성적 발언·일반 발언·혐오 표현을 분류합니다. 정확도 0.953으로 비교한 트랜스포머 계열 모델들을 앞섰습니다.",

    "publications.p5Title":
      "딥러닝 기반 NLP 및 지식증류기법을 활용한 보이스피싱 의심 발언 탐지",
    "publications.p5Authors": '<span class="me">김상민</span>, 노승민',
    "publications.p5Venue": "한국전자거래학회지",
    "publications.p5Desc":
      "Whisper로 통화 음성을 텍스트로 바꾸고, KoELECTRA-base를 교사, small을 학생으로 지식 증류를 적용했습니다. 정확도 0.96을 유지하면서 모델을 경량화해, 모바일 온디바이스 적용 가능성을 보였습니다.",

    "publications.p6Desc":
      "1D 합성곱과 양방향 LSTM을 결합한 ConvBiLSTM-AE로 산업 제어 시스템의 다변량 시계열 이상을 비지도 학습으로 탐지합니다. HAI 23.05 데이터셋으로 검증했습니다.",

    "publications.p7Title":
      "교통안전시설물 및 보행자 유무에 따른 차량 속도와의 관계 연구",
    "publications.p7Authors":
      '김성훈, 이병천, <span class="me">김상민</span>, 노병준',
    "publications.p7Venue": "제4회 한국인공지능학술대회 (한국통신학회)",
    "publications.p7Desc":
      "YOLOv7과 DeepSORT로 어린이 보호구역 CCTV 영상을 분석해, 신호등·과속방지턱과 보행자 유무가 차량 속도에 미치는 영향을 정량적으로 비교했습니다.",

    "publications.p8Desc":
      "요일별로 분리한 7개의 MLP로 건물 일일 최대 전력 수요를 예측하고, Kernel SHAP으로 각 입력 변수의 기여도를 설명합니다.",

    "publications.p9Title": "감성대화 말뭉치로 보는 청소년의 문제 도출",
    "publications.p9Authors": '<span class="me">김상민</span>, 이병천, 우지영',
    "publications.p9Venue": "한국컴퓨터정보학회 동계학술대회 논문집",
    "publications.p9Desc":
      "AI-Hub 감성대화 말뭉치 40,879건을 분석해 청소년이 겪는 주요 문제와 감정 분포의 관계를 밝혔습니다.",

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
      "통화 음성을 텍스트로 변환하는 경로와 속도·음조·음량 등 음성 특징을 추출하는 경로를 병렬로 두고, 두 정보를 함께 사용해 위험도를 산출합니다. 서버 통신 없이 단말에서 실시간으로 보이스피싱을 탐지합니다.",

    "patents.t2Title":
      "딥 러닝 기반 자연어 처리 모델을 활용한, 온라인 그루밍 범죄 탐지 방법 및 그 장치",
    "patents.t2Authors":
      '<span class="me">김상민</span>, 이병천, 문지훈, 노승민, 무아잠 마쿠수드',
    "patents.t2Meta": "등록특허 제10-2934580호 · 중앙대학교 산학협력단",
    "patents.t2Sub":
      "출원 2024.11.14 (10-2024-0161744) · 공고 2026.03.05 · 청구항 12항",
    "patents.t2Desc":
      "SNS 대화 데이터를 전처리해 텍스트 분류 모델을 학습하고, 그 출력으로 온라인 그루밍 범죄를 탐지합니다. CMES 2025 논문의 기반이 된 발명입니다.",

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
      "오염 데이터가 섞인 침입 탐지 시스템을 전체 재학습 없이 복구하는 구조를 제안했습니다. 위험도 기준으로 삭제 순서를 정하는 큐, 희귀 클래스에 복제본을 더 주는 Adaptive k, 약해진 서브트리를 백그라운드에서 다시 만들어 교체하는 부분 재구성, 삭제 후 편향을 잡아 주는 버퍼로 무중단 운영을 목표로 했습니다.",
    "projects.j1t1": "머신 언러닝",
    "projects.j1t2": "스트림 학습",
    "projects.j1t3": "트리 앙상블",

    "projects.j2Title": "금융보안 법령 질의응답 RAG 모델",
    "projects.j2Meta": "2025 금융 AI Challenge (DACON) · 283팀 중 15위",
    "projects.j2Desc":
      "금융위원회 등의 규제 문서를 조항 단위로 잘라 FAISS 지식베이스를 만들고, BM25 키워드 검색과 임베딩 의미 검색을 앙상블했습니다. Multi-Query로 질문을 확장하고 CrossEncoder 재순위화와 문서 압축을 거친 뒤, 4bit 양자화한 A.X-4.0-Light로 답변을 생성해 제한된 GPU에서도 돌아가게 했습니다.",
    "projects.j2t1": "양자화",

    "projects.j3Title": "캠퍼스 로그인 혁신 — DID 기반 신원 인증 시스템",
    "projects.j3Team":
      '전승훈, 강윤석, <span class="me">김상민</span>, 이병천',
    "projects.j3Meta": "한국전자거래학회 DID 비즈니스 모델 특허 공모전",
    "projects.j3Desc":
      "자격 정보를 중앙 서버에 두지 않는 분산 신원(DID) 기반 캠퍼스 통합 로그인입니다. 비밀번호 입력이나 주기적 갱신 없이 개인 키 인증과 분산원장 검증으로 로그인하며, SQL 인젝션처럼 중앙 서버를 노리는 공격 표면 자체를 줄입니다.",
    "projects.j3t1": "분산원장",
    "projects.j3t2": "신원 인증",

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
    "education.d1Desc":
      '<a href="https://cau-purelab.github.io/" target="_blank" rel="noopener">Privacy, Unlearning, and Robust Engineering Lab</a>',
    "education.d2Title": "중앙대학교 융합보안학과 석사",
    "education.d2Desc": "산업보안기술 전공 · 학점 4.35 / 4.5 · 지도교수 노승민",
    "education.d2Thesis":
      '석사학위논문 — <span class="entry__thesis">선택적 지식 증류를 통한 소프트 결정 트리에서의 머신 언러닝 프레임워크</span>',
    "education.d3Title": "순천향대학교 AI·빅데이터학과 학사",
    "education.d3Desc": "융합창업학부 SW스타트업 복수전공 · 학점 4.08 / 4.5",

    "awards.title": "수상 및 활동",
    "awards.a1Title": "우수 논문상 · 한국전자거래학회 추계학술대회",
    "awards.a2Title": "최우수상 · 한국전자거래학회 대학(원)생 아이디어 공모전",
    "awards.a3Title": "2025 금융 AI Challenge · 283팀 중 15위",
    "awards.a4Title": "LG Aimers 6기 · 794팀 중 45위 (상위 5%)",
    "awards.a5Title": "장려상 · 중앙대학교 가상자산 추적대회",
    "awards.a6Title": "장려상 · DID 비즈니스 모델 특허 공모전",
    "awards.a7Title": "실습 조교 · 안전한 데이터 활용 전문가 과정",
    "awards.a8Title": "LG Aimers 4기 · 상위 7%",
    "awards.a9Title": "대상 · 순천향대학교 SW·AI 페스티벌",

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
      "My work has centered on forecasting and classification across domains such as time series and text. I have applied AI to problems with real social cost — detecting voice-phishing utterances and online grooming — and I now focus on machine unlearning: building models that satisfy privacy requirements and remain trustworthy at the same time.",
    "intro.linkEmail": "Send an email",
    "intro.linkPortfolio": "Portfolio",

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
      "Distills a CNN teacher into a soft decision tree, then unlearns a class by redistributing leaf-node probabilities and weakening the routing weights along the path. Faster than full retraining, with minimal loss on non-target classes.",

    "publications.p4Desc":
      "Extracts text from SNS conversation images via OCR and classifies it into sexually explicit, normal, and hate speech with KcELECTRA, reaching 0.953 accuracy and outperforming the Transformer baselines compared.",

    "publications.p5Title":
      "Voice Phishing Detection Using Deep Learning-based NLP and Knowledge Distillation Techniques",
    "publications.p5Authors":
      '<span class="me">Kim, S.</span>, &amp; Rho, S.',
    "publications.p5Venue": "The Journal of Society for e-Business Studies",
    "publications.p5Desc":
      "Transcribes call audio with Whisper, then distills KoELECTRA-base into KoELECTRA-small. Keeps 0.96 accuracy while shrinking the model, showing it could run on-device on a phone.",

    "publications.p6Desc":
      "ConvBiLSTM-AE combines 1D convolution with bidirectional LSTM to detect anomalies in multivariate industrial control-system time series through unsupervised learning, validated on the HAI 23.05 dataset.",

    "publications.p7Title":
      "A Study on the Relationship between Vehicle Speed and the Presence of Traffic Safety Infrastructure and Pedestrians",
    "publications.p7Authors":
      'Kim, S., Lee, B., <span class="me">Kim, S.</span>, &amp; Noh, B.',
    "publications.p7Venue":
      "The 4th Korea Artificial Intelligence Conference (KICS)",
    "publications.p7Desc":
      "Analyzes school-zone CCTV footage with YOLOv7 and DeepSORT to quantify how traffic lights, speed bumps, and pedestrian presence affect vehicle speed.",

    "publications.p8Desc":
      "Forecasts daily peak load for buildings using seven day-of-week-specific MLPs, and explains each input variable's contribution with Kernel SHAP.",

    "publications.p9Title":
      "Identifying Issues Facing Youth through an Emotional Dialogue Corpus",
    "publications.p9Authors":
      '<span class="me">Kim, S.</span>, Lee, B., &amp; Woo, J.',
    "publications.p9Venue":
      "Proceedings of the KSCI Winter Conference",
    "publications.p9Desc":
      "Analyzes 40,879 utterances from the AI-Hub emotional dialogue corpus to relate the problems adolescents face to their emotional distribution.",

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
      "Runs two parallel paths over call audio — one transcribing speech to text, the other extracting acoustic features such as rate, pitch, and volume — and combines both to score risk. Detects voice phishing in real time on the device, with no server round trip.",

    "patents.t2Title":
      "Method and Apparatus for Detecting Online Grooming Crimes Using Deep Learning-Based Natural Language Processing Models",
    "patents.t2Authors":
      '<span class="me">Kim, S.</span>, Lee, B., Moon, J., Rho, S., &amp; Maqsood, M.',
    "patents.t2Meta":
      "Korean Patent No. 10-2934580 · Chung-Ang University IACF",
    "patents.t2Sub":
      "Filed 2024.11.14 (10-2024-0161744) · Published 2026.03.05 · 12 claims",
    "patents.t2Desc":
      "Preprocesses SNS conversation data, trains a text classification model on it, and detects online grooming from the model output. The invention behind the CMES 2025 paper.",

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
      "A design for recovering a poisoned intrusion detection system without full retraining: a queue that orders deletions by risk score, an adaptive k that gives rare classes more replicas, background partial rebuilding that swaps in weakened subtrees, and a bias buffer that corrects drift after deletion — all aimed at zero-downtime operation.",
    "projects.j1t1": "Machine unlearning",
    "projects.j1t2": "Stream learning",
    "projects.j1t3": "Tree ensembles",

    "projects.j2Title":
      "RAG Question Answering over Financial Security Regulations",
    "projects.j2Meta": "2025 Financial AI Challenge (DACON) · 15th of 283 teams",
    "projects.j2Desc":
      "Chunks regulatory documents article by article into a FAISS knowledge base and ensembles BM25 keyword search with embedding-based semantic search. Multi-Query expands the question, a CrossEncoder reranks, contextual compression trims the context, and a 4-bit quantized A.X-4.0-Light generates the answer within a constrained GPU budget.",
    "projects.j2t1": "Quantization",

    "projects.j3Title":
      "Campus Login Reimagined — DID-Based Identity Authentication",
    "projects.j3Team":
      'Jeon, S., Kang, Y., <span class="me">Kim, S.</span>, &amp; Lee, B.',
    "projects.j3Meta": "KSEBS DID Business Model Patent Competition",
    "projects.j3Desc":
      "A campus single sign-on built on decentralized identifiers, keeping credentials off any central server. Users authenticate with a private key verified against a distributed ledger — no password entry or rotation — which removes the attack surface that SQL injection and similar server-side attacks depend on.",
    "projects.j3t1": "Distributed ledger",
    "projects.j3t2": "Identity authentication",

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

    "awards.title": "Awards & Activities",
    "awards.a1Title":
      "Best Paper Award · KSEBS Fall Conference",
    "awards.a2Title":
      "Grand Prize · KSEBS Student Idea Competition",
    "awards.a3Title": "2025 Financial AI Challenge · 15th of 283 teams",
    "awards.a4Title": "LG Aimers 6th · 45th of 794 teams (top 5%)",
    "awards.a5Title":
      "Encouragement Award · Chung-Ang University Cryptocurrency Tracing Competition",
    "awards.a6Title":
      "Encouragement Award · DID Business Model Patent Competition",
    "awards.a7Title":
      "Teaching Assistant · Safe Data Utilization Expert Program",
    "awards.a8Title": "LG Aimers 4th · Top 7%",
    "awards.a9Title":
      "Grand Prize · Soonchunhyang University SW·AI Festival",

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
