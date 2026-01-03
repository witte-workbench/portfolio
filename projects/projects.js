document.getElementById("fontSwitch").addEventListener("click",()=>{
    if (document.getElementById("slider_dot").getAttribute("flipped") == "yes") {
        document.body.classList.remove("typewritten");
        document.getElementById("slider_dot").setAttribute("flipped","no");
        localStorage.setItem("font", "handwritten");
    } else {
        document.body.classList.add("typewritten");
        document.getElementById("slider_dot").setAttribute("flipped","yes");
        localStorage.setItem("font", "typewritten");
    }
});
document.getElementById("fullscreen").addEventListener("click",()=>{
    if (document.fullscreenElement) {
        document.getElementById("fullscreen").src = "../images/fullscreen.svg";
        document.exitFullscreen();
    } else {
        document.getElementById("fullscreen").src = "../images/exit_fullscreen.svg";
        document.documentElement.requestFullscreen();
    }
})

function init() {
    let typewritten = localStorage.getItem("font") == "typewritten";
    if (typewritten) {
        document.body.classList.add("typewritten");
        document.getElementById("slider_dot").setAttribute("flipped","yes");
    }
}
init();

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 0.15) {
        document.getElementById("fontSwitch").setAttribute("scrolled", "yes");
        document.getElementById("fullscreen").setAttribute("scrolled", "yes");
    } else {
        document.getElementById("fontSwitch").setAttribute("scrolled", "no");
        document.getElementById("fullscreen").setAttribute("scrolled", "no");
    }
});

document.getElementById("container").querySelectorAll("img").forEach(el => {
    el.addEventListener("click",e => {
        const template = document.getElementById("image-fullscreen-template");
        const clone = template.content.cloneNode(true);
        clone.querySelector("img").src = el.src;
        clone.querySelector("p").addEventListener("click", ()=>{
            const fullscreen = document.getElementById("image-fullscreen");
            document.body.removeChild(fullscreen);
        });

        document.body.appendChild(clone);
    })
})
window.addEventListener('keyup', (e) => {
    if (e.key=="Escape") {
        const fullscreen = document.getElementById("image-fullscreen");
        if (fullscreen)
            document.body.removeChild(fullscreen);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelectorAll("img.sliding-img").forEach(img => {
            if (img.complete) {
                img.classList.add("loaded");
            } else {
                img.classList.add("loading");
                img.addEventListener("load", () => {
                    img.classList.add("loaded");
                }, { once: true });
            }
        });
    }, 500);
});