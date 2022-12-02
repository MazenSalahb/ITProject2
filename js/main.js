

let span = document.querySelector('.up')

onscroll = function () {
    if (this.scrollY >= 100) {
        span.classList.add("show")
    } else {
        span.classList.remove("show")
    };
};
span.addEventListener("click",function(){
    scrollTo({
        top:0,
        behavior:"smooth"
    })
})