var tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    require("postcss")(),
    tailwindcss("./tailwind.config.js"), //This refers to your tailwind config
    require("autoprefixer")
  ]
};
