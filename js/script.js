
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll('a[data-disabled="true"]').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault(); // リンクを止める
    alert("まだアカウントは公開されてません。");
  });
});
