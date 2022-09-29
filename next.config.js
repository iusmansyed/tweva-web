const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const webpack = require("webpack");
const path = require("path");
// for transpiling all ESM @fullcalendar/* packages
// also, for piping fullcalendar thru babel (to learn why, see babel.config.js)
const withTM = require("next-transpile-modules")(["@fullcalendar/core"]);
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />' : '',
}
module.exports = withFonts(
  withCSS(
    withImages(
      withSass(
        withTM({
          webpack(config, options) {
            config.module.rules.push({
              test: /\.(eot|ttf|woff|woff2)$/,
              use: {
                loader: "url-loader",
              },
            });
            config.resolve.modules.push(path.resolve("./"));
            return config;
          },
        })
      )
    )
  )
);


