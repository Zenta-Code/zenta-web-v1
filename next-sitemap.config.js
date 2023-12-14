const siteUrl = process.env.NEXT_PUBLIC_VERCEL_URL ||"https://www.zenta.tech"
/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions:{
    policies:[
      { userAgent: '*', disallow: '/studio' },
      { userAgent: '*', allow: '/' },
    ],additionalSitemaps: [
      `${siteUrl}/sitemap-0.xml`,
    ],
  },
  exclude:['/studio']

};
