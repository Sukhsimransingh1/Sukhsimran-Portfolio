# Phases — Portfolio Implementation Roadmap

## Phase 0 — Documentation & Foundation

### Goal
Establish the project constitution before writing UI.

### Deliverables
- PRD
- Architecture
- Rules
- Phases
- Design system
- Next.js project
- TypeScript
- Tailwind v4
- base fonts
- global tokens

### Done when
The app runs locally and the design tokens are established.

---

## Phase 1 — Core Shell

### Build
- root layout
- navigation
- footer
- responsive container
- section wrapper
- typography primitives
- buttons
- badges
- cards
- page background system

### Done when
The site has a stable visual skeleton.

---

## Phase 2 — Hero

### Build
- hero typography
- availability/status badge
- CTA buttons
- social links
- AI system visual
- subtle mouse interaction
- responsive mobile hero

### Done when
The first viewport communicates:
**AI/ML Engineer + what he builds + where to explore.**

---

## Phase 3 — About & Profile

### Build
- profile statement
- education
- key stats
- technical focus
- concise personal positioning

### Done when
A recruiter can understand the candidate without opening the resume.

---

## Phase 4 — Experience

### Build
- experience timeline
- FlyRank AI
- Internshala Training
- animated timeline
- contribution cards

### Done when
Career progression is visually obvious.

---

## Phase 5 — Featured Projects

### Build
- project data model
- featured project layout
- image/project visual container
- technology tags
- architecture preview
- Live Demo placeholder
- GitHub placeholder
- case-study entry points

Projects:
1. PranRakshak AI
2. DisasterSense AI
3. OmniRAG AI
4. Resume Screening AI

### Done when
Projects become the strongest proof of engineering ability.

---

## Phase 6 — More Projects

### Build
- compact project grid
- supporting/learning project cards
- future project placeholders
- GitHub CTA
- optional category labels

Initial supporting projects from the reference:
1. KORVIX
2. Next Word Prediction
3. Movie Sentiment Analyzer
4. Sentiment Analysis

These are **not** required to receive the same depth as the four featured projects. They should act as evidence of broader experimentation and learning.

### Done when
Additional work is discoverable without competing with the flagship projects.

---

## Phase 7 — Technical Arsenal

### Build
- categorized skills
- interactive skill cards
- subtle hover effects
- no logo-wall overload

### Done when
Technical breadth is easy to scan.

---

## Phase 8 — Achievements & Certifications

### Build
- hackathon achievements
- certifications
- leadership
- compact visual timeline/list

### Done when
Credibility signals are visible but do not overpower projects.

---

## Phase 9 — Contact

### Build
- large closing statement
- email CTA
- GitHub
- LinkedIn
- resume
- availability statement

### Done when
A recruiter has an obvious next action.

---

## Phase 10 — Motion & Polish

### Add carefully
- Lenis
- Framer Motion
- GSAP
- scroll progress
- micro-interactions
- system-flow animation
- magnetic CTA
- page transitions

### Done when
Motion feels intentional and not like a demo.

---

## Phase 11 — SEO, Accessibility & Performance

### Verify
- metadata
- Open Graph
- keyboard navigation
- reduced motion
- responsive behavior
- image optimization
- Lighthouse
- typecheck
- lint

---

## Phase 12 — Sukh AI

### Build only after frontend is stable
- FastAPI
- portfolio ingestion
- embeddings
- ChromaDB
- retrieval
- OpenAI/Groq integration
- chat API
- chat UI

### Done when
The assistant can answer grounded questions about the portfolio.

---

## Phase 13 — Deployment

### Frontend
Vercel

### Backend
FastAPI-compatible deployment

### Final
- environment variables
- production build
- domain
- analytics if desired
- final content verification

---

## Implementation Discipline

We will work **one phase at a time**.

For every phase:
1. explain what is being built
2. identify files
3. implement
4. run/typecheck/lint
5. visually inspect
6. fix issues
7. commit
8. move to the next phase

Do not jump directly to Phase 12.
