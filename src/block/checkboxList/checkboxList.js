let expandCheckbox = function (){
  let clickHeader = document.querySelectorAll(".checkboxList__header");

  clickHeader.forEach(item => {
    item.addEventListener("click", function(){
      document.querySelector("#checkbox__body").classList.toggle("checkboxList__active");
      document.querySelector("#checkboxList__arrow").classList.toggle("checkboxList__arrow--clicked");
    });
  });

}

expandCheckbox();