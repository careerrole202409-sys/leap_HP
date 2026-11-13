// LP一覧（/lp/）用。lp/<言語>/<名前>/index.* を読み、タイトルと表示・非表示を返す。
// 非表示のLPはページを出力しない（permalink: false）ため、Eleventyのコレクションではなくファイルから直接読む。
const fs = require('fs');
const path = require('path');

module.exports = () => {
  const root = path.join(__dirname, '..', 'lp');
  const pages = [];
  for (const lang of fs.readdirSync(root)) {
    const langDir = path.join(root, lang);
    if (!fs.statSync(langDir).isDirectory()) continue;
    for (const name of fs.readdirSync(langDir)) {
      const dir = path.join(langDir, name);
      if (!fs.statSync(dir).isDirectory()) continue;
      const file = fs.readdirSync(dir).find((f) => /^index\.(njk|html|md)$/.test(f));
      if (!file) continue;
      const src = fs.readFileSync(path.join(dir, file), 'utf8');
      const fm = (src.match(/^---\n([\s\S]*?)\n---/) || [])[1] || '';
      const title = ((fm.match(/^title:\s*(.+)$/m) || [])[1] || '').trim();
      const hidden = /^hidden:\s*true/m.test(fm);
      pages.push({ path: `/lp/${lang}/${name}/`, lang, title, hidden });
    }
  }
  // 公開中のLPを上に、その中はURL順
  return pages.sort((a, b) => (a.hidden - b.hidden) || a.path.localeCompare(b.path));
};
