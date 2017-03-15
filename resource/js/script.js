/* For sticky nav */
// $('.about').waypoint(function(direction) {
//   if (direction == "down") {
//     $('nav').addClass('stuck');
//   } else {
//     $('nav').removeClass('stuck');
//   }
// }, {
//   offset: '60px'
// });

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
