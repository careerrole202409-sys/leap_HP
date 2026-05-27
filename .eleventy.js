const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // 日付をフォーマットするフィルター "date" を登録
  eleventyConfig.addFilter("date", (dateObj, format = "yyyy.MM.dd") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  // assetsフォルダをそのままdocs/assetsにコピー
  eleventyConfig.addPassthroughCopy("assets");
  
  // CNAMEファイルをそのままdocs/CNAMEにコピー
  eleventyConfig.addPassthroughCopy("CNAME");

  // Jekyll無効化ファイルをdocs/.nojekyllにコピー
  eleventyConfig.addPassthroughCopy(".nojekyll");

  return {
    dir: {
      input: ".",
      output: "docs"
    }
  };
};