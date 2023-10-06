const menu = document.getElementById("menu");
const icon = document.getElementById("icon");

icon.addEventListener("click",  () => {
    if (menu.style.display == "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
        icon.style.display = "block";
    }
});