//insert elements through js//
//1st create than add//
//syntax to create elements:-  let element= document.createElement("div");//

//lets insert button//

let newbutton =document.createElement("button");//create//
newbutton.innerText="clickMe";//innertext is used for txt on tht button which is display to user//
console.log(newbutton);//insert//

//TO ADD BUTTON AT THE END ,inside the node//
//let div=document.querySelector("div");
//div.append(newbutton);

//TO ADD BUTTON AT THE start, inside the node//
//let div=document.querySelector("div");
//div.prepend(newbutton);

//TO ADD BUTTON AT THE END ,outside the node//
//let div=document.querySelector("div");
//div.after(newbutton);

//TO ADD BUTTON AT THE start, outside the node//
let div=document.querySelector("div");
div.before(newbutton);

//Add heading in body through js//
let heading= document.createElement("h1");
heading.innerText="<i>Im new here</i>";
document.querySelector("body").prepend(heading);

//to delete element//
heading.remove();

//delete element//
let para = document.querySelector("p");
para.remove();
