import base from "./rollup.config.base";

const config = Object.assign({}, base, {
  output: {
    file: "dist/vue-inline-data.umd.js",
    format: "umd",
    name: "vue-inline-data",
  },
});

export default config;
