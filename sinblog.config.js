/**
 * 配置页面路径
 */

module.exports = {
  theme: 'default',
  blogDir: './blog',
  blogPages: [
    {
      title: '技术',
      path: './blog/技术'
    }, {
      title: '文学',
      path: './blog/文学'
    }
  ],
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
