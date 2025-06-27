# System Patterns

## System Architecture
- Next.js App Router for file-based routing and layouts
- TypeScript for static typing and maintainability
- Tailwind CSS for utility-first styling
- ESLint and Prettier for code quality

## Key Technical Decisions
- Use the /src directory for all source code
- Use the /app directory for Next.js routing and layouts
- Use import aliases (e.g., @/components) for cleaner imports
- Configure Tailwind via tailwind.config.js and globals.css

## Design Patterns
- Component-based UI development
- Separation of concerns: pages, components, styles
- Utility-first CSS for rapid prototyping
- Convention over configuration

## Component Relationships
- Layout components wrap pages
- Shared UI components live in /src/components
- Styles are managed globally and per-component as needed

## Component Architecture
- **Modular Components**: Each UI section is separated into its own component file
- **Self-contained State**: Components manage their own state (e.g., carousel state in HeroSection)
- **Reusable Design**: Components are designed to be reusable across pages
- **Clear Separation**: Navigation, hero, and content sections are separate components

## File Structure
```
src/
├── components/
│   ├── Navbar.tsx          # Fixed navigation component
│   ├── HeroSection.tsx     # Hero with carousel and search form
│   └── CitiesSection.tsx   # Cities showcase with responsive grid
├── pages/
│   ├── _app.tsx           # App wrapper
│   └── index.tsx          # Main homepage using components
└── styles/
    └── globals.css        # Global styles
```

## State Management
- **Local State**: useState for component-specific state (carousel index)
- **Effects**: useEffect for timers and lifecycle management
- **No Global State**: Currently using only local component state

## Design System
- **Colors**: Light cream (#fdfaf2) background, dark teal (#0d4747) text
- **Typography**: Tailwind font utilities with custom font weights
- **Spacing**: Tailwind spacing scale for consistency
- **Animations**: CSS transitions for smooth effects (1s duration for carousel)

## Component Patterns
- **Fixed Navbar**: z-50 positioning, responsive design
- **Full Screen Hero**: 100vh height with overlay content
- **Carousel Implementation**: Array-based image rotation with opacity transitions
- **Search Form**: Grid-based layout with responsive columns
- **Icon Integration**: Inline SVG for better control and performance

## Router Architecture
- **Page Router**: Using Next.js Pages Router (not App Router)
- **Static Generation**: Default Next.js static generation
- **Component Imports**: ES6 imports for component composition 