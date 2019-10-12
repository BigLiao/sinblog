/**
 * 配置页面路径
 */

module.exports = {
  theme: 'default',
  pages: {
    home: {
      layout: './layouts/home',
      content: './README.md'
    },
    blog: {
      layout: './layouts/blog',
      content: 'blog'
    },
    about: {
      layout: './layouts/about',
      content: './README.md'
    }
  }
}
