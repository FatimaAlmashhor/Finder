// import 'bootstrap';
import '../utils/jquery-3.6.0.min';
import './login'

$(document).scroll(function () {
    // console.log('test');
    console.log(window.scrollY);
    window.scrollY > 0 ? $('.navbar').css('background', 'hsl(237deg 17% 24% / 51%)') : $('.navbar').css('background', 'transparent')
})
// window.addEventListener('load', () => {
//     if (window.scrollY > 0) {
//         //
//     }
// })