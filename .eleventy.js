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

  // テンプレート一覧の並び替えフィルター "sortTemplates" を登録
  // ファイル名（例: ec_template_3）から種類と番号を読み取り、
  // 番号順 → 同じ番号の中は EC → HP → LP の順に並べる（種類が交互に並ぶ）。
  // 形式に合わないファイル名は末尾に回す。
  const TEMPLATE_TYPE_ORDER = ["ec", "hp", "lp"];
  eleventyConfig.addFilter("sortTemplates", (items) => {
    const key = (item) => {
      const m = /^([a-z]+)_template_(\d+)$/.exec(item.fileSlug);
      if (!m) return [Infinity, Infinity];
      const typeIndex = TEMPLATE_TYPE_ORDER.indexOf(m[1]);
      return [Number(m[2]), typeIndex === -1 ? TEMPLATE_TYPE_ORDER.length : typeIndex];
    };
    return [...items].sort((a, b) => {
      const [aNum, aType] = key(a);
      const [bNum, bType] = key(b);
      return aNum - bNum || aType - bType;
    });
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