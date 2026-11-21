# Rick and Morty Explorer

A server-rendered character explorer built with Nuxt 4 and the public [Rick and Morty API](https://rickandmortyapi.com/documentation). Browse characters, search by name, and view character episodes and their last known location.

## Demo

[Open the live demo](https://erfansafaeirickandmorty.netlify.app/).

## Requirements

- Node.js `22.23.5`
- pnpm `10.27.0`

## Getting started

```sh
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The app uses the public API by default. To use another API base URL, set `NUXT_PUBLIC_API_BASE` in your environment.

## Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `pnpm dev`          | Start the development server         |
| `pnpm build`        | Build the production app             |
| `pnpm preview`      | Preview the production build locally |
| `pnpm typecheck`    | Run TypeScript checks                |
| `pnpm lint`         | Run ESLint                           |
| `pnpm format:check` | Check formatting with Prettier       |
| `pnpm test`         | Run the Vitest suite                 |

## Project structure

The Nuxt application lives in `app/`:

- `pages/` — character list (`/`) and character details (`/character/:id`)
- `components/character-list/` and `components/character-detail/` — feature UI and section states
- `components/ui/` — shared buttons, inputs, and icons
- `composables/` — feature interaction and data state
- `services/` — API requests and response-to-view mapping
- `types/` — API, pagination, and view types
- `design-system/` — design tokens

Both pages render data on the server. The list URL stores search and pagination state; character detail pages include episodes and the last known location.

## Decisions

- The detail page shows the character's last known location, as the spec asks; the design's grid of location cards is placeholder content, and each character has only one current location.
- Characters with status `unknown` get a gray status dot; the design only defines Alive (green) and Dead (red).
- The detail page loads the character first, then episodes and location in parallel as separate sections: the server renders everything, and in-app navigation shows skeletons for the sections still loading.
- API responses are mapped to small view types before they reach components, which cuts the SSR payload for the largest character from 76 KB to 5 KB.
- Detail pages are cached at the edge with ISR on Netlify because the data is static; the list page is not, because every search creates a new cache key.
- The character list shows 20 characters per page instead of the design's 12, because the API's page size is fixed at 20 and cannot be changed.
