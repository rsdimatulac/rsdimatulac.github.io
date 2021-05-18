window.addEventListener("DOMContentLoaded", (event) => {

    themeSwitch = document.getElementById("checkbox__switch");
    signImage = document.getElementById("sign__image");
    body = document.querySelector("body");
    aTag = document.querySelectorAll(".a-tag");
    footer = document.getElementById("footer");
    copyright = document.querySelector(".copyright");
    input = document.querySelectorAll(".formfield");
    tiles = document.querySelectorAll(".tile");


    themeSwitch.addEventListener("change", () => {
        if (themeSwitch.checked) {
            body.classList.add("dark");
            signImage.src = "images/sign_white.png";
            copyright.classList.add("dark");
            
            aTag.forEach(tag => {
                tag.classList.add("dark");
            })
            
            input.forEach(input => {
                input.classList.add("dark")
            })

            tiles.forEach(tile => {
                tile.classList.add("dark")
            })

            footer.style.backgroundColor = "rgba(56, 56, 56, 0.658)";
            
        } else {
            body.classList.remove("dark");
            signImage.src = "images/sign_black.png";
            copyright.classList.remove("dark");

            aTag.forEach(tag => {
                tag.classList.remove("dark");
            });

            input.forEach(input => {
                input.classList.remove("dark")
            })

            tiles.forEach(tile => {
                tile.classList.remove("dark")
            })

            footer.style.backgroundColor = "#f6f6f6";
        }
    })

})