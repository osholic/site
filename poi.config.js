module.exports = {
  entry: "src/index.ts",
  plugins: [
    {
      resolve: "@poi/plugin-vue-static",
      options: {
        staticRoutes: ["/", "/about", "/form-success"]
      }
    }
  ],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: "html-loader"
            },
            {
              loader: "markdown-loader"
            }
          ]
        }
      ]
    }
  }
};
