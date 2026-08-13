# frontend-systems-lab

Personal portfolio + an evolving engineering lab, built with Next.js and TypeScript — and a
from-scratch React learning project.

`Next.js 16` · `TypeScript` · `Tailwind CSS` · `React Query` · `Zustand` · `Jest + RTL`

> **Scope note:** All work on this project is local to this folder (`fe-pro/vault26`). Nothing
> here changes global tooling, other repos, or machine-wide config. This file (`README.md`) is
> the plain-text mirror of `README.html` — same content, same sections, kept in sync on every
> update. `README.html` has the same info as tabs (Setup / Project Plan / React / Next.js / Rules /
> Progress); here they're just headings.

---

## Setup

### What this is

A frontend-only portfolio site: **Portfolio** (About, Experience, Skills, Projects, Contact) +
**Engineering Lab** (small interactive case studies, each a real frontend problem → approach →
fix, with a live demo). The "backend" is mocked via Next.js API routes
(`src/app/api/*/route.ts`), consumed with React Query — no real database or backend service.

### Prerequisites

```
Node.js  20.x   # pinned in .nvmrc — Node 18 will fail the build
npm      10.x   # ships with Node 20
nvm      any    # manages the Node version, see nvm-sh/nvm
Git      any
```

### Run it

```bash
# 1. clone
git clone <repo-url> && cd frontend-systems-lab

# 2. correct node version (folder-scoped, not global)
nvm install && nvm use

# 3. install deps
npm install

# 4. run dev server → localhost:3000
npm run dev
```

### Other commands

```bash
npm run build   # production build
npm start       # run the production build
npm run lint    # ESLint
npm test        # Jest suite
```

### Project structure

```
frontend-systems-lab/
├─ src/
│  ├─ app/
│  │  ├─ api/            <- mock backend (Next.js API routes)
│  │  ├─ page.tsx         <- entry page
│  │  └─ layout.tsx
│  └─ ...
├─ .nvmrc               <- pins Node version for this project
├─ .npmrc                <- pins npm registry for this project
├─ jest.config.js
├─ jest.setup.ts
├─ package.json
└─ README.html / README.md   <- this file (setup + plan + learning log + rules + progress)
```

---

## Project Plan

### Why this project exists

Two goals at once: (1) end up with a real, deployable portfolio site, and (2) use building it as a
structured way to learn React/Next.js from first principles — owning a project start to finish,
the way you'd own a feature at work.

### Phase 0 — Foundations & repo literacy `done`

No new code. Get oriented in the existing scaffold before touching it.

- Understand the stack already in `package.json`: Next.js 16 (App Router), React 19, TypeScript,
  Tailwind 4, React Query, Zustand, Jest + RTL.
- Understand Node version pinning (`.nvmrc`) and why it matters.
- Run the dev server, confirm the default scaffold page loads at `localhost:3000`.
- Read the existing file structure: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`.

### Phase 1 — Portfolio (core React/Next skills) `in progress`

Build the static portfolio site. This is where core concepts land: components, props,
composition, layouts, routing, styling.

1. **Story 1 — Layout shell & nav** `done`**.** Header with nav (About, Experience, Skills,
   Projects, Contact, Lab) and a footer, both dark/light aware.
   *Teaches:* Next.js App Router root layout, semantic HTML structure, Tailwind layout utilities.
2. **Story 2 — Route structure for Portfolio pages** `done`**.** Create routes/sections for About,
   Experience, Skills, Projects, Contact with placeholder content blocks (no real content yet).
   *Teaches:* App Router file conventions (`page.tsx` per route), linking between routes with
   `next/link`. Verified: all 5 routes return 200 from the dev server.
3. **Story 3 — Reusable UI primitives.** Build a small set of shared components (Card, Section,
   Badge) used across the placeholder pages.
   *Teaches:* component composition, prop typing in TypeScript, avoiding duplication.
4. **Story 4 — Real content pass.** Once structure is validated, swap placeholder text for real
   About/Experience/Skills/Projects/Contact content.
   *Teaches:* content-driven component design (props vs hardcoded text).
5. **Story 5 — Responsive polish & dark mode check.**
   *Teaches:* Tailwind responsive breakpoints, `dark:` variants.

### Phase 2 — Engineering Lab (advanced skills) `not started`

The interactive case-study section. Layers harder concepts on top of a working app.

6. **Story 6 — Lab route + mock API convention.** Set up `/lab` index route and the
   `src/app/api/*/route.ts` convention with one placeholder route returning mock JSON (simulated
   delay/error). *Teaches:* Next.js Route Handlers, server-side code in the App Router.
7. **Story 7 — First case study skeleton wired to React Query.** A `/lab/[case-study]` page
   fetching from the mock API via React Query — wiring only, no real "problem/fix" write-up yet.
   *Teaches:* React Query setup (`QueryClientProvider`), loading/error states, caching basics.
8. **Story 8 — State management case study with Zustand.** A small interactive demo that needs
   shared client state across components. *Teaches:* when to reach for a store vs local
   state/props.
9. **Story 9 — Testing pass.** Add Jest + React Testing Library tests for at least one portfolio
   component and one lab case study. *Teaches:* component testing fundamentals, testing async
   data-fetching UI.
10. **Story 10 — Deploy.** Ship it (e.g. Vercel) so the portfolio is a real, shareable URL.
    *Teaches:* production build vs dev, environment basics.

### How each story is worked

1. Discuss the story: what it builds, what concept it teaches, why this approach.
2. Build it, explaining decisions as they're made.
3. Run/verify it in the browser together.
4. Write it up in the **Learning Log** section (and mirrored to `README.html`).
5. Update the **Progress** section.

---

## React

Concepts grouped by **library, not by story** — ordered basic → advanced, in the order they showed
up while building. Each concept is explained the way you'd answer it in an interview: **WHAT** it
is, **WHY** it exists, and what **BREAKS IF** you get it wrong (often flagged as a real interview
question). `README.html` shows the same content as a two-pane diagram — file tree on the left,
click a file to load its explanation on the right.

### 1. Rendering a list — `.map()` + `key`

**Analogy — The Coat Check Ticket.** Each coat gets one ticket stub, glued to that coat only.
Lose the stub system, and the attendant hands back *a* coat — not necessarily yours.

```
+----------------------------------------+
| NAV_LINKS (The Rack of Coats)            |
|  [0] Home   --ticket--> key="/"          |
|  [1] About  --ticket--> key="/about"     |
|  [2] Skills --ticket--> key="/skills"    |
|  --> reorder-safe: ticket travels with   |
|      the coat, not the hook number       |
+----------------------------------------+
```

```tsx
NAV_LINKS.map((link) => (
  <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
))
```

- **WHAT** — React can't render a raw JS array. `.map()` transforms `[{href, label}, ...]` into an
  array of `<li>` JSX elements — one data array in, one element per item out.
- **WHY `key`** — React re-renders lists by diffing old vs new. `key` is how it matches "this `li`
  was already here" instead of tearing down and rebuilding every item on each render. Without a
  stable key, React falls back to **array index**, which breaks the moment items reorder.
- **BREAKS IF** — you use array index as `key` and the list can reorder (sortable list, item
  deleted from the middle) — React reuses the wrong DOM node for the wrong item, so input state,
  focus, or animations attach to the wrong row. **Very common interview question**: "why is
  `key={index}` an anti-pattern?"
- **Interview trap** — horror story: dev keys a to-do list by index; deleting item 2 makes item
  3's input steal item 2's typed text. Drill: "Why is `key={index}` called an anti-pattern?"
  Defend in 1 sentence.
- **In plain words (the part that actually matters)** — React does **not** re-read every label
  on every render. It sees "key `0` still exists" and just updates that same DOM node's text —
  it never notices *which* item disappeared. Example: list is `key0=Home, key1=About,
  key2=Skills`. Delete "Home" → new list is `key0=About, key1=Skills`. React thinks "key `0`
  already exists, just relabel it" — so the DOM node that *used to be* Home silently becomes
  About, same node. Anything attached to that node (typed text, focus, animation) comes along
  for the ride onto the wrong item. Using `key={link.href}` instead fixes this because the tag
  travels with the *data*, not the *position* — so React can tell "About" was never removed, it
  just moved up a slot.
- *(Interactive version — type in "About"'s row, delete "Home", watch the text jump to the wrong
  row in the index-key list but stay put in the stable-key list — lives in `README.html` only.)*

### 2. Presentational ("dumb") components

**Analogy — The Vending Machine Sticker.** A sticker on the machine's front just displays art.
Unplug the machine, sticker looks identical. It holds zero wiring to the mechanism inside.

```
+----------------------------------------+
| Footer.tsx (The Sticker)                |
|  - no props in                          |
|  - no state inside                      |
|  - no hooks wired                       |
|  --> output is 100% predictable         |
+----------------------------------------+
```

```tsx
export default function Footer() {
  return <footer>...</footer>;
}
```

- **WHAT** — a component with no props, no state, no hooks — it only renders markup. Interviews
  call this a "presentational"/"dumb" component, vs. a "container" component that holds logic/state.
- **WHY** — splitting it out of `layout.tsx` isn't just tidiness: zero dependencies means it's
  trivially unit-testable (render it, assert the output), and it can never cause a bug elsewhere in
  the layout since it can't read or affect shared state.
- **Good to know** — this exact split is what Story 9 (testing pass) will exploit — presentational
  components are the easiest first target for a test suite.
- **Interview trap** — horror story: dev sneaks a `useContext` into "just a footer" — now every
  unrelated test has to mock a provider. Drill: "How do you spot a component secretly holding
  state?" Defend in 1 sentence.
- *(Interactive version — bump a shared counter elsewhere on the page, watch Footer never pulse —
  lives in `README.html` only.)*

### 3. The layout / `{children}` slot pattern

**Analogy — The Picture Frame and Photo.** The frame stays fixed on the wall. Only the photo
inside changes. `{children}` is the empty glass pane waiting for the photo.

```
+----------------------------------------+
| layout.tsx (The Permanent Frame)        |
|  - <Header /> (Never moves)             |
|  +------------------------------------+ |
|  | {children} (The Empty Slot)         | |
|  |  --> Dynamically drops in:          | |
|  |  --> page.tsx (The Active Photo)    | |
|  +------------------------------------+ |
|  - <Footer /> (Never moves)             |
+----------------------------------------+
```

- **WHAT** — `{children}` is a normal React prop that Next.js automatically fills with the current
  page's component. Every layout function receives it — it's just
  `function RootLayout({ children })` destructuring a prop, not framework magic.
- **WHY** — Header/nav/footer should render *once*, not be copy-pasted into every page. The layout
  renders once and reuses the same shell; only `{children}` swaps as you navigate. This is the
  React composition pattern interviewers call a **"slot" or "wrapper" component** — same idea as a
  modal that takes arbitrary content.
- **BREAKS IF** — you forget to render `{children}` in the layout: the app compiles fine, but every
  page shows a blank body under the header. Classic interview trap — "why is my page empty" often
  traces back to a layout that never renders its children.
- **Interview trap** — horror story: dev nests a layout inside a layout, forgets the inner
  `{children}` — nested route renders blank, outer shell fine. Drill: "URL changed, but state
  inside your sidebar layout didn't reset. Why?" Defend in 1 sentence.
- *(Interactive version — click Home/About/Skills, watch the slot swap while the frame pulses
  static — lives in `README.html` only; can't run JS/CSS in plain Markdown.)*

### 4. Typing `{children}` with TypeScript — `Readonly<{ children: React.ReactNode }>`

**Analogy — The Sealed Delivery Box.** Box only accepts one labeled slot: "children." Nothing
else fits, and once packed, contents can't be swapped out.

```
+----------------------------------------+
| RootLayout(props)  (The Sealed Box)     |
|  props: Readonly<{                      |
|    children: React.ReactNode  <-- only  |
|  }>                              slot   |
|  --> "Readonly" = box can't be repacked |
|  --> "ReactNode" = anything renderable  |
|      (JSX, string, number, null, array) |
+----------------------------------------+
```

```tsx
export default function RootLayout({
  children,                          // destructured from the sealed box
}: Readonly<{
  children: React.ReactNode;         // the ONLY declared slot
}>) {
  return (
    <body>
      <Header />
      <main>{children}</main>        {/* the slot's contents, placed here */}
      <Footer />
    </body>
  );
}
```

- **WHAT** — `Readonly<{ children: React.ReactNode }>` is a TypeScript type, not a React feature.
  It says: "this function's props object has exactly one field, `children`, and it can't be
  reassigned." `React.ReactNode` is the type for "anything React can render" — JSX, strings,
  numbers, arrays, or `null`.
- **WHY** — yes, in this exact code, `children` is the **only** prop the type allows. Passing
  anything else (e.g. `<RootLayout theme="dark">`) is a TypeScript compile error, not a runtime
  surprise. `Readonly` also blocks accidentally reassigning `props.children` inside the function
  body.
- **BREAKS IF** — you need to pass a new prop later (e.g. a page-specific `title`) and forget to
  add it to the type — TypeScript blocks it at compile time, which is the point. The only way to
  silently break this contract is switching the type to `any`, which throws away all of these
  guarantees.
- **Interview trap** — horror story: team types props as `any` "to move faster" — six months
  later, a renamed prop silently breaks three call sites with no compile error. Drill: "Your
  teammate says 'just use `any` for props, it's faster.' Why is that a bad trade here?" Defend in
  1 sentence.
- *(Interactive version — click "Pass only children" vs "Try passing theme" to see the type-check
  result — lives in `README.html` only.)*
- **Understood** — Manasa's answer: `any` reads fine today, but the problem shows up *later* and
  is hard to trace back. Sharper version: `any` doesn't add complexity — it **removes
  type-checking**. With a real type, a bad value errors immediately, in the editor, at compile
  time. With `any`, that same bad value passes silently and only surfaces later at runtime — in
  production, much more expensive to trace back.

---

## Next.js

Concepts grouped by **library, not by story** — ordered basic → advanced, in the order they showed
up while building. Same WHAT / WHY / BREAKS IF structure as the React section above.

### 1. How a URL becomes a component

**Analogy — The Hotel Room Number.** The room number on the door IS the address — no front-desk
lookup table required. Walk to folder "203", the room (`page.tsx`) is just there.

```
+----------------------------------------+
| src/app/  (The Hotel Floor Plan)         |
|  /  --room--> page.tsx                  |
|  /about --room--> about/page.tsx        |
|  /skills --room--> skills/page.tsx      |
|  --> folder path === URL path            |
|  --> no room = 404 (door doesn't exist) |
+----------------------------------------+
```

```
URL: /  --matches-->  app/page.tsx (file = route, by convention)  --becomes-->  {children}
```

- **WHAT** — Next.js App Router uses **file-based routing**: the folder path under `src/app/` IS
  the URL path, and a `page.tsx` inside that folder is what renders for that route. No route config
  file to maintain.
- **WHY** — this is why Story 2 (About, Experience, etc.) is just "add a folder + `page.tsx`" — the
  routing itself needs zero extra code, only the file has to exist in the right place.
- **Good to know** — the nav already links to `/about` etc. before those folders exist — that's
  *why* they 404 right now: the route-matching convention correctly finds no `page.tsx` there yet.
- **Where this actually happens in code** — it's not magic, and it's not in your project. It's a
  hardcoded regex check inside Next.js itself, at
  `node_modules/next/dist/server/lib/find-page-file.js`:
  ```js
  const createLeafPattern = (fileNames) => {
    const names = fileNames.length === 1 ? fileNames[0] : `(${fileNames.join('|')})`;
    return new RegExp(`(^${names}|[\\\\/]${names})\\.${extPattern}$`);
  };
  const leafOnlyPageFileRegex = createLeafPattern(['page', 'route']);

  function isAppRouterPage(filePath) {
    return leafOnlyPageFileRegex.test(filePath) || isMetadataFile(filePath);
  }
  ```
  In plain words: this builds a regex that matches a path only if its filename (ignoring
  extension) is literally `page` (or `route`). `isAppRouterPage()` runs that regex against every
  file Next.js finds while scanning `src/app/` — when it's `true`, that file gets registered as a
  route. `layout.tsx`, `not-found.tsx`, etc. each get their own separate regex the same way
  (`leafOnlyLayoutFileRegex`, `rootNotFoundFileRegex`). This scan runs when `next dev`/`next build`
  starts — not on every request — which is also why creating a new `page.tsx` requires the dev
  server to notice the file change (it re-scans), not something your own app code triggers.
- **Interview trap** — horror story: dev names the file `Page.tsx` (capital P) — case-sensitive
  deploy server 404s in prod, works fine on their Mac. Drill: "Why no central routes file, unlike
  React Router?" Defend in 1 sentence.
- *(Interactive version — type any path, see it resolve to a real file or 404 live — lives in
  `README.html` only.)*

### 2. Server Components vs. Client Components

**Analogy — The Bakery Display Case and the Register.** The display case is baked and arranged
before the store opens — nobody touches it live. The register only exists because a customer has
to press buttons right now.

```
+----------------------------------------+
| page.tsx (Server Component, default)    |
|  - baked at build/request time          |
|  - no useState, no onClick, no browser  |
|  - ships as plain HTML, zero JS for it  |
|  +------------------------------------+ |
|  | <Nav /> "use client" (The Register) | |
|  |  --> needs useState (active link)   | |
|  |  --> needs onClick / browser events | |
|  |  --> ships its own JS bundle        | |
|  +------------------------------------+ |
+----------------------------------------+
```

```tsx
// page.tsx — Server Component (default, no directive needed)
export default function HomePage() {
  return <Hero />; // rendered server-side, sent as HTML
}

// Nav.tsx — Client Component (opt-in)
"use client"; // <-- the only thing that flips the switch

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false); // needs browser state
  return <button onClick={() => setOpen(!open)}>Menu</button>;
}
```

- **WHAT** — in the Next.js App Router, every component is a **Server Component by default**. It
  renders on the server, ships as static HTML, and sends **zero JavaScript** to the browser for
  that component. Adding `"use client"` at the top of a file opts that component (and everything
  it imports) into being a **Client Component** — rendered in the browser, JS included.
- **WHY** — most of a portfolio (bio text, project descriptions, static layout) never needs to run
  in the browser — it just needs to exist as HTML. Only things that react to a click, hold state,
  or use browser-only APIs (`useState`, `useEffect`, `onClick`) need `"use client"`. Marking
  everything client-side by default is the old Create-React-App habit — App Router flips that
  default to save JS bundle size.
- **BREAKS IF** — you try to use `useState` or `onClick` inside a Server Component without
  `"use client"` — build error, not a silent bug. Inverse trap: slapping `"use client"` on a big
  shared layout "just to be safe" drags every child component into the client bundle too, even the
  ones that didn't need it — bundle size bloats for no reason.
- **Interview trap** — horror story: dev adds `"use client"` to the root layout "to fix a hydration
  error" — now the entire site ships as one giant client bundle, SSG benefits gone, Lighthouse
  score tanks. Drill: "Your whole homepage suddenly ships 200kb more JS after one commit — what's
  the first file you check, and why?" Defend in 1 sentence.
- *(Interactive version — toggle "use client" on Nav, watch the bundle-cost line change — lives in
  `README.html` only.)*

### 3. SSR vs. CSR (Server-Side Rendering vs. Client-Side Rendering)

**Analogy — The Kitchen-Cooked Meal vs. the Meal-Kit Box.** SSR is a meal already cooked in the
restaurant's kitchen — arrives at your table ready to eat. CSR is a meal-kit box — arrives at your
table, but you still have to unpack it and cook it yourself before it's edible.

```
+-----------------------------------------------------+
| SSR (Server-Side Rendering)                          |
|  Server: fetches data + runs React --> builds HTML   |
|  Browser: receives FINISHED HTML  --> paints it       |
|  --> user sees content immediately, before JS loads   |
+-----------------------------------------------------+
| CSR (Client-Side Rendering)                          |
|  Server: sends near-EMPTY HTML + a JS bundle          |
|  Browser: downloads JS --> runs React --> builds HTML |
|  --> user sees BLANK PAGE until JS finishes running   |
+-----------------------------------------------------+
```

```
SSR timeline:
  request --> [server: fetch data + render] --> HTML (with content) --> browser paints
              |__________ time here ___________|
              user sees a BLANK TAB during this gap, then full content appears at once

CSR timeline:
  request --> empty HTML shell --> browser downloads JS --> JS runs --> fetch data --> render
              |___ fast, blank page ___|__________ user sees BLANK PAGE this whole time __________|
              (browser tab isn't "loading" anymore, but the page is empty/spinner)
```

```tsx
// src/app/about/page.tsx — THIS IS ALREADY SSR. No directive needed.
// Next.js runs this ON THE SERVER by default, sends back finished HTML.
export default function AboutPage() {
  return <h1>About</h1>;
}
```

```tsx
// src/app/skills/page.tsx — force CSR by opting a component into the browser
"use client"; // <-- the same directive from concept #2 above

import { useState } from "react";

export default function SkillsPage() {
  const [filter, setFilter] = useState("all"); // needs the browser — can't run on the server
  return (
    <div>
      <button onClick={() => setFilter("frontend")}>Frontend</button>
      {/* rest of the UI, filtered client-side */}
    </div>
  );
}
```

| | SSR | CSR |
|---|---|---|
| **Where it renders** | Server, before sending HTML | Browser, after JS downloads |
| **What user sees first** | Finished content, fast | Blank page / spinner, until JS runs |
| **Needs `useState`/`onClick`?** | Can't — no browser there | Yes, that's the whole point |
| **SEO** | Great — crawlers see real HTML | Bad — crawlers may see an empty shell |
| **Use for** | Static/mostly-static content: About, Skills text, Project descriptions | Interactive widgets: filters, forms, toggles, live search |

- **WHAT** — SSR renders the component to HTML *on the server*, before anything reaches the
  browser. CSR sends a near-empty HTML shell plus a JS bundle, and the browser does all the
  rendering after downloading and running that JS.
- **WHY** — this project's `About`, `Experience`, `Skills`, `Projects`, `Contact` pages are almost
  entirely SSR **by default already**, because none of them add `"use client"`. That's correct on
  purpose — nobody needs JavaScript to read a bio. CSR is only worth reaching for on a specific
  interactive piece *inside* a page (a filter button, a live search box) — not the whole page.
- **BREAKS IF** — you mark an entire page `"use client"` because *one* small piece of it needs
  `useState` — now text that never needed the browser also becomes client-rendered, hurting SEO
  and first-paint speed for no reason. Same trap as concept #2's inverse trap, just viewed through
  the render-timing lens instead of the bundle-size lens.
- **Interview trap** — horror story: dev slaps `"use client"` on a whole Projects page because one
  search box needs `useState` — the 20 static project cards below it also become client-rendered,
  and search engines crawling the page see an empty shell instead of the project descriptions.
  Drill: "Your Projects page has a search box (needs `useState`) and 20 static project cards below
  it — where exactly do you put `"use client"` so the search box works but the cards stay
  server-rendered?" Defend in 1 sentence.
- *(Interactive version — toggle SSR vs CSR and watch the request timeline animate paint timing
  differently — lives in `README.html` only.)*

### 4. Dynamic route segments — `[slug]/page.tsx` — and why this project doesn't use one

**Analogy — The Universal Hotel Key vs. Room Numbers.** Separate folders are separate doors, each
its own room. A dynamic segment is one master door with a keypad — type the room number, it opens
into a different space every time.

```
+-------------------------------------------------------+
| WHAT THIS PROJECT HAS (5 separate rooms)                |
|  about/page.tsx      --> /about                         |
|  skills/page.tsx      --> /skills                        |
|  each file: its own component, own content                |
+-------------------------------------------------------+
| THE ALTERNATIVE ([slug] dynamic route)                   |
|  [slug]/page.tsx      --> matches /about, /skills, ANY   |
|                            single segment                 |
|  ONE file --> params.slug tells you WHICH one was hit    |
|  --> you write the if/switch yourself, Next.js just      |
|      hands you the string                                |
+-------------------------------------------------------+
```

```tsx
// src/app/[slug]/page.tsx — square brackets = "match anything here"
export default function DynamicPage({ params }: { params: { slug: string } }) {
  const content: Record<string, string> = {
    about: "About page content",
    skills: "Skills page content",
    contact: "Contact page content",
  };

  return <h1>{content[params.slug] ?? "Not found"}</h1>;
}
```

- **WHAT** — `[slug]` is a real Next.js feature called a **dynamic route segment**. One file, one
  component, handles every URL matching that shape (`/about`, `/skills`, `/anything` all hit the
  same `page.tsx`), with `params.slug` telling you which one was requested.
- **Correcting the mental model** — `<Link href="/skills">` does **not** call any routing logic
  you write. It just tells the browser "navigate to this URL." The file-scanner (from concept #1)
  already built a lookup table *before* any click happens, at server-start. Clicking `<Link>`
  triggers **Next.js's own router**, which checks that pre-built table — either finds
  `skills/page.tsx` (separate-folders approach) or finds `[slug]/page.tsx` and hands it
  `params.slug = "skills"` (dynamic-segment approach). Either way, you never call the routing
  logic yourself — `Link` is an address, Next.js decides what happens there.
- **WHY this project uses separate folders, not `[slug]`** — dynamic routes are for pages that
  share the same *structure* but differ only in *data* (e.g. `/blog/[slug]` — every blog post
  looks the same, just a different title/body pulled from a database). This project's About,
  Skills, and Contact pages don't share structure — About has a bio + timeline, Skills has a
  badge grid, Contact has a form. Forcing different-shaped pages into one dynamic file means one
  giant component full of `if (slug === 'about') {...} else if (slug === 'skills') {...}` — worse
  than 5 small files, not better.
- **BREAKS IF** — unrelated pages get forced into one `[slug]/page.tsx`: every edit to any one page
  risks breaking the shared file for all others, and the component balloons into an unreadable
  switch statement. This is the real anti-pattern interviewers probe for — conflating "same URL
  shape" with "same content shape."
- **Interview trap** — horror story: team builds `[slug]/page.tsx` for 15 unrelated marketing
  pages "to reduce file count" — six months later, nobody can safely edit the pricing page without
  risking the careers page, because they're all one 800-line component with a switch statement.
  Drill: "When would you choose `[slug]/page.tsx` over separate folders, and when would that same
  choice become a liability?" Defend in 1 sentence.
- *(Interactive version — type a slug into one input, watch it resolve inside a single simulated
  component vs. a dedicated file — lives in `README.html` only.)*

### 5. Hydration — the two stages hiding inside "SSR"

Deepens concept #3 (SSR vs. CSR) — SSR isn't one step, it's two: **Server Execution**, then
**Hydration**.

**Analogy — The Storefront Mannequin Coming Alive.** Stage 1 places a fully-dressed mannequin in
the window — looks complete, but can't move. Stage 2 is a technician quietly wiring motors into
that *same* mannequin, without swapping it out, until it can finally respond to a touch.

```
+---------------------------------------------------------+
| STAGE 1 — SERVER EXECUTION  (Node.js server, not browser) |
|                                                             |
|  User Request -----> Node.js Server                        |
|                          |                                  |
|                          v                                  |
|             fetches data (API / DB) ---.                    |
|                          |             |                    |
|                          v             v                    |
|                    runs React ONCE, server-side              |
|                          |                                  |
|                          v                                  |
|                    prints plain HTML string                  |
|                          |                                  |
|                          v                                  |
|              Browser: paints HTML immediately                |
|              --> First Contentful Paint (FCP)                |
|              --> looks done, but is FROZEN                    |
|                  (no onClick, no useState works yet)          |
+---------------------------------------------------------+
| STAGE 2 — HYDRATION  (browser only, happens AFTER Stage 1)  |
|                                                             |
|  Browser: downloads JS bundle (in background)                |
|                          |                                  |
|                          v                                  |
|          React walks the EXISTING html --> same DOM nodes    |
|          (does NOT re-paint or replace anything visible)     |
|                          |                                  |
|                          v                                  |
|          attaches onClick / onChange / useState listeners     |
|                          |                                  |
|                          v                                  |
|              --> Time To Interactive (TTI)                    |
|              --> mannequin can finally move                   |
+---------------------------------------------------------+
```

```tsx
// src/app/about/page.tsx
// STAGE 1 (Server Execution): this function runs ONCE, on Node.js, per request.
// No browser exists yet. Output is plain HTML text sent to the client.
export default function AboutPage() {
  return <h1>About</h1>; // becomes: <h1>About</h1> — literal text in the response
}
```

```tsx
// src/app/skills/page.tsx
"use client"; // <-- this component needs STAGE 2 (Hydration) to do anything

import { useState } from "react";

export default function SkillsPage() {
  // STAGE 1: this still renders to HTML first — button appears, but onClick does nothing yet.
  // STAGE 2: React re-runs this same function in the browser, matches it to the
  //          existing <button> in the DOM, and wires up onClick — NOW it works.
  const [filter, setFilter] = useState("all");
  return <button onClick={() => setFilter("frontend")}>Frontend</button>;
}
```

- **WHAT** — Hydration is React running your component tree a **second time**, in the browser,
  matching each JSX element against the DOM nodes Stage 1 already sent — then attaching event
  listeners to them. It's not a re-render in the visual sense (nothing repaints) — it's a wiring
  pass.
- **WHY it's two separate stages, not one** — Node.js (the server) has no `window`, no
  `document`, no click events — it's just a JS runtime, no browser APIs exist there. So Stage 1
  can only ever produce static output. Interactivity requires a real browser, which only exists
  in Stage 2. This is the deeper reason `"use client"` exists at all: it marks which components
  *need* Stage 2 to function.
- **BREAKS IF** — the HTML Stage 1 produced doesn't exactly match what React expects to find when
  Stage 2 runs (e.g. using `Date.now()` or `Math.random()` directly in a component — server
  computes one value, browser recomputes a different one) — React logs a **hydration mismatch
  error**, because the DOM it finds doesn't match the DOM it expected to wire up.
- **Interview trap** — horror story: dev renders `new Date().toLocaleString()` directly in a
  Server Component — server prints one timestamp into the HTML, then Stage 2 runs the same code
  in the browser a few hundred milliseconds later, computes a *different* timestamp, and React
  throws a hydration mismatch warning in the console, visible to every user. Drill: "A page works
  fine on refresh, but the console shows a hydration mismatch warning only sometimes. What's the
  first thing you'd check in the component, and why?" Defend in 1 sentence.
- *(Interactive version — step through Stage 1 → Stage 2 on a click, watch the same DOM node go
  from frozen to interactive without repainting — lives in `README.html` only.)*

---

## Rules

Rules for how this project gets built, so both Manasa and Claude stay aligned session to session.

### Scope

- All changes are local to `fe-pro/vault26`. Never touch global tooling, other repos, shell
  profiles, or machine-wide config to make this project work.
- If a global change ever seems necessary (e.g. a global npm/nvm setting), stop and ask first —
  don't do it silently.

### Documentation

- `README.html` and `README.md` are the single source of truth for this project — no separate
  learnings folder, no scattered notes.
- Every time `README.html` is updated, `README.md` is updated in the same step, so the two never
  drift out of sync.
- `README.html` is the "pretty" version (tabs, styling); `README.md` is the plain-text mirror of
  the same content, organized with headings instead of tabs.
- Exception: the Project Plan tab's interactive phase/story diagram (click-to-expand tiles,
  expand/collapse-all) is HTML/JS-only — there's no meaningful static-markdown equivalent, so
  `README.md` keeps the plain list form of the same phases/stories instead of trying to mirror
  the interaction.
- Same exception applies to the React and Next.js tabs' per-concept simulations (the small
  click/type demos under each concept) — `README.md` keeps the WHAT/WHY/BREAKS IF text and code
  for every concept, with one line noting where the interactive version lives.

### Build process

- Work happens story by story (see Project Plan section), smallest useful unit at a time — not
  big-bang phases.
- Structure/layout is built before real content is dropped in, unless a story specifically says
  otherwise.
- Every story gets explained as it's built (the "why", not just the "what") and gets a concept
  entry filed into the **React** or **Next.js** tab when done (whichever library the concept
  belongs to — not by which story introduced it).
- Verify in the running app (`localhost:3000`) before calling a story complete.

### Learning-first

- The point is for Manasa to own this project start to finish and be able to explain any part of
  it — not just have code appear.
- When a new React/Next concept shows up, it gets a short plain-English explanation before or
  alongside the code that uses it.
- Concepts are organized by **library, not by story**: the **React** tab and **Next.js** tab each
  hold their own concepts ordered basic → advanced, growing as new concepts are introduced
  (regardless of which build story surfaced them). This replaced the original story-grouped
  Learning Log once the two libraries' concepts grew numerous enough to warrant separating.
- Both tabs are scoped to the portfolio app itself (React/Next/TypeScript/Tailwind/etc. concepts
  used in `src/`) — not to how this README/documentation file is built. Meta-notes about the
  README's own HTML/CSS tooling don't belong there.

---

## Progress Tracker

### Phase 0 — Foundations `done`

| Item | Status |
|------|--------|
| Repo located & inspected | done |
| Correct Node version confirmed (20.20.2 via nvm) | done |
| Dev server runs locally | done |
| README.html / README.md set up as single source of truth | done |

### Phase 1 — Portfolio `in progress`

| Story | Status |
|-------|--------|
| 1. Layout shell & nav | done |
| 2. Route structure for Portfolio pages | done |
| 3. Reusable UI primitives | not started |
| 4. Real content pass | not started |
| 5. Responsive polish & dark mode check | not started |

### Phase 2 — Engineering Lab `not started`

| Story | Status |
|-------|--------|
| 6. Lab route + mock API convention | not started |
| 7. First case study skeleton wired to React Query | not started |
| 8. State management case study with Zustand | not started |
| 9. Testing pass | not started |
| 10. Deploy | not started |

---

Built by Manasa B. Last updated: see git history.
