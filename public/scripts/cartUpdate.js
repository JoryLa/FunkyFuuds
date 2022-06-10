import { makeTimer } from "./timer.js";
export let cookTime = 0;
export let mrStampy;

let food;

// Updates food cart in respose to user input.

export const updateCart = (cart) => {
  let total = 0;

  $.get("/api/food_items").then((res) => {
    food = res;

    const box = $(".outsideCart");
    $(".order").empty();
    const container = $(".cart");
    container.empty();
    for (let key in cart) {
      for (let item of food) {
        if (item.id == key) {
          const $element = $(`

<div class="checkout">
<div class="name"> Name
<p> ${item.item}
</p>
</div>
<div class="qty"> QTY
<p> ${cart[key]}
</p>
</div>
<div class="price"> Price
<p> $${(item.price * cart[key]) / 100}
</p>
</div>
</div>


`);
          container.append($element);

          if (cart[key] === 0) {
            $element.empty();
            delete cart[key];
          }

          cookTime += item.cooking_time * cart[key];
          total += (item.price * cart[key]) / 100;
          console.log("cookTime", cookTime);
        }
      }
    }
    const $ele = $(`
<div class="order">
    <p>TAX: Cash or Crypto only on pick-up 🤔</p>
    <div>Order total: $${total}</div>
    <div class="checkoutButton">
      <button type="button" class="btn btn-primary">Order</button>
    </div>
  </div>
  `);

    box.append($ele);

    if (Object.keys(cart).length === 0) {
      $(".outsideCart").slideUp();
      $(".btn.btn-primary").prop("disabled", true);
    }
    const confirmation = function () {
      return `
    <article class="article">
<div class="yes">
<p> Order has been placed and will be ready for pick-up in an estimated time of:</p>
<div class="timer">
<div id="days"></div>
<div id="hours"></div>
<div id="minutes"></div>
<div id="seconds"></div>
</div>
</div>
<div class="reset">
<button type="button" id="return" class="btn btn-primary">Return to menu</button>
</div>
</article>
`;
    };

    $(".btn.btn-primary").on("click", function () {
      // Hides the menu
      $(".food-list").hide();
      mrStampy = new Date();
      // makes way for order confirmation
      $(".cart").empty();
      $(".outsideCart").empty();
      let feedMe = confirmation();
      // Loads template into cart area
      $(".outsideCart").append(feedMe);
      // Refreshes page
      $("#return").on("click", function () {
        location.reload();
      });
      // Requests timer
      setInterval(function () {
        makeTimer();
      }, 1000);

      $.ajax({
        method: "POST",
        url: "/api/food_items/order",
        data: cart,
        success: (data, status, xhr) => {},
      });
    });
  });
};
