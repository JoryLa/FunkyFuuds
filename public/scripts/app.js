// Client facing scripts here
$(() => {

})


function menuItems(items) {
return `
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
  Add food
  <div class="button">
  <button id="plus">+</button>
  <input type="number" value="0" id="input" />
  <button id="minus">−</button>
</div>
</div>
</article>
`
}

$(document).ready(() => {
const items = [{
  id:1,
  item: 'pizza',
  description: 'tasty food',

}]

$('body').append(menuItems(items[0]))


});

console.log()
