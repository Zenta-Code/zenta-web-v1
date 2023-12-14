
/** @type {import('next').NextConfig} */
module.exports = {
  exclude: ['/studio'],

  changefreq: 'daily',
  reactStrictMode: true,
  experimental:{
    appDir: true,
  },
  images:{
    domains:["cdn.sanity.io"],
  },
  "plugins": [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3,
        "features": {
          "custom-properties": false
        }
      }
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content:
        [
          './apps/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}'
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ["html", "body"]
      }
    ],
  ]
}