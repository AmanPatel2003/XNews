// pages/sitemap.xml.js

const generateSitemap = () => {
  // Your logic to generate the sitemap XML content
  const sitemapContent = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://xcheck-ten.vercel.app/">
      <url>
        <loc>https://xcheck-ten.vercel.app/about</loc>
        <lastmod>2024-01-25</lastmod>
      </url>
      <url>
        <loc>https://xcheck-ten.vercel.app/mission/loc>
        <lastmod>2024-01-25</lastmod>
      </url>
      <!-- Add more URLs as needed -->
    </urlset>
  `;

  return sitemapContent;
};

const Sitemap = () => null;

Sitemap.getInitialProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/xml");
  res.write(generateSitemap());
  res.end();

  return {};
};

export default Sitemap;
