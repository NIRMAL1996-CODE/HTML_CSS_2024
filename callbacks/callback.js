/* recalling basic of function
// craete functions //
function add (a,b){ 
    return a+b;
};

//to print//
console.log("hello");

//arrow fumction//
const sum=(s,t)=>{
    return s+t;
};

//function call//
console.log(add(2,4));
console.log(sum(5,8));*/

//function callbacks//

//step 1-- define a function//
function add (a,b){ 
    return a+b;
};

function substract (a,b){ 
    return a-b;
};

//step2-- create compute function//passing the function//
function calcute(a,b , callback){
    return callback(a,b);
}

//step 3-- function calling function// calling
console.log(calcute(4,5,add));
