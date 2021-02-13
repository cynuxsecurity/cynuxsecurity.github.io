document.addEventListener('DOMContentLoaded', function () {
  var elem = document.querySelector('.sidenav');
  var sidenav = M.Sidenav.init(elem);
  var $collapsibleElems = document.querySelector('.collapsible');
  M.Collapsible.init($collapsibleElems);
  var $subs = document.querySelectorAll('.sub');
  var $tabs = document.querySelectorAll('.tab');
  if ($tabs.length > 0) {
    // Add a click event on each of them
    $tabs.forEach(function ($el) {
      $el.addEventListener('click', function () {
        for (i = 0; i < $tabs.length; i++) {
          $tabs[i].classList.remove('is-active');
        }
        $el.classList.toggle('is-active');
      });
    });
  }
  if ($subs.length > 0) {
    // Add a click event on each of them
    $subs.forEach(function ($el) {
      $el.addEventListener('click', function () {
        for (i = 0; i < $subs.length; i++) {
          $subs[i].classList.remove('is-active');
        }
        $el.classList.toggle('is-active');
        sidenav.close();
      });
    });
  }
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
  // Carousel
  var carousel = document.getElementById('header-carousel');
  M.Carousel.init(carousel, {
    fullWidth: true,
    indicators: true
  });
  setInterval(function(){
    var instance = M.Carousel.getInstance(carousel);
    instance.next()
  },5000);
});