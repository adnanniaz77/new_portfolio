const popcornMovies = document.querySelector('#popcorn-movies-btn')

popcornMovies.addEventListener('click', () => {
    document.querySelector('#popcorn-movies').style.display = 'unset'
})

document.querySelector('.modal-backdrop').addEventListener('click', (e) => {
    if (!e.target.classList.contains('project_modal')) {
        document.querySelector('#popcorn-movies').style.display = 'none'
    }
})