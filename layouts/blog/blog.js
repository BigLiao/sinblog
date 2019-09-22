console.log('blog')
if (module.hot) {
    module.hot.accept(
        (e) => console.log('err', e)
    );
}