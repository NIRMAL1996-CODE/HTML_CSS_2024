// const btn = document.querySelector('button');
// btn.addEventListener("click",function()
// {
//   showContent(btn);
// }); made by me


// function open(cityname) {
//   let tabcontent = document.getElementById("#London")
   
//     tabcontent.style.display = "block";
// }
// open(London);

 let btn =document.querySelectorAll(".button");
 let contents=document.querySelectorAll(".content");
 
    for(let i= 0; i<btn.length; i++)
    {
        btn[i].addEventListener('click', function (){

            for(let j=0; j< contents.length;j++)
            {
                contents[j].classList.remove('active');
            }
            
        document.getElementById(this.getAttribute('data-tab')).classList.add('active'); 
    });

}
