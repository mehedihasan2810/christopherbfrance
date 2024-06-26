export const siteConfig = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitleAlt: "Christopher B. France", // Alternative Site title for SEO
  siteTitle: "Christopher B. France", // Navigation and Site Title
  siteTitleManifest: "christopherbfrance",
  siteUrl: "https://christopherbfrance.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteHeadline: "Design for social and environmental impact", // Headline for schema.org JSONLD
  siteBanner: "/assets/social/banner.png", // Your image for og:image tag. You can find it in the /static folder
  favicon: "src/favicon.png", // Your image for favicons. You can find it in the /src folder
  siteDescription: `Christopher B. France is a designer, builder and strategist based in Oakland.`,
  author: "Christopher France", // Author for schemaORGJSONLD
  siteLogo: "/assets/social/logo.png", // Image for schemaORGJSONLD relative to /static

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@unthinkingly', // Twitter Username - Optional
  // ogSiteName: 'unthinkingly', // Facebook Site Name - Optional
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "0000",

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: "#ffffff",
  backgroundColor: "#ffffff",
};
