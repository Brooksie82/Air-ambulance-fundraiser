# Harrison's Parkrun Challenge 2026

A clean, modern, responsive website promoting Harrison's monthly parkrun fundraising challenge for Wiltshire and Bath Air Ambulance.

## Overview

This website showcases Harrison's commitment to running a parkrun in Wiltshire every month in 2026 to raise funds for Wiltshire and Bath Air Ambulance. The site features a modern design inspired by the air ambulance charity's branding, with green and golden yellow color scheme.

## Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Progress Tracker**: Automatically tracks completed parkruns based on the current date
- **Interactive Calendar**: Visual representation of all 12 monthly parkruns
- **Modern UI**: Clean, professional design with smooth animations
- **Accessible**: Semantic HTML and ARIA labels for screen readers

## File Structure

```
/
├── index.html          # Main HTML page
├── styles/
│   └── main.css        # All styling with responsive design
├── scripts/
│   └── main.js         # Interactive features (mobile menu, progress tracking, calendar)
└── README.md           # This file
```

## Setup Instructions

1. **Download/Clone** all files to your local machine or web server
2. **Update JustGiving Link** (see instructions below)
3. **Open** `index.html` in a web browser to view the site
4. **Deploy** to your web hosting service (GitHub Pages, Netlify, etc.)

## Updating the JustGiving Link

When your JustGiving fundraising page is ready, you need to update the placeholder links in the HTML file:

### Steps:

1. Open `index.html` in a text editor
2. Find and replace the placeholder URL `https://www.justgiving.com/your-page-url` with your actual JustGiving page URL
3. There are **two places** to update:
   - In the main CTA section (around line 120): Look for the button with id `justgiving-link`
   - In the footer section (around line 140): Look for the link with id `footer-justgiving-link`

### Example:

**Before:**
```html
<a href="https://www.justgiving.com/your-page-url" ...>
```

**After:**
```html
<a href="https://www.justgiving.com/fundraising/harrison-parkrun-2026" ...>
```

### Quick Find & Replace:

You can use your text editor's find and replace feature:
- **Find:** `https://www.justgiving.com/your-page-url`
- **Replace:** `[YOUR_ACTUAL_JUSTGIVING_URL]`

Make sure to update both occurrences!

## Customization

### Colors

The site uses CSS variables for easy color customization. Edit `styles/main.css` and modify the `:root` variables at the top:

```css
:root {
    --primary-green: #2d5016;
    --primary-green-light: #4a7c2a;
    --golden-yellow: #f4a261;
    --golden-yellow-light: #f6b885;
    /* ... other colors ... */
}
```

### Content

Edit `index.html` to update:
- Personal information
- Challenge description
- Any text content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Upload all files
3. Go to Settings > Pages
4. Select your branch and save
5. Your site will be live at `https://[username].github.io/[repository-name]`

### Netlify

1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live immediately with a random URL
3. You can customize the domain name in settings

### Other Hosting

Upload all files to any web hosting service that supports static HTML sites.

## Notes

- The progress tracker automatically calculates completed runs based on the current date
- The calendar shows the status of each month (Completed, This Month, Upcoming)
- All links open in new tabs for external sites
- The site is fully responsive and works on all device sizes

## Support

For questions or issues, please refer to the code comments in the HTML, CSS, and JavaScript files.

---

**Good luck with your fundraising challenge, Harrison!**

