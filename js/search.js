$('#what_search').on('keyup', () => {
    let word = $('#what_search').val().toLowerCase();
    $('.job_post .job_title').filter(function () {
        $('.job_post ').toggle($(this).text().toLowerCase().indexOf(word) > -1);
    })
})
$('#where_search').on('keyup', function () {
    let word = $(this).val().toLowerCase();

    $('.job_post .').filter(function () {
        $('.job_post').toggle($(this).text().toLowerCase().indexOf(word) > -1);
    })
})