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

// Show Floating Menu on Scroll
document.addEventListener('scroll', (e) => {
    if(pageYOffset <= document.querySelector('header').offsetHeight - 100) {
        document.querySelector('.hidden_menu').style.transform = 'translateY(-200px)'
        document.querySelector('.hidden_menu').style.position = 'fixed'
        document.querySelector('.hidden_menu').style.top = '0'
        document.querySelector('.hidden_menu').style.left = '0'
    } else {
        document.querySelector('.hidden_menu').style.display = 'initial'
        document.querySelector('.hidden_menu').style.transform = 'translateY(0)'
    }
})

// Gallery Filter
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

// copy text to clipboard
function copyText(target) {
    const element = document.getElementById(target);
    const text = element.value
    
    copyToClipBoard(text);
    const alertText = document.querySelector('.copyAlert')
    alertText.style.opacity = '1'
    setTimeout(() => {
        alertText.style.opacity = '0'
        document.querySelector('.hidden_menu').style.display = 'initial'
        document.querySelector('.hidden_menu').style.transform = 'translateY(0)'
        console.log('hi')
    }, 1500)
}


// copyToClipBoard function
function copyToClipBoard (text) {
    console.log(text)
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 

  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();

    try {
      return document.execCommand("copy");  // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
    }
}
