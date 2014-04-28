(function( $ ){

  var methods = {
    deactivate : function( ) {      
      var $el = $(this),
          btnWidth = $el.data("width") ? $el.data("width") : $el.outerWidth();
      if(methods.isDeactivated.call(this)) return true;
      var btnContent = "<span class='btnText' style='display:none;'>"+$el.html()+"</span>";

      $el
        .data('width',btnWidth)
        .addClass("disabled")
        .css("width", btnWidth)
        .html(btnContent+"<span class='loader'><img src='/assets/images/loader_btn.gif' /></span>");
        
        return false;
    },
    isDeactivated : function( ) {
      return $(this).hasClass("disabled");
    },
    activate : function( content ) {   
      var $el = $(this); 
      $el
        .removeClass("disabled")
        .find(".loader").remove();
      $el.find(".btnText").css("display","block");
    }
  };

  $.fn.buttonState = function( method ) {
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.deactivate.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.btnDeactivate' );
    }    
  };

})( jQuery );