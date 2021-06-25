const sections = document.querySelectorAll(".right-side[id]");
line = document.getElementById('Opaque_Ring')
var length = line.getTotalLength();
// console.log('len', length);
line.style.strokeDashoffset = 0;
window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
    navHighlighter()
}

function navHighlighter() {

    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(`.left-side section[id="#${sectionId}"]`).classList.add("active");
            document.querySelector('.path-slider').classList.add(`_${sectionId}`)
            line.style.strokeDasharray = scrollY / 5;
            // line.style.strokeDashoffset = scrollY / 5;
            // document.querySelector(`.left-side section[id="#${id}"]`).children[0].classList.add(`ani-${sectionId}`)
            // document.getElementById('mid-1').style.animation = "move 1s "
        } else {
            document.querySelector(`.left-side section[id="#${sectionId}"]`).classList.remove("active");
            document.querySelector('.path-slider').classList.remove(`_${sectionId}`)
        }
    });
}
