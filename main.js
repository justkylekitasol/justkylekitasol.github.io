$(window).load(function(){
  
     
});
function toggleSidenav() {
  document.body.classList.toggle('sidenav-active');  
  document.body.classList.toggle('noscroll');
}

$(document).ready(function(){
  setTimeout(function(){ $('.loader-bg').fadeOut(); }, 1000);
  $("body").addClass('overflow');
  $('.home-btn').click(function(){
    $("body").addClass('overflow');
    $("header").removeClass('scrolled');
    $(".about-section").addClass('padding');
    $('html, body').animate({
      scrollTop: $(".header-space").offset().top
    }, 1300)
  })
  $('.about-btn').click(function(){
    $("header").addClass('scrolled');
    $("body").removeClass('overflow');
    // $(".about-section").removeClass('padding');
    $('html, body').animate({
      scrollTop: $(".about-section").offset().top
    }, 1300)
  })
  $('.skills-btn').click(function(){
    $("header").addClass('scrolled');
    $("body").removeClass('overflow');
    // $(".about-section").removeClass('padding');
    $('html, body').animate({
      scrollTop: $(".skills-section").offset().top-60
    }, 1300)
  })
  $('.portfolio-btn').click(function(){
    $("header").addClass('scrolled');
    $("body").removeClass('overflow');
    // $(".about-section").removeClass('padding');
    $('html, body').animate({
      scrollTop: $(".portfolio-section").offset().top-60
    }, 1300)
  })
  $('.contact-btn').click(function(){
    $("header").addClass('scrolled');
    $("body").removeClass('overflow');
    // $(".about-section").removeClass('padding');
    $('html, body').animate({
      scrollTop: $(".contact-section").offset().top-60
    }, 1300)
  })
})

$(function () {
	var filterList = {
		init: function () {
			// MixItUp plugin
			// http://mixitup.io
			$('.portfolio-grid').mixItUp({
				selectors: {
  			  target: '.portfolio',
  			  filter: '.filter'	
  		  },
  		  load: {
    		  filter: 'all' // show app tab on first load
    		}     
			});								
		}
	};
	// Run the show!
	filterList.init();
});		

