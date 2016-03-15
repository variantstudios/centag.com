(function ($) {
$(document).ready(function() {


// Royal Slider
$('#full-width-slider').royalSlider({
    arrowsNav: true,
    loop: true,
    keyboardNavEnabled: true,
    controlsInside: false,
    imageScaleMode: 'fill',
    arrowsNavAutoHide: false,
    autoScaleSlider: true, 
    autoScaleSliderWidth: 960,     
    autoScaleSliderHeight: 360,
    controlNavigation: 'none',
    thumbsFitInViewport: false,
    navigateByClick: true,
    startSlideId: 0,
    transitionType:'move',
    globalCaption:  false,
    autoPlay: {
    		// autoplay options go gere
    		enabled: true,
    		delay: 6000
    	}
  });
  
// Royal Slider
$('#full-width-slider-header').royalSlider({
    arrowsNav: true,
    loop: true,
    keyboardNavEnabled: true,
    controlsInside: false,
    imageScaleMode: 'fill',
    arrowsNavAutoHide: false,
    autoScaleSlider: true, 
    autoScaleSliderWidth: 960,     
    autoScaleSliderHeight: 360,
    controlNavigation: 'none',
    thumbsFitInViewport: false,
    navigateByClick: true,
    startSlideId: 0,
    transitionType:'move',
    globalCaption:  false,
    autoPlay: {
        enabled: true,
    		delay: 4000
    	}
  });
  
  // Uniform Selcet Lists
  $(function(){
    $("select").uniform();
  });
  
$('.region-menu').prepend('<a href="#main-menu" class="menu-link hide-text">Menu</a>');
  $('body').addClass('js');
  var $menu = $('.zone-menu-wrapper');
  $menulink = $('.menu-link');
  
  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });



// IE Z-index
$(function() {
       var zIndexNumber = 1000;
       // Put your target element(s) in the selector below!
       $("h2").each(function() {
               $(this).css('zIndex', zIndexNumber);
               zIndexNumber -= 10;
       });
});


  });
})(jQuery);