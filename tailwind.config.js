const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/*.jsx",
    "./src/Component/Form.jsx",
    "./src/Component/NotProduct.jsx",
    "./src/Component/Product.jsx",
    "./src/Component/Products.jsx",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
