/*
* Name: LinkIt
* Author: Jeroen Verstegen
* Vesion 0.1.0
* license: MIT
*/

(function($){
  $.fn.linkIt = function(options){
    //default settings
    var settings = $.extend ({
      href: null,
      text: null,
      target: "_blank"
    }, options);
    // validate , check link is valid
    if(settings.href === null){
      // If something is wrong warn in the console
      console.log("You have to pass the href option");
      return this;
    }
    var str = '<a target="' + settings.target
              + '" href="'+ settings.href
              +'"></a>'

    console.log(str);
    return this.each(function(){
      var object = $(this);

      if(settings.text === null){
        settings.text = object.text();
      }
      object.wrap('<a target="' + settings.target
                + '" href="'+ settings.href
                +'"></a>').text(settings.text);
    });
  }
}(jQuery));
