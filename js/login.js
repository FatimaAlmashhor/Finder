$('body').ready(() => {
    let singIn = sessionStorage.getItem('register')
    singIn == null ? false : singIn;
    singIn === true ? $('.login_checked').hide() : null
    $('#login').click(() => {
        console.log('clicking');
        $('.login_checked').hide();
        $('.profile').fadeOut()
        sessionStorage.setItem('register', true);
    });
})