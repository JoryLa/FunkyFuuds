// Client facing scripts here



const menuItems = (items) => {
  console.log(items);
  const menuTemplate = `
  <article class="food">
  <section class="thumbnail">
  <img src="${items.thumbnail_photo}">
      </section>
  <div class="content">
  <li> ${items.item}</li>
    <p class="description">
  <li> ${items.description}
  </p>
  </div>
  <div class="add">
  <button type="button" class="btn btn-danger">Add to Cart</button>
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
  $('#food-list').empty()
  $.get("http://localhost:8080/api/food_items", (res) => {
    console.log("res", res);
    for (let key of res.foodItems) {
      console.log("key", key);
      menuItems(key);
    }
  });
};
loadmenu()

