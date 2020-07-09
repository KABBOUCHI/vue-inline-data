import base from "./rollup.config.base";

const config = Object.assign({}, base, {
  output: {
    file: "dist/vue-inline-data.esm.js",
    format: "es",
    name: "vue-inline-data",
  },
});

export default config;
