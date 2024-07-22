// //js for tabs interaction//
// let tab= document.querySelector(".btn");
// tab.addEventListener("onclick",)
function openCity(evt, cityName) {
    let i, tabcontent, btn;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    btn = document.getElementsByClassName("btn");
    for (i = 0; i < btn.length; i++) {
      btn[i].className = btn[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }