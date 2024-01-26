const sitemap = require("nextjs-sitemap-generator");

const path = require("path");
sitemap({
  baseUrl: "https://xcheck-ten.vercel.app",
  pagesDirectory: path.resolve(__dirname, "../src/app/(Page)/sitemap.xml"),
  targetDirectory: path.resolve(__dirname, "../src/app/(Page)/sitemap.xml"),
  ignoredExtensions: [
    "js",
    "map",
    "json",
    "xml",
    "png",
    "css",
    "jpeg",
    "jpg",
    "icon",
  ],
  ignoredPaths: ["404", "favicon", "index"],
  extraPaths: ["/"],
});
