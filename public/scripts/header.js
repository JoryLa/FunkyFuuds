const header = () => {
  const headerTemplate = `
<header>
<nav Class="nav">
  <div class="leftNav text-center">
    <i class="bi bi-trash" style="font-size: 50px;"></i>
  </div>
  <div class="extra">
    <div class="header">
      <p class="navName"><b><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank">FUNKY</a></b>FUUDS <br /> </p>
      <p id="beet" >won't be beet</p>
    </div>
  <div class="navright">
  <button type="button"  <span class='bi bi-cart'> CART</span></button>
  </div>
</nav>
</header>
`;
  $("#navbar").append(headerTemplate);
};

const loadHeader = () => {
  header();
};

$(document).ready(function () {
  loadHeader();

  $(".outsideCart").hide();
  $("#navbar").on("click", ".bi.bi-cart", function () {
    $(".outsideCart").slideToggle();
  });
});

// if (window.location.pathname === "/checkout") {
//   $(".btn.btn-warning")
//     .text("Home/Menu")
//     .click(function () {
//       window.location.href = "http://localhost:8080/";
//     });
// }
// if (window.location.pathname === "/") {
//   $(".btn.btn-warning")
//     .append("<span class='bi bi-cart'> CART</span>")
//     .click(function () {
//       window.location.href = "http://localhost:8080/checkout";
//     });
// }
