const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // 日付をフォーマットするフィルター "date" を登録
  eleventyConfig.addFilter("date", (dateObj, format = "yyyy.MM.dd") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  // 読了時間を計算するフィルター "readingTime" を登録
  // 英語は単語区切りの言語のため文字数ベースの計算だと過大評価になる。
  // 言語ごとに読書速度の基準（英語は語数、日本語・中国語は文字数）を分けて算出する。
  eleventyConfig.addFilter("readingTime", (content, locale) => {
    const text = String(content).replace(/<[^>]*>/g, " ");
    let minutes;
    if (locale === "en") {
      const words = text.trim().split(/\s+/).filter(Boolean).length;
      minutes = Math.round(words / 220);
    } else {
      const chars = text.replace(/\s+/g, "").length;
      minutes = Math.round(chars / 500);
    }
    return minutes < 1 ? 1 : minutes;
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