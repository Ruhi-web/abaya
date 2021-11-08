      
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
// carousal
$(document).ready(function(){
     $("#carousel-1").carousel({
        interval: 3000
      });
      
      $("#carousel-1.carousel .carousel-item").each(function() {
        const total = 3;
        let next = $(this).next();
      
        for (var i = 0; i < total - 1; i++) {
          if (!next.length) {
            next = $(this).siblings(":first");
          }
          next
            .children(":first-child")
            .clone()
            .appendTo($(this));
          next = next.next();
        }
      });
      
});