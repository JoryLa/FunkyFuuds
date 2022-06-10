// Client facing scripts here

import { updateCart } from "./cartUpdate.js";

const cart = {};

$(document).ready(function () {

  //Loads menu to page

  const loadmenu = () => {
    $(".food-list").empty();
    $.get("/api/food_items").then((res) => {
      renderMenu(res);
    });
  };

  const createMenuItemElement = (item) => {
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
       ${item.description}
      </p>

    </div>

      <div class="add">

        <div class="foodPrice">
          $${item.price / 100}
        </div>
        <div class="button">
          <button id="plus" class="btn" data-key="${item.id}">+</button>
          <input type="number" value="0" readonly="readyonly" class="input" />
          <button id="minus" class="btn" data-key="${item.id}">−</button>
        </div>
      </div>

  </article>`;
  };

  // Renders whole menu

  const renderMenu = function (items) {
    const container = $(".food-list").empty();
    for (let item of items) {
      const element = createMenuItemElement(item);
      container.append(element);
    }
  };

  loadmenu();

// Plus  button function

  $(".food-list").on("click", "#plus", function () {
    const id = $(this).attr("data-key");
    if (!cart[id]) {
      cart[id] = 0;
    }
    cart[id]++;
    let num = parseInt($(this).parent().find(".input").val());
    if (num < 10) {
      $(this)
        .parent()
        .find(".input")
        .val(num + 1);
    }
    if (cart[id] === 10) {
      $(this).parent().find("#plus").prop("disabled", true);
    }
    if ($(this).parent().find("#minus").prop("disabled", true)) {
      $(this).parent().find("#minus").prop("disabled", false);
    }

    updateCart(cart);
  });

  // Minus  button function

  $(".food-list").on("click", "#minus", function () {
    const id = $(this).attr("data-key");
    // console.log(cart[id]);
    if (!cart[id]) {
      cart[id] = 1;
    }
    cart[id]--;

    let num = parseInt($(this).parent().find(".input").val());
    console.log("num", num);
    if (num > 0) {
      $(this)
        .parent()
        .find(".input")
        .val(num - 1);
    }
    if (cart[id] === 0) {
      $(this).parent().find("#minus").prop("disabled", true);
    }
    if ($(this).parent().find("#plus").prop("disabled", true)) {
      $(this).parent().find("#plus").prop("disabled", false);
    }

    updateCart(cart);
  });
});
