
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

$('#more_filter').click(function () {
    $('.filter_body').toggleClass('w-0')
})
$('#all_btn').click(function () {
    $(this).toggleClass('bg-warning')
})