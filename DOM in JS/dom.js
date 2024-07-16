//to change the name of the boxes using DOM in js//
let divs= document.querySelectorAll(".box");
let idx=1;
for(divs of divs){
    divs.innerText =`NEW_TITLE ${idx}`;
    idx++;
}
//console.log(window);
//console.dir(window.documet);