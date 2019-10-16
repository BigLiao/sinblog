/**
 * @file SinBlog 配置文件
 */

/**
 * 
 * @param {Object} pageConfig - 博客页面配置参数
 * @param {string} pageConfig.title - 页面标题
 * @param {string} pageConfig.dirName - 博客子目录，相对于 blogRoot 路径
 * @param {string} pageConfig.path - 映射的 URL 路径
 */
module.exports = {
  theme: 'default',
  siteName: 'SinBlog 赛因博客',
  blogRoot: './test/blog',
  blogPages: [
    {
      title: '技术',
      dirName: '技术',
      path: 'technique',
    }, {
      title: '文学',
      dirName: '文学',
      path: 'literature'
    }
  ],
  indexPath: './technique'
}
