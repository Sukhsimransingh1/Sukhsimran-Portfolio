# Rules — Portfolio Engineering Constitution

## 1. Product Identity

This is an **AI/ML engineering portfolio**, not a generic frontend portfolio.

Every major visual and content decision should reinforce:
- AI engineering
- production thinking
- intelligent systems
- technical depth
- clarity

---

## 2. Design Rules

### Must
- Use strong typography.
- Use whitespace intentionally.
- Use asymmetry where it improves hierarchy.
- Use subtle borders and depth.
- Use a restrained color system.
- Use visual storytelling.
- Make the design feel premium and mature.

### Must Not
- Copy the supplied reference portfolio.
- Reuse its exact color palette.
- Make purple/neon the dominant visual language.
- Use pure black + pure white as the only palette.
- Fill the page with glowing gradients.
- Overuse glassmorphism.
- Use decorative animation without a purpose.

---

## 3. Color Rules

Primary direction:

**Warm Ivory + Graphite + Coral/Terracotta + Sage**

Reference palette:

```text
Warm Ivory     #F4F0E8
Graphite       #171717
Coral          #E9785F
Sage           #8FAF9A
Warm Beige     #C9B8A5
```

These are starting tokens, not immutable values.

Use color hierarchically:
- ivory/light surfaces for clarity
- graphite for contrast sections
- coral for primary action/accent
- sage for secondary system states
- beige for subtle supporting elements

No rainbow UI.

---

## 4. Typography Rules

Use a modern editorial sans-serif.

Hierarchy:
- very large hero typography
- large section headings
- small uppercase section labels
- readable body copy
- compact metadata

Avoid:
- too many font families
- overly futuristic fonts
- monospace as the primary font

Monospace can be used sparingly for technical/system labels.

---

## 5. Animation Rules

Animation must communicate:
- state
- hierarchy
- system flow
- interaction
- transition

Preferred:
- scroll reveal
- subtle parallax
- moving system connections
- magnetic buttons
- card hover depth
- section transitions
- progress indicators

Avoid:
- constant movement
- bouncing elements
- excessive cursor effects
- animation that delays content
- animation that harms mobile performance

Always support reduced motion.

---

## 6. Hero Rules

The hero must not use a generic developer illustration.

Preferred visual:
```text
Data → Intelligence → Retrieval → APIs → Product
```

It should feel like an AI system architecture.

The hero should be impressive without requiring a 3D model.

---

## 7. Content Rules

- Never invent metrics.
- Never invent job responsibilities.
- Never invent certifications.
- Never invent project links.
- Never claim a technology was used unless verified.
- Keep copy concise.
- Prefer concrete engineering language.
- Avoid buzzword stuffing.

Bad:
> Leveraging cutting-edge AI technologies to revolutionize everything.

Good:
> Built a RAG pipeline that retrieves document context before generating responses.

---

## 8. Project Rules

Every featured project should answer:

1. What problem does it solve?
2. What did Sukhsimran build?
3. What makes the system technically interesting?
4. What technologies were used?
5. What was the engineering challenge?
6. What is the result?
7. Where can it be viewed?

Live and GitHub links start as placeholders.

---

## 9. Accessibility Rules

- semantic HTML
- keyboard navigation
- visible focus states
- sufficient contrast
- descriptive labels
- alt text for meaningful images
- decorative visuals marked appropriately
- reduced motion support
- no information conveyed only through color

---

## 10. Responsive Rules

Design from desktop down, but test:
- 1440px+
- 1280px
- 1024px
- 768px
- 390px
- 360px

No horizontal overflow.

Mobile should not be a compressed desktop layout.

---

## 11. Component Rules

- Prefer small focused components.
- Avoid huge page components.
- Keep content separate from presentation.
- Avoid prop drilling where a data structure solves it.
- Use TypeScript types.
- Reuse UI primitives.
- Keep animation logic close to the animated component.

---

## 12. Code Rules

- TypeScript strict mode.
- No unnecessary `any`.
- No secrets in source.
- No duplicated project data.
- No magic URLs scattered across components.
- Use environment variables for backend secrets.
- Keep imports organized.
- Run lint/typecheck after meaningful changes.

---

## 13. Performance Rules

- Optimize images.
- Lazy-load heavy components.
- Use dynamic imports for heavy visual libraries.
- Avoid unnecessary client components.
- Avoid rendering hundreds of DOM particles.
- Prefer CSS or canvas for lightweight visual effects.
- Measure before adding expensive effects.

---

## 14. AI Assistant Rules

The assistant must:
- answer only from portfolio knowledge
- avoid fabricating information
- identify uncertainty
- remain concise
- not expose implementation secrets
- have a clear loading/error state
- work without blocking the main portfolio

---

## 15. Decision Rule

When two options are equally attractive:

**Choose the simpler implementation that produces the stronger user experience.**
