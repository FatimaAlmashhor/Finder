const side_btns = document.querySelectorAll('[data-btn-id]');
const side_pages = document.querySelectorAll('.profile_page');
side_btns.forEach((element, index) => {
    element.addEventListener('click', () => {
        side_pages.forEach((page, index_page) => {
            side_btns[index_page].classList.remove('active');
            page.classList.remove('show')
        })
        element.classList.add('active');
        side_pages[index].classList.add('show')
    })
})