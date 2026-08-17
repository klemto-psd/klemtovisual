/*
  KLEMTO — GESTION DU PORTFOLIO
  =============================

  CATEGORIES DISPONIBLES :
  "miniature" | "affiche" | "logo" | "typo" | "projet"

  POUR AJOUTER UNE CREATION :
  1. Mets ton image dans le dossier /assets
  2. Copie une ligne ci-dessous
  3. Change le nom du fichier et la catégorie

  Exemple :
  { image: "mon-affiche.jpg", category: "affiche", title: "Affiche Football" },

  L'ordre de cette liste = l'ordre dans chaque catégorie.
  Les miniatures restent affichées par défaut et constituent la catégorie principale.
*/

const portfolioItems = [
  { image: "thumb-01.jpg", category: "miniature" },
  { image: "thumb-02.jpg", category: "miniature" },
  { image: "thumb-03.jpg", category: "miniature" },
  { image: "thumb-04.jpg", category: "miniature" },
  { image: "thumb-05.jpg", category: "miniature" },
  { image: "thumb-06.jpg", category: "miniature" },
  { image: "thumb-07.jpg", category: "miniature" },
  { image: "thumb-08.jpg", category: "miniature" },
  { image: "thumb-09.jpg", category: "miniature" },
  { image: "thumb-10.jpg", category: "miniature" },
  { image: "thumb-11.jpg", category: "miniature" },
  { image: "thumb-12.jpg", category: "miniature" },
  { image: "thumb-13.jpg", category: "miniature" },
  { image: "thumb-14.jpg", category: "miniature" },
  { image: "thumb-15.jpg", category: "miniature" },
  { image: "thumb-16.jpg", category: "miniature" },
  { image: "thumb-17.jpg", category: "miniature" },
  { image: "thumb-18.jpg", category: "miniature" },
  { image: "thumb-19.jpg", category: "miniature" },
  { image: "thumb-20.jpg", category: "miniature" },
  { image: "Minia EP 3.1.jpg", category: "miniature" },  

  // AFFICHES — V8
  { image: "affiche-matchday.jpg", category: "affiche", title: "Matchday" },
  { image: "affiche-world-tour.jpg", category: "affiche", title: "World Tour" },
  { image: "affiche-strasbourg-nantes.jpg", category: "affiche", title: "Strasbourg × Nantes" },
  { image: "affiche-live.jpg", category: "affiche", title: "Live" },
  { image: "affiche-risser-le-havre.jpg", category: "affiche", title: "Risser × Le Havre" },
  { image: "affiche-matchday-troyes.jpg", category: "affiche", title: "Matchday × Troyes" },
  { image: "affiche-gta-rp.png", category: "affiche", title: "GTA RP" },

  // LOGOS — V8
  { image: "logo-anyme.jpg", category: "logo", title: "Anyme" },
  { image: "logo-lare7.jpg", category: "logo", title: "LARE7" },
  { image: "logo-klemto.jpg", category: "logo", title: "Klemto" },
  { image: "logo-love-or-money.jpg", category: "logo", title: "Love or Money" },
  { image: "logo-ami-du-pain.jpg", category: "logo", title: "L'Ami du Pain" },
  { image: "logo-aero.jpg", category: "logo", title: "Aero" },
  { image: "logo-abericio.jpg", category: "logo", title: "Abericio" },
  { image: "logo-fichier-4.png", category: "logo", title: "Logo" },


  // PROJETS — AVANT / APRÈS — V8.3
  { beforeImage: "compare-noel-before.jpg", afterImage: "compare-noel-after.jpg", category: "projet", title: "Noël" },
  { beforeImage: "compare-rio-before.jpg", afterImage: "compare-rio-after.jpg", category: "projet", title: "Rio" },
  { beforeImage: "compare-loup-before.jpg", afterImage: "compare-loup-after.jpg", category: "projet", title: "Manoir" },
  { beforeImage: "compare-marseille-before.jpg", afterImage: "compare-marseille-after.jpg", category: "projet", title: "Marseille" },
  { beforeImage: "compare-mer-before.jpg", afterImage: "compare-mer-after.jpg", category: "projet", title: "24H à la mer" },

  // TYPOGRAPHIES — V7
  { image: "typo-shamballa.jpg", category: "typo", title: "Shamballa" },
  { image: "typo-sex-chill.jpg", category: "typo", title: "Sex Chill" },
  { image: "typo-etoile.jpg", category: "typo", title: "Étoile" },
  { image: "typo-ice-o-lator.jpg", category: "typo", title: "Ice O Lator" },
  { image: "typo-crazy-remix-2.jpg", category: "typo", title: "Crazy Remix 2" },
  { image: "typo-cherry-oud.jpg", category: "typo", title: "Cherry Oud" },
  { image: "typo-miss-des-miss.jpg", category: "typo", title: "Miss des Miss" },
  { image: "typo-antifame.jpg", category: "typo", title: "Antifame" },
  { image: "typo-korky.jpg", category: "typo", title: "Korky" },
  { image: "typo-maudit.png", category: "typo", title: "Maudit" },
  { image: "typo-blues-du-bronx.png", category: "typo", title: "Blues du Bronx" },
  { image: "typo-coeur-solide.jpg", category: "typo", title: "Cœur Solide" },
  { image: "typo-mixtape.png", category: "typo", title: "Mixtape" },
  { image: "typo-telegram.png", category: "typo", title: "Telegram" }

  // Ajoute ensuite tes autres créations ici :
  // { image: "affiche-01.jpg", category: "affiche" },
  // { image: "logo-01.png", category: "logo" },
  // { image: "typo-01.jpg", category: "typo" },
  // { image: "projet-01.jpg", category: "projet" },
];
