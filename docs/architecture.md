# Architecture — Sukhsimran Singh AI/ML Portfolio

## 1. Architecture Philosophy

Use a **content-driven Next.js frontend** with an optional FastAPI AI layer.

The frontend is the primary product. The backend exists only where it creates meaningful functionality, especially the portfolio-aware AI assistant.

Principles:
- component-driven
- data-driven
- typed
- accessible
- responsive
- animation-isolated
- SEO-friendly
- easy to deploy
- easy to extend

---

## 2. Core Stack

### Frontend
- Next.js 15
- App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Lucide React

### Motion
- Framer Motion
- GSAP
- Lenis

Use each intentionally:
- Framer Motion: component/section transitions
- GSAP: complex timeline/scroll choreography
- Lenis: smooth scrolling
- CSS: simple hover/focus transitions

### Visual / Interactive
- React Flow for system/architecture diagrams
- Three.js only when a visual genuinely benefits from 3D
- No heavy WebGL scene as the default hero

### Content
- TypeScript data files for structured content
- MDX for detailed project case studies
- Central project URL configuration

### Backend
- FastAPI
- ChromaDB
- OpenAI and/or Groq
- embeddings for portfolio retrieval

### Deployment
- Vercel for frontend
- FastAPI backend deployed separately when required

---

## 3. High-Level System

```text
                         ┌─────────────────────┐
                         │       Visitor       │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   Next.js Frontend  │
                         │  App Router + TS    │
                         └──────────┬──────────┘
                                    │
             ┌──────────────────────┼──────────────────────┐
             │                      │                      │
             ▼                      ▼                      ▼
       Portfolio UI            Motion Layer          Content/Data
       Components              Framer/GSAP           TS + MDX
             │                      │                      │
             └──────────────────────┼──────────────────────┘
                                    │
                           Optional AI Assistant
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │     FastAPI API     │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │ Retrieval Service   │
                         │ ChromaDB + Embeds   │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │     LLM Provider    │
                         │   OpenAI / Groq     │
                         └─────────────────────┘
```

---

## 4. Frontend Structure

### app/
Responsible for routes, metadata, global styles, and page composition.

### components/
Responsible for reusable UI and section-level components.

### data/
Contains structured portfolio information:
- experience
- projects
- skills
- achievements
- certifications
- social links

### content/
Contains MDX case studies and long-form portfolio content.

### lib/
Shared utilities and helper functions.

### hooks/
Reusable client-side behavior:
- scroll progress
- mouse position
- reduced motion
- magnetic interaction
- active section

### types/
Shared TypeScript interfaces.

---

## 5. Content Architecture

Do not put project content directly inside React components.

Example:

```text
src/data/
├── profile.ts
├── experience.ts
├── projects.ts
├── skills.ts
├── achievements.ts
├── certifications.ts
└── social.ts
```

The UI consumes these objects.

This allows live/GitHub URLs to be changed without touching components.

---

## 6. Project Architecture

Each project should support:

```text
Project
├── metadata
├── description
├── categories
├── stack
├── features
├── architecture
├── engineering decisions
├── outcome
├── liveUrl
├── githubUrl
└── caseStudy
```

Use placeholder values initially:

```ts
liveUrl: "#"
githubUrl: "#"
```

Replace later manually.

---

## 7. MDX Architecture

Use MDX only for deep case studies.

Example:

```text
src/content/projects/
├── pranrakshak-ai.mdx
├── disastersense-ai.mdx
├── omnirag-ai.mdx
└── resume-screening-ai.mdx
```

The main homepage should remain concise.

---

## 8. Backend Architecture

```text
backend/app/
├── main.py
├── api/
│   └── chat.py
├── core/
│   ├── config.py
│   └── logging.py
├── services/
│   ├── retrieval.py
│   ├── embeddings.py
│   └── llm.py
├── models/
├── schemas/
└── utils/
```

The backend should expose a small API surface.

Initial endpoint:

```text
POST /api/chat
```

Future endpoints can be added only when necessary.

---

## 9. Portfolio RAG Pipeline

```text
Markdown / Structured Portfolio Data
                ↓
             Loader
                ↓
            Chunking
                ↓
           Embeddings
                ↓
             ChromaDB
                ↓
            Retriever
                ↓
          Context Builder
                ↓
             LLM
                ↓
        Grounded Response
```

The source corpus should include:
- profile
- experience
- projects
- skills
- achievements
- certifications
- resume-derived information

---

## 10. Performance Architecture

- Server components by default
- Client components only where interaction is required
- Lazy-load heavy visual modules
- Dynamic import for Three.js
- Optimize project screenshots
- Avoid shipping unused animation libraries to every component
- Respect `prefers-reduced-motion`
- Use image optimization
- Avoid large background videos

---

## 11. SEO

Implement:
- metadata
- Open Graph
- Twitter/X card
- semantic headings
- descriptive page title
- canonical URL
- structured data where useful
- robots/sitemap when deployed

---

## 12. Security

Never expose:
- OpenAI API keys
- Groq API keys
- Chroma credentials if hosted
- backend secrets

All secrets use environment variables.

---

## 13. Deployment

Frontend:
```text
GitHub → Vercel
```

Backend:
```text
GitHub → FastAPI deployment
```

The frontend must work independently even if the AI assistant backend is unavailable.
