const markdownIt = require("markdown-it");
const config = require("./config.js");

module.exports = function(eleventyConfig) {
  // Add global data from config
  eleventyConfig.addGlobalData("site", config.site);
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("avis-recherche");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  // Filter for generating canonical URLs
  eleventyConfig.addFilter("url", function(urlString) {
    return "https://appcf.org" + urlString;
  });

  // Filter for JSON-LD structured data
  eleventyConfig.addFilter("stringify", function(data) {
    return JSON.stringify(data);
  });

  // Filter to mark content as safe (HTML)
  eleventyConfig.addFilter("safe", function(content) {
    return content;
  });

  // Watch for changes in data files
  eleventyConfig.setWatchThrottleWaitTime(100);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    templateFormats: ["md", "njk", "html", "liquid"]
  };
};
