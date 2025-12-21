/**
 * APPCF Website Configuration
 * 
 * This file contains all site-wide settings
 * Edit these values to customize your site
 */

module.exports = {
  // Site Metadata
  site: {
    title: "APPCF - Association de Protection du Patrimoine",
    shortTitle: "APPCF",
    description: "Association de Protection du Patrimoine de la Commune de Fontpédrouse – Prats-Balaguer – Saint-Thomas",
    url: process.env.SITE_URL || "https://appcf.org",
    language: "fr",
    locale: "fr_FR",
    
    // Social Media (add these if you have profiles)
    social: {
      facebook: "",      // e.g., "https://facebook.com/appcf"
      twitter: "",       // e.g., "https://twitter.com/appcf"
      instagram: "",     // e.g., "https://instagram.com/appcf"
      youtube: "",       // e.g., "https://youtube.com/@appcf"
    },

    // Contact Information
    contact: {
      email: "contact@appcf.org",      // Update this
      phone: "+33 6 00 00 00 00",      // Update this
      address: "Fontpédrouse, 66360",  // Update this
    },

    // Organization Details
    organization: {
      name: "APPCF",
      legalName: "Association de Protection du Patrimoine de la Commune de Fontpédrouse – Prats-Balaguer – Saint-Thomas",
      founded: 1985,
      foundedBy: "Jean Nicloux",
      members: 75,
      membershipFee: "13€ (annuel)",
    }
  },

  // Theme Colors
  colors: {
    primary: "#2c3e50",      // Dark blue
    secondary: "#3498db",    // Light blue
    accent: "#e74c3c",       // Red
    success: "#27ae60",      // Green
    warning: "#f39c12",      // Orange
    danger: "#e74c3c",       // Red
    light: "#f8f9fa",        // Light gray
    dark: "#2c3e50",         // Dark gray
  },

  // Typography
  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: "16px",
    lineHeight: "1.6",
  },

  // SEO Settings
  seo: {
    googleAnalytics: "",                    // Add your Google Analytics ID (e.g., G-XXXXXXXXXX)
    googleSiteVerification: "",             // Add verification code
    bingWebmasterTools: "",                 // Add Bing verification
    keywords: "patrimoine, Fontpédrouse, Prats-Balaguer, Saint-Thomas, randonnées, APPCF",
    socialImage: "/img/og-image.jpg",       // Image for social sharing
  },

  // Features to enable/disable
  features: {
    searchEnabled: false,           // Full-text search
    commentsEnabled: false,         // Blog comments
    darkModeEnabled: true,          // Dark mode toggle
    multiLanguage: false,           // i18n support
    sitemap: true,                  // XML sitemap
    rss: true,                      // RSS feed
    newsletter: false,              // Newsletter signup
  },

  // Build Settings
  build: {
    compress: true,                 // Minify CSS/JS in production
    sourceMap: false,               // Generate source maps
    generateSitemap: true,          // Auto-generate sitemap
    splitCodeChunks: true,          // Code splitting for JS
  },

  // Analytics Events (if you use Matomo, GA, etc)
  analytics: {
    trackPageViews: true,
    trackOutboundLinks: true,
    trackDownloads: true,
    downloadExtensions: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'zip'],
  },

  // Cache Settings
  cache: {
    browserCache: "1 year",         // How long to cache static assets
    siteCacheDuration: "1 hour",    // How long to serve cached pages
  },

  // Admin/Contributor Settings
  admin: {
    baseUrl: "/admin",
    enableGit: true,
    enableForkButton: false,
  },
};
