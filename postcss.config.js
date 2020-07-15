const postImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    postImport({}),
    pxtorem({
      rootValue: 40,
      unitPrecision: 5, // 保留5位小数字
      minPixelValue: 2, // 小于 2 时，不转换
      selectorBlackList: ['.fix-ios-top'], // 选择器黑名单，可以使用正则
      propWhiteList: [] // 属性名称为空，表示替换所有属性的值
    }),
    autoprefixer({
        browsers: ['> 1%', 'android >=4', 'ios >=8']
    })
  ]
};
