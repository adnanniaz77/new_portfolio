const projectGallery = document.querySelector('.project_gallery')
const project = document.querySelectorAll('.project')
const popcornMovies = document.querySelector('#popcorn-movies-btn')

popcornMovies.addEventListener('click', () => {
    document.querySelector('#popcorn-movies').style.display = 'unset'
})

document.querySelector('.modal-backdrop').addEventListener('click', (e) => {
    if (!e.target.classList.contains('project_modal')) {
        document.querySelector('#popcorn-movies').style.display = 'none'
    }
})

document.addEventListener('scroll', (e) => {
    if(pageYOffset >= document.querySelector('header').offsetHeight) {
        document.querySelector('.hidden_menu').style.display = 'initial'
        document.querySelector('.hidden_menu').style.transform = 'translateY(0)'
    } else {
        document.querySelector('.hidden_menu').style.transform = 'translateY(-200px)'
        document.querySelector('.hidden_menu').style.position = 'fixed'
        document.querySelector('.hidden_menu').style.top = '0'
        document.querySelector('.hidden_menu').style.left = '0'
    }
})

let toolTip = document.querySelectorAll('.toolTip')

// function copyText(element) {
//     var temp = $("<input>");
//     $("body").append(temp);

//     temp.val($(element).text()).select();
//     document.execCommand("copy");

//     temp.remove();
// }

function filterSelection(selector) {
    const filterBtns = document.querySelectorAll('.project_nav_btn');

    filterBtns.forEach(eachBtn => {
        eachBtn.classList.remove('active')
        if (eachBtn.dataset.name === selector) {
            eachBtn.classList.add('active')
        }
    })

    project.forEach(each => {
       if (!each.classList.contains(selector)) {
           each.classList.add('hide')
           each.classList.remove('show')
       } else {
           each.classList.add('show')
           each.classList.remove('hide')
       }
    })
}