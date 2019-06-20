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