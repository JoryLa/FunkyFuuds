// Client facing scripts here
const cart = {};

$(document).ready(function () {
  const loadmenu = () => {
    $(".food-list").empty();
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
      <p class="itemName"> ${item.item}
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
          <input type="number" value="0" readonly="readyonly" class="input" />
          <button class="minus" data-key="${item.id}">−</button>
        </div>
      </div>

  </article>`;
  };

  const renderMenu = function (items) {
    const container = $(".food-list").empty();
    for (let item of items) {
      const element = createMenuItemElement(item);
      container.append(element);
    }
  };

  loadmenu();

  $(".food-list").on("click", ".plus", function () {
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
    if (cart[id] === 10) {
      $(this).parent().find(".plus").prop("disabled", true);
    }
    if ($(this).parent().find(".minus").prop("disabled", true)) {
      $(this).parent().find(".minus").prop("disabled", false);
    }

    updateCart(cart);
  });

  $(".food-list").on("click", ".minus", function () {
    const id = $(this).attr("data-key");
    // console.log(cart[id]);
    if (!cart[id]) {
      cart[id] = 1;
    }
    cart[id]--;

    num = parseInt($(this).parent().find(".input").val());
    console.log("num", num);
    if (num > 0) {
      $(this)
        .parent()
        .find(".input")
        .val(num - 1);
    }
    if (cart[id] === 0) {
      $(this).parent().find(".minus").prop("disabled", true);
    }
    if ($(this).parent().find(".plus").prop("disabled", true)) {
      $(this).parent().find(".plus").prop("disabled", false);
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
        // console.log("key", key);
        for (let item of food) {
          // console.log("item", item);
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
      console.log(total);

      if (Object.keys(cart).length === 0) {
        $(".outsideCart").slideUp();
        $(".btn.btn-primary").prop("disabled", true);
      }
      const confirmation = function () {
        return `
      <article class="article">
<div class="yes">
<p> Order has been placed and will be ready for pick-up in an estimated time of</p>
</div>
<div class="reset">
<button type="button" id="return" class="btn btn-primary">Return to menu</button>
</div>
</article>
`;
      };

      $(".btn.btn-primary").on("click", function () {
        console.log(new Date());
        console.log(new Date().toString());

        $(".cart").empty();
        $(".outsideCart").empty();
        let feedMe = confirmation();
        $(".outsideCart").append(feedMe);
        $(".plus").prop("disabled", true);
        $(".minus").prop("disabled", true);
        $("#return").on("click", function () {
          location.reload();
        });
        // console.log("cart", cart);
        // console.log("key", key)
        // console.log("cart[key]", cart[key])
        // confirm("Are you sure you want to order? Its going to cost you your health! Either way both buttons execute the order lol.")
        $.ajax({
          method: "POST",
          url: "/api/food_items/order",
          data: cart,
          success: console.log("cart", cart),
        });
      });
    });
  };
});
