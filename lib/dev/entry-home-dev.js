__sinblog_import_home_js__;
__sinblog_import_home_scss__;

const html = __sinblog_import_home_html__;

if (module.hot) {
    module.hot.accept(
        () => {
            document.getElementById('app').innerHTML = html;
        }
    );
}

document.getElementById('app').innerHTML = html;