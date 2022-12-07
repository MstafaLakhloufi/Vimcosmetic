
// var percent = document.querySelector('.percent');
// var progress = document.querySelector('.progress');
// var count = 4;
// var per = 16;
// var loading = setInterval(animate, 50);
// function animate() {
//     if(count == 100 && per == 400){
//         percent.classList.add("text-blink");
//       clearInterval(loading);
//     }else{
//       per = per + 4;
//       count = count + 1;
//       progress.style.width = per + 'px';
//       percent.textContent = count + '%';
//     }
// }

const header = document.querySelector('.header');
window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 50) {
        header.classList.add('active')
    }else {
        header.classList.remove('active');
    }
}


window.addEventListener('scroll',()=>{
    let content = document.querySelector('.made-of');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /1.5;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});


  AOS.init();

