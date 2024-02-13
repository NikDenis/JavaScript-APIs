const buyBtn = document.querySelector(".buy-button");

buyBtn.addEventListener("click", (e) => {
  if (e.isTrusted) {
    buyBtn.textContent = "Товар добавлен в корзину";

    setTimeout(() => {
      buyBtn.textContent = "Купить";
    }, 2000);
  }
});
