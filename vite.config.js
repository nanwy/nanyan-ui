const path = require('path')


module.exports = {
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       'assets': '@/assets',
  //       'common': '@/common',
  //       'components': '@/components',
  //       'network': '@/network',
  //       'views': '@/views',
  //     }
  //   }
  // },
  alias: {
    // 键必须以斜线开始和结束
    '/@/': path.resolve(__dirname, './src')
  },
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       prependData: `@import "~@/assets/scss/style.scss";`
  //     }
  //   }
  // }
  // cssPreprocessOptions: {
  //   scss: {
  //     additionalData: `@import "/~@/assets/scss/style.scss";`
  //   }
  // },
  css: { loaderOptions: { sass: { additionalData: ` @import "@/assets/scss/style.scss"; ` } } }
}