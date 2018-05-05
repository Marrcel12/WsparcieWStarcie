$(function(){
    //zmiana koloru menu nav kiedy scrollujemy brakePoint 100px
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
         $(".nav-link").css("color", "#673d3d");   
        }
        else {
            $(".nav-link").css("color", "white");  
        }
    });

  //smooth scrolling 
  $(document).on('click', 'a', function(event){
	    event.preventDefault();
	    $('body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 800);
	});
});