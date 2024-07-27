/*//add event on button//
let btn=document.querySelector("#mode");
let currentmode="light";
btn.addEventListener("click", ()=>{
      //just changed variable value//
    if(currentmode==="light")
    {
        currentmode="dark";
    }
    else
    {
        currentmode="light";
    }
    console.log(currentmode);
});*/

/*//lets change background by accessing elements//
let body=document.querySelector("body");
let btn=document.querySelector("#mode");
let currentmode="light";

btn.addEventListener("click", ()=>{
    if(currentmode==="light")
    {
        currentmode="dark";
        body.style.backgroundColor="black";//access body separately , put the values uin varibale than use it//
        
    }
    else
    {
        currentmode="light";
        body.style.backgroundColor="white";
    }
    console.log(currentmode);
});*/

//change through classes property in css//

let body=document.querySelector("body");
let btn=document.querySelector("#mode");
let currentmode="light";

btn.addEventListener("click", ()=>{
    if(currentmode==="light")
    {
        currentmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else
    {
        currentmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
        
    }
    console.log(currentmode);
});

