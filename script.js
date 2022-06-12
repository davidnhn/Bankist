'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//! SElECT

console.log(document.documentElement);
console.log(document.body);
console.log(document.head);

//* dispo sur les éléement enfant (child elements)
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
//* retourne html live collection ( dom lié au html , si je le supprime dans l'un ca le supprime dans l'autre, contrairement au nodeliste , si var contenant les elements html, elle ne se met pas a jour quand elle est supprimée)

document.getElementsByClassName('btn'); //* live html collection

//! CREATING AND INSERTING
//*insertAdjacentHTML
//* create DOM element and store in (not in the DOM himself)
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message); //* ajouté comme First child
// header.append(message);//* it moves it, a dom el is unique

// header.append(message.cloneNode(true)); //* On passe une copie, true pour passer les enfants avec

header.before(message); //* before as a sibling
header.after(message);

//!DELETE
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();

    //*ancient
    // message.parentElement.removeChild(message);
  });

//! STYLES
//*set as inline style
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

//* works only with inline style
console.log(message.style.height);
console.log(message.style.width);

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);

//* revnoie unne string on on utilise parsefloat pour prend le nombre ('40px' + 50 + 'px --->  40 + 90 + 'px)
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

console.log(message.style.height);

//*for custom properties
// document.documentElement.style.setProperty('--color-primary', 'orangered');

//! ATTRIBUTES
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';
console.log(logo.designer); //* undefine

console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.nav__link--btn');
console.log(link.href); //*httph://localhost/# absolute
console.log(link.getAttribute('href')); //*# relative

//! DATA attribute
console.log(logo.dataset.versionNumber);

//! CLASSES
logo.classList.add('c', 'i');
logo.classList.remove('c', 'i');
logo.classList.toggle('c', 'i');
logo.classList.contains('c', 'i');

logo.className = 'jonas'; //* na pas utiliser ca ecrase toutes les classes

//! SMOOTHING SCROLLING (2 façons)
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());

  //*distance from the top of the page
  console.log('Current scroll (X/Y', window.pageXOffset, window.pageYOffset);

  //* taille fenetre
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //*SCROLLING
  //* marche puis le haut relatif a a la fentre/viewport
  //*s1coords.top distance form le haut de la fenetre de navigation
  //!Les parametres(x, sa position depuis le haut de la page, ce qui doit descendre depuis le tout debut de la page donc notre scroll + ce qui reste entre le viewport et el(position absolute))
  //*donc faut rajouter ce qu'on a deja scrollé + ce qui reste en tre le viewport et notre element
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  //* window.scrollTo({
  // *  left: s1coords.left + window.pageXOffset,
  // *  top: s1coords.top + window.pageYOffset,
  //  * behavior: 'smooth',
  // *});

  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');
const alerH1 = function (e) {
  alert('Greeeat');
};

//* mouse enter the element
// h1.addEventListener('mouseenter', alerH1);
// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alerH1);
// }, 3000);

// h1.onmouseenter = function (e) {
//   alert('Greeeat');
// };

// rgb(255,255,255);
const randomint = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomint(0, 255)}, ${randomint(0, 255)}, ${randomint(0, 255)})`;

console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target); //* savoir ou l'e a commencé
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();

//     console.log('NAV', e.target, e.currentTarget);
//   }
// true
// );
//* 3eme parametre , true , ecoute evenement lors phase de capturation quand il descend de la racine du dom a l'element donc passe en premier

//*anchor ---> id , scrool par defaut stopé, on utilise
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('link');
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//! Event delegation

//! 1) Add event listener to common parent element
//! 2) Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  //*Matching strategy
  if (e.target.classList.contains('nav__link')) {
    console.log('link');
    console.log('link');
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//! DOM TRAVERSING

const h1bis = document.querySelector('h1');

//*select h1 children with class highlight
console.log(h1bis.querySelectorAll('.highlight'));

//*enfant direct
console.log(h1.children);

// //* premier enfant
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

//* Parent

console.log(h1.parentNode);
console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

//*retourne h1 lui meme
// h1.closest('h1').style.background = 'var(--gradient-secondary)';

//*Siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

//*avoir tous les frere , remonter au parent commun et demander enfants
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

//*TABBED COMPONENT

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab'); //matching parents
  console.log(clicked);

  //Guard close
  if (!clicked) return; //Null est falsy value , quand ont clique sur tabscontainer

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  //Activta content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu fade animation
const handleHover = function (e, opacity) {
  console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    // console.log(siblings);
    const logo = link.closest('.nav').querySelector('img');
    // console.log(logo);

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = opacity;
  }
};
//mouse enter ne bubble pas
// On utilise bind pour pâsser una argument a un event handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY); // haut de la fenetre au haut de notre contenu
//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//*Sticky navigation : intersection observer API
//  entries est un array de treshold
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };
// const obsOptions = {
//   root: null, //wiewport
//   threshold: [0, 0.2], // obser notre seciton1 croiser le wiewport a 10% et declencher notre fcontion (entrer de 10% de sa taille dans le viewport)
//   0 quand on rentre ou on sort, 1 quand toute la section apparait dans le viewport
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entries);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
// const header = document.querySelector('.header');
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null, // viewport
  threshold: 0,
  rootMargin: '-90px', // rentre de min 0 dans le root (viewport fenetre)
});
headerObserver.observe(header);

/*
 
!============== SLIDER =================

*/

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';

const slider = () => {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  console.log(slides);
  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
  // 0%, 100%, 200% , 300%

  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = () => {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  // createDots();

  const activateDot = slide => {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  //* Bouge les slide de 100% vers la droit ou la gauche
  const goToSlide = slide => {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
    activateDot(slide);
  };

  //! Initilise la position de depart des slide avec comme slide a 0 la premier slide
  // goToSlide(0);

  const nextSlide = () => {
    curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;
    goToSlide(curSlide);
    // activateDot(curSlide);
  };
  const prevSlide = () => {
    curSlide === 0 ? (curSlide = maxSlide - 1) : curSlide--;
    goToSlide(curSlide);
    // activateDot(curSlide);
  };
  //Next slide
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  //* Bouger slide avec clavier fleches
  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  //*Changement de slide quand on clique sur un petit rond
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      //* destructuring d'objet, on nomme la constance avec le nom de la propriete dont on veut la valeur (l'objet e.target.dataset contient propriete slide)
      const { slide } = e.target.dataset;

      goToSlide(slide);
      // activateDot(slide);
    }
  });
  const init = () => {
    createDots();
    goToSlide(0);
  };
  init();
};
slider();

//!==============REVEAL SECTION=========
// const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//!======LAZY LOADING=========

const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  //replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });
