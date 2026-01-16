# Copilot AI Agent Instructions for para-so-trout-farm

## Project Overview
- **Type:** Vite + React + TypeScript SPA
- **UI:** Tailwind CSS, shadcn-ui component library
- **Purpose:** Web app for a trout farm, with sections for about, contact, events, experiences, and gallery.

## Key Structure
- **src/pages/**: Top-level routes (Index.tsx, NotFound.tsx)
- **src/components/sections/**: Main homepage sections (AboutSection, ContactSection, etc.)
- **src/components/layout/**: Layout components (Header, Footer)
- **src/components/ui/**: shadcn-ui primitives (do not modify unless extending UI library)
- **src/hooks/**: Custom React hooks
- **src/lib/**: Utility functions
- **public/**: Static assets

## Development Workflow
- **Install dependencies:** `npm install`
- **Start dev server:** `npm run dev` (Vite, hot reload)
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`
- **No formal test suite** (as of Jan 2026)

## Project Conventions
- **Component organization:**
  - Use `sections/` for homepage/major page blocks
  - Use `layout/` for shared layout (header/footer)
  - Use `ui/` for atomic UI primitives (prefer composition over modification)
- **Styling:**
  - Use Tailwind utility classes for layout and design
  - Use shadcn-ui components for consistent UI patterns
- **TypeScript:**
  - All React components are written in TSX
  - Prefer explicit types for props and hooks
- **Assets:**
  - Place images in `public/` or `src/assets/` as appropriate

## Integration & External Services
- **Lovable.dev**: Project can be edited and deployed via Lovable (see README)
- **No backend/API integration** is present in this repo

## Examples
- To add a new homepage section: create a new file in `src/components/sections/`, export a React component, and import it in `Index.tsx`.
- To add a new UI primitive: extend `src/components/ui/` following shadcn-ui conventions.

## References
- See [README.md](../../README.md) for setup, deployment, and Lovable integration details.
- See `tailwind.config.ts` and `vite.config.ts` for build and styling configuration.

---
**For AI agents:**
- Follow the above conventions for new code.
- Prefer composition and reuse of existing components.
- Do not introduce new backend logic in this repo.
- If unsure about a pattern, check similar files in the relevant directory.
