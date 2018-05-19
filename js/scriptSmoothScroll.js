$(function(){
    //zmiana koloru menu nav kiedy scrollujemy brakePoint 100px
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
         $("#main-nav").css("background-color","white");
         $(".nav-link").css("color", "black");   
        }
        else {
            $("#main-nav").css("background-color","");
            $(".nav-link").css("color", "white");  
        }   
        
        
    });

  //smooth scrolling 
  $(document).on('click', '.Smooth', function(event){
	    event.preventDefault();
	    $('body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 800);
	});
});