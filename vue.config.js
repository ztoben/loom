const path = require("path");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  devServer: {
    port: 9999,
    open: true
  },
  publicPath: "/",
  configureWebpack: {
    plugins: [
      new WebpackPwaManifest({
        name: "Loom",
        short_name: "loom",
        description: "A simple pixel editor",
        background_color: "lightgray",
        orientation: "portrait",
        display: "standalone",
        start_url: ".",
        icons: [
          {
            src: path.resolve("src/assets/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512]
          }
        ]
      }),
      new FaviconsWebpackPlugin(path.resolve("src/assets/logo.png"))
    ]
  }
};
