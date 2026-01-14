# Architecture

## Stack
- Vanilla JavaScript (ES6+)
- HTML5
- CSS3
- No frameworks used (React / Vue / Angular are intentionally not applied)

## General Approach
- **Single Page Application (SPA):** the application runs within a single HTML page without full page reloads.
- Dynamic content rendering into a main container (`#root`, `#page`).
- Architecture is designed with scalability and reusability in mind.

## Component-Based Architecture
- The UI is built from independent UI components (`src/components/*`).
- Each component is a function that returns an HTML template (via template literals).
- Component behavior and event handling are separated into dedicated `Init` functions (e.g. `ScreenInit`, `SearchInit`).
- This approach clearly separates:
  - markup (rendering)
  - behavior (initialization / event listeners)

## Pages
- Application pages are located in `src/pages/*`.
- Each page is composed of multiple components.
- Example: `HomePage` is composed of `Screen`, `Pages`, `Quote`, `Articles`, and `Team` components.
- Pages expose their own `Init` methods to initialize logic after rendering.

## Routing and Navigation
- **Client-side routing** is implemented manually.
- Navigation is controlled via URL (`hash / history`) and the `changePage()` function.
- `AbortController` is used during page transitions to cancel previous subscriptions and asynchronous operations.
- This prevents race conditions and memory leaks when switching pages quickly.

## State Management
- A custom lightweight **store / context** implementation is used.
- Based on the **publish / subscribe** pattern.
- `createContext()` provides:
  - `getState()` — access to current state
  - `setState()` — state updates
  - `subscribe()` — change subscriptions
- `appStore` is used for global application state (e.g. language selection).

## i18n and Localization
- Built-in localization system.
- Texts are registered via `textLib`.
- Supports bulk translation of the current page via `translateAll()`.
- When the language changes, texts are automatically updated in the DOM using element `id`s.
- Texts are scoped to pages via `getPageName()`.

## Styles and Assets
- Global styles are defined in `global.css`.
- Component-level styles are colocated with components (`style.css`).
- Assets and data are organized separately:
  - `public/` — public static files
  - `assets/` — images
  - `fonts/` — fonts
  - `data_json/` — JSON data

## Advantages of This Approach
- Full control over architecture without framework dependencies.
- Clear separation of responsibilities (rendering / logic / state).
- Easy customization and extensibility.
- Architecture is conceptually close to React-like patterns, while remaining framework-free and lightweight.
