/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.carina.czest.pl',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ["/robots.txt", "/sitemap.xml"],
  }