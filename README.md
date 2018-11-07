
# I added some stuff to the default Gatsby starter:

1. Airbnb eslint
2. SCSS with some postprocessors (autoprefixer and pixrem)
3. Contentful

-------------------

## Requirements
To use this project you have to have a Contentful account. If you don't have one yet you can register at www.contentful.com/sign-up.

## 🚀 Quick start

1. **Clone my repo and install dependencies**
    ```sh
      git clone https://github.com/nicomfe/gatsby-contentful-starter.git
      cd gatsby-contentful-starter
      npm i
    ```

2.  **Setup contentful.**

    This project comes with a Contentful setup command you will need to run this just once. This will clone all the content model and documents required to run this project into your space.

    ```sh
    npm run setup.
    ```

    This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API and then import the needed content model into the space you define and write a config file (./.contentful.json).

3. Set the following env variables with the values you will see in ./.contentful.json
    HYPE_CONTENTFUL_SPACE
    HYPE_CONTENTFUL_ACCESS_TOKEN

4.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd gatsby-contentful-starter
    gatsby develop
    ```

5.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    *Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*

    Open the the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the “Guides”, API reference, and “Advanced Tutorials” sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
