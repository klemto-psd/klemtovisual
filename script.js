const grid = document.querySelector('#grid');
const lb = document.querySelector('#lightbox');
const lbimg = lb.querySelector('img');
const filters = document.querySelectorAll('.filter');
const emptyState = document.querySelector('#emptyState');

const categoryLabels = { miniature:'Miniature YouTube', affiche:'Affiche', logo:'Logo', typo:'Typographie', projet:'Avant / Après' };

function initCompare(card) {
  const range = card.querySelector('.compare-range');
  const after = card.querySelector('.compare-after');
  const divider = card.querySelector('.compare-divider');
  const set = v => { after.style.clipPath = `inset(0 0 0 ${v}%)`; divider.style.left = `${v}%`; };
  range.addEventListener('input', e => set(e.target.value));
  set(range.value);
}

function renderPortfolio(filter = 'miniature') {
  grid.innerHTML = '';
  const items = filter === 'all' ? portfolioItems.filter(item => item.category !== 'projet') : portfolioItems.filter(item => item.category === filter);
  emptyState.classList.toggle('show', items.length === 0);

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = `card card-${item.category}${item.beforeImage ? ' compare-card' : ''}`;
    const label = categoryLabels[item.category] || item.category;
    const title = item.title || label;

    if (item.beforeImage && item.afterImage) {
      card.innerHTML = `
        <div class="compare-wrap">
          <img class="compare-before" src="assets/${item.beforeImage}" alt="${title} avant" loading="lazy">
          <img class="compare-after" src="assets/${item.afterImage}" alt="${title} après" loading="lazy">
          <div class="compare-tag compare-tag-before">AVANT</div>
          <div class="compare-tag compare-tag-after">APRÈS</div>
          <div class="compare-divider"><span>↔</span></div>
          <input class="compare-range" type="range" min="0" max="100" value="50" aria-label="Comparer avant et après">
        </div>
        <div class="card-meta"><span>${label}</span><b>${title}</b></div>`;
      grid.appendChild(card);
      initCompare(card);
    } else {
      card.innerHTML = `<img src="assets/${item.image}" alt="${title}" loading="lazy"><div class="card-meta"><span>${label}</span>${item.title ? `<b>${item.title}</b>` : ''}</div>`;
      card.onclick = () => { lbimg.src = card.querySelector('img').src; lb.classList.add('open'); };
      grid.appendChild(card);
    }
    requestAnimationFrame(() => card.classList.add('visible'));
  });
}

filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  renderPortfolio(button.dataset.filter);
}));
renderPortfolio('miniature');
lb.onclick = event => { if (event.target !== lbimg) lb.classList.remove('open'); };


// V8.4 — Avant / Après mis en avant sur l'accueil
const homeCompareStage = document.querySelector('#homeCompareStage');
const homeCompareDots = document.querySelector('#homeCompareDots');
const homeCompareItems = portfolioItems.filter(item => item.category === 'projet' && item.beforeImage && item.afterImage);
let homeCompareIndex = 0;

function renderHomeCompare() {
  if (!homeCompareStage || !homeCompareItems.length) return;
  const item = homeCompareItems[homeCompareIndex];
  homeCompareStage.innerHTML = `<div class="home-compare-card compare-card">
    <div class="compare-wrap">
      <img class="compare-before" src="assets/${item.beforeImage}" alt="${item.title} avant">
      <img class="compare-after" src="assets/${item.afterImage}" alt="${item.title} après">
      <div class="compare-tag compare-tag-before">AVANT</div>
      <div class="compare-tag compare-tag-after">APRÈS</div>
      <div class="compare-divider"><span>↔</span></div>
      <input class="compare-range" type="range" min="0" max="100" value="50" aria-label="Comparer avant et après">
    </div>
  </div>`;
  initCompare(homeCompareStage.querySelector('.compare-card'));
  homeCompareDots.innerHTML = homeCompareItems.map((_,i)=>`<button class="${i===homeCompareIndex?'active':''}" aria-label="Voir la comparaison ${i+1}"></button>`).join('');
  [...homeCompareDots.children].forEach((dot,i)=>dot.onclick=()=>{homeCompareIndex=i;renderHomeCompare();});
}
function moveHomeCompare(dir){ homeCompareIndex=(homeCompareIndex+dir+homeCompareItems.length)%homeCompareItems.length; renderHomeCompare(); }
document.querySelector('.home-compare-arrow.prev')?.addEventListener('click',()=>moveHomeCompare(-1));
document.querySelector('.home-compare-arrow.next')?.addEventListener('click',()=>moveHomeCompare(1));
renderHomeCompare();

// Clients — section « Ils m’ont fait confiance »
// Pour ajouter/supprimer/réordonner quelqu’un, modifie uniquement cette liste.
const trustPeople = [
  { name: 'YORSSY', image: 'YORSSY(2).jpg' },
  { name: 'ADIDAS', image: 'ADIDAS(2).jpg' },
  { name: 'ANYME', image: 'ANYME(3).jpg' },
  { name: 'BOOSKA-P', image: 'BOOSKA P(2).jpg' },
  { name: 'CITADIUM', image: 'CITADIUM(2).jpg' },
  { name: 'DJIBRIL94260', image: 'DJIBRIL94260(2).jpg' },
  { name: 'ESPERENÇA', image: 'esperenca.jpg' },
  { name: 'LA MANO', image: 'LAMANO(2).jpg' },
  { name: 'LA PATTE', image: 'LAPATTE(2).jpg' },
  { name: 'MATTEO SINET', image: 'MATTEO SINET(2).jpg' },
  { name: 'MOUGLI', image: 'MOUGLI(2).jpg' },
  { name: 'POLSKA', image: 'POLSKA(2).jpg' },
  { name: 'PSG', image: 'PSG(2)).jpg' },
  { name: 'SADEK', image: 'SADEK(2).jpg' },
  { name: 'THÉO RITZY', image: 'THEO RITZY(2).jpg' },
  { name: 'YOMI DENZEL', image: 'YOMI DENZEL(2).jpg' }
];

const trustTrack = document.querySelector('#trustTrack');
if (trustTrack) {
  const renderTrustPerson = person => `
    <div class="trust-person">
      <div class="trust-avatar"><img src="assets/trust/${person.image}" alt="${person.name}" loading="lazy"></div>
      <span>${person.name}</span>
    </div>`;

  // On double automatiquement la liste pour conserver le défilement infini.
  trustTrack.innerHTML = [...trustPeople, ...trustPeople].map(renderTrustPerson).join('');
}
