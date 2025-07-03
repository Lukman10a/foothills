# Active Context

## Current Work Focus
- **BOOKING ENGINE SEPARATION**: Successfully created standalone booking engine as separate Next.js project
- **CROSS-SITE INTEGRATION**: Implemented seamless redirect from main site to booking engine
- **URL PARAMETER PASSING**: Set up proper data flow between main marketing site and booking system
- **ENHANCED BOOKING EXPERIENCE**: Created complete booking flow with improved design and functionality
- **BRAND COLORS UPDATE**: Implemented professional brand colors (#2596be primary, #a88c6c secondary)
- **MADINAH THEMING**: Updated all content and imagery to reflect Madinah location
- **BLOG INTEGRATION**: Added real blog images and Madinah-themed content
- Applied consistent brand color scheme across all components
- Enhanced location-specific branding throughout the site

## Recent Changes
- **Created standalone booking engine project** at `foothills-booking-engine/` with Next.js, TypeScript, and Tailwind CSS
- **Migrated and enhanced booking components**: Search, booking form, property listings, and confirmation flow
- **Implemented brand-consistent design** using #2596be (primary blue) and #a88c6c (secondary tan) colors
- **Set up Pages Router architecture** matching main site structure
- **Created dedicated Navbar and Footer** for booking engine with "BOOKING ENGINE" branding
- **Added comprehensive global CSS** with brand color utilities and component styles
- **Implemented URL parameter integration** for seamless data passing between sites
- **Updated main site search forms** to redirect to booking engine on localhost:3002
- **Created help page** with FAQ and contact information for booking support
- **Set up proper asset sharing** by copying images from main site to booking engine
- **Updated global CSS with brand color variables and utility classes**
- **Applied #2596be (blue) and #a88c6c (tan/brown) throughout all components**
- **Replaced hero background images with Madinah imagery (madinah1.jpg, madinah2.jpg)**
- **Updated location references from "New York City" to "Al-Madinah Al-Munawwarah"**
- **Added "MADINAH •" to all Marriott Bonvoy branding**
- **Implemented real blog images (blogimage1-4.jpeg) in StoriesSection**
- **Updated blog content to Madinah spiritual journey themes**
- **Applied brand colors to all buttons, links, icons, and interactive elements**
- **Enhanced MarriottBonvoySection with brand secondary color background**
- **Updated Footer with brand primary background and consistent logo colors**

## Architecture Changes
- **Separated booking functionality** from main marketing site for better maintainability
- **Booking engine runs on port 3002** while main site runs on port 3001
- **Independent deployment capability** - booking engine can be deployed separately
- **Clean separation of concerns**: Marketing site focuses on content, booking engine focuses on transactions

## Next Steps
- Deploy booking engine to separate subdomain (booking.foothills.vercel.app)
- Update redirect URLs from localhost to production subdomain
- Implement backend API integration for real booking data
- Add analytics tracking for booking funnel
- Optimize performance and mobile experience
- Set up automated testing for booking flow

## Active Decisions
- Use separate Next.js projects for marketing site and booking engine
- Maintain consistent branding between both applications
- Use URL parameters for data passing between sites
- Deploy to separate subdomains for production isolation
- Keep booking engine as standalone service for better scalability
- Brand colors: #2596be (primary blue), #a88c6c (secondary tan)
- Location-specific content focusing on spiritual journey and pilgrimage
- Professional color scheme with white backgrounds and brand accent colors 