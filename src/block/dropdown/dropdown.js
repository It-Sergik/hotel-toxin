(function () {
  let dropdownHeader = document.querySelectorAll(".dropdown__header");
  let btnApply = document.querySelectorAll(".dropdown__button-apply");
  let btnClear = document.querySelectorAll(".dropdown__button-clear");
  let dropdownBody = document.querySelector("#dropdown__body");
  let fieldCurrent = document.querySelector("#dropdown__current");
  let btnCount = document.querySelectorAll(".dropdown__count");
  let valueGuest = document.querySelectorAll(".dropdown__value");
  let len = btnCount.length;
  let numbers = [];

  while(len--){
    btnCount[len].onclick = buttonClick;
  }

  function buttonClick(e){
    let el = e ? e.target : window.event.srcElement;
    if (el.tagName === "BUTTON"){
      let inp = this.childNodes[3];
          val = +inp.value || 0;
      inp.value = val + (el.className === "dropdown__button-minus" ? 
                        val > 0 ? - 1 : 0 : 1);
    }
  }

  function currentNumGuest(){
    for (let i = 0; i < valueGuest.length; i++) {
      numbers.push(valueGuest[i].value);
      valueGuest[i].addEventListener("change", function () {
        numbers[i] = this.value;
      });
    }

    return totalNumGuest(numbers);
  }

  function totalNumGuest(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += +array[i];
    }
    numbers = [];

    return sum;
  }

  dropdownHeader.forEach(item => {
    item.addEventListener("click", selectToogle)
  })

  btnApply.forEach(item => {
    item.addEventListener("click", selectBtnApply);
  })

  btnClear.forEach(item => {
    item.addEventListener("click", function(){
      for (let i = 0; i < valueGuest.length; i++) {
        valueGuest[i].value = "0";
      }
      document.querySelector("#dropdown__current").innerHTML = "Сколько гостей";
    })
  })

  function selectBtnApply() {
    dropdownBody.classList.remove("dropdown__active");
    currentNumGuest();
    fieldCurrent.innerHTML = currentNumGuest() + " " 
                                + sklonenie(currentNumGuest(), ["гость", "гостя", "гостей"]);
  }

  function selectToogle() {
    document.querySelector("#dropdown__body").classList.toggle("dropdown__active");
    document.querySelector("#dropdown__arrow").classList.toggle("dropdown__arrow--clicked");
  }

  function sklonenie(number, txt){
    var cases = [2, 0, 1, 1, 1, 2];
    return txt[
      (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]
    ]
  }
}());