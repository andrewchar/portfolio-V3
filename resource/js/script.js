var waypoint = new Waypoint({
  element: document.getElementById('about'),
  handler: function(direction) {
    var nav = document.getElementById('nav');
    if (direction == "down") {
      nav.classList.add('stuck');
    } else {
      nav.classList.remove('stuck');
    }
  },
  offset: 150
})

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function stickyNav() {
  var nav = document.getElementById('nav');
  var intViewportHeight = window.innerHeight;
  if (window.scrollY > 60 && (window.scrollY < intViewportHeight - 52)) {
    nav.classList.add('hidden-nav');
  } else {
    nav.classList.remove('hidden-nav');
  }
}

window.addEventListener("scroll", debounce(stickyNav));
