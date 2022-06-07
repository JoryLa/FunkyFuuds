const orderItems = (items) => {
  console.log(items);
  const menuTemplate = `
  <article class="food">
  <section class="thumbnail">
  <img src="${items.thumbnail_photo}">
      </section>
  <div class="content">
  <title> ${items.item}</title>
    <p class="description">
  <p> ${items.description}
  </p>
  </p>
  </div>
  <div class="add">
  <button type="button" class="btn btn-danger">Remove</button>
  <div>
  $${items.price / 100}
  </div>
  <div class="button">
  <button id="plus">+</button>
  <input type="number" value="0" min="0" max="10" id="input" />
  <button id="minus">−</button>
  </div>
  </div>

  </article>
  `;
  $("#food-list").append(menuTemplate);
};
