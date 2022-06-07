// Client facing scripts here
const cart = {};
$(document).ready(function () {
  const loadmenu = () => {
    $("#food-list").empty();
    $.get("/api/food_items").then((res) => {
      renderMenu(res);
    });
  };

  const createMenuItemElement = function (item) {
    return `
    <article class="food">
    <div class="thumbnail">
      <div class="box"><img src="${item.thumbnail_photo}">
      </div>
    </div>
    <div class="content">
      <p> ${item.item}
      </p>
      <p class="description">
      <p> ${item.description}
      </p>
      </p>
    </div>

      <div class="add">

        <div>
          $${item.price / 100}
        </div>
        <div class="button">
          <button class="plus" data-key="${item.id}">+</button>
          <input type="number" value="0" min="0" max="10" class="input" />
          <button class="minus" data-key="${item.id}">−</button>
        </div>
      </div>

  </article>`;
  };

  const renderMenu = function (items) {
    const container = $("#food-list").empty();
    for (let item of items) {
      const element = createMenuItemElement(item);
      container.append(element);
    }
  };

  loadmenu();

  $("#food-list").on("click", ".plus", function () {
    const id = $(this).attr("data-key");
    if (!cart[id]) {
      cart[id] = 0;
    }
    cart[id]++;
    num = parseInt($(this).parent().find(".input").val());
    if (num < 10) {
      $(this)
        .parent()
        .find(".input")
        .val(num + 1);
    }
    updateCart(cart);
  });

  $("#food-list").on("click", ".minus", function () {
    const id = $(this).attr("data-key");

    if (!cart[id]) {
      cart[id] = 0;
    }
    cart[id]--;

    num = parseInt($(this).parent().find(".input").val());
    if (num > 0) {
      $(this)
        .parent()
        .find(".input")
        .val(num - 1);
    }
    updateCart(cart);
  });

  const updateCart = (cart) => {
    let food;
    let total = 0;
    let cookTime = 0;

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
<div class="name">
<p> ${item.item}
</p>
</div>
<div class="qty"> QTY
<p> ${cart[key]}
</p>
</div>
<div class="price"> Price
<p> ${(item.price * cart[key]) / 100}
 </p>
 </div>
</div>


`);
            container.append($element);

            cookTime += item.cooking_time * cart[key];
            console.log("cookTime", cookTime);
            total += (item.price * cart[key]) / 100;
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
    });
  };

  $("btn-primary").on("click", function () {
    $.ajax({
      method: "POST",
      url: "../routes/sms"
    });
  });


});
