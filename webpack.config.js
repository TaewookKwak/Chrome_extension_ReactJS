const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    popup: path.resolve("./src/popup/popup.tsx"),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node_modules/,
      },
      {
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
        test: /\.css$/i,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/static/manifest.json"),
          to: path.resolve("dist"),
        },
        {
          from: path.resolve("src/assets/icon_16.png"),
          to: path.resolve("dist"),
        },
        {
          from: path.resolve("src/assets/icon_24.png"),
          to: path.resolve("dist"),
        },
        {
          from: path.resolve("src/assets/icon_32.png"),
          to: path.resolve("dist"),
        },
        {
          from: path.resolve("src/assets/icon_64.png"),
          to: path.resolve("dist"),
        },
        {
          from: path.resolve("src/assets/icon_128.png"),
          to: path.resolve("dist"),
        },
      ],
    }),
    new HtmlPlugin({
      title: "ReactJS",
      filename: "popup.html",
      chunks: ["popup"],
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
  },
};
