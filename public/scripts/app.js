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

  // $(".cart").click((res, req) => {
  //   cart;
  //   console.log("cart", cart);
  //   console.log("[0]", cart[1]);
  // });

  $("#food-list").on("click", ".plus", function () {
    // console.log("clicked");
    const id = $(this).attr("data-key");
    if (!cart[id]) {
      cart[id] = 0;
    }
    cart[id]++;
    // console.log(cart);
    // console.log(id)
    num = parseInt($(this).parent().find(".input").val());
    if (num < 10) {
      // console.log("num", num);
      $(this)
        .parent()
        .find(".input")
        .val(num + 1);
    }
    updateCart(cart);
  });

  $("#food-list").on("click", ".minus", function () {
    // console.log("clicked");
    const id = $(this).attr("data-key");

    if (!cart[id]) {
      cart[id] = 0;
    }
    cart[id]--;

    // console.log(cart)
    num = parseInt($(this).parent().find(".input").val());
    if (num > 0) {
      // console.log("num -", num);
      $(this)
        .parent()
        .find(".input")
        .val(num - 1);
    }
    updateCart(cart);
  });

  const updateCart = (cart) => {
    let food;
    $.get("/api/food_items").then((res) => {
      food = res;
      // console.log("food", food);

      const container = $(".cart");
      container.empty();
      // console.log("cart", cart);
      for (let key in cart) {
        for (let item of food) {
          // console.log("item",item)
          if (item.id == key) {
            const $element = $(`
<div> ${item.item} </div>
<div> ${item.price} </div>
<div> ${item.description} </div>

      `);
            container.append($element);
          }
        }
        // console.log("food for me", food);
      }
    });
  };
});

// NAME ---------- QTY --------- Price
//Funky burger      2             $40
//Pork              3              $9

//    Total
//   $49
