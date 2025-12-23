# Easy Way Technology - Project Documentation

## 1. Project Overview
**Easy Way Technology** is a high-performance digital agency website built with a "Cinematic Tech" aesthetic. The site combines a clean, professional light-mode interface with engineered visual elements (stickers, grids, technical markers) to convey precision and innovation.

## 2. Technology Stack

### Core Framework
- **React (Vite)**: Fast, modern frontend library.
- **TypeScript**: Ensuring type safety and code reliability.

### Styling & Design
- **Tailwind CSS**: Utility-first styling with custom configuration for `neon-blue` and `amber` accents.
- **Lucide React**: Consistent, lightweight icon set.
- **Design Philosophy**: "Light Mode Cinematic" – High contrast, deep shadows, glassmorphism, and "blueprint" grid aesthetics.

### Animation & Interaction
- **GSAP (GreenSock)**: Complex timelines, staggered reveals, and magnetic interactions.
- **ScrollTrigger**: Scroll-driven animations (e.g., Process timeline).
- **Lenis**: silky-smooth inertia scrolling for a premium feel.

---

## 3. Design System

### Color Palette
| Color Name | Hex | Usage |
| :--- | :--- | :--- |
| **Background** | `#FFFFFF` | Main page background (Clean White). |
| **Foreground** | `#111827` | Primary text (Gray-900). |
| **Neon Blue** | `#0066FF` | Primary accent, buttons, active states, glows. |
| **Amber** | `#F59E0B` | Secondary accent, attention-grabbers, "warmth". |
| **Grid Lines** | `rgba(0,0,0,0.05)` | Subtle technical background patterns. |

### Typography
- **Headings**: `Montserrat` – Bold, geometric, authoritative. Used for section titles (`font-display`).
- **Body**: `Inter` – Clean, highly readable interface text (`font-sans`).
- **Technical**: `Monospace` – Used for labels, badges ("SYSTEM ONLINE"), and stickers.

### Visual Motifs ("Stickers")
To differentiate from generic corporate sites, we implemented a **"Sticker Sheet"** aesthetic:
- **Verified Badges**: Floating shield elements indicating trust.
- **Status Indicators**: Pulsing green dots for "Online/Live" status.
- **Technical Markers**: Corner crosshairs (`+`) and vertical scroll labels.
- **Grid Boxes**: Service cards feature internal grid patterns resembling engineering blueprints.

---

## 4. Component Architecture

### `App.tsx` (Root)
Orchestrates the layout and initializes global animation contexts (`Lenis`, `GSAP`).

### Core Components
| Component | Functionality |
| :--- | :--- |
| **Navbar** | Floating glass header with "Online" status indicator and mobile menu. |
| **Hero** | High-impact entry with 3D-tilt imagery, floating "Verified" badges, and crosshair decorations. |
| **LogoTicker** | Infinite marquee of partner logos (migrated to reliable CDNs). |
| **BentoServices** | Grid-based service overview. Features "solid white" cards with internal blueprint grids. |
| **ProcessSection** | Vertical timeline with scroll-triggered line filling animation. |
| **PortfolioGrid** | Gallery of projects with "Year 2024" technical stickers and hover reveals. |
| **TestimonialSection** | Infinite scrolling wall of social proof with glass cards. |
| **BlogSection** | 3-column article grid with hover-zoom imagery. |
| **Footer** | Minimalist closure with contact form and social links. |

### Data Management
- **`data/index.ts`**: Centralized source of truth for all static content (Logos, Reviews, Projects, Steps). Decouples content from display logic.

---

## 5. Setup & Development

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
# Server runs at http://localhost:5173 (or 3000)
```

### Build for Production
```bash
npm run build
```

---

## 6. Future Roadmap
- **CMS Integration**: Connect `BlogSection` to a Headless CMS (Sanity/Contentful).
- **Dark Mode**: Re-enable dark mode via a toggle (CSS variables are ready for this).
- **Page Transitions**: Implement Barba.js or View Transitions API for seamless navigation.
