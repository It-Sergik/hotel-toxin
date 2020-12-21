let selectGuest = function () {
  let dropdownHeader = document.querySelectorAll(".dropdown__header");
  let dropBtn = document.querySelectorAll(".dropdown__button");
  let btnApply = document.querySelectorAll(".dropdown__button-apply");
  let btnClear = document.querySelectorAll(".dropdown__button-clear");
  let dropdownBody = document.querySelector("#dropdown__body");
  let fieldCurrent = document.querySelector("#dropdown__current");
  let btnDel = "dropdown__button--del";
  let btnAdd = "dropdown__button--add";
  let valueElement = [];

  for (let i = 0; i < dropBtn.length; i++) {
    valueElement.push(dropBtn[i]);
    valueElement[i].addEventListener("click", function (e) {
      if ((valueElement.indexOf(e.target) == i) && 
            (dropBtn[i].firstChild.classList == btnDel)){
        dropBtn[i].nextElementSibling.innerHTML--;
      } else if ((valueElement.indexOf(e.target) == i) && 
                (dropBtn[i].firstChild.classList == btnAdd)){
        dropBtn[i].previousElementSibling.innerHTML++;
      }
    })
  }

  dropdownHeader.forEach(item => {
    item.addEventListener("click", selectToogle)
  })

  btnApply.forEach(item => {
    item.addEventListener("click", selectBtnApply);
  })

  btnClear.forEach(item => {
    item.addEventListener("click", function(){
      document.querySelector("#numAdult").innerHTML = 0;
      document.querySelector("#numChild").innerHTML = 0;
      document.querySelector("#numBaby").innerHTML = 0;
      document.querySelector("#dropdown__current").innerHTML = "Сколько гостей";
    })
  })

  function selectBtnApply() {
    dropdownBody.classList.remove("dropdown__active");
    fieldCurrent.innerHTML = currentNumGuest() + " " 
                                + sklonenie(currentNumGuest(), ["гость", "гостя", "гостей"]);
  }

  function selectToogle() {
    dropdownBody.classList.add("dropdown__active");
  }

  function sklonenie(number, txt){
    var cases = [2, 0, 1, 1, 1, 2];
    return txt[
      (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]
    ]
  }

  function currentNumGuest(){
    let currentNumAdult = parseInt(document.querySelector("#numAdult").innerHTML, 10);
    let currentNumChild = parseInt(document.querySelector("#numChild").innerHTML, 10);
    let currentNumBaby = parseInt(document.querySelector("#numBaby").innerHTML, 10);
    return currentNumAdult + currentNumBaby + currentNumChild;
  }

}

selectGuest();