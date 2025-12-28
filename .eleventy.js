module.exports = function(eleventyConfig) {
  // assets フォルダ（CSSやJS）をそのまま出力先にコピーする設定
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};