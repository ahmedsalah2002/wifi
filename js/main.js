let size=document.getElementById("size");
let start=document.getElementById("start");
let end=document.getElementById("end");
let num=document.getElementById("num");
let result=document.querySelector(".result");
let res=document.querySelector(".result-2");
let resul=document.querySelector(".result-3");
let but=document.querySelector(".button");

but.addEventListener("click",function(){
    let today=new Date().getTime()
    let startDate=new Date(start.value).getTime();
    let endDate=new Date(end.value).getTime();
    let diff=endDate-startDate;
    diff=Math.floor(diff/1000/60/60/24);
    let diffrence=today-startDate;
    diffrence=Math.floor(diffrence/1000/60/60/24)+1;
    
    console.log( diffrence);
    result.innerHTML=`${size.value/diff}`;
    res.innerHTML=`${(size.value/diff)/num.value}`;
    resul.innerHTML=`${(size.value-(diffrence*(size.value/diff)))}`;
})
