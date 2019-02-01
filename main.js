$(window).load(function(){
  setTimeout(function(){ $('.loader-bg').fadeOut(); }, 1000);
     
});
function toggleSidenav() {
  document.body.classList.toggle('sidenav-active');  
  document.body.classList.toggle('noscroll');
}

$(document).ready(function(){
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
  $('.about-btn2').click(function(){
    $("header").addClass('scrolled');
    $("body").removeClass('overflow');
    // $(".about-section").removeClass('padding');
    $('html, body').animate({
      scrollTop: $(".experience-section").offset().top-60
    }, 1300)
  })
})

// $(window).scroll(function(){
//   var scroll = $(window).scrollTop();
//   if (scroll > 0) {
//     $("body").removeClass('overflow');
//     $("header").addClass('scrolled');
//   } else {
//     $("header").removeClass('scrolled');
//   }
// })