// ================================================================
//  ACTUALITÉS DU CENTRE ÉQUESTRE
//  ================================================================
//  C'est LE seul fichier à modifier pour gérer les actualités.
//
//  COMMENT AJOUTER UNE ACTUALITÉ ?
//  --------------------------------
//  1. Copiez un bloc { ... } existant
//  2. Collez-le AU DÉBUT de la liste (avant le premier {)
//  3. Modifiez les champs : titre, date, tag, texte, images
//  4. Mettez vos photos dans le dossier  images/actualites/
//     et indiquez leur nom dans le tableau "images"
//
//  COMMENT SUPPRIMER UNE ACTUALITÉ ?
//  -----------------------------------
//  Supprimez le bloc { ... } correspondant (n'oubliez pas la virgule après)
//
//  RÈGLES IMPORTANTES :
//  - Respectez bien les guillemets "  "  et les virgules ,
//  - Chaque bloc se termine par  },   sauf le DERNIER qui n'a pas de virgule
//  - Vous pouvez mettre 1 ou plusieurs images par actualité
// ================================================================

const ACTUALITES = [

  // ---- ACTUALITÉ 1 (la plus récente en premier) ----
  {
    titre:  "Stages des vacances d'avril !!",
    date:   "20-30 avril 2026",
    tag:    "Stages",
    texte:  "🐎INSCRIPTION AUX STAGES: https://mas-cournon.cavasoft.fr/",

    // Mettez ici les noms de vos photos (dans le dossier images/actualites/)
    // La première image s'affiche sur la carte et dans la lightbox.
    // Toutes les images sont accessibles dans la galerie de la lightbox.
    images: [
      "images/actualites/stages_printemps_1.jpg",
      "images/actualites/stages_printemps_2.jpg",
    ]
  },

  // ---- ACTUALITÉ 2 ----
  {
    titre:  "💚🤍 Félicitations à nos joueurs ! 🤍💚",
    date:   "23 mars 2026",
    tag:    "Compétition",
    texte:  "U14, avec Tom, Maelya et Yasmine, terminent à une belle 4ème place 💪🔥 Les GCP, avec Celya, Louka et Léo, ont également porté haut les couleurs du club et ont remporté la 3ème place!💚🤍 Nous sommes très fiers de vous tous pour votre engagement, votre esprit d’équipe et vos performances !🙏 Un grand merci aux coachs pour leur investissement et leur accompagnement tout au long de cette aventure. Encore bravo à tous ! 💚🤍",
    images: [
      "images/actualites/vendres_1.jpg",
      "images/actualites/vendres_2.jpg",
      "images/actualites/vendres_3.jpg"
    ]
  },

  // ---- ACTUALITÉ 3 ----
  {
    titre:  "Nouveau bébé !",
    date:   "17 mars 2026",
    tag:    "Naissance",
    texte:  "Bienvenue  à Q****** Par Daromy et Sioux du Godion magnifique pouliche née cette nuit !",
    images: [
      "images/actualites/naissance_1.jpg",
      "images/actualites/naissance.jpg"
    ]
  }

  // Pas de virgule après le dernier bloc !

];
