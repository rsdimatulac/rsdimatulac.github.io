window.addEventListener("DOMContentLoaded", (event) => {

    const themeSwitch = document.getElementById("checkbox__switch");
    const signImage = document.getElementById("sign__image");
    const body = document.querySelector("body");
    const aTag = document.querySelectorAll(".a-tag");
    const footer = document.getElementById("footer");
    const copyright = document.querySelector(".copyright");
    const input = document.querySelectorAll(".formfield");
    const tiles = document.querySelectorAll(".tile");
    const sqlAlchemyLogo = document.querySelector(".devicon-sqlalchemy-plain-wordmark");
    const sequelizeLogo = document.querySelector(".devicon-sequelize-plain-wordmark");
    const cypressLogo = document.querySelector(".devicon-cypressio-plain-wordmark");

    themeSwitch.addEventListener("change", () => {
        if (themeSwitch.checked) { // LIGHT THEME
            body.classList.add("white");
            signImage.src = "images/sign_black.png";
            copyright.classList.add("white");
            sqlAlchemyLogo.classList.add("colored");
            sequelizeLogo.classList.add("colored");
            cypressLogo.classList.add("colored");
            
            aTag.forEach(tag => {
                tag.classList.add("white");
            });
            
            input.forEach(input => {
                input.classList.add("white");
            });
            
            tiles.forEach(tile => {
                tile.classList.add("white");
            });
            
            footer.style.backgroundColor = "rgba(246, 246, 246)";
            
        } else { // DARK THEME
            body.classList.remove("white");
            signImage.src = "images/sign_white.png";
            copyright.classList.remove("white");
            sqlAlchemyLogo.classList.remove("colored");
            sequelizeLogo.classList.remove("colored");
            cypressLogo.classList.remove("colored");

            aTag.forEach(tag => {
                tag.classList.remove("white");
            });

            input.forEach(input => {
                input.classList.remove("white");
            });

            tiles.forEach(tile => {
                tile.classList.remove("white");
            });

            footer.style.backgroundColor = "rgba(56, 56, 56, 0.658)";
        };
    });
});