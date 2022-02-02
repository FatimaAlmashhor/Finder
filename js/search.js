
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
    $('.job_post').show();
    $('.job_post').toggleClass('d-none')
})

$(document).ready(() => {
    const checkboxes = document.querySelectorAll("#job_type_filter input[type='checkbox']")
    // const job_type = document.querySelectorAll(".job_type")
    const job_post = document.querySelectorAll(".job_post")
    checkboxes.forEach(element => {
        element.addEventListener('change', (e) => {
            if (e.target.checked) {
                job_post.forEach(post => {
                    let value = post.querySelector(`.job_type`).innerText;
                    if (value.toLowerCase() === e.target.value.toLowerCase()) {
                        post.classList.remove('d-none');
                    }
                    else {
                        post.classList.add('d-none');
                    }
                })

            }

        })
    })


    const checkboxes_campany = document.querySelectorAll("#company_filter input[type='checkbox']")
    // const job_type = document.querySelectorAll(".job_type")
    checkboxes_campany.forEach(element => {
        element.addEventListener('change', (e) => {
            if (e.target.checked) {
                job_post.forEach(post => {
                    let value = post.querySelector(`.compeny_name`).innerText;
                    if (value.toLowerCase() === e.target.value.toLowerCase()) {
                        post.classList.remove('d-none');
                    }
                    else {
                        post.classList.add('d-none');
                    }
                })

            }

        })
    })
})
