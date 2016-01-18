(function($) {
$.fn.arrowFade = function(options) 
{
    var settings = $.extend(
    {
            speed: "slow",
            opacity: 0.1,
            toOpacity: 0.5
        }, options );
    
    $(this).fadeTo(settings.speed, settings.opacity);

    this.mouseenter(OnEnter).mouseleave(OnLeave); 

        function OnEnter() 
    {
        $(this).fadeTo(settings.speed, settings.toOpacity); 
    }
    function OnLeave() 
    {
        $(this).fadeTo(settings.speed, settings.opacity); 
    }
}
})(jQuery);



