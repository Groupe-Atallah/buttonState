(function( $ ){

  var methods = {
    deactivate : function( ) {      
        var $el = $(this),
            btnWidth = $el.data("width") ? $el.data("width") : $el.outerWidth();
        if(methods.isDeactivated.call(this)) return true;
        var content = ($el.find(".btnText").length) ? $el.find(".btnText").html() : $el.html(),
          btnContent = "<span class='btnText' style='display:none;'>"+content+"</span>";

      $el
        .data('width',btnWidth)
        .addClass("loading")
        .css("min-width", btnWidth)
        .html(btnContent+"<span class='loader'><img src='/images/loading_white_on_black.gif' /></span>");
        
        return false;
    },
    isDeactivated : function( ) {
      return $(this).hasClass("loading");
    },
    activate : function( content ) {   
      var $el = $(this); 
      $el
        .removeClass("loading")
        .css("min-width", '')
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
      $.error( 'Method ' +  method + ' does not exist on buttonState' );
    }    
  };

})( jQuery );