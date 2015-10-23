(function(jQuery){
	jQuery(function(){
	  
	  // Slider functionality
	  
	    // slide knob to position function
	    (function( jQuery ){
         jQuery.fn.slideToPos = function() {
           var left = jQuery(this).position().left + (jQuery(this).width() / 2) - (jQuery(".timeLine a.knob").width() / 2) - 2;
           jQuery(".timeLine a.knob").css("left", left);
           var before = jQuery(this).parent().parent().parent().children(".bar").first().children(".before").first();
           before.css("width", left + 20).css("backgroundColor", jQuery(jQuery(this).attr("href")).css("backgroundColor"));
           return this;
         }; 
      })( jQuery );
	 	  
	 	jQuery(".timeLine ul li.active a").slideToPos();     
    jQuery(".timeLine ul li a").click(function(e) {
      e.preventDefault();
      jQuery(this).slideToPos();
      jQuery('#body').animate({ scrollTop: jQuery(this.hash).offset().top }, 400);
    });
    
    
    // Scroll Spy
    jQuery(window).scroll(function() {
      var top = jQuery(window).scrollTop() + 100; // Take into account height of fixed menu
      jQuery(".containerTimeLine").each(function() {
        var c_top = jQuery(this).offset().top;
        var c_bot = c_top + jQuery(this).height();
        var hash = jQuery(this).attr("id");
        var li_tag = jQuery('a[hrefjQuery="' + hash + '"]').parent();
        if ((top > c_top) && (top < c_bot)) {
          
          if (li_tag.hasClass("active")) {
            return false;
          }
          else {
            li_tag.siblings().andSelf().removeClass("active");
            li_tag.addClass("active");
            jQuery(".timeLine ul li.active a").slideToPos();  
        	}
        }
      });
    });
	
	}); // end of document ready
})(jQuery); // end of jQuery name space