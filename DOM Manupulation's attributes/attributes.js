/*
//lets 1st get access to div tag//
let div= document.querySelector("div");
console.log(div);

//to get value of attribute //
let id=div.getAttribute("id");
console.log(id);

let name= div.getAttribute("name");
console.log(name);

let para= document.querySelector("p");
console.log(para.getAttribute("class"));

//to change the value of attributes//
let paragraph= document.querySelector("p");
console.log(para.setAttribute("class","new class"));
*/

//attributes can be use to style node and to access style of any node use(node.style)//
let div= document.querySelector("div");
div.style.backgroundColor="purple";

div.style.fontSize="26px";
 //to change value use (innertext)//
 div.innerText="hello!";