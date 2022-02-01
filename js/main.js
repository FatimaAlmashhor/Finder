// import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../utils/jquery-3.6.0.min';
import './login'

$(document).scroll(function () {
    // console.log('test');
    console.log(window.scrollY);
    window.scrollY > 0 ? $('.navbar').css('background', 'black') : $('.navbar').css('background', 'transparent')
})
// window.addEventListener('load', () => {
//     if (window.scrollY > 0) {
//         //
//     }
// })