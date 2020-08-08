$('.owl-carousel').owlCarousel({
    rtl:false,
    loop:true,
    margin:40,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.nextbtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prevbtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})