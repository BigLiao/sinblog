function createBlogBrief() {
  return {
    title: '[算法导论]第一章-算法在计算机中的应用',
    author: 'Liao',
    url: '/blog',
    date: '2019-04-03 20:11:01',
    keywords: '算法导论 算法',
    content: '什么是算法？为什么算法值得研究？相对于计算机中使用的其他技术来说算法的作用是什么？本章我们来回答这些问题。'
  }
}


function createBlogList() {
  return Array(20).map(() => createBlogBrief());
}

module.exports = createBlogList;
