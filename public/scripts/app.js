// Client facing scripts here

const menuItems = (items) => {
  const menuTemplate = `
  <article class="food">
  <section class="thumbnail">
  <img src="${items.thumbnail_photo}">
      </section>
  <div class="content">
  <p> ${items.item}
  </p>
  <p class="description">
<p> ${items.description}
</p>
  </p>
  </div>
  <div class="add">
  <button type="button" class="btn btn-danger">Add to Cart</button>
  <div>
  $${items.price / 100}
  </div>
  <div class="button">
  <button id="plus">+</button>
  <input type="number" value="0" id="input" />
  <button id="minus">−</button>
  </div>
  </div>
  </article>
  `;
  $("#food-list").append(menuTemplate);
};
const loadmenu = () => {
  $("#food-list").empty();
  $.get("http://localhost:8080/api/food_items", (res) => {
    for (let key of res.foodItems) {
      menuItems(key);
    }
  });
};
loadmenu();

$(document).ready(() => {

  $("#plus").click(function () {
    console.log("clicked");
  num = parseInt($("#input").val());
  $("#input").val(num + 1);
  });

});

$(document).ready(() => {
  $("#minus").click(function () {
    console.log("clicked");
  num = parseInt($("#input").val());
  $("#input").val(num - 1);
  });
})
//

// var $input = $("#input");

// $input.val(0);

// $(".button").click(function(){
//   console.log("push the button")
//     if ($(this).hasClass('plus')){
//         $input.val(parseInt($input.val())+1);
//     }else if ($input.val()>=1) {
//         $input.val(parseInt($input.val())-1);
//     }
// });
