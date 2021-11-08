      
      // navbar color change onscroll
      $(document).ready(function(){

     var checkScrollBar = function(){
       $('nav').css({
         backgroundColor: $(this).scrollTop() > 1 ?
           'rgb(0, 0, 0)' : 'rgba(0, 0, 0, 0.164)'

       })
     }
     $(window).on('load resize scroll', checkScrollBar)
     });


   