// import '../utils/bootstramp/bootstrap.min';
import '../utils/jquery-3.6.0.min.js';
import './login'

$(document).scroll(function () {
    // console.log('test');
    window.scrollY > 0 ? $('.navbar').css('background', 'hsl(237deg 17% 24% / 51%)') : $('.navbar').css('background', 'transparent')
})
