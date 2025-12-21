# APPCF Website - Quick Start Guide

## Overview

Your website has been completely rebuilt with modern technologies and best practices. The new structure is **much easier to maintain** and **optimized for Google** and other search engines.

## What Changed?

### ✅ The Good News

1. **One Navigation File**: Change menu once in `src/_data/navigation.json` → all pages update automatically
2. **Easier Content Updates**: Add new events/bulletins by creating simple text files
3. **Better SEO**: Proper meta tags, sitemap, structured data - Google will rank you better
4. **Modern Code**: Bootstrap 5, clean HTML, no jQuery bloat
5. **QR Codes Still Work**: All `bounce_*.html` URLs preserved for your physical QR codes

### 🚀 Getting Started

#### Step 1: Install Dependencies
```bash
cd c:\perso\APPCF
npm install
```

#### Step 2: Run Development Server
```bash
npm run serve
```
- Opens http://localhost:8080 in your browser
- **Live reload**: Changes save automatically
- Perfect for testing before deployment

#### Step 3: Build for Production
```bash
npm run build
```
- Creates `_site/` folder with final website
- Ready to upload to web hosting

## Folder Structure

```
src/
├── pages/              ← Add your content here
│   ├── index.md       (Home page)
│   ├── contact.md     (Contact page)
│   ├── events.md      (Events/News)
│   └── ...
├── _includes/         ← Templates (layouts)
│   ├── base.html      (Main layout with navbar)
│   └── page.html      (Content page wrapper)
├── _data/
│   └── navigation.json ← Edit this to change menu
├── css/
│   └── style.css      (Custom styles)
└── robots.txt         (For Google/search engines)
```

## Common Tasks

### ➕ Add a New Menu Item
**File**: `src/_data/navigation.json`

Add to the `navigation` array:
```json
{
  "label": "Transports",
  "url": "/transports.html",
  "submenu": null
}
```

### ➕ Add a New Page
**Create file**: `src/pages/transports.md`

```markdown
---
layout: page.html
title: Transports
description: Information about local transports
permalink: /transports.html
---

# Your content here

Write in markdown format. HTML also works if needed.
```

### 📝 Update Homepage Content
**File**: `src/pages/index.md`
- Edit the carousel slides
- Change the "About" section
- Add new sections as needed

### 🎨 Customize Colors
**File**: `src/css/style.css`

Look for `:root` at the top:
```css
:root {
  --primary-color: #2c3e50;    /* Dark blue */
  --secondary-color: #3498db;  /* Light blue */
  --accent-color: #e74c3c;     /* Red */
}
```

### 📞 Update Contact Info
**File**: `src/pages/contact.md`
- Add phone number
- Add email
- Update address

## SEO Benefits

Your website now has:

✅ **Proper Meta Descriptions** - Each page describes itself to Google
✅ **Canonical URLs** - Prevents duplicate content issues
✅ **XML Sitemap** - `sitemap.xml` auto-generated
✅ **robots.txt** - Tells search engines what to index
✅ **Structured Data** - Google understands your organization
✅ **Mobile Friendly** - Bootstrap 5 responsive design
✅ **Fast Loading** - Static HTML, no database

### How to Register with Google
1. Go to https://search.google.com/search-console
2. Add your domain
3. Upload `sitemap.xml` (auto-generated in `_site/`)
4. Google will start indexing your pages!

## Preserving QR Codes

Your bounce pages are already set up:
- `bounce_Font.html` → stays as-is (preserved)
- `bounce_Rustiques.html` → stays as-is (preserved)

When you deploy to your web host, these URLs will continue to work.

## Deployment Options

### Option 1: Traditional Web Host (Recommended for beginners)
1. Run `npm run build`
2. Upload contents of `_site/` folder via FTP
3. Done!

### Option 2: Netlify (Recommended for ease)
1. Push code to GitHub
2. Connect Netlify to GitHub repo
3. Auto-deploys on every push
4. Free HTTPS included

### Option 3: GitHub Pages (Free)
1. Push code to GitHub
2. Configure GitHub Pages in settings
3. Automatically deployed

## Troubleshooting

### "npm: command not found"
Install Node.js from https://nodejs.org/

### "Port 8080 already in use"
Use different port: `npm run serve -- --port 3000`

### Changes not showing?
1. Hard refresh: `Ctrl+Shift+Delete` (Chrome) or `Ctrl+Shift+R`
2. Check browser console for errors: `F12`

### Build fails?
Check `.eleventy.js` configuration in root folder

## Language/Translation Support

I see you have Fontpedrouse folder with translations. Future improvement:
- Can implement multi-language support using Eleventy
- Create `src/pages/fr/` and `src/pages/en/` folders
- Auto-generate bilingual site

## Need Help?

- **Eleventy Docs**: https://www.11ty.dev/
- **Bootstrap Docs**: https://getbootstrap.com/
- **Markdown Syntax**: https://www.markdownguide.org/

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run serve`
3. ✅ View at http://localhost:8080
4. ✅ Edit pages in `src/pages/`
5. ✅ Test changes in browser
6. ✅ When ready: `npm run build`
7. ✅ Deploy `_site/` folder

---

**Your website is now modern, maintainable, and SEO-optimized!** 🎉
