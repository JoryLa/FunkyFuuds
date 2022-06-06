const header = () => {
  const headerTemplate = `
<header>
<nav Class="nav">
  <div class="leftNav text-center">
    <i class="bi bi-trash" style="font-size: 50px;"></i>
  </div>
  <div class="extra">
    <div class="header">
      <p class="name"><b><a href='' target="_blank">FUNKY</a></b>FUUDS <br /> </p>
      <p>won't be beet</p>
    </div>
  <div class="navright">
  <button type="button"  class="btn btn-warning"></button>
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

  if (window.location.pathname === "/checkout") {
    $(".btn.btn-warning")
      .text("Home/Menu")
      .click(function () {
        window.location.href = "http://localhost:8080/";
      });
  }
  if (window.location.pathname === "/") {
    $(".btn.btn-warning")
      .append("<span class='bi bi-cart'> CART</span>")
      .click(function () {
        window.location.href = "http://localhost:8080/checkout";
      });
  }
});