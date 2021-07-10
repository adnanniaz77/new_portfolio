const projectGallery = document.querySelector(".project_gallery");
const project = document.querySelectorAll(".project");
const popcornMovies = document.querySelector("#popcorn-movies-btn");
const header = document.querySelector("header");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const work = document.querySelector("#work");
const testimonials = document.querySelector("#testimonials");
const btns = document.querySelectorAll(".floatingBtn");

// Modal Setting
// popcornMovies.addEventListener("click", () => {
//     document.querySelector("#popcorn-movies").style.display = "unset";
// });

// document.querySelector(".modal-backdrop").addEventListener("click", (e) => {
//     if (!e.target.classList.contains("project_modal")) {
//         document.querySelector("#popcorn-movies").style.display = "none";
//     }
// });

// Show Floating Menu on Scroll
document.addEventListener("scroll", (e) => {
    if (pageYOffset <= document.querySelector("header").offsetHeight - 100) {
        document.querySelector(".hidden_menu").style.transform =
            "translateY(-200px)";
        document.querySelector(".hidden_menu").style.position = "fixed";
        document.querySelector(".hidden_menu").style.top = "0";
        document.querySelector(".hidden_menu").style.left = "0";
    } else {
        document.querySelector(".hidden_menu").style.display = "initial";
        document.querySelector(".hidden_menu").style.transform =
            "translateY(0)";
    }

    if (pageYOffset < home.offsetTop) {
        changeBorder("#home");
    }

    if (pageYOffset >= about.offsetTop) {
        changeBorder("#about");
    }

    if (pageYOffset >= work.offsetTop - 50) {
        changeBorder("#work");
    }

    if (pageYOffset >= testimonials.offsetTop - 100) {
        changeBorder("#testimonials");
    }

    if (pageYOffset >= contact.offsetTop - 100) {
        changeBorder("#contact");
    }
});

// function to change border for hidden floating-menu
function changeBorder(id) {
    btns.forEach((each) => {
        if (each.hash === id) {
            each.style.borderBottom = "solid 3px #fff102";
        } else {
            each.style.borderBottom = "none";
        }
    });
}

// Gallery Filter
function filterSelection(selector) {
    const filterBtns = document.querySelectorAll(".project_nav_btn");

    filterBtns.forEach((eachBtn) => {
        eachBtn.classList.remove("active");
        if (eachBtn.dataset.name === selector) {
            eachBtn.classList.add("active");
        }
    });

    project.forEach((each) => {
        if (!each.classList.contains(selector)) {
            each.style.transform = "scale(0)";
            setTimeout(() => {
                each.style.display = "none";
            }, 300);
            //    each.classList.add('hide')
            //    each.classList.remove('show')
        } else {
            each.style.transform = "scale(1)";
            setTimeout(() => {
                each.style.display = "flex";
            }, 300);
            //    each.classList.add('show')
            //    each.classList.remove('hide')
        }
    });
}

// copy text to clipboard
function copyText(target) {
    const element = document.getElementById(target);
    const text = element.value;

    copyToClipBoard(text);
    const alertText = document.querySelector(".copyAlert");
    alertText.style.opacity = "1";
    setTimeout(() => {
        alertText.style.opacity = "0";
        document.querySelector(".hidden_menu").style.display = "initial";
        document.querySelector(".hidden_menu").style.transform =
            "translateY(0)";
        console.log("hi");
    }, 1500);
}

// copyToClipBoard function
function copyToClipBoard(text) {
    console.log(text);
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);
    } else if (
        document.queryCommandSupported &&
        document.queryCommandSupported("copy")
    ) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();

        try {
            return document.execCommand("copy"); // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

const nav_links = document.querySelectorAll("nav a");

function clearOther() {
    nav_links.forEach((each) => {
        each.style.borderBottom = "solid 3px transparent";
    });
}

nav_links.forEach((each) => {
    each.addEventListener("click", () => {
        console.log(document.activeElement);
        clearOther();
        if (!each.classList.contains("active")) {
            each.style.borderBottom = "solid 3px #fff102";
            console.log(document.activeElement);
        }
    });
});

// Responsive Menu
const responsiveMenu = document.querySelector(".responsive_menu");
const toggleButton = document.querySelector(".toggle-button");

toggleButton.addEventListener("click", () => {
    responsiveMenu.classList.toggle("show");
    toggleButton.classList.toggle("rotate");
});
