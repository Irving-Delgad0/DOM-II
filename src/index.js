import './less/index.less'

// Your code goes here!

window.addEventListener("scroll", windowScroll)
const header = document.querySelector("header")
const homeLink = document.querySelector("a");
const aboutLink = homeLink.nextElementSibling;
const footer = document.querySelector('footer');


function linkColor(event) {
    event.target.style.color = "orange";
}

function resetColor(event){
    event.target.style.color = "";
}
homeLink.addEventListener("mouseover", linkColor);
homeLink.addEventListener("mouseout", resetColor);

function footerBackground(event) {
    event.target.style.background = "skyblue";
}

footer.addEventListener("dblclick", footerBackground);

function linkRedirect(event){
    aboutLink.href = "https://www.youtube.com/watch?v=e_04ZrNroTo"
}
aboutLink.addEventListener("click", linkRedirect);

function windowScroll() {
    if (window.scrollY > 50) {
    header.style.backgroundColor = "pink";
} else {
    header.style.backgroundColor = ""
}
}

window.addEventListener("scroll", windowScroll)
