# Retro Coffee SPA - Vue.js Rewrite Plan (Minimalist Edition)

## 1. Project Overview
**Goal:** Rewrite the "Retro Cafe" SPA into **Vue.js**, shifting the design from "busy 8-bit arcade" to a **"fresh, minimal, modern retro"** aesthetic.
**Core Vibe:** Clean lines, generous whitespace, curated color palette, and subtle retro interactions (like terminal cursors or hover glitches) rather than heavy pixel art decoration.

## 2. Design Direction: "Minimal Retro"

### A. Aesthetic Changes
*   **Color Palette:** Reduce the current multi-colored (rainbow) scheme.
    *   **Background:** Deep charcoal or soft black (less harsh than pure black).
    *   **Primary:** Single accent color (e.g., Electric Amber or Neo-Mint) for active states and CTAs.
    *   **Secondary:** Muted greys for borders and secondary text.
*   **Typography:**
    *   **Headings:** Keep `Press Start 2P` but reduce usage. Use it for major titles only.
    *   **Body:** Switch to a clean monospaced font (e.g., `VT323`, `Fira Code`, or `Roboto Mono`) for better readability and a "terminal" feel.
*   **Visual Noise:**
    *   Remove the heavy 4px multi-colored borders (`PixelBorder`).
    *   Remove the "steam" and "bounce" animations from static elements; keep motion for user interactions only.
    *   Remove the background grid patterns unless very subtle.

### B. Layout Philosophy
*   **Whitespace:** Increase padding significantly. Let the content breathe.
*   **Grid:** Use simple, invisible grids. Content alignment defines structure, not heavy borders.
*   **Navigation:** Move from a heavy top navbar to a **floating minimal dock** or a **clean sidebar** to open up the canvas.

## 3. Architecture & Stack

*   **Framework:** Vue 3 (Composition API) + Vite.
*   **State:** Pinia (for Cart and UI Theme state).
*   **Router:** Vue Router 4.
*   **Styling:**
    *   Create a new `src/assets/minimal.css` (derived from `App.css` but stripped down).
    *   Use CSS Variables for easy theming.

## 4. Component Strategy (The "Fresh" Take)

| React Component | Vue Component | Minimalist Change |
| :--- | :--- | :--- |
| `Header.js` | `TheNavbar.vue` | **Redesign:** Instead of a full-width block, make it a transparent header with simple text links, or a floating "pill" menu at the bottom. |
| `Button.js` | `RetroBtn.vue` | **Simplify:** Remove 3D bevel effects. Use flat colors with a simple 1px border. On hover: invert colors or slight offset. |
| `Card.js` | `MinimalCard.vue` | **Clean:** No border by default. Use a subtle background tint. Add a thin border *only* on hover. |
| `PixelBorder.js` | *Deprecated* | **Remove:** Replace with standard CSS borders or `box-shadow` where absolutely necessary. |
| `RetroLoader.js` | `TerminalLoader.vue` | **Update:** A simple blinking cursor `_` or a text-based progress bar `[====....]`. |
| `App.js` | `App.vue` | **Layout:** Single column layout with max-width for better focus. |

## 5. Data & Content
*   **Extraction:** Move hardcoded data (Menu, Shop, Rewards) into `src/data/*.json` or composables (e.g., `useMenuData.js`) to keep components clean.
*   **Images:** Replace complex CSS drawings with simpler SVG icons or use the existing CSS art but scale it down/monochrome it to fit the minimal theme.

## 6. Vue-Specific "Fresh" Features
*   **Transitions:**
    *   Implement a **"CRT Turn On"** effect on initial load.
    *   Route transitions: A quick "blink" or "slide" (like switching terminal tabs) instead of slow fades.
*   **Reactivity:**
    *   **Mouse Tracking:** Subtle parallax or glow effect on cards that follows the mouse cursor (using Vue's `v-bind` in CSS).
    *   **Glitch Text:** A reusable `<GlitchText>` component that randomly distorts text on hover.

## 7. Implementation Checklist

1.  [ ] **Setup:** Initialize Vue 3 + Vite.
2.  [ ] **Styles:**
    *   Create `minimal.css`.
    *   Define new CSS variables (Monochrome palette).
    *   Import fonts (`VT323` for body, `Press Start 2P` for headers).
3.  [ ] **Store:** Setup Pinia `cart` store.
4.  [ ] **Components:**
    *   Build `RetroBtn` (Flat style).
    *   Build `MinimalCard` (Hover effects).
    *   Build `TheNavbar` (Floating/Minimal).
5.  [ ] **Views:**
    *   **Home:** Hero text + single CTA. No clutter.
    *   **Menu:** Clean list or grid. No heavy tabs.
    *   **Shop:** Grid with ample spacing.
6.  [ ] **Polish:** Add the "CRT" entry transition and hover glitches.
