require('../nav/nav');
require('../footer/footer');
require('./list.scss');
require('../style');

const Masonry = require('masonry-layout');

function formatDate(dateTime) {
  const date = new Date(dateTime);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}

function generateBlogItem({
  title, content, path, date
}) {
  const dateFormated = formatDate(date);
  return `
<div class="blog-item col-12 col-md-6 col-lg-4">
  <div class="blog-item-link m-md-2 py-1 py-md-4 px-2 px-md-4" data-href="${path}">
    <h3>
      ${title}
    </h3>
    <div class="blog-item-content">
      ${content}
    </div>
    <div class="blog-item-footer">
      <div class="blog-date">
        ${dateFormated}
      </div>
    </div>
  </div>
</div>
`;
}


function render(blogInfoList) {
  const page = {
    pageSize: 100,
    total: blogInfoList.length,
    current: 0
  }
  if (page.current * page.pageSize < page.total) {
    const blogListHtml = blogInfoList.slice(page.current * page.pageSize, (page.current + 1) * page.pageSize)
      .map(info => generateBlogItem(info)).join('');
    page.current++;
    
    document.getElementById('blogList').innerHTML = blogListHtml;

    setTimeout(() => {
      const msnry = new Masonry( '.blog-list', {
        // options
        itemSelector: '.blog-item',
      });
    }, 2000);

    $('.blog-item-link').on('click', (x) => {
      const el = x.currentTarget;
      if (el.dataset.href) {
        window.location = el.dataset.href
      }
    })

  }
}

module.exports = render;