console.log('bl2og')
if (module.hot) {
    module.hot.accept(
        (e) => console.log('err', e)
    );
}