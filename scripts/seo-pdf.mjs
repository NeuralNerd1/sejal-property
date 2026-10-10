// Renders SEO.md to docs/SEO-Implementation-Report.pdf using headless Chromium.  node scripts/seo-pdf.mjs
import fs from 'node:fs'; import path from 'node:path'; import { execFileSync } from 'node:child_process';
const root = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const inl = t => esc(t).replace(/`(.+?)`/g, '<code>$1</code>').replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*(.+?)\*/g, '<i>$1</i>');
const out = []; let list = null, table = null;
const flush = () => { if (list) { out.push(`</${list}>`); list = null; } if (table) { out.push('</tbody></table>'); table = null; } };
for (const line of fs.readFileSync(path.join(root, 'SEO.md'), 'utf8').split('\n')) {
  let m;
  if (/^\|/.test(line)) {
    const cells = line.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
    if (cells.every(c => /^-+$/.test(c))) continue;
    if (!table) { flush(); table = 1; out.push('<table><thead><tr>' + cells.map(c => `<th>${inl(c)}</th>`).join('') + '</tr></thead><tbody>'); }
    else out.push('<tr>' + cells.map(c => `<td>${inl(c)}</td>`).join('') + '</tr>');
    continue;
  }
  if ((m = line.match(/^(#{1,2}) (.+)/))) { flush(); out.push(`<h${m[1].length}>${inl(m[2])}</h${m[1].length}>`); }
  else if ((m = line.match(/^- (.+)/))) { if (list !== 'ul') { flush(); out.push('<ul>'); list = 'ul'; } out.push(`<li>${inl(m[1])}</li>`); }
  else if ((m = line.match(/^\d+\. (.+)/))) { if (list !== 'ol') { flush(); out.push('<ol>'); list = 'ol'; } out.push(`<li>${inl(m[1])}</li>`); }
  else if (line.trim()) { flush(); out.push(`<p>${inl(line)}</p>`); } else flush();
}
flush();
const html = `<!doctype html><meta charset="utf-8"><title>SEO Implementation Report</title><style>
@page{size:A4;margin:18mm 16mm}body{font:11pt/1.5 system-ui,Arial,sans-serif;color:#1f1c18}
h1{font:600 24pt Georgia,serif;margin:0 0 4pt}h2{font:600 14pt Georgia,serif;margin:20pt 0 6pt;padding-top:8pt;border-top:1px solid #ddd;break-after:avoid}
p{margin:0 0 7pt}ul,ol{margin:0 0 8pt;padding-left:18pt}li{margin-bottom:3pt}code{background:#f3eee6;padding:0 3pt;border-radius:3px;font-size:9.5pt}
table{width:100%;border-collapse:collapse;margin:6pt 0 10pt;font-size:9.5pt}th{background:#f3eee6;text-align:left}th,td{border:1px solid #ddd;padding:5pt 6pt;vertical-align:top}tr{break-inside:avoid}
</style>${out.join('\n')}`;
fs.mkdirSync(path.join(root, 'docs'), { recursive: true });
const tmp = path.join(root, 'docs', '_seo.html'); fs.writeFileSync(tmp, html);
execFileSync('chromium', ['--headless', '--no-sandbox', '--no-pdf-header-footer', `--print-to-pdf=${path.join(root, 'docs/SEO-Implementation-Report.pdf')}`, 'file://' + tmp], { stdio: 'ignore' });
fs.rmSync(tmp); console.log('docs/SEO-Implementation-Report.pdf');
