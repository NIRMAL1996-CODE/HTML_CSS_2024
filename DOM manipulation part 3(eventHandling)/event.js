/* Event Handling in JS.

syntax: node.event=()=>{
    //handle here
};
    */
/*let btn1= document.querySelector("#btn1");//to access tag
btn1.onclick=()=>{    
    console.log("button was clicked");
}; */

let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("you are inside div");
};

/* EVENT OBJECT:- ITS HAS DETAILS ABOUT EVENTS
   SYNTAX:=
   node.event=(event)=>{
    //handle here
    };
    properties:- e.target, e.type, e.clientX, e,clientY etc.
*/

/*How to print those properties and details about event in EVENT OBJECT 

let btn1= document.querySelector("#btn1");
btn1.onclick=(evt)=>{    
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}; */

//EVENT LISTENERS//
/* syntax:-
node.addEventListener(event,callback)
//same button occurs two events and both will give ouputs , they will not override each other//
let btn1= document.querySelector("#btn1");
btn1.addEventListener("click",(evt)=>{    
    console.log("button was clicked-handler1");
    console.log(evt);//we can also access event object through event listeners by mentioning function//
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}); 

btn1.addEventListener("click",()=>{    
    console.log("button was clicked-handler2");
}); */

//EVENT LISTENERS :- to remove//
btn1.addEventListener("click",()=>{    
    console.log("button was clicked-handler1");
}); 

const handler2=()=>{
    console.log("button1 was clicked-handler2");
};
btn1.addEventListener("click",handler2);

btn1.addEventListener("click",()=>{    
    console.log("button was clicked-handler3");
}); 

btn1.addEventListener("click",()=>{    
    console.log("button was clicked-handler4");
}); 

//to remove an event//

btn1.removeEventListener("click",handler2);
