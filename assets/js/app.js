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
        document.querySelector('.hidden_menu').style.transform = 'translateY(0)'
    } else {
        document.querySelector('.hidden_menu').style.transform = 'translateY(-200px)'
        document.querySelector('.hidden_menu').style.position = 'fixed'
        document.querySelector('.hidden_menu').style.top = '0'
        document.querySelector('.hidden_menu').style.left = '0'
    }
})
