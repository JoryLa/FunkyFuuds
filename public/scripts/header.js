const header = () => {
  const headerTemplate = `
<header>
<nav Class="nav">
  <div class="leftNav text-center">
    <i class="bi bi-trash" style="font-size: 50px;"></i>
  </div>

    <div class="header">
      <p class="navName"><b><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank">FUNKY</a></b>FUUDS <br /> </p>
      <p id="beet" >won't be beet</p>
    </div>
  <div class="navright">
  <button type="button" class="btn btn-dark"><span class='bi bi-cart'> CART</span></button>

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


