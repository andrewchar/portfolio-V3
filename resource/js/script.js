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
