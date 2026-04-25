// ================================================================
//  main.js — Navigation, lightboxes, génération des actualités
//  NE PAS MODIFIER CE FICHIER
// ================================================================

// ---- Navigation entre sections ----

function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelector(`nav a[data-section="${id}"]`).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ================================================================
//  LIGHTBOX IMAGE (pour les prestations / hero)
// ================================================================

let lbImages  = [];   // liste des URLs d'images affichées
let lbCurrent = 0;    // index courant

function openLightbox(images, current = 0) {
  lbImages = Array.isArray(images) ? images : [images];
  lbCurrent = current;
  _lbRefresh();
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function lbNav(dir) {
  lbCurrent = (lbCurrent + dir + lbImages.length) % lbImages.length;
  _lbRefresh();
}

function _lbRefresh() {
  document.getElementById('lightbox-img').src = lbImages[lbCurrent];
  const counter = document.getElementById('lb-counter');
  if (lbImages.length > 1) {
    counter.textContent = `${lbCurrent + 1} / ${lbImages.length}`;
    document.querySelectorAll('#lightbox .lb-nav').forEach(b => b.classList.remove('hidden'));
  } else {
    counter.textContent = '';
    document.querySelectorAll('#lightbox .lb-nav').forEach(b => b.classList.add('hidden'));
  }
}


// ================================================================
//  LIGHTBOX ACTUALITÉ (avec galerie multi-photos)
// ================================================================

let lbNewsImages  = [];
let lbNewsCurrent = 0;

function enlargeNewsImage() {
  // Fermer la lightbox des actualités avant d'ouvrir l'agrandissement
  document.getElementById('lightbox-news').classList.remove('active');
  openLightbox(lbNewsImages, lbNewsCurrent);
}

function openNewsLightbox(actu) {
  lbNewsImages  = actu.images;
  lbNewsCurrent = 0;

  document.getElementById('lightbox-news-title').textContent = actu.titre;
  const dateEl = document.getElementById('lightbox-news-date');
  dateEl.innerHTML = '';
  const calIcon = document.createElement('i');
  calIcon.className = 'fa-regular fa-calendar-days';
  calIcon.setAttribute('aria-hidden', 'true');
  dateEl.appendChild(calIcon);
  dateEl.appendChild(document.createTextNode(' ' + actu.date));
  document.getElementById('lightbox-news-text').textContent  = actu.texte;

  _lbNewsRefresh();
  document.getElementById('lightbox-news').classList.add('active');
  document.body.style.overflow = 'hidden';

  // Make the image clickable to enlarge
  const img = document.getElementById('lightbox-news-img');
  img.style.cursor = 'pointer'; // optional, to show it's clickable
  img.removeEventListener('click', enlargeNewsImage);
  img.addEventListener('click', enlargeNewsImage);
}

function lbNewsNav(dir) {
  lbNewsCurrent = (lbNewsCurrent + dir + lbNewsImages.length) % lbNewsImages.length;
  _lbNewsRefresh();
}

function _lbNewsRefresh() {
  const img = document.getElementById('lightbox-news-img');
  img.src = lbNewsImages[lbNewsCurrent];

  const counter = document.getElementById('lb-news-counter');
  const navBtns = document.querySelectorAll('#lightbox-news .lb-nav');

  if (lbNewsImages.length > 1) {
    counter.textContent = `${lbNewsCurrent + 1} / ${lbNewsImages.length}`;
    navBtns.forEach(b => b.classList.remove('hidden'));
  } else {
    counter.textContent = '';
    navBtns.forEach(b => b.classList.add('hidden'));
  }
}


// ================================================================
//  FERMETURE DES LIGHTBOXES
// ================================================================

function closeLightboxOverlay(event) {
  // Ferme seulement si on clique sur le fond noir (pas sur le contenu)
  if (event.target.classList.contains('lightbox')) {
    closeAllLightboxes();
  }
}

function closeAllLightboxes() {
  document.querySelectorAll('.lightbox').forEach(lb => lb.classList.remove('active'));
  document.body.style.overflow = '';
}

// Touche Échap pour fermer
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAllLightboxes();
});


function imgWithFallback(src, alt) {
  const img = document.createElement('img');
  if (src && /^(images\/|https:\/\/)/.test(src)) {
    img.src = src;
  } else {
    img.src = PLACEHOLDER_SVG;
  }
  img.alt = alt;
  img.addEventListener('error', () => { img.src = PLACEHOLDER_SVG; });
  return img;
}


// ================================================================
//  GÉNÉRATION AUTOMATIQUE DES CARTES ACTUALITÉS
//  (depuis le tableau ACTUALITES défini dans data/actualites.js)
// ================================================================

function renderNews() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;

  if (typeof ACTUALITES === 'undefined' || ACTUALITES.length === 0) {
    const msg = document.createElement('p');
    msg.style.color = 'var(--text-light)';
    msg.textContent = 'Aucune actualité pour le moment.';
    grid.appendChild(msg);
    return;
  }

  ACTUALITES.forEach((actu, i) => {
    // --- Carte ---
    const card = document.createElement('div');
    card.className = 'card';
    card.addEventListener('click', () => openNewsLightbox(actu));

    // Zone image
    const cardImg = document.createElement('div');
    cardImg.className = 'card-image';
    const firstSrc = actu.images && actu.images.length > 0 ? actu.images[0] : '';
    cardImg.appendChild(imgWithFallback(firstSrc, actu.titre || ''));
    card.appendChild(cardImg);

    // Zone texte
    const content = document.createElement('div');
    content.className = 'card-content';

    if (actu.tag) {
      const tag = document.createElement('span');
      tag.className = 'card-tag';
      tag.textContent = actu.tag;
      content.appendChild(tag);
    }

    const date = document.createElement('p');
    date.className = 'card-date';
    const calI = document.createElement('i');
    calI.className = 'fa-regular fa-calendar-days';
    calI.setAttribute('aria-hidden', 'true');
    date.appendChild(calI);
    date.appendChild(document.createTextNode(' ' + (actu.date || '')));
    content.appendChild(date);

    const titre = document.createElement('h3');
    titre.textContent = actu.titre || '';
    content.appendChild(titre);

    const resume = document.createElement('p');
    const texte = actu.texte || '';
    resume.textContent = texte.length > 100 ? texte.substring(0, 100) + '…' : texte;
    content.appendChild(resume);

    if (actu.images && actu.images.length > 1) {
      const photoCount = document.createElement('p');
      photoCount.style.cssText = 'margin-top:.5rem;font-size:.8rem;color:var(--green)';
      const camI = document.createElement('i');
      camI.className = 'fa-solid fa-images';
      camI.setAttribute('aria-hidden', 'true');
      photoCount.appendChild(camI);
      photoCount.appendChild(document.createTextNode(` ${actu.images.length} photos`));
      content.appendChild(photoCount);
    }

    card.appendChild(content);
    grid.appendChild(card);
  });
}

// Lancer le rendu au chargement de la page
document.addEventListener('DOMContentLoaded', renderNews);
