import { HtmlBasePlugin } from "@11ty/eleventy";

export default async function (eleventyConfig) {
  // Configure Eleventy
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
  });
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addGlobalData("template", "/mylayout.njk");
}
