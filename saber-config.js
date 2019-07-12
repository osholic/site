module.exports = {
  siteConfig: {
    title: "开源控",
    url: "https://osholic.com",
    description: "开源周边，正版授权，原创设计"
  },
  build: {
    outDir: "dist",
    extractCSS: process.env.NODE_ENV === "production"
  },
  themeConfig: {
    links: {
      taobao: "https://shop490941714.taobao.com",
      github: "https://github.com/osholic",
      license: "https://github.com/osholic/license",
      feedback: "mailto:feedback@osholic.com",
      spectrum: "https://spectrum.chat/osholic"
    }
  },
  plugins: [
    {
      resolve: "saber-plugin-netlify-redirect"
    },
    {
      resolve: "saber-plugin-google-analytics",
      options: { trackId: "UA-143752941-1" }
    }
  ],
  permalinks: { page: "/:slug" }
};
