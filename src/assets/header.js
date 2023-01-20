function searchField() {
   const header__inner = document.querySelector('.header__inner');
   const search = document.querySelector('.search');
   const searchWrap = document.querySelector('.header .search-wrap');
   const searchClose = document.querySelector('.search-close');
   const btnLeft = document.querySelector('.header__btn-left');


   if (!search || !header__inner) return false;

   searchWrap.addEventListener('click', function (evt) {
      evt.preventDefault();
      search.classList.add('active');
      header__inner.classList.add('searching');
   });

   searchClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      search.classList.remove('active');
      header__inner.classList.remove('searching');
   });

   btnLeft.addEventListener('click', function (evt) {
      evt.preventDefault();
      search.classList.remove('active');
      header__inner.classList.remove('searching');
   });
}
function menuMob() {
   const navBurger = document.querySelector('.burger');
   const nav = document.querySelector('.nav');
   const menuRight = document.querySelector('.menu--right');



   navBurger.addEventListener('click', function (evt) {
      evt.preventDefault();
      nav.append(menuRight);

      nav.classList.toggle('mobActive');
      this.classList.toggle('active');
   });
}