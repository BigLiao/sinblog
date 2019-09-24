__sinblog_import_blog_js__;
__sinblog_import_blog_scss__;

const html = __sinblog_import_blog_html__;

if (module.hot) {
    module.hot.accept(
        () => {
            document.getElementById('app').innerHTML = html;
        }
    );
}

document.getElementById('app').innerHTML = html;