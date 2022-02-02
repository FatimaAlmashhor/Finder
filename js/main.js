// import '../utils/bootstramp/bootstrap.min';
import '../utils/jquery-3.6.0.min.js';

$(document).scroll(function () {
    // console.log('test');
    window.scrollY > 0 ? $('.navbar').css('background', 'hsl(237deg 17% 24% / 51%)') : $('.navbar').css('background', 'transparent')
})

$('#download_cv').click(function (e) {
    e.preventDefault();  //stop the browser from following
    window.location.href = '../upload/FATIMA AMIN ALMASHHOR (1).pdf';
});
