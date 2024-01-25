 // generate-sitemap.js

const { SitemapStream, streamToPromise } = require("sitemap");
const { createGzip } = require("zlib");
const { Readable } = require("stream");
const fs = require("fs");
const path = require("path");

const pages = ["/"]; // Add other pages as needed

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: "https://yourdomain.com" });

  for (const page of pages) {
    sitemap.write({ url: page, changefreq: "daily", priority: 0.7 });
  }

  sitemap.end();

  const sitemapXML = await streamToPromise(
    Readable.from([sitemap], { objectMode: true }).pipe(createGzip())
  );

  fs.writeFileSync(path.resolve("./public/sitemap.xml.gz"), sitemapXML);
};

generateSitemap();
