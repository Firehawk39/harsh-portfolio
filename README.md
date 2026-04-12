# Harsh Solanki | Portfolio

A high-fidelity, premium personal portfolio built with Next.js 16, Framer Motion, and Tailwind CSS. This project features a unique split-screen layout with dynamic sticky animations and a curated design system.

## 🚀 Key Features

- **Split-Screen Interaction**: A sticky left panel with dynamic image sequences that react to page navigation.
- **Micro-Interactions**: Magnetic buttons, blur-reveal text, and celestial background effects for a premium feel.
- **Modern Tech Stack**: Leveraging Next.js 16 (Turbopack), React 19, and Tailwind CSS 4.
- **Responsive Architecture**: Fully optimized for both desktop editorial experiences and mobile consumption.
- **Theme Support**: Integrated dark/light mode with smooth transitions.

## 📁 Project Structure

- `src/app/`: Next.js App Router containing pages and global styles.
- `src/components/`:
  - `common/`: Reusable high-level animations (e.g., `CelestialSpells`, `BlurReveal`).
  - `layout/`: Core structural components (`LayoutWrapper`, `LeftPanel`, `Navigation`).
  - `providers/`: Context providers (e.g., `ThemeProvider`).
  - `ui/`: Atomic UI components (`Magnetic`, `ThemeToggle`).
- `src/store/`: Global state management using Zustand for layout synchronization.

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- npm / pnpm / yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## 📄 License

Original design and implementation by Harsh Solanki.
