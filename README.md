# Xu Nianqi Career Experience

An interactive career experience for Xu Nianqi, built as a premium software-product surface rather than a conventional student portfolio. The site presents technical support experience, project coordination potential, AI-assisted workflow capability, and GitHub delivery quality through structured evidence and calm interaction design.

Live site: https://c173sam.github.io/ai-portfolio-website/

## Architecture

The project separates content, interface modules, and interaction logic so the experience can evolve without turning into a single-page code dump.

```txt
src/
  components/
    AIWorkflow.tsx
    Capabilities.tsx
    CaseStudies.tsx
    DesignDecisions.tsx
    ExperienceShell.tsx
    Introduction.tsx
    ModuleSection.tsx
    Process.tsx
    ResumeContact.tsx
  data/
    profile.ts
  hooks/
    useActiveSection.ts
  types.ts
  App.tsx
  index.css
```

`profile.ts` is the single source of truth for career content. `App.tsx` only composes the experience. Components are designed as product modules, not template sections.

## Design Philosophy

The interface is built around calm confidence:

- Almost-black background
- Soft gray typography
- One restrained cyan accent
- Large breathing space
- Product-like navigation
- Evidence-first case studies
- Motion that guides attention without performing for attention

The design avoids common portfolio tropes such as skill percentages, progress bars, fake metrics, decorative mockups, stock illustrations, and exaggerated animations.

The current structure is intentionally concise:

- Hero
- Selected Work
- Operational Capability
- AI Workflow
- Engineering Process
- Resume Proof
- Contact

## Tech Decisions

- React provides composable interface modules.
- TypeScript keeps content and component contracts explicit.
- Vite keeps the development and build pipeline fast.
- Tailwind CSS handles the utility layer while `index.css` defines the product-specific visual system.
- Framer Motion adds subtle reveal, elevation, and active-surface motion.
- Lucide React provides clean interface icons without custom illustration noise.

## Content Model

The site is structured around recruiter decision-making:

- Hero: core operating statement and role direction
- Selected Work: context, problem, action, result, and tools
- Operational Capability: business value of support-oriented capabilities
- AI Workflow: AI as a working process, not a gimmick
- Engineering Process: how the site was built and shipped
- Resume Proof: concise verified facts
- Contact: direct next-step information

## Performance

- Static Vite build
- Minimal runtime state
- Data-driven rendering
- No heavy visual assets
- No particle systems or decorative animation loops
- CSS-based surfaces and responsive layouts

## Accessibility

- Semantic section structure
- Keyboard-friendly anchor navigation
- Sufficient contrast on dark surfaces
- Reduced-motion media query
- Descriptive link labels
- Responsive layout across desktop and mobile

## Deployment

The project is deployed through GitHub Pages.

```bash
npm install
npm run build
```

Main source branch:

```txt
main
```

Static deployment branch:

```txt
gh-pages
```

## Engineering Challenges

- Turning resume content into a product-like narrative without inventing facts
- Avoiding generic portfolio structure while keeping recruiter scanning efficient
- Balancing visual polish with fast static deployment
- Making AI workflow visible as a method rather than a superficial tools list
- Keeping the interface modular enough for future case-study expansion

## Future Improvements

- Add a custom domain
- Add real LinkedIn once available
- Add expanded screenshots or technical appendices for each case study
- Add a lightweight analytics-free interaction log for self-review
- Add English and Chinese language mode if targeting both local and global recruiters
