function select() {
  let dropdownHeader = document.querySelectorAll(".dropdown__header");
  let dropdownItem = document.querySelectorAll(".dropdown__item");

  dropdownHeader.forEach(item => {
    item.addEventListener("click", selectToggle);
  })

  dropdownItem.forEach(item => {
    item.addEventListener(click, function () {
      this.parentElement.classList.toggle("dropdown__active");
    })
  })

  function selectToggle() {
    this.parentElement.classList.toggle("dropdown__active");
  }
}