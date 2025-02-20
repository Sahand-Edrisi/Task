const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js","./src/Component/CardItem.jsx" ,flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
