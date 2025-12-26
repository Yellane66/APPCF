// Main JavaScript for APPCF website

document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Add active state to current page navigation
  const currentLocation = location.pathname;
  const menuItems = document.querySelectorAll('.nav-link');
  menuItems.forEach(item => {
    if (item.getAttribute('href') === currentLocation) {
      item.classList.add('active');
    }
  });
});

// Lazy loading for images (if using native lazy loading)
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  if ('loading' in HTMLImageElement.prototype === false) {
    // Fallback for browsers that don't support lazy loading
    // Could implement a polyfill here
  }
});
