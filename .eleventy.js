const pluginRss = require("@11ty/eleventy-plugin-rss");
// ▼【追加】日付処理ライブラリを読み込む
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // ▼【追加】日付をフォーマットするフィルター "date" を登録
  eleventyConfig.addFilter("date", (dateObj, format = "yyyy.MM.dd") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      output: "docs"
    }
  };
};