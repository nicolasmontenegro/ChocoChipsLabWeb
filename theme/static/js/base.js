
//var elementPosition = $('#navbar-expand-xl').outerHeight(true);

$(window).scroll(function(){
        if($(window).scrollTop() > 0){
            $('.navbar-expand-xl').addClass("on-scroll");
        } else {
            $('.navbar-expand-xl').removeClass("on-scroll");
        }    
});