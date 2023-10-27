const open_arrow = document.getElementById("open_arrow");
const bar_media = document.getElementById("bar_media");
let a = 1, t = 1;
let pic_arr = [];
const header = document.getElementsByTagName("header")[0];
const ul_hover = document.getElementsByClassName("hover_trans")[0];
const navbar = document.querySelectorAll(".navb");
const slide_bar = document.getElementsByClassName("slide_bar")[0];
const benefit_img = document.querySelectorAll(".benefit_img");
const slide_over_bar = document.getElementsByClassName("slide_over_bar")[0];
const img_slide = document.querySelectorAll(".img_slide");

// mở rộng được thanh sidebar
open_arrow.addEventListener("click",()=>{
    if (a==1){
        open_arrow.src = "./photo/down-arrow1.png";
        a = 2;
    } else {open_arrow.src = "./photo/down-arrow.png";
            a = 1;
            }
    bar_media.classList.toggle("small_bar");
    bar_media.classList.toggle("big_bar");   
})
// set thời gian để slide ảnh header tự chạy sau 4s
setInterval(()=>{
    console.log("thời gian t",t);
    header.style.backgroundImage = "url(./photo/bg"+t+".png)";
    const dots = bar_media.firstElementChild;
    dots.src = "./photo/dots_"+t+".png";
    if (t>5){
        t=1;
    } else {t = t+1;}
},4000);
// set hiệu ứng navbar, chưa xong nên cần phải set lại
console.log(navbar);
navbar.forEach(function(nav){
    nav.addEventListener("mouseenter",()=>{
        console.log("ahihi");
        console.log(nav.offsetLeft);
        console.log(nav.offsetWidth);
        console.log(ul_hover)
        ul_hover.style.left = nav.offsetLeft;
        ul_hover.style.width = nav.offsetWidth;
    })
})
// set hiệu ứng slide bar
slide_bar.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    // deltaY cho ra số âm khi lướt down và số dương khi lướt up
    slide_bar.scrollLeft += evt.deltaY;
    // deltaX cho ra số âm khi lướt về bên phải và số âm khi lướt về bên trái
    slide_bar.scrollLeft += evt.deltaX;
    // gán giá trị cho scrollLeft để slide_bar có thể quẹt phải-trái và lên xuống dễ dàng
})
// set hiệu ứng cho 3 phần đầu của advantages
benefit_img.forEach(function(img){
    img.addEventListener("mouseenter",()=>{
        let a = img.src;
            img.src = a.slice(0,-4) + "off.png";
    })
    img.addEventListener("mouseleave",()=>{
        let a = img.src;
            img.src = a.slice(0,-7) + ".png";  
    })
})
// set hiệu ứng slide bar cho ảnh tràn width màn hình
slide_over_bar.addEventListener("wheel",(e)=>{
    e.preventDefault();
    slide_over_bar.scrollLeft += e.deltaY;
    slide_over_bar.scrollLeft += e.deltaX;
    
})
console.log(img_slide);
img_slide.forEach(function(img){
    img.addEventListener("mouseenter",()=>{
        img.style.width = "388px";
        img.style.height = "530px";
        img.style.filter = "grayscale(0)";
    })
    img.addEventListener("mouseleave",()=>{
        img.style.width = "310px";
        img.style.height = "389px";
        img.style.filter = "grayscale(1)";
    })
})