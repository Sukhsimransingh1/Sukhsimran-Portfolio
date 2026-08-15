# Design System — Sukhsimran Singh Portfolio

## 1. Creative Direction

### Design statement

**Editorial AI Engineering**

A premium portfolio combining:
- editorial typography
- warm modernism
- technical system diagrams
- subtle motion
- product-like interfaces

The site should feel closer to a high-end technology studio than a conventional student portfolio.

---

## 2. Visual Personality

Keywords:

**Intelligent · Precise · Warm · Technical · Mature · Experimental · Calm**

Avoid:

**Gamer · Cyberpunk · Neon · Generic SaaS · Template-like · Overly corporate**

---

## 3. Color System

### Core

```css
--color-ivory: #F4F0E8;
--color-graphite: #171717;
--color-coral: #E9785F;
--color-sage: #8FAF9A;
--color-beige: #C9B8A5;
```

### Suggested semantic tokens

```text
background-primary
background-secondary
background-inverse
surface
surface-muted
text-primary
text-secondary
text-muted
accent-primary
accent-secondary
border
```

Use semantic tokens instead of raw colors throughout components.

---

## 4. Surface Language

Cards:
- subtle 1px border
- moderate radius
- low-intensity shadow
- optional translucent layer
- no excessive blur

Large sections:
- full-width background transitions
- generous vertical spacing
- occasional dark/inverse section

Use dark sections as punctuation rather than the entire website.

---

## 5. Layout

Desktop:
- max content width around 1200–1320px
- generous horizontal gutters
- 12-column mental grid

Common composition:
```text
label | large heading
      | description
      | content
```

Project sections may use:
```text
visual 60% | text 40%
```

or alternate:
```text
text 45% | visual 55%
```

Avoid repetitive identical grids.

---

## 6. Navigation

Desktop:
- logo/name on left
- section anchors centered/right
- resume CTA on far right

Mobile:
- compact logo
- menu button
- accessible mobile navigation

Navigation should remain visually quiet.

---

## 7. Hero Composition

### Left
- availability/status
- role labels
- large name/headline
- supporting statement
- CTA
- social links

### Right
Interactive AI system visual.

Suggested system:
```text
DATA
  ↓
MODELS
  ↓
RETRIEVAL
  ↓
INTELLIGENCE
  ↓
APIs
  ↓
PRODUCT
```

Nodes should subtly respond to cursor/scroll.

---

## 8. Section Headers

Use:
```text
01  ABOUT
```

followed by:
```text
About
```

and a concise one-line description.

Large heading + small metadata creates the editorial hierarchy.

---

## 9. Experience Design

Use a vertical timeline with:
- year/date
- central progression line
- active node
- experience card
- stage label

Stages:
- Foundation & Learning
- Building & Delivering

Future stages can be added without redesigning the component.

---

## 10. Project Design

Featured project:
- large visual
- project index
- category
- title
- concise description
- "What I built"
- architecture
- stack
- links

Project image should sit inside a premium frame rather than being a plain `<img>`.

Each featured project should feel like a mini product case study.

---

## 11. Technical Arsenal

Use category cards.

Example:
```text
01
LANGUAGES
Python · SQL · C++

02
AI / MACHINE LEARNING
Scikit-learn · TensorFlow · XGBoost · Transformers

03
GENERATIVE AI
LLMs · RAG · LangChain · LangGraph · Embeddings
```

Cards may use very subtle accent variations.

---

## 12. Achievements

Use compact horizontal rows.

Example:
```text
01  Top 15 Finalist
    Innovate with TRAE
    NIT Jalandhar
```

This is more elegant than trophy icons everywhere.

---

## 13. Certifications

Use a clean list with:
- title
- provider
- credential type
- status
- optional certificate link placeholder

---

## 14. Contact

Large statement:

**Let's build intelligent systems.**

Supporting line:
AI/ML · Generative AI · AI Backend Engineering

Then:
- email button
- GitHub
- LinkedIn
- resume

Use a strong contrast background for the final section.

---

## 15. Motion Language

### Global
- smooth scrolling
- section reveal
- subtle opacity + transform
- no long intro animation

### Hero
- flowing connections
- node movement
- subtle parallax

### Cards
- translate 2–6px
- border/accent transition
- very subtle glow only on interaction

### Buttons
- magnetic effect only on desktop
- arrow movement
- tactile hover

### Reduced motion
Disable:
- parallax
- particle movement
- large transforms
- smooth-scroll enhancements

---

## 16. Iconography

Use Lucide React.

Icons should:
- support meaning
- remain small
- never replace text for important information
- use consistent stroke weight

---

## 17. Photography

No portrait is required for the first version.

Project screenshots are more important because they demonstrate actual work.

---

## 18. Responsive Design

### Desktop
Asymmetric editorial composition.

### Tablet
Reduce columns and visual complexity.

### Mobile
Single-column storytelling:
1. hero
2. profile
3. experience
4. projects
5. skills
6. achievements
7. certifications
8. contact

The hero architecture visual may simplify substantially on mobile.

---

## 19. Accessibility

Minimum:
- WCAG-conscious contrast
- keyboard support
- focus-visible states
- semantic landmarks
- reduced motion
- meaningful alt text
- screen-reader-friendly navigation

---

## 20. Final Visual Rule

The portfolio should look **designed**, not decorated.

If an effect exists only because it looks cool, remove it.

If an effect helps explain:
- a system
- a transition
- a hierarchy
- an interaction
- a technical concept

keep it.
