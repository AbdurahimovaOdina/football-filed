let wrapperElement=document.querySelector(".wrapper");
let ball=document.querySelector(".ball");
let body=document.querySelector("body");
wrapperElement.addEventListener("click",function(e){
    let x=e.clientX-217 ;
    let y=e.clientY-35;
    ball.style.left=x+"px";
    ball.style.top=y+"px";
})



