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

var displayStock = [];
var listForHide = [];

function divHide(thisClass) {
  var elem = document.getElementsByClassName(thisClass)[0];
  displayStock.push(elem.style.display);
  elem.style.display = 'none';
}
function divVisible(thisClass) {
  var elem = document.getElementsByClassName(thisClass)[0];
  elem.style.display = displayStock.shift();
}



function openMap() {
  
  listForHide.push('header');
  listForHide.push('main__content_left');
  listForHide.push('main__content_right');
  listForHide.push('nav-history');
  listForHide.push('block-slider');
  listForHide.push('filters__title');
  listForHide.push('filters_mobile__button map');

  for (var i = 0; i < listForHide.length; i++) {
    divHide(listForHide[i]);
  }

  document.getElementsByClassName('filters_mobile__button list')[0].style.display = 'flex';
  document.getElementsByClassName('main__content_mobile')[0].style.display = 'block';
  document.getElementsByClassName('main__content')[0].classList.add("remove-padding");
}

function closeMap() {
  for (var i = 0; i < listForHide.length; i++) {
    divVisible(listForHide[i]);
  }
  divHide('main__content_mobile');
  document.getElementsByClassName('filters_mobile__button list')[0].style.display = 'none';
  document.getElementsByClassName('main__content')[0].classList.remove("remove-padding");
  document.getElementsByClassName('filters_mobile__button list')[0].style.display = 'none';
  document.getElementsByClassName('filters_mobile__button map')[0].style.display = 'flex';
  // очистка массивов
  displayStock.length = 0;
  listForHide.length = 0;
}


function openFilters() {
  document.getElementsByClassName('filters_mobile__menu')[0].style.display = 'flex';
}
function closeFilters() {
  document.getElementsByClassName('filters_mobile__menu')[0].style.display = 'none';
}
