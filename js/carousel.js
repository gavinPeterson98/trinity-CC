$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:2,
            margin:16,
            stagePadding: 16
        },
        600:{
            items:3,
            margin:16,
            stagePadding: 16
        },
        1000:{
            items:5,
            margin:72,
            stagePadding: 72
        }
    }
})