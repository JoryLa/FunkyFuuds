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
  <button type="button" class="btn btn-danger"><span class="bi bi-cart"></span> Add to Cart</button>
  <div>
  $${items.price / 100}
  </div>
  <div class="button">
  <button class="plus">+</button>
  <input type="number" value="0" min="0" max="10" class="input" />
  <button class="minus">−</button>
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

  $(window).on('load', function() {
  $(".plus").click(() => {
    // console.log("clicked");
  num = parseInt($(".input").val());
  if(num < 10){
  console.log('num', num);
  $(".input").val(num + 1);
  }
  });
 $(".minus").click(() => {
    // console.log("clicked");
  num = parseInt($(".input").val());
    if(num > 0){
  console.log('num -', num);
  $(".input").val(num - 1);
    }
  });
});



$(window).on('load',() => {
$(".btn-danger").click(() => {

console.log("clicked add cart");
});
});
