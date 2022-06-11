const innertoglle = document.querySelector(".innertoglle");
const toglle = document.querySelector(".toglle");
const body = document.querySelector("body");
const topchild = document.querySelectorAll(".top-child");
const botomchild = document.querySelectorAll(".botom-child");



toglle.addEventListener("click", () => {
    innertoglle.classList.toggle("move");
    innertoglle.classList.toggle("innertogllecolor");
    innertoglle.style.transition = "0.3s";
    toglle.classList.toggle("togglecolor");

    body.classList.toggle("whiteBg");
    body.style.transition = "0.3s";
    for (let j = 0; j < topchild.length; j++) {
        topchild[j].classList.toggle("cardBg");
    };

    for (let i = 0; i < botomchild.length; i++) {
        botomchild[i].classList.toggle("cardBg");
    }
    // let i = 0;
    // let j = 0;
    // while (j < botomchild.length) {
    //     botomchild[j].classList.toggle("cardBg");
    //     j++;

    // }
    // while (i < topchild.length) {
    //     topchild[i].classList.toggle("cardBg");
    //     i++;

    // }


});
