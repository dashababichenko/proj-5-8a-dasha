const videobtn = document.querySelector(".universal__btn");
videobtn.addEventListener("click", function() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=0gcJCdgAo7VqN5tD";

})
const openbtn = document.querySelector(".headefr-modal-open");
const closebtn = document.querySelector(".header-modal-close");
const modal = document.querySelector(".header-modal");
openbtn.addEventListener("click", () => {
    modal.claasList.add("active");
});
closebtn.addEventListener("click", () => {
    modal.classList.remove('active')
})