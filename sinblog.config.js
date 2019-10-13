/**
 * 配置页面路径
 */

module.exports = {
  theme: 'default',
  pages: {
    list: {
      layout: './layouts/list',
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
