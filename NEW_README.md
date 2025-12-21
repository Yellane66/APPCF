# APPCF Website Rebuild

This is the modernized version of the APPCF website built with **Eleventy (11ty)**.

## Key Features

✅ **Maintainable Architecture**
- Uses Eleventy for templating and static site generation
- DRY principle: Navigation and footer defined once in `src/_data/navigation.json`
- Easy to add new pages - just create a markdown file in `src/pages/`
- Easy to add new menu items - just update the navigation JSON

✅ **SEO Optimized**
- Meta descriptions for all pages
- Canonical URLs
- Structured data (Schema.org)
- XML Sitemap
- robots.txt for search engines
- Open Graph meta tags for social sharing
- Mobile-friendly responsive design

✅ **Modern Technologies**
- Bootstrap 5 (latest, responsive)
- Clean, semantic HTML5
- CSS best practices with CSS variables
- No jQuery dependency
- Modern JavaScript ES6+

✅ **QR Code Redirects Preserved**
- bounce_Font.html → /fontpedrouse/font.html
- bounce_Rustiques.html → /fontpedrouse/rustiques.html
- All existing URLs continue to work for physical QR codes

## Project Structure

```
APPCF/
├── src/
│   ├── _includes/           # Layout templates
│   │   ├── base.html       # Main layout with navbar
│   │   └── page.html       # Content page layout
│   ├── _data/
│   │   └── navigation.json # Navigation structure
│   ├── pages/              # Content pages
│   │   ├── index.md
│   │   ├── contact.md
│   │   ├── events.md
│   │   └── ...
│   ├── css/
│   ├── js/
│   ├── robots.txt
│   └── sitemap.njk
├── .eleventy.js            # Eleventy configuration
└── package.json            # Dependencies

```

## Setup & Usage

### Installation

```bash
npm install
```

### Development

```bash
npm run serve
```

This starts a local development server at http://localhost:8080 with live reload.

### Build

```bash
npm run build
```

Generates the static site in `_site/` directory, ready for deployment.

### Adding New Pages

1. Create a new markdown file in `src/pages/`
2. Add frontmatter with title, description, and permalink
3. Write your content in markdown
4. The page will automatically be generated with the site layout

Example:
```markdown
---
layout: page.html
title: My New Page
description: Page description for SEO
permalink: /my-new-page.html
---

# Content here
```

### Adding Navigation Items

Edit `src/_data/navigation.json` to add or modify menu items. Changes will automatically update all pages.

### Customizing Styling

- Edit `src/css/style.css` for custom styles
- CSS variables are defined at the top for easy color/spacing adjustments
- Bootstrap 5 classes are available for quick styling

## Deployment

The `_site/` directory contains the complete static website ready for deployment:

1. **Traditional Hosting**: Upload `_site/` contents to any web server
2. **Netlify**: Connect your Git repository for automatic deployments
3. **GitHub Pages**: Configure for automatic static site hosting
4. **Any Static Host**: Works with Vercel, Firebase, etc.

## Benefits Over Previous Version

| Aspect | Before | After |
|--------|--------|-------|
| **Maintainability** | Repeat nav on every page | Single navigation JSON |
| **SEO** | Basic meta tags | Complete SEO setup |
| **Adding pages** | Copy-paste HTML | Create markdown file |
| **Styling** | Bootstrap 3 (old) | Bootstrap 5 (modern) |
| **Dependencies** | jQuery | None (JS is optional) |
| **Deployment** | Manual HTML files | Automated site generation |

## Mobile Responsive

The site is fully responsive and works on:
- ✅ Desktop browsers
- ✅ Tablets
- ✅ Mobile devices
- ✅ Print (optimized print styles)

## Accessibility

- Semantic HTML5 structure
- ARIA labels for navigation
- High contrast colors
- Keyboard navigable
- Screen reader friendly

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Questions?** Review the Eleventy documentation: https://www.11ty.dev/
