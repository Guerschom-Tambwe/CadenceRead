# CadenceRead

> RSVP speed reader with WPM pacing, word highlighting & focus controls.

## Overview
Build CadenceRead: an accessible Rapid Serial Visual Presentation (RSVP) speed reader that tokenizes text, flashes one word at a time at a configurable WPM pace, tracks progress, and verifies core logic with console.assert().

## Tech Stack
- **Stack:** HTML / CSS / JS

## Key Features & Milestones
- [x] **Tokenizer, WPM Interval & Assertions** — Implement tokenizeText(text) and wpmToMs(wpm), render the current word, and pass Milestone 1 assertions.
- [ ] **Progress Bar & Pivot Letter Highlight** — Highlight the focal pivot character of each word and display a live reading progress bar.
- [ ] **Reset Control, Keyboard Shortcuts & A11y Polish** — Add a Reset button (44px target), Spacebar Play/Pause shortcut, and verify 0 Overflow & 0 A11y warnings.

## Local Setup & Testing
1. Clone the repository and open `index.html` in your browser (or start a static server):
```bash
npx serve .
```
2. Run the included automated checks in `tests.js` via your browser console or test runner.

## Live Demo
- **URL:** _Add your deployed link here (e.g., GitHub Pages, Vercel, or Netlify)_
