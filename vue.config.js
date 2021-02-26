module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/variables.scss";
          @import "@/assets/scss/mixins.scss";
          @import "@/assets/scss/functions.scss";
          @import "@/assets/scss/base/inputs.scss";
        `,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/tindev_frontend/' : '/',
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
