$(function(){
    
    $(document).on('click', 'a', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop:$($.attr(this, 'href')).offset().top - 150
        },500)
    })
    
    
    $(function scroll(){
         var $navbar = $('.row-nav').offset().top;
            $(window).scroll(function(){
            if($(window).scrollTop() >= $navbar){
              $('.row-nav').addClass('navigation-row')
            }else{
                $('.row-nav').removeClass('navigation-row');
            }
        })
    });
    
     var $overlay = $('.loading-page');

    $(window).on('load', function () {
        $overlay.hide();
    });
   
   
    
    
    
})
    
    
    
    
