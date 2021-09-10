window.onscroll = function() {myFunctionSticky()};
let navbar = document.getElementById('navbar');
let sticky = navbar.offsetTop;
function myFunctionSticky() {

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");

  } else {
    navbar.classList.remove("sticky");
  }
}






jQuery(document).ready(function() {
  let duration = 500;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 100) {
      // Si un défillement de 100 pixels ou plus.
      // Ajoute le bouton
        jQuery('.cRetour').fadeIn(duration);
    } else {
      // Sinon enlève le bouton
        jQuery('.cRetour').fadeOut(duration);
      }
    });

    jQuery('.cRetour').click(function(event) {
      // Un clic provoque le retour en haut animé.
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
  })
});
