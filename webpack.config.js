const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

module.exports = {
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: [

          {
            loader: 'css-loader',

          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true, // <-- !!IMPORTANT!!
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/, // Match SVG files
        use: 'svg-inline-loader', // Use svg-inline-loader for SVG files
      },
      // {
      //   test: /\.(png|jpe?g|gif|jp2|webp)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: 'images/[name].[ext]'
      //   }
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]', // Output filename as is
                    outputPath: 'images/', // Output folder
                },
            },
        ],
    },
    {
      test: /\.svg$/,
      use: [
          {
              loader: 'url-loader',
              options: {
                  limit: 8192, // Inline files smaller than 8kb
                  name: '[name].[ext]', // Output filename as is
                  outputPath: 'images/', // Output folder
              },
          },
      ],
  },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //     },
      //   ],
      // },
      
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [htmlPlugin],
};
