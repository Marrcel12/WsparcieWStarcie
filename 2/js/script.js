$(function(){
$(window).scroll(function(){
if($(window).scrollTop() >= 50) {
    $("#main-nav").addClass("scroll");
    $("#main-nav").css({"transition": "all 0.3s"});
    
}
        else{
            $("#main-nav").removeClass("scroll");
        }
    });
    $("a").on('click'   ,function(e){
	    e.preventDefault();
        
	    $('body,html').animate({
	        scrollTop: $(this.hash).offset().top
	    }, 800);
	});
});
