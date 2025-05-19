const plusButtons = document.querySelectorAll(".fas.fa-plus-circle");
const minusButtons = document.querySelectorAll(".fas.fa-minus-circle");
const heartButtons = document.querySelectorAll(".fas.fa-heart");
const trashButtons = document.querySelectorAll(".fas.fa-trash-alt");
const totalPriceText = document.querySelector(".total-price .total");

// event listner to increase item count
plusButtons.forEach((button) => {
  const parentNode = button.parentElement;

  let itemCount = parseInt(parentNode.querySelector(".quantity").textContent);

  button.addEventListener("click", () => {
    parentNode.querySelector(".quantity").textContent = ++itemCount;

    updateTotal();
  });
});

// event listner to decrease item count
minusButtons.forEach((button) => {
  const parentNode = button.parentElement;

  button.addEventListener("click", () => {
    let itemCount = parseInt(parentNode.querySelector(".quantity").textContent);
    parentNode.querySelector(".quantity").textContent =
      itemCount == 0 ? 0 : --itemCount;

    updateTotal();
  });
});

// function to update total
function updateTotal() {
  let totalPrice = 0;
  document.querySelectorAll(".card-body .card-body").forEach((card) => {
    let unitPrice = parseFloat(card.querySelector(".unit-price").textContent);
    let quantity = parseInt(card.querySelector(".quantity").textContent);

    totalPrice += unitPrice * quantity;
  });

  totalPriceText.textContent = totalPrice;
}

// function to change like button
heartButtons.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("red");
  });
});

// function to delete a card
trashButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const topParent = button.closest(".list-products > .card-body");

    topParent.remove();
    updateTotal();
  });
});
