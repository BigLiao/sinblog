require('../nav/nav');
require('../footer/footer');

const Masonry = require('masonry-layout');

function generateBlogItem({
  title, content
}) {
  return `
<div class="blog-item col-12 col-md-6 col-lg-4">
  <a class="blog-item-link m-md-2 py-1 py-md-4 px-2 px-md-4" href="/blog">
    <h3>${title}</h3>
    <p>${content}</p>
  </a>
</div>
`;
}

function createBlogInfo() {
  const randomIndex = Math.floor(Math.random() * 4);
  const list = [
    {
      title: '[算法导论]第一章-算法在计算机中的应用',
      author: 'Liao',
      url: '/blog',
      date: '2019-04-03 20:11:01',
      keywords: '算法导论 算法',
      content: '什么是算法？为什么算法值得研究？相对于计算机中使用的其他技术来说算法的作用是什么？本章我们来回答这些问题。'
    }, {
      title: '[算法导论]第二章-算法详解',
      author: 'Liao',
      url: '/blog',
      date: '2019-04-03 20:11:01',
      keywords: '算法导论 算法',
      content: '相对于计算机中使用的其他技术来说算法的作用是什么,相对于计算机中使用的其他技术来说算法的作用是什么,相对于计算机中使用的其他技术来说算法的作用是什么,相对于计算机中使用的其他技术来说算法的作用是什么？本章我们来回答这些问题。'
    }, {
      title: '[算法导论]第三章-算法详解',
      author: 'Liao',
      url: '/blog',
      date: '2019-04-03 20:11:01',
      keywords: '算法导论 算法',
      content: ',相对于计算机中使用的其他技术来说算法的作用是什么,相使用的其他技术来说算法的作用是什么,相对于计算机中使用的其他技术来说算法的作用是什么？本章我们来回答这些问题。'
    }, {
      title: '[算法导论]第四章-算法详解',
      author: 'Liao',
      url: '/blog',
      date: '2019-04-03 20:11:01',
      keywords: '算法导论 算法',
      content: '2019-04-03 20:11:01,相使用的其他技术来说算法的作用是什么,相对于计算用的其他技术来说算法的作用是什么？本章我们来回答这些问题。'
    }
  ];
  return list[randomIndex];
}

const blogInfoList = Array(100).fill(0).map(createBlogInfo);

const page = {
  pageSize: 100,
  total: blogInfoList.length,
  current: 0
}

function renderBlogList() {
  if (page.current * page.pageSize < page.total) {
    const blogListHtml = blogInfoList.slice(page.current * page.pageSize, (page.current + 1) * page.pageSize)
      .map(info => generateBlogItem(info)).join('');
    page.current++;
    $('#blogList').append($(blogListHtml));

    const msnry = new Masonry( '.blog-list', {
      // options
      itemSelector: '.blog-item',
    });

  }
}

renderBlogList();