// 判断路由，设置当前导航高亮
const pathname = location.pathname;
const routes = {
  home: /\/$/,
  blog: /\/blog(\/.+|$)/,
  about: /\/about(\/.+|$)/,
};

// $(`#navbarSupportedContent .nav-item`).removeClass('active')
Object.keys(routes).forEach(key => {
  if (routes[key].test(pathname)) {
    // 匹配了当前路由
    $(`#navbarSupportedContent .nav-item.${key}`).addClass('active');
  } else {
    $(`#navbarSupportedContent .nav-item.${key}`).removeClass('active');
  }
});
