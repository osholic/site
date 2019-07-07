module.exports = {
  entry: "src/index.ts",
  plugins: [
    {
      resolve: "@poi/plugin-vue-static",
      options: {
        staticRoutes: ["/", "/about"]
      }
    },
  ]
};
