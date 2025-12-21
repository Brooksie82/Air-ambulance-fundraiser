---
name: Parkrun Fundraising Website
overview: Create a clean, modern, responsive static website (HTML/CSS/JavaScript) to promote Harrison's monthly parkrun fundraising challenge for Wiltshire and Bath Air Ambulance, with a placeholder for the JustGiving link.
todos:
  - id: create-html-structure
    content: Create index.html with semantic HTML5 structure including hero, about, challenge, impact, and CTA sections
    status: completed
  - id: build-responsive-css
    content: Create styles/main.css with mobile-first responsive design, CSS Grid/Flexbox layouts, and modern styling inspired by the air ambulance site
    status: completed
    dependencies:
      - create-html-structure
  - id: add-javascript-features
    content: Create scripts/main.js for any interactive features like smooth scrolling or progress tracking
    status: completed
    dependencies:
      - create-html-structure
  - id: add-placeholder-justgiving
    content: Add placeholder JustGiving link with clear instructions for updating when available
    status: completed
    dependencies:
      - create-html-structure
  - id: create-readme
    content: Create README.md with setup instructions and how to update the JustGiving link
    status: completed
---

# Parkrun Fundraising Website Plan

## Overview

Build a static HTML/CSS/JavaScript website to promote Harrison's monthly parkrun fundraising challenge for Wiltshire and Bath Air Ambulance. The site will be clean, modern, and fully responsive.

## Design Inspiration

Based on [Wiltshire and Bath Air Ambulance](https://www.wiltshirebathairambulance.org.uk/), the site will feature:

- Clean, modern layout with ample white space
- Hero section with compelling messaging
- Mission-focused content
- Clear call-to-action buttons
- Responsive navigation
- Professional color scheme (likely incorporating the charity's brand colors)

## File Structure

```javascript
/
├── index.html          # Main page
├── styles/
│   └── main.css        # All styling with responsive design
├── scripts/
│   └── main.js         # Interactive features (if needed)
├── images/             # Image assets (placeholder structure)
└── README.md           # Setup instructions
```



## Key Features

### 1. Hero Section

- Large, impactful headline about Harrison's challenge
- Subheading explaining the monthly parkrun commitment
- Prominent "Donate Now" button linking to JustGiving (placeholder)
- Background image or gradient

### 2. About Section

- Introduction to Harrison (8 years old)
- Explanation of the challenge: running a parkrun in Wiltshire every month in 2026
- Why he's fundraising for Wiltshire and Bath Air Ambulance
- Personal connection or motivation (if applicable)

### 3. The Challenge Section

- Visual representation of the 12 monthly parkruns
- Progress tracker showing completed vs. remaining runs
- Calendar or timeline view of 2026

### 4. Impact Section

- Information about Wiltshire and Bath Air Ambulance
- Why donations matter
- How the funds help

### 5. Call to Action

- Multiple donation buttons/links
- Social sharing options
- Contact or follow-up information

### 6. Footer

- Link to JustGiving
- Link to Wiltshire and Bath Air Ambulance website
- Copyright/attribution

## Technical Implementation

### HTML Structure

- Semantic HTML5 elements
- Accessible markup (ARIA labels where needed)
- Meta tags for SEO and social sharing
- Viewport meta tag for responsive design

### CSS Features

- Mobile-first responsive design
- CSS Grid and Flexbox for layouts
- Smooth transitions and hover effects
- Custom properties (CSS variables) for theming
- Media queries for breakpoints (mobile, tablet, desktop)

### JavaScript (if needed)

- Smooth scrolling
- Progress tracker updates
- Any interactive elements

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Color Scheme

- Primary: Green and golden yellow (Wiltshire Air Ambulance brand colors)
- Accent: Complementary colors for CTAs
- Neutral: Clean whites and grays

## Content Considerations

- Age-appropriate language (Harrison is 8)
- Inspiring and motivational tone
- Clear, simple messaging
- Focus on the cause and impact

## Implementation Steps

1. Create HTML structure with semantic sections
2. Build responsive CSS with mobile-first approach
3. Add interactive JavaScript features (if needed)
4. Include placeholder for JustGiving URL
5. Test responsiveness across device sizes