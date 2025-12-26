# Deployment Guide

## Overview

Your website is now ready to be deployed. This guide covers the most common hosting options.

## Step 1: Build Your Site

Before deployment, generate the static files:

```bash
npm run build
```

This creates a `_site/` folder with your complete website - ready to upload anywhere.

---

## Option 1: Traditional Web Host (Shared Hosting)

### Services
- GoDaddy, Hostinger, OVH, Ionos, etc.

### Steps

1. **Connect via FTP**
   - Get FTP credentials from your host
   - Use FileZilla (free) or Windows Explorer
   - Connect to your host's FTP server

2. **Upload Files**
   - Open `_site/` folder on your computer
   - Navigate to your host's `public_html` or `www` folder
   - Upload all files from `_site/`

3. **Configure**
   - Set `index.html` as default page (usually automatic)
   - If errors, check `.htaccess` or server logs

### Example (FileZilla)
```
1. File → Site Manager
2. New Site
3. Protocol: FTP
4. Host: ftp.yourdomain.com (from host)
5. User: your-ftp-user
6. Password: your-ftp-password
7. Connect
8. Drag _site/ contents to remote /public_html/
```

### Pros
✅ Works everywhere
✅ Full control
✅ Usually cheapest

### Cons
❌ Manual deployment
❌ No automatic backups
❌ Manual SSL setup (usually)

---

## Option 2: Netlify (Recommended for Beginners)

Easiest option - automatic deployments from Git.

### Setup

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/appcf.git
   git push -u origin main
   ```

2. **Connect Netlify**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Choose GitHub
   - Authorize Netlify
   - Select your `appcf` repository

3. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `_site`
   - Click "Deploy site"

4. **Custom Domain** (Optional)
   - Go to Site settings → Domain management
   - Add your domain (yourdomain.com)
   - Update your domain registrar DNS

### Auto-Deploy
Every time you push to GitHub:
```bash
git add .
git commit -m "Update homepage"
git push
# Site automatically deployed in ~30 seconds!
```

### Pros
✅ Automatic deployments
✅ Free HTTPS
✅ Global CDN (fast worldwide)
✅ Simple interface
✅ Free tier available

### Cons
❌ Need GitHub account
❌ Less control over server

---

## Option 3: GitHub Pages (Free Hosting)

Free hosting directly from GitHub.

### Setup

1. **Rename Repository**
   - Go to Settings
   - Rename to: `yourusername.github.io`
   - This becomes your site URL

2. **Enable Pages**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, /root
   - Save

3. **Deploy**
   ```bash
   npm run build
   git add _site/
   git commit -m "Deploy site"
   git push
   ```

### Access Your Site
- `https://yourusername.github.io`

### Pros
✅ Free forever
✅ Simple setup
✅ Integrated with Git

### Cons
❌ Limited customization
❌ Slower builds
❌ Username.github.io URL (custom domain requires setup)

---

## Option 4: Vercel (Modern Alternative)

Fast deployment for modern sites.

### Setup

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. **Connect Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import from GitHub
   - Select your `appcf` repository

3. **Configure**
   - Framework: Other
   - Build command: `npm run build`
   - Output directory: `_site`
   - Deploy!

### Pros
✅ Very fast
✅ Edge locations worldwide
✅ Generous free tier
✅ Modern features

### Cons
❌ Overkill for static site
❌ Requires more tech knowledge

---

## Step-by-Step: Netlify (Most Recommended)

### Phase 1: GitHub Setup (5 minutes)

```bash
# 1. Initialize Git repository
cd c:\perso\APPCF
git init

# 2. Create GitHub account
# Go to https://github.com/signup

# 3. Create new repository
# - Name: appcf
# - Description: APPCF Website
# - Public (optional)

# 4. Push your code
git add .
git commit -m "Initial commit: website rebuild"
git remote add origin https://github.com/YOUR_USERNAME/appcf.git
git branch -M main
git push -u origin main
```

### Phase 2: Netlify Deployment (3 minutes)

1. Go to https://netlify.com
2. Click "Sign up" → Choose GitHub
3. Authorize Netlify
4. Click "New site from Git"
5. Select GitHub
6. Choose your `appcf` repository
7. Build settings auto-filled:
   - Build: `npm run build`
   - Publish: `_site`
8. Click "Deploy site"

### Phase 3: Domain Setup (if you have your own domain)

1. Go to your domain registrar
2. Update DNS settings:
   - CNAME: yourdomain.com → your-site.netlify.app
   - Or use Netlify's name servers

3. In Netlify:
   - Site settings → Domain management
   - "Add custom domain"
   - Enter your domain

4. Netlify auto-enables HTTPS (free!)

---

## DNS Configuration

If using custom domain with Netlify/Vercel:

### Option A: CNAME Record (Recommended)
```
Subdomain: www
Type: CNAME
Value: your-site.netlify.app
```

### Option B: A Record
```
Type: A
Value: [IP provided by Netlify/Vercel]
```

---

## Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads at yourdomain.com
- [ ] All pages accessible
- [ ] All links work
- [ ] Images load
- [ ] Mobile responsive (test on phone)
- [ ] HTTPS works (padlock icon)
- [ ] bounce_Font.html works
- [ ] bounce_Rustiques.html works

### Testing Tools

```
Mobile: https://mobiletest.me/
Speed: https://pagespeed.web.dev/
SSL: https://www.sslshopper.com/ssl-checker.html
Links: https://www.deadlinkchecker.com/
```

---

## SSL/HTTPS (Security)

### Netlify
✅ Automatic (free, included)

### Vercel
✅ Automatic (free, included)

### Traditional Host
- Usually charges extra ($5-15/year)
- Or use Let's Encrypt (free, some hosts support)
- Request from hosting provider

### Verify HTTPS
- Visit your site
- Look for padlock 🔒 icon
- URL should show `https://`

---

## SEO Setup After Deployment

### 1. Google Search Console

1. Go to https://search.google.com/search-console
2. Click "URL prefix"
3. Enter your domain: `https://yourdomain.com`
4. Verify ownership (Netlify makes this easy)
5. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### 2. Google Analytics

1. Go to https://analytics.google.com
2. Create new property
3. Get your Measurement ID (starts with G-)
4. Add to `config.js`:
   ```javascript
   googleAnalytics: "G-XXXXXXXXXX"
   ```
5. Rebuild and redeploy

### 3. Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters
2. Add your site
3. Verify ownership
4. Submit sitemap

---

## Maintenance

### Regular Tasks

- **Weekly**: Check for errors in Search Console
- **Monthly**: Test all forms and links
- **Quarterly**: Update content, SEO check
- **Yearly**: Renew domain, check analytics

### Monitoring

**Netlify Dashboard**
- Deploys status
- Build logs
- Visitor analytics

**Google Search Console**
- Search queries
- Indexing status
- Coverage issues
- Mobile usability

---

## Troubleshooting Deployment

### "Build Failed"
```
Check Netlify logs for error message
Usually: Missing dependency
Fix: npm install [missing-package]
```

### "404 - Page Not Found"
```
Ensure build directory is _site
Ensure all pages in src/pages/
Check file extension (.md must have frontmatter)
```

### "CSS/Images Not Loading"
```
Check file paths use /
Example: /css/style.css (not css/style.css)
Ensure files exist in src/ folder
```

### "Site Shows Old Content"
```
Clear browser cache: Ctrl+Shift+Delete
Or hard refresh: Ctrl+Shift+R
Netlify has cache: may take 1-2 min to update
```

---

## Cost Breakdown

| Provider | Cost | Pros | Cons |
|----------|------|------|------|
| **Netlify** | Free | Easy, HTTPS free, CDN | Limited builds/month |
| **Vercel** | Free | Very fast, modern | Overkill for static |
| **GitHub Pages** | Free | Simple, unlimited | Slower |
| **Shared Host** | $5-10/yr | Full control | Manual deploy |
| **VPS** | $5-20/mo | Complete control | Need tech skills |

### Recommendation
Start with **Netlify Free** ($0), upgrade to Pro ($19/mo) only if needed.

---

## Keeping Updated

### Update Node Packages
```bash
npm update
npm audit fix
```

### Update Eleventy
```bash
npm install @11ty/eleventy@latest
```

### Update Bootstrap
```bash
npm install bootstrap@latest
```

---

## Summary

1. **Run**: `npm run build`
2. **Choose**: Netlify (easiest)
3. **Push**: Code to GitHub
4. **Deploy**: Via Netlify dashboard
5. **Done**: Your site is live!

---

## Need Help?

- **Netlify Docs**: https://docs.netlify.com/
- **GitHub Pages**: https://pages.github.com/
- **Vercel Docs**: https://vercel.com/docs
- **Eleventy**: https://www.11ty.dev/

**Your website is ready to go live!** 🚀
