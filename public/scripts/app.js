// Client facing scripts here
$(document).ready(function () {
  const menuItems = (foodItem) => {
    const menuTemplate = `
  <article class="food">
  <div class="thumbnail">
  <div class="box" ><img src="${foodItem.thumbnail_photo}">
  </div>
      </div>
  <div class="content">
  <p> ${foodItem.item}
  </p>
  <p class="description">
<p> ${foodItem.description}
</p>
  </p>
  </div>
  <div class="add">
  <button type="button" class="btn btn-danger"><span class="bi bi-cart"></span> Add to Cart</button>
  <div>
  $${foodItem.price / 100}
  </div>
  <div class="button">
  <button class="plus" data-key="${foodItem.id}" >+</button>
  <input type="number" value="0" min="0" max="10" class="input" />
  <button class="minus" data-key="${foodItem.id}">−</button>
  </div>
  </div>
  </article>
  `;
    $("#food-list").append(menuTemplate);
  };
  const loadmenu = () => {
    $("#food-list").empty();
    $.get("http://localhost:8080/api/food_items", (res) => {
      for (let foodItem of res.foodItems) {
        menuItems(foodItem);
      }
      $(".plus").click(function () {
        console.log("clicked");
        num = parseInt($(this).parent().find(".input").val());
        if (num < 10) {
          console.log("num", num);
          $(this)
            .parent()
            .find(".input")
            .val(num + 1);
        }
      });
      $(".minus").click(function () {
        console.log("clicked");

        num = parseInt($(this).parent().find(".input").val());
        if (num > 0) {
          console.log("num -", num);
          $(this)
            .parent()
            .find(".input")
            .val(num - 1);
        }
      });
    });
  };
  loadmenu();

  $(window).on("load", () => {
    $(".btn-danger").click(() => {
      console.log("clicked add cart");
    });
  });
});
