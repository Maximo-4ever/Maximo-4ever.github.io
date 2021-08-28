let oldBtn;
const $nav = document.querySelector(".nav");
const $btnResponsive = document.querySelector(".btn-responsive");
const $menu = document.querySelector(".nav__menu");
const $btn = document.querySelectorAll(".nav__menu__a");
const $submit = document.querySelector(".contact__form");
const $btnMailTo = document.getElementById("mailto");
window.addEventListener("scroll", function () {
  $nav.classList.toggle("sticky", window.scrollY > 1);
});
$btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("active");
    if (oldBtn !== undefined) {
      oldBtn.classList.remove("active");
    }
    oldBtn = btn;
    $menu.classList.remove("menuResponsive");
  });
});
$btnResponsive.addEventListener("click", () => {
  $menu.classList.toggle("menuResponsive");
});
$submit.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  $btnMailTo.setAttribute(
    "href",
    `mailto:maximilianocm06@gmail.com?subject=${form.get("name")} - ${form.get(
      "email"
    )}&body=${form.get("message")}`
  );
  $btnMailTo.click();
        inputName = document.getElementById('name').value = ""
        inputEmail = document.getElementById('email').value = ""
        inputMessage = document.getElementById('message').value = ""
}
