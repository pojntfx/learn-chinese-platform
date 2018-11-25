module.exports = {
  plugins: [
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          posts: require.resolve("./src/layouts/Post.js"),
          default: require.resolve("./src/layouts/Default.js")
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Learn Chinese Platform",
        short_name: "LCP",
        start_url: "/",
        background_color: "#E31818",
        theme_color: "#E31818",
        display: "standalone",
        icon: "static/img/icon.png"
      }
    },
    "gatsby-plugin-offline"
  ]
};
