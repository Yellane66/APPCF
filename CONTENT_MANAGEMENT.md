# APPCF Content Management Guide

## Overview

This guide explains how to easily manage and update your website content without touching code.

## Page Frontmatter (Metadata)

Every page starts with a YAML block. This is **critical** for SEO:

```markdown
---
layout: page.html              # Use "page.html" for content pages
title: Your Page Title         # Shows in browser tab & H1
description: Short description # Shows in Google results (max 160 chars)
excerpt: Longer summary        # Optional, shows on page
permalink: /your-page.html     # URL of the page
---
```

### SEO Tips for Titles & Descriptions

**Good Title** (35-60 chars):
```
title: Randonnées dans la Vallée de Fontpédrouse
```

**Bad Title** (Too long):
```
title: APPCF - Association de Protection du Patrimoine - Randonnées
```

**Good Description** (120-160 chars):
```
description: Découvrez nos 5 sentiers de randonnée avec vues panoramiques et patrimoine historique
```

**Bad Description** (Too vague):
```
description: Randonnées
```

## Adding New Content

### Example 1: New Event

Create file: `src/pages/evenement-2024.md`

```markdown
---
layout: page.html
title: Visite Guidée - Château de Fontpédrouse
description: Visite guidée du patrimoine castral avec l'APPCF - 15 juin 2024
excerpt: Découvrez l'histoire du château lors d'une visite guidée en compagnie de nos experts
permalink: /event-chateau-2024.html
---

## Détails de l'Événement

**Date**: 15 juin 2024
**Horaire**: 14h00 - 17h00
**Lieu**: Château de Fontpédrouse
**Tarif**: 5€ (gratuit pour adhérents)

### Description

Lorem ipsum dolor sit amet...

### Inscriptions

[Nous contacter](/contact.html) pour vous inscrire.
```

### Example 2: New Hike

Create file: `src/pages/hikes/coucouroucouil.md`

```markdown
---
layout: page.html
title: Randonnée Coucouroucouil
description: Parcourez le sentier Coucouroucouil avec ses paysages spectaculaires
permalink: /hikes/coucouroucouil.html
---

## Informations Pratiques

- **Durée**: 2h30
- **Distance**: 8 km
- **Difficulté**: Moyen
- **Dénivelé**: 400m

## Itinéraire

Détails du parcours...

## Galerie Photos

![Photo 1](/_img/hikes/coucouroucouil/photo1.jpg)
![Photo 2](/_img/hikes/coucouroucouil/photo2.jpg)
```

## Markdown Syntax Cheat Sheet

### Headings
```markdown
# H1 (don't use, reserved for title)
## H2 - Main section
### H3 - Subsection
#### H4 - Small heading
```

### Text Formatting
```markdown
**Bold text** or __bold__
*Italic text* or _italic_
~~Strikethrough~~
`Inline code`
```

### Lists
```markdown
- Bullet point
- Another point
  - Nested point
  - Another nested

1. Numbered item
2. Second item
   1. Nested numbered
```

### Links & Images
```markdown
[Link text](https://example.com)
[Link to page](/contact.html)
![Alt text](/img/photo.jpg)
![Alt text](/img/photo.jpg "Image title")
```

### Quotes
```markdown
> This is a blockquote
> Can span multiple lines
```

### Code Blocks
```markdown
```python
def hello():
    print("Hello World")
```
```

### Horizontal Rule
```markdown
---
```

### HTML (when needed)
```markdown
<div class="alert alert-info">
  Custom HTML content
</div>
```

## Bootstrap Classes (for styling)

You can use Bootstrap 5 classes directly in markdown:

```markdown
<div class="alert alert-info">
  **Info**: Use this for important notices
</div>

<div class="row">
  <div class="col-md-6">
    Left column
  </div>
  <div class="col-md-6">
    Right column
  </div>
</div>

<button class="btn btn-primary">Click me</button>
```

### Common Alert Styles
```markdown
<div class="alert alert-primary">Blue info alert</div>
<div class="alert alert-success">Green success alert</div>
<div class="alert alert-warning">Yellow warning alert</div>
<div class="alert alert-danger">Red danger alert</div>
```

### Common Button Styles
```markdown
<a href="/page.html" class="btn btn-primary">Primary Button</a>
<a href="/page.html" class="btn btn-secondary">Secondary</a>
<a href="/page.html" class="btn btn-success">Success</a>
<a href="/page.html" class="btn btn-danger">Danger</a>
```

## Editing Navigation Menu

File: `src/_data/navigation.json`

### Simple Menu Item
```json
{
  "label": "Bulletin N°42",
  "url": "/bulletin-42.html",
  "submenu": null
}
```

### Menu Item with Dropdown
```json
{
  "label": "Patrimoine",
  "url": "#",
  "submenu": [
    {
      "label": "Liste Patrimoine Protégé",
      "url": "/protected-heritage.html"
    },
    {
      "label": "Mémorial Internet",
      "url": "/internet-memorial.html"
    }
  ]
}
```

## Images & Assets

### Uploading Images

1. Save image to: `img/your-folder/image.jpg`
2. Reference in markdown: `/img/your-folder/image.jpg`

### Image Best Practices

- **File size**: Compress images (< 500KB for web)
- **Format**: Use JPG for photos, PNG for graphics
- **Dimensions**: 1200px wide is good for web
- **Alt text**: Always include for accessibility

Example:
```markdown
![Description of image](/img/events/photo.jpg "Image title")
```

### Image Tools
- **Compression**: https://tinypng.com/
- **Resizing**: https://imageresizer.com/
- **Optimization**: ImageOptim (Mac) or FileOptimizer (Windows)

## PDF Documents

Store PDFs in: `pdf/` folder

Reference in content:
```markdown
[Download Bulletin 2023](/pdf/bulletin-2023.pdf)
```

## Creating Dynamic Content

### Event List (with dates)

```markdown
---
layout: page.html
title: Nos Événements
description: Calendrier des événements APPCF
permalink: /events-calendar.html
---

## 2024

### Juin
- 15 juin: Visite Château ([Détails](/event-chateau-2024.html))
- 22 juin: Randonnée Guidée

### Juillet
- 6 juillet: Conférence Patrimoine

## 2025

À venir...
```

### Member Testimonials

```markdown
> "L'association m'a permis de découvrir le patrimoine local"
> — Jean, Adhérent depuis 2020

> "Excellent travail de préservation!"
> — Marie, Fontpédrouse
```

### Embedded Media

```markdown
### Vidéo YouTube
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" 
  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>

### Map
<iframe src="https://www.google.com/maps/embed?pb=..." 
  width="600" height="450" style="border:0;" allowfullscreen="" 
  loading="lazy"></iframe>
```

## Organizing Content

### Recommended Structure
```
src/pages/
├── index.md                    (Homepage)
├── contact.md                  (Contact form)
├── events.md                   (Events listing)
├── bulletins.md                (Bulletins archive)
├── hikes.md                    (Hikes overview)
│
├── events/                     (Event details)
│   ├── chateau-2024.md
│   └── conference-2024.md
│
├── hikes/                      (Hike details)
│   ├── aumet.md
│   ├── gallinas.md
│   └── ...
│
└── patrimoine/                 (Heritage section)
    ├── protected-list.md
    ├── literature.md
    └── ...
```

## Backup & Version Control

### Using Git (Recommended)

```bash
# Check what changed
git status

# See differences
git diff src/pages/index.md

# Save changes
git add src/pages/
git commit -m "Update events page with new event"

# Push to GitHub
git push origin DEV
```

### Benefits
- ✅ Automatic backup to GitHub
- ✅ Can revert changes anytime
- ✅ See full history of edits
- ✅ Collaboration friendly

## Testing Your Changes Locally

1. Save your file
2. Browser auto-refreshes (if `npm run serve` is running)
3. Check for errors in console: `F12`
4. Verify links work
5. Test on mobile: `F12` → Device toolbar

## Publishing Changes

```bash
# 1. Make your changes in src/pages/
# 2. Save and test locally
# 3. Build the site
npm run build

# 4. Deploy _site/ folder to your host
```

If using Netlify/GitHub Pages:
```bash
git add .
git commit -m "Description of changes"
git push
# Automatically deployed!
```

## Common Mistakes to Avoid

❌ **Wrong**: Spaces in filenames
```
my page.md    → Instead use: my-page.md
```

❌ **Wrong**: Inconsistent URLs
```
/MyPage.html  → Use lowercase: /mypage.html
```

❌ **Wrong**: Broken links
```
[Link](/page.html)  → Check file exists in src/pages/

```

❌ **Wrong**: Very long titles
```
title: This is an extremely long title that is over 60 characters
→ Keep under 60 characters for best SEO
```

✅ **Right**: Proper frontmatter
```markdown
---
layout: page.html
title: Clear, Descriptive Title
description: 120-160 character description for Google
permalink: /my-page.html
---
```

## Advanced: Custom Page Layouts

For pages that need special styling:

1. Create new layout: `src/_includes/custom-layout.html`
2. Reference it: `layout: custom-layout.html`

Example for a photo gallery:

```html
---
layout: base.html
---
<section class="container">
  <h1>{{ title }}</h1>
  
  <div class="row">
    {% for image in page.images %}
      <div class="col-md-4">
        <img src="{{ image.url }}" alt="{{ image.title }}">
      </div>
    {% endfor %}
  </div>

  {{ content | safe }}
</section>
```

## Support & Resources

- **Markdown Help**: https://www.markdownguide.org/
- **Bootstrap Components**: https://getbootstrap.com/docs/5.0/
- **Eleventy Docs**: https://www.11ty.dev/
- **Color Picker**: https://htmlcolorcodes.com/

---

**Start creating! Your website is ready for content.** 📝
