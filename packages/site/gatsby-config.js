module.exports = {
  plugins: [
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          posts: require.resolve("./src/downstream/Post.tsx")
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
        name: `${require("./src/data/metadata.json").title} Site`,
        short_name: `${require("./src/data/metadata.json").shortTitle} Site`,
        start_url: "/",
        background_color: require("./src/data/metadata.json").color,
        theme_color: require("./src/data/metadata.json").color,
        display: "standalone",
        icon: "src/assets/icon.png"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-typescript"
  ]
};
