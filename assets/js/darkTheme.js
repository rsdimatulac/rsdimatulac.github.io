window.addEventListener("DOMContentLoaded", (event) => {

    const themeSwitch = document.getElementById("checkbox__switch");
    const signImage = document.getElementById("sign__image");
    const body = document.querySelector("body");
    const aTag = document.querySelectorAll(".a-tag");
    const footer = document.getElementById("footer");
    const copyright = document.querySelector(".copyright");
    const input = document.querySelectorAll(".formfield");
    const tiles = document.querySelectorAll(".tile");

    themeSwitch.addEventListener("change", () => {
        if (themeSwitch.checked) {
            body.classList.add("dark");
            signImage.src = "images/sign_white.png";
            copyright.classList.add("dark");
            
            aTag.forEach(tag => {
                tag.classList.add("dark");
            });
            
            input.forEach(input => {
                input.classList.add("dark");
            });

            tiles.forEach(tile => {
                tile.classList.add("dark");
            });

            footer.style.backgroundColor = "rgba(56, 56, 56, 0.658)";
            
        } else {
            body.classList.remove("dark");
            signImage.src = "images/sign_black.png";
            copyright.classList.remove("dark");

            aTag.forEach(tag => {
                tag.classList.remove("dark");
            });

            input.forEach(input => {
                input.classList.remove("dark");
            });

            tiles.forEach(tile => {
                tile.classList.remove("dark");
            });

            footer.style.backgroundColor = "#f6f6f6";
        };
    });
});