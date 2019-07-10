    // RIPPLES ON LANDING PAGE
$(document).ready(function() {
        $("#header-ripple, .info").ripples({
            dropRadius: 25,
            perturbance: 0.0000000000000000000000000000000000000000000007,
        });
    
    
    });

    // MAGNIFIC POPUP ON MENU ITEMS
$(document).ready(function() {
	$('#mag-popup').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Rooftop Tavern &copy</small>';
			}
		}
	});
});

    // // TOGGLER
    // $('.navbar-toggler').click(fuction(){
    //     $('.navbar-toggler').toggleClass('change')
        
    // })

    // STICKY NAVBAR
    $(window).scroll(function(){
        let position = $(this).scrollTop();

        if(position>= 718){
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        }
        else{
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
    })


    // BACK TO TOP
    $(window).scroll(function () {
        let position = $(this).scrollTop();

        if(position >= 718) {
            $('#back-to-top').addClass('scrollTop');
        } else {
            $('#back-to-top').removeClass('scrollTop');
        }
    });



    // SMOOTH SCROLL
    $('.nav-item a, .header-link, #back-to-top').click(function (link) {
        link.preventDefault();

        let target = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top-25
        },3000);

    });









