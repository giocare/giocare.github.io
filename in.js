
  var myFullpage = new fullpage('#fullpage', {
        sectionsColor: ['white', 'white', 'white', 'white', 'white'],
        navigation: true
    });

// TYPEWRITTER EFFECT


new TypeIt('#intro', {
  speed: 50,
  startDelay: 900
})
.type('hi, im jess.')
.pause(300)
.delete(12)
.pause(250)
.type('i am a <em>designer.</em>')
.pause(750)
.options({speed: 100, deleteSpeed: 75})
.delete(10)
.pause(300)
.type('n <em>illustrator.</em>')
.pause(300)
.delete(12)
.type('<em>animator.</em>')
.go();

// ANIMATE DOWN ARROW
setTimeout(function(){ 
	$(".fa-angle-double-down").addClass("animateee");
}, 9000);

// CLICK TO LINGOLDEN PAGE
$(".lang-dev").on("click", function () {
	window.location="work/lingolden.html";
});

// CLICK TO APP PAGE
$(".app-dev").on("click", function () {
	window.location="work/app.html";
});

// CLICK TO ANIMATION PAGE
$(".motion-dev").on("click", function () {
	window.location="work/motion.html";
});

// ACTIVATE NAVIGATION
$('#logo').click(function() {
  var overlay_navigation = $('.overlay-navigation'),
    nav_item_1 = $('nav li:nth-of-type(1)'),
    nav_item_2 = $('nav li:nth-of-type(2)'),
    nav_item_3 = $('nav li:nth-of-type(3)'),
    nav_item_4 = $('nav li:nth-of-type(4)'),
    nav_item_5 = $('nav li:nth-of-type(5)'),
    nav_item_6 = $('nav li:nth-of-type(6)'),
    top_bar = $('.bar-top'),
    middle_bar = $('.bar-middle'),
    bottom_bar = $('.bar-bottom');

  overlay_navigation.toggleClass('overlay-active');
  if (overlay_navigation.hasClass('overlay-active')) {

    top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
    middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
    bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
    nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
    nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
    nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
    nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
    nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
     nav_item_6.removeClass('slide-in-nav-item-delay-5-reverse').addClass('slide-in-nav-item-delay-5');
  } else {
    top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
    middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
    bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
    overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
    nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
    nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
    nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
    nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
    nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
     nav_item_6.removeClass('slide-in-nav-item-delay-5').addClass('slide-in-nav-item-delay-5-reverse');
  }
})

// WAVY IMAGE EFFECT
var img = document.getElementById('input');

var c = document.getElementById('output'),
    ctx = c.getContext('2d');

c.width = img.width;
c.height = img.height;

var tic, sine, sineNormalized,
    start = Date.now();
    
var params = {
  AMP: 4,
  FREQ: 0.03,
  SPEED: 3,
  VERTICAL: false
};

function update() {
  tic = (Date.now() - start) * 0.001;
}

function render() {
  ctx.clearRect(0, 0, c.width, c.height);
  for(var i = 0; i < img.height; i++) {
    if(params.VERTICAL) {
      var ofs = params.AMP * (0.5 + (Math.sin(tic * params.SPEED + (i * params.FREQ)) * 0.5));
      ctx.drawImage(img,
                  0, i, img.width, 1,
                  0, i - (ofs * 0.5), img.width, 1 + ofs);
    } else {
      var ofs = params.AMP * Math.sin(tic * params.SPEED + (i * params.FREQ));
      ctx.drawImage(img,
                  0, i, img.width, 1,
                  0 + ofs, i, img.width, 1);
    }
    
  }
}

function loop() {
  requestAnimationFrame(loop);
  update();
  render();
}

loop();



