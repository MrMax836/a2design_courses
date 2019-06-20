var current_active = 0;

function slideImageLeft() {
  var images = document.getElementsByClassName('slider__image');
  var images_count = images.length;
  var tmp = current_active;
  current_active--;
  if (current_active < 0) {
    current_active = images_count - 1;
  }
  images[tmp].classList.toggle("active");
  images[current_active].classList.toggle("active");
}

function slideImageRight() {
  var images = document.getElementsByClassName('slider__image');
  var images_count = images.length;
  var tmp = current_active;
  current_active++;
  if (current_active > images_count - 1) {
    current_active = 0;
  }
  images[tmp].classList.toggle("active");
  images[current_active].classList.toggle("active");
}

// ####################################################
function openMap() {
  var header = document.getElementsByClassName('header');
  header[0].style.display = 'none';
  var main_left = document.getElementsByClassName('main__content_left');
  main_left[0].style.display = 'none';
  var nav = document.getElementsByClassName('nav-history');
  nav[0].style.display = 'none';
  var slider = document.getElementsByClassName('block-slider');
  slider[0].style.display = 'none';
  var filters__title = document.getElementsByClassName('filters__title');
  filters__title[0].style.display = 'none';

  var filters__mobile = document.getElementsByClassName('filters_mobile');
  filters__mobile[0].style["paddingBottom"] =  0;
  
  var map = document.getElementsByClassName('main__content_right');
  map[0].style.display = 'block';
  var main__content = document.getElementsByClassName('main__content');
  main__content[0].style.padding = '0';
}