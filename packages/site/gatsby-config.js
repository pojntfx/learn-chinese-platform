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
        name: "Learn Chinese Platform Site",
        short_name: "LCP Site",
        start_url: "/",
        background_color: "#e31818",
        theme_color: "#e31818",
        display: "standalone",
        icon: "src/assets/icon.png"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-typescript"
  ]
};
