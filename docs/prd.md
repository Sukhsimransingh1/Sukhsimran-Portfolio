# PRD — Sukhsimran Singh AI/ML Engineering Portfolio

## 1. Product Overview

Build a premium personal portfolio for **Sukhsimran Singh**, a Computer Science and Engineering student focused on AI/ML engineering, Generative AI, LLM applications, RAG systems, and AI backend engineering.

The portfolio should feel like a **real AI engineering product**, not a resume rendered as a webpage.

Primary objective:

> Communicate that Sukhsimran can take AI/ML ideas from models and retrieval pipelines to production-oriented APIs, applications, and intelligent systems.

The visual direction takes inspiration from the supplied reference portfolio screenshots: strong editorial typography, numbered sections, asymmetric layouts, premium cards, restrained motion, and system-oriented storytelling. It must **not reproduce the reference design or its dark-purple/neon palette**.

---

## 2. Target Audience

### Primary
- AI/ML engineering recruiters
- Generative AI / LLM engineering recruiters
- Startup founders and technical hiring managers
- Engineering leads evaluating internship candidates

### Secondary
- Hackathon judges
- Developers and engineers exploring projects
- University peers and collaborators

---

## 3. Primary Goals

1. Make the user's AI/ML engineering positioning immediately clear.
2. Showcase 3–4 strongest projects with enough technical depth to prove engineering ability.
3. Highlight current AI Backend Engineer internship experience.
4. Make GitHub, LinkedIn, resume, live demos, and contact easy to access.
5. Demonstrate understanding of ML, GenAI, RAG, backend engineering, deployment, and data systems.
6. Create a memorable visual identity without relying on excessive neon, purple, or black-only styling.
7. Provide a foundation for an optional portfolio-aware AI assistant ("Sukh AI").
8. Maintain excellent performance, accessibility, responsiveness, and SEO.

---

## 4. Non-Goals

- Do not copy the friend's portfolio.
- Do not make the site primarily a 3D/Three.js showcase.
- Do not use excessive gradients, particles, glow effects, or animations.
- Do not turn every project into a long case study on the main page.
- Do not invent project metrics, employers, achievements, certifications, or technologies.
- Do not hard-code future live/GitHub URLs; use placeholders/configuration.
- Do not expose private API keys in the frontend.

---

## 5. Content Source of Truth

The current resume is the factual source for:
- Education
- Current experience
- Technical skills
- Projects
- Achievements
- Certifications
- Leadership

Current resume highlights:
- B.Tech CSE at I.K. Gujral Punjab Technical University, 2023–2027, CGPA 9.05/10.
- Backend AI Engineer Intern at FlyRank AI, Jul 2026–Present.
- Data Science Trainee at Internshala Training, Jun 2025–Jul 2025.
- Featured projects: PranRakshak AI, DisasterSense AI, OmniRAG AI, Resume Screening AI.
- Achievements include Top 15 at Innovate with TRAE — NIT Jalandhar and finalist at Hack On Hills — NIT Hamirpur.

Project live/demo and GitHub links will be manually added later.

---

## 6. Information Architecture

1. Loading / Intro
2. Hero
3. About / Profile
4. Experience
5. AI Engineering Journey
6. Featured Projects
7. More Projects
8. Technical Arsenal
9. Achievements & Hackathons
10. Certifications
11. Contact
12. Footer
13. Optional "Sukh AI" assistant

---

## 7. Hero Requirements

The hero must answer within a few seconds:
- Who is Sukhsimran?
- What does he build?
- What roles is he targeting?
- Where can I see his work?

Core positioning:

**AI/ML Engineer · Generative AI · AI Backend**

Hero visual:
- interactive AI system / knowledge flow
- nodes representing Data → Models → Retrieval → APIs → Product
- subtle animated connections
- mouse/parallax interaction where useful
- no portrait required

Primary CTAs:
- Explore Work
- View Resume

Secondary:
- GitHub
- LinkedIn

---

## 8. Project Requirements

Featured projects:
1. PranRakshak AI
2. DisasterSense AI
3. OmniRAG AI
4. Resume Screening AI

The portfolio will also include a separate **More Projects** section for supporting/learning projects. The current reference image establishes examples such as:
- KORVIX
- Next Word Prediction
- Movie Sentiment Analyzer
- Sentiment Analysis

These supporting projects should be presented as compact cards rather than full case studies. Additional projects can be added later without changing the section architecture.

Each featured project should support:
- project title
- category
- concise problem statement
- what was built
- architecture/system flow
- technology stack
- engineering decisions
- outcome/metrics only when verified
- Live Demo placeholder
- GitHub placeholder
- optional case study route

Project URLs must live in a central data/config file.

---

## 9. Experience Requirements

Experience should communicate progression:
- Data Science foundation
- AI/backend production work

Each experience entry:
- organization
- role
- date
- location/remote status when verified
- 2–4 concise contribution points
- technology/context tags

---

## 10. Skills Requirements

Skills should be grouped instead of presented as an undifferentiated logo wall.

Suggested groups:
- Languages
- Machine Learning
- Deep Learning
- Generative AI
- Retrieval & Embeddings
- Backend & APIs
- Data Science
- MLOps / Deployment
- Frontend / Product

Only display technologies supported by the resume or later verified project data.

---

## 11. AI Assistant

Optional feature: "Sukh AI".

Purpose:
- answer recruiter questions about portfolio content
- explain projects
- summarize skills
- surface relevant experience

Architecture:
Portfolio Markdown/content → ingestion → chunking → embeddings → ChromaDB → retrieval → OpenAI/Groq → FastAPI API → chat UI.

The assistant must not invent information. If portfolio data does not contain an answer, it should clearly say it does not have that information.

---

## 12. Success Criteria

The portfolio is successful when:
- a recruiter understands the user's positioning within 5–10 seconds
- featured projects are understandable without reading the resume
- GitHub/resume/contact are easy to reach
- mobile layout remains polished
- no animation blocks content access
- Lighthouse/performance is strong
- project links can be changed from one data file
- content can be updated without editing UI components
- optional AI assistant can be added without restructuring the frontend

---

## 13. Future Extensibility

The architecture should allow:
- MDX project case studies
- additional projects
- blog/articles
- AI assistant
- analytics
- dark/light theme evolution
- new experience entries
- CMS/content migration later

---

## 14. Acceptance Principle

Every design or implementation decision should answer:

> Does this make Sukhsimran look like a capable AI engineer who can build useful production-oriented systems?

If not, it should be simplified or removed.
