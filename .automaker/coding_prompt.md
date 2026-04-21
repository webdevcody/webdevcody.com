# Coding Guidelines for WebDevCody.com

## Project Overview
This is a Next.js 14 application using TypeScript, TailwindCSS, and shadcn/ui components. The site serves as a personal website and portfolio for a YouTube channel focused on web development education.

## Development Standards

### Code Style
- Use TypeScript for all new code
- Follow ESLint configuration rules
- Use functional components with React hooks
- Implement proper error handling and loading states
- Use proper TypeScript types and interfaces

### UI/UX Guidelines
- Use shadcn/ui components for consistency
- Follow the existing design system with TailwindCSS
- Maintain responsive design (mobile-first approach)
- Support both dark and light themes
- Use Framer Motion for animations when appropriate
- Use Lucide React for icons

### Component Structure
- Keep components modular and reusable
- Use proper component composition
- Implement proper prop types
- Follow Next.js App Router conventions
- Place components in appropriate directories (ui/, _components/, etc.)

### Performance
- Use Next.js Image component for optimized images
- Implement proper lazy loading
- Use React.memo() for expensive components when needed
- Optimize bundle size and loading performance

### Testing & Quality
- Follow accessibility best practices
- Test responsive design across devices
- Validate forms with proper error handling
- Use semantic HTML elements

### External Integrations
- YouTube video embedding for educational content
- reCAPTCHA integration for forms
- Newsletter subscription functionality
- External course and product links

## File Organization
- Pages in `src/app/` following App Router structure
- Reusable components in `src/components/`
- UI components in `src/components/ui/`
- Utility functions in `src/lib/`
- Types and interfaces in appropriate files

## Best Practices
- Write clean, readable, and maintainable code
- Use meaningful variable and function names
- Add comments for complex logic
- Follow React and Next.js best practices
- Ensure proper SEO optimization
- Maintain consistent code formatting