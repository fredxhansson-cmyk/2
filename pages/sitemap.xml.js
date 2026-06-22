function SiteMap() { return null; }
export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml');
  res.write(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://lokalmatsverige.se</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://lokalmatsverige.se/integritetspolicy</loc><changefreq>monthly</changefreq><priority>0.3</priority></url>
  <url><loc>https://lokalmatsverige.se/villkor</loc><changefreq>monthly</changefreq><priority>0.3</priority></url>
</urlset>`);
  res.end();
  return { props: {} };
}
export default SiteMap;