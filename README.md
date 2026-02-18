# UIComponentsReact

**🟢 Explore the Design System Demo Page:** [https://luiscarlosz1.github.io/design-system-playground/](https://luiscarlosz1.github.io/design-system-playground/)

UIComponentsReact is a React 18+ example project that demonstrates the real implementation of my own Design System through custom UIComponents. These UIControls are built as Web Components (Stencil) and integrated natively into React, showcasing advanced features such as Form-Associated Custom Elements, dynamic theming, and framework-agnostic design tokens. This app serves as a practical reference for building accessible, reusable, and framework-independent UI components in React, leveraging your own design tokens, patterns, and atomic components.

---

**Looking for the Angular version?**
👉 [UIComponentsAngular Repository](https://github.com/luiscarlosz1/UIComponentsAngular)

---

## Why this project matters

This repository showcases real-world patterns that are rarely documented together:

- **Native React forms working seamlessly with Form-Associated Web Components**
- **A Design System consumed as a framework-agnostic UI layer**
- **Theme switching via CSS variables, without re-rendering or framework-specific hacks**

## Key Capabilities

### Employee Management Flow
- Fully functional employee creation form.
- Data visualization through a configurable table.
- Realistic fields, validations, and UI states.

### Design System Integration (Stencil)
- Consumption of custom Web Components (`UiInput`, `UiSelect`, `UiDatepicker`, `UiTable`, `UiButton`, etc.).
- Components are framework-agnostic and reusable across React, Angular, or plain HTML.
- React bindings are direct, no wrappers or adapters required.

### Form-Associated Custom Elements
All input components are:
- Form-associated via `ElementInternals`
- Compatible with React's native form events and validation
- Fully synchronized with:
  - disabled
  - valid / invalid
  - value
- Capable of triggering native form submission and validation flows.

### Adaptive & Accessible Inputs
Inputs react automatically to:
- Validation state (error, success, default)
- Disabled and readonly modes
- Accessibility is preserved using native form semantics.

### State Management
- Uses React hooks (`useState`, `useRef`, `useEffect`) for local state
- No external state libraries required

### Dynamic Theming
- Centralized theme configuration (see `src/theme/themes.ts`)
- Theme tokens applied via CSS variables
- Instant theme switching without component reinitialization
- Stencil components adapt automatically to theme changes.

## Project Structure
```
src/
  components/
    employeeForm.tsx        # Form with form-associated WC
    employeeTable.tsx       # Data visualization
  layouts/
    header.tsx              # Application shell
  models/
    employeeForm.models.ts
  pages/
    dashboard.tsx           # Main composition page
  theme/
    themes.ts               # Theme tokens and palette
    applyThemeTokens.ts     # Helper for CSS variables
  App.jsx                   # App root
  index.css                 # Global styles and tokens
  main.jsx                  # React bootstrap
```

## Tech Stack
- React 18+
- StencilJS (Design System)
- Form-Associated Custom Elements
- SCSS + CSS Variables
- Vite

## What this project is (and is not)

**This project is:**
- A reference for integrating Web Components into React properly
- A mentoring and learning tool
- A base for future enterprise-grade applications

**This project is not:**
- A UI template
- A CRUD-only demo
- A framework-locked solution

## Installation & Usage
```bash
npm install
npm run dev
```
Open: http://localhost:5173

## License & Purpose

This repository is private and intended for:
- Technical mentoring
- Architectural exploration
- Design System validation
- Professional portfolio and knowledge sharing

---

**See also:** [UIComponentsAngular (Angular version)](https://github.com/luiscarlosz1/UIComponentsAngular)
