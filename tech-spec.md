# Vera Smile - Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Forms | React Hook Form (optional) |

## 2. Tailwind Configuration

```javascript
// tailwind.config.js extensions
{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7CB3E8',
          dark: '#5A9BD5',
          light: '#E8F4FC',
        },
        secondary: {
          DEFAULT: '#0F2A3D',
          dark: '#0A1F2E',
        },
        accent: {
          DEFAULT: '#00D4C8',
          hover: '#00B8AD',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '24px',
        '3xl': '32px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)

| Component | Usage | Style Overrides |
|-----------|-------|-----------------|
| Button | CTAs, form submit | Custom colors, rounded-lg |
| Input | Form fields | Remove default border, custom focus ring |
| Textarea | Message field | Same as Input |
| Select | Country dropdown | Custom styling |
| Accordion | FAQ section | Custom bg color, no border |
| Sheet | Mobile navigation | Slide from right |
| Carousel | Before/After gallery | Custom navigation |

### Custom Components

#### Layout Components

```typescript
// Header.tsx
interface HeaderProps {
  logo: string;
  navItems: { label: string; href: string }[];
}

// Footer.tsx
interface FooterProps {
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
}

// WhatsAppButton.tsx
interface WhatsAppButtonProps {
  phoneNumber: string;
}
```

#### Section Components

```typescript
// HeroSection.tsx
interface HeroSectionProps {
  headline: string;
  ctaText: string;
  ctaAction: () => void;
  partnerLogos: string[];
}

// ServicesBar.tsx
interface ServicesBarProps {
  services: string[];
}

// FeaturesSection.tsx
interface Feature {
  icon: LucideIcon;
  title: string;
}
interface FeaturesSectionProps {
  features: Feature[];
}

// ContactForm.tsx
interface ContactFormProps {
  onSubmit: (data: FormData) => void;
}

// WhyChooseSection.tsx
interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}
interface WhyChooseSectionProps {
  items: WhyChooseItem[];
}

// BeforeAfterGallery.tsx
interface GalleryItem {
  image: string;
  title: string;
  country: string;
}
interface BeforeAfterGalleryProps {
  items: GalleryItem[];
}

// DoctorsSection.tsx
interface Doctor {
  image: string;
  name: string;
  description: string;
}
interface DoctorsSectionProps {
  doctors: Doctor[];
}

// ClinicShowcase.tsx
interface ClinicImage {
  image: string;
  text: string;
}
interface ClinicShowcaseProps {
  images: ClinicImage[];
}

// TestimonialsSection.tsx
interface Testimonial {
  image: string;
  quote?: string;
  name?: string;
  location?: string;
}
interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

// HotelSection.tsx
interface HotelSectionProps {
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  image: string;
}

// CTASection.tsx
interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonAction: () => void;
}

// FAQSection.tsx
interface FAQItem {
  question: string;
  answer: string;
}
interface FAQSectionProps {
  items: FAQItem[];
  image: string;
}
```

## 4. Animation Implementation Plan

| Interaction Name | Tech Choice | Implementation Logic |
|------------------|-------------|---------------------|
| Page Load Fade | Framer Motion | `initial={{ opacity: 0 }} animate={{ opacity: 1 }}` on main container |
| Scroll Reveal | Framer Motion + useInView | `whileInView={{ opacity: 1, y: 0 }}` with viewport threshold 0.1 |
| Button Hover | Tailwind + Framer | `whileHover={{ scale: 1.02 }}` + `transition-colors` |
| Card Hover Lift | Framer Motion | `whileHover={{ y: -4, boxShadow: '...' }}` |
| Nav Underline | CSS | `after:` pseudo-element with `scaleX` transition |
| Accordion Expand | Framer Motion | `AnimatePresence` + height animation |
| Carousel Slide | Embla Carousel | Built-in smooth transitions |
| WhatsApp Pulse | CSS Animation | `animate-pulse-slow` keyframe |
| Icon Hover Scale | Framer Motion | `whileHover={{ scale: 1.1 }}` |
| Form Focus Ring | Tailwind | `focus:ring-2 focus:ring-primary` |

### Animation Timing Reference

| Animation | Duration | Easing |
|-----------|----------|--------|
| Fade In | 600ms | ease-out |
| Slide Up | 500ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Hover Effects | 200ms | ease-out |
| Card Lift | 300ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Accordion | 300ms | ease-in-out |
| Color Transition | 150ms | ease |

## 5. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── hero-couple.png
│   │   ├── dentist-mumin.png
│   │   ├── dentist-nurlan.png
│   │   ├── beforeafter-1.png
│   │   ├── beforeafter-2.png
│   │   ├── beforeafter-3.png
│   │   ├── beforeafter-4.png
│   │   ├── beforeafter-5.png
│   │   ├── beforeafter-6.png
│   │   ├── clinic-exterior.png
│   │   ├── clinic-interior.png
│   │   ├── hotel.png
│   │   ├── testimonial-1.png
│   │   ├── testimonial-2.png
│   │   └── testimonial-3.png
│   └── fonts/
├── src/
│   ├── components/
│   │   └── ui/           # shadcn components
│   ├── sections/
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesBar.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── ContactForm.tsx
│   │   ├── WhyChooseSection.tsx
│   │   ├── BeforeAfterGallery.tsx
│   │   ├── DoctorsSection.tsx
│   │   ├── ClinicShowcase.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── HotelSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── FAQSection.tsx
│   │   └── Footer.tsx
│   ├── components/
│   │   ├── WhatsAppButton.tsx
│   │   ├── ScrollReveal.tsx
│   │   └── SectionWrapper.tsx
│   ├── hooks/
│   │   └── useScrollTo.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 6. Package Installation List

```bash
# Initialize project
bash /app/.kimi/skills/webapp-building/scripts/init-webapp.sh "Vera Smile - Dental Clinic"

# Install shadcn components
cd /mnt/okcomputer/output/app
npx shadcn@latest add button input textarea select accordion sheet carousel

# Install animation library
npm install framer-motion

# Install icons (already included with shadcn)
# lucide-react is pre-installed

# Install carousel dependency
npm install embla-carousel-react embla-carousel-autoplay
```

## 7. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, hamburger nav, stacked sections |
| Tablet | 640px - 1024px | 2 columns for grids, condensed spacing |
| Desktop | > 1024px | Full layout as designed |

## 8. Performance Considerations

1. **Image Optimization**
   - Use WebP format where possible
   - Implement lazy loading for below-fold images
   - Use appropriate image sizes

2. **Animation Performance**
   - Use `transform` and `opacity` only
   - Add `will-change` on animated elements
   - Respect `prefers-reduced-motion`

3. **Code Splitting**
   - Lazy load sections below the fold
   - Dynamic imports for heavy components

## 9. Accessibility Requirements

1. **Keyboard Navigation**
   - All interactive elements focusable
   - Visible focus indicators
   - Logical tab order

2. **Screen Readers**
   - Proper heading hierarchy
   - Alt text for images
   - ARIA labels where needed

3. **Color Contrast**
   - Minimum 4.5:1 for text
   - Minimum 3:1 for UI components
