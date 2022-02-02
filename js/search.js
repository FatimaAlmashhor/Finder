
$('#what_search').on('keyup', () => {
    let word = $('#what_search').val().toLowerCase();
    $('.job_post .job_title').filter(function () {
        $(this).parent().parent().parent().parent().toggle($(this).text().toLowerCase().indexOf(word) > -1);
    })
})
$('#where_search').on('keyup', function () {
    let word = $('#where_search').val().toLowerCase();
    $('.job_location').filter(function () {
        console.log($(this).text().toLowerCase().indexOf(word));
        $(this).parent().parent().parent().parent().toggle($(this).text().toLowerCase().indexOf(word) > -1);
    })
})