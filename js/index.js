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

let numero = 1;
let numeroPrecedent = 7;

setInterval(function () {
  numero++;
  if (numero > 7) {
    numero = 1;
    numeroPrecedent = 7;
  }else{
    numeroPrecedent = numero - 1;
  }
  id= "#img-"+numero;
  idPre= "#img-"+numeroPrecedent;
  document.querySelector(id).checked = true;
  console.log("On vient de selectionner le suivant");
  document.querySelector(idPre).checked = false;
}, 5000);
