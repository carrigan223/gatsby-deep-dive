require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: "0ccf72e2f216c6b4f804acd4810280",
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Amatic SC`, `Montserrat`, `Josefin Sans`, `Lobster`,`Fredoka One`, `Righteous`],
        display: "swap",
      },
    },
  ],
};
