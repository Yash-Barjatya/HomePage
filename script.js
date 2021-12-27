const preloader = document.getElementById('preloader')
const main_content = document.getElementById('main_content')
const body = document.getElementsByTagName("BODY")[0];
window.onload = () => {
    setTimeout(() => {
        preloader.style.display = "none";
        main_content.style.display = "block";
        body.style.backgroundColor = "white";
    }, 3000)
}