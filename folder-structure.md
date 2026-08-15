# Folder Structure — Sukhsimran AI Portfolio

```text
ai-portfolio/
│
├── docs/
│   ├── prd.md
│   ├── architecture.md
│   ├── rules.md
│   ├── phases.md
│   └── design.md
│
├── public/
│   ├── images/
│   │   ├── projects/
│   │   └── certifications/
│   └── resume/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── section-wrapper.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── experience/
│   │   │   ├── journey/
│   │   │   ├── projects/
│   │   │   ├── skills/
│   │   │   ├── achievements/
│   │   │   ├── certifications/
│   │   │   └── contact/
│   │   │
│   │   ├── projects/
│   │   │   ├── featured-project.tsx
│   │   │   ├── project-card.tsx
│   │   │   ├── project-frame.tsx
│   │   │   └── project-architecture.tsx
│   │   │
│   │   ├── visuals/
│   │   │   ├── ai-system-flow.tsx
│   │   │   ├── network-background.tsx
│   │   │   └── section-decoration.tsx
│   │   │
│   │   ├── chat/
│   │   │   ├── chat-button.tsx
│   │   │   ├── chat-panel.tsx
│   │   │   └── chat-message.tsx
│   │   │
│   │   └── ui/
│   │       └── [shadcn primitives]
│   │
│   ├── content/
│   │   └── projects/
│   │       ├── pranrakshak-ai.mdx
│   │       ├── disastersense-ai.mdx
│   │       ├── omnirag-ai.mdx
│   │       └── resume-screening-ai.mdx
│   │
│   ├── data/
│   │   ├── profile.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── achievements.ts
│   │   ├── certifications.ts
│   │   └── social.ts
│   │
│   ├── hooks/
│   │   ├── use-mouse-position.ts
│   │   ├── use-reduced-motion.ts
│   │   ├── use-scroll-progress.ts
│   │   └── use-active-section.ts
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── mdx.ts
│   │
│   ├── types/
│   │   ├── project.ts
│   │   ├── experience.ts
│   │   └── portfolio.ts
│   │
│   └── styles/
│       └── [additional styles only when necessary]
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── api/
│   │   │   └── chat.py
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   └── logging.py
│   │   ├── services/
│   │   │   ├── retrieval.py
│   │   │   ├── embeddings.py
│   │   │   └── llm.py
│   │   ├── models/
│   │   ├── schemas/
│   │   └── utils/
│   ├── data/
│   ├── tests/
│   ├── requirements.txt
│   └── Dockerfile
│
├── .env.example
├── .gitignore
├── components.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## What to create now

If starting from a fresh Next.js app, create the folders first and keep the backend optional until Phase 12.

The first implementation files will be:

```text
src/app/layout.tsx
src/app/page.tsx
src/app/globals.css
src/data/profile.ts
src/data/social.ts
src/data/experience.ts
src/data/projects.ts
src/data/skills.ts
src/data/achievements.ts
src/data/certifications.ts
src/types/portfolio.ts
src/lib/constants.ts
```

Then we build components phase-by-phase.

## Placeholder links

Centralize these in `src/data/social.ts` and `src/data/projects.ts`.

Use:

```text
GitHub:
https://github.com/Sukhsimransingh1

LinkedIn:
https://www.linkedin.com/in/sukhsimran-singh1/

Project live URL:
#

Project GitHub URL:
#
```

Replace project `#` placeholders manually when the final live/GitHub links are ready.
