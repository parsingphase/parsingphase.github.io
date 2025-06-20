export default async function (eleventyConfig) {
  // Configure Eleventy
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0

  });
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('assets');

  eleventyConfig.addGlobalData("template", "/mylayout.njk");

};