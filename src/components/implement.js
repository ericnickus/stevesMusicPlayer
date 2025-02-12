$(document).ready(function() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    $('.myHTMLvideo').click(function() {
      // if (this.paused) {
      //   this.play();
      //   $('#play').css('display','none');
      // } else {
      //   this.pause();
      //   $('#play').css('display','block');
      // }
        this.paused ? this.play() : this.pause();
    });

    //join form on the contact page
    if ($('#lead-join').length) {
       var form = document.getElementById('lead-join');
       var formConditions = {
           // LeadFirstName: {
           //     empty: 'Required!'
           // },
           // LeadLastName: {
           //     empty: 'Required!'
           // },
           LeadEmail: {
               empty: 'Required!',
               regex: {
                   match: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
                   message: 'Please enter a valid email'
               }
           },
           // LeadEmailconfirm: {
           //     empty: 'Required!',
           //     match: {
           //         LeadEmail: 'Email addresses do not match.'
           //     }
           // }
           // LeadInterest: {
           //     empty: 'Please choose Interest Area'
           // },

           // LeadMessage: {
           //     empty: 'Please enter your inquiry'
           // },
       };
       var homeValidate = new pureValidate(formConditions,form);
    }

    ///////////////////////  navigation smoothscroll  /////////////////////////////
    if ($('.homeAnchor').length) {
        $('.homeAnchor').click(function() {
              var target = $('#');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top -50
                }, 1000);
                return false;
              }
            }
        );
    }

    if ($('.entertainmentAnchor').length) {
        $('.entertainmentAnchor').click(function() {
              var target = $('#' + $(this).data('scroller'));
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top -50
                }, 1000);
                return false;
              }
            }
        );
    }

    if ($('.residentialAnchor').length) {
        $('.residentialAnchor').click(function() {
              var target = $('#' + $(this).data('scroller'));
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top -50
                }, 1000);
                return false;
              }
            }
        );
    }

    if ($('.commercialAnchor').length) {
        $('.commercialAnchor').click(function() {
              var target = $('#' + $(this).data('scroller'));
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top -50
                }, 1000);
                return false;
              }
            }
        );
    }

    if ($('.sustainabilityAnchor').length) {
        $('.sustainabilityAnchor').click(function() {
              var target = $('#' + $(this).data('scroller'));
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top -50
                }, 1000);
                return false;
              }
            }
        );
    }

    if ($('.teamAnchor').length) {
        $('.teamAnchor').click(function() {
              var target = $('#' + $(this).data('scroller'));
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top -50
                }, 1000);
                return false;
              }
            }
        );
    }

    if ($('.locationAnchor').length) {
        $('.locationAnchor').click(function() {
              var target = $('#' + $(this).data('scroller'));
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top -50
                }, 1000);
                return false;
              }
            }
        );
    }

    if ($('.pressAnchor').length) {
        $('.pressAnchor').click(function() {
              var target = $('#' + $(this).data('scroller'));
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top -50
                }, 1000);
                return false;
              }
            }
        );
    }

    if ($('.contactAnchor').length) {
        $('.contactAnchor').click(function() {
              var target = $('#' + $(this).data('scroller'));
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top -50
                }, 1000);
                return false;
              }
            }
        );
    }

    /////////////// listing-detail page Main-slider
    if ($('#listingDMainSlider').length) {

        var options = {
        items:1,
        loop:true,
        nav:true,
        dots:true,
        navText: [ '<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>' ]
        // autoplay:true,
        // autoplayTimeout:3000,
        // autoplayHoverPause:true,
        // navContainer: '#listingDMainSlider-nav-controls',
        // dotsContainer: '#listingDMainSlider-owl-dots'
        }

        var owlrd = $('#listingDMainSlider ul');

            owlrd.on('initialized.owl.carousel', function() {
                var images = $('#listingDMainSlider img');
                images.each(function () {
                var widthOfSlideshow = $('#listingDMainSlider').width();
                    if($(window).width() >= 768){
                        var heightOfSlideshow = widthOfSlideshow/1.8;
                    }else{
                        var heightOfSlideshow = widthOfSlideshow/1.560;
                    }
                    $('#listingDMainSlider').css('height',heightOfSlideshow);
                    var imgHeight = ($(this).height() * widthOfSlideshow ) / $(this).width();
                    var newHeight = (($(this).width() * heightOfSlideshow) / widthOfSlideshow);
                    $('#listingDMainSlider li').css('height', newHeight);
                    $(this).css('position','absolute');
                    $(this).css('top','50%');
                    $(this).css('left','50%');
                    $(this).css('transform','translateX(-50%) translateY(-50%)');
                    $(this).css('width','auto');
                    $(this).css('max-height','100%');
                });
            })

            owlrd.on('loaded.owl.carousel', function() {
                images.each(function () {
                    $(this).css('position','absolute');
                    $(this).css('top','50%');
                    $(this).css('left','50%');
                    $(this).css('transform','translateX(-50%) translateY(-50%)');
                    $(this).css('max-width','100%');
                    $(this).css('max-height','100%');
                });
            })

            owlrd.owlCarousel(options);

    }



    ////// height Wrapper, slider, content and halfBoxes /////////
    if($(window).width() >= 790){
        var wrapperH = $(window).width()/2;
    } else {
        var wrapperH = $(window).width();
    }
    $('.wrapper').css('height',wrapperH);
    $('.teamWrapper').css('height','auto');
    $('.content').css('height',wrapperH);
    $('.content').css('width',wrapperH);
    $('.halfContent').css('width',wrapperH);
    $('.halfContent').css('height',(wrapperH/2));
    $('.box').css('width',(wrapperH/2));
    $('.box').css('height',(wrapperH/2));
    $('.singleImage').css('width',(wrapperH/2));
    $('.singleImage').css('height',(wrapperH/2));
    $('.ProgressT').css('top',(-((wrapperH/4)+14)));
    $('.contentLogo').css('width',(wrapperH/2));
    $('.boxLogo').css('width',((wrapperH*2)/6));


    //////// each sections title margin ////
    ////// team section wrapper height //////
    var numBoxs = $('.teamWrapper').children('div.box').length;
    var numRemoveBoxs = $('.teamWrapper').children('div.remove').length;
    var totalBoxs = numBoxs-numRemoveBoxs;
    var boxHeight = $('.box').height();

    if($(window).width() < 790){


        var TitleMargin = $(window).width();
        $('div.eachSection.title').css('margin-top',TitleMargin);

        if ((totalBoxs % 2) === 0){
            var numRows = (totalBoxs/2);
        } else {
            var numRows = (Math.floor(totalBoxs/2))+1;
            //window.alert(numRows);
        }
    } else {
            if ((totalBoxs % 4) === 0){
                var numRows = (totalBoxs/4);
            } else {
                var numRows = (Math.floor(totalBoxs/4))+1;
                //window.alert(numRows);
            }
          $('div.eachSection.title').css('margin-top','0px');
          $('div.eachSection.title').css('position','relative');
          // $('div.eachSection.locationTitle').css('margin-top','0px');
          $('div.eachSection.locationTitle').css('position','relative');

    }
    var teamWrapperH = (numRows*boxHeight);
    $('.teamWrapper').css('height',teamWrapperH);


    /////////////////////// Navigation Active item colors ///////////////////////
    if ($('#header').length) {

        var homeAlert = $("body, html").offset().top
        var entertainmentAlert = $("#entertainment").offset().top
        var residentialAlert = $("#residential").offset().top
        var commercialAlert = $("#commercial").offset().top
        var sustainabilityAlert = $("#sustainability").offset().top
        var teamAlert = $("#team").offset().top
        var locationAlert = $("#location").offset().top
        var pressAlert = $("#press").offset().top
        var contactAlert = $("#contact").offset().top


        if (homeAlert == 0) {
            $('#homeIcon').addClass("blueNav");}

        $(window).scroll(function(){

            if ($(window).scrollTop() > homeAlert -(wrapperH/2)) {
               $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
               $('#homeIcon').addClass("blueNav");}

            if ($(window).scrollTop() > entertainmentAlert -(wrapperH/2)) {
               $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
               $('#navEntertainment').addClass("entertainmentActive");}

            if ($(window).scrollTop() > residentialAlert -(wrapperH/2)) {
               $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
               $('#navResidential').addClass("residentialActive");}

            if ($(window).scrollTop() > commercialAlert -(wrapperH/2)) {
               $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
               $('#navCommercial').addClass("commercialActive");}

           if ($(window).scrollTop() > sustainabilityAlert -(wrapperH/2)) {
              $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
              $('#navSustainability').addClass("sustainabilityActive");}

            if ($(window).scrollTop() > teamAlert -(teamWrapperH/2)) {
               $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
               $('#navTeam').addClass("teamActive");}

            if ($(window).scrollTop() > locationAlert -(wrapperH/2)) {
               $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
               $('#navLocation').addClass("locationActive");}

            if ($(window).scrollTop() > pressAlert -(wrapperH/2)) {
               $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
               $('#navPress').addClass("pressActive");}

            if ($(window).scrollTop() > contactAlert -(wrapperH/2)) {
               $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
               $('#navContact').addClass("contactActive");}

        });

    }



    ////////// Venobox Lighbox for Join us ////////////

    if ($('.venoboxJoinUs').length) {
        if ($(window).width() > 700) {

            var varwidth = '480px';
            var varheight = '480px';

        } else {

            var varwidth = '95%';
            var varheight = ($(window).width()*95)/100;
        }

            $(".venoboxJoinUs").colorbox({iframe:true, width: varwidth, height:varheight, fixed:true});
    }

    // if ($('#radious').length) {
    //   $('#cboxWrapper').css('border-radius','0 100px 0 100px');
    // }

    ////////// Venobox Lighbox for press ////////////

    if ($('.venoboxPress').length) {
        if($(window).width() >= 760){
            var varwidth = '700px';
            var varheight = '700px';
        } else {
          if($(window).width() >= 500){
              var varwidth = '350px';
              var varheight = '350px';
          } else {
            var varwidth = '288px';
            var varheight = '288px';
          }
        }
            $(".venoboxPress").colorbox({iframe:true, width: varwidth, height:varheight, fixed:true});
    }

    //if ($('.press_popup').length) {
        // if($(window).width() >= 790){
        //     $('.box_popup').css("height", "350px !important");
        // } else if ($(window).width() < 500){
        //     $('.box_popup').css("height", "144px !important");
        // } else {

        //       $('.box_popup').css("height", "175px !important");



        // }
   // }

    //////////// Home slider height and width /////////////////
     if ($('#featured-slider').length) {
        //if ($(window).width() > 500 ) {

            $('.customHeight').css("height", wrapperH);
            $('.customHeight').css("width", wrapperH);
            //$('#listing-slider ul.owl-carousel').css("width", wrapperH);
            //$('.liSlider').css("width", wrapperH);
            $('.slider').css("height", wrapperH);
            $('.slider').css("width", wrapperH);
            var heightOfSlideshow = $('#featured-slider').height();
            $('#featured-slider li').css('height', heightOfSlideshow);



       // } else {
            // var sliderH = ($(window).height() -110);
            // $('.fullHeight').css("height", sliderH);
       // }

    }

    ///Entertainment slider height and width
     if ($('#entertainment-slider').length) {
            $('.customHeight').css("height", wrapperH);
            $('.customHeight').css("width", wrapperH);
            $('.slider').css("height", wrapperH);
            $('.slider').css("width", wrapperH);
            var heightOfSlideshow = $('#entertainment-slider').height();
            $('#entertainment-slider li').css('height', heightOfSlideshow);
    }

    ///Residential slider height and width
     if ($('#residential-slider').length) {
            $('.customHeight').css("height", wrapperH);
            $('.customHeight').css("width", wrapperH);
            $('.slider').css("height", wrapperH);
            $('.slider').css("width", wrapperH);
            var heightOfSlideshow = $('#residential-slider').height();
            $('#residential-slider li').css('height', heightOfSlideshow);
    }

    ///Commercial slider height and width
     if ($('#commercial-slider').length) {
            $('.customHeight').css("height", wrapperH);
            $('.customHeight').css("width", wrapperH);
            $('.slider').css("height", wrapperH);
            $('.slider').css("width", wrapperH);
            var heightOfSlideshow = $('#commercial-slider').height();
            $('#commercial-slider li').css('height', heightOfSlideshow);
    }

    ///Sustainability Video Section
    //height and width
     if ($('#sustainability-slider').length) {
            $('.customHeight').css("height", wrapperH);
            $('.customHeight').css("width", wrapperH);
            $('.slider').css("height", wrapperH);
            $('.slider').css("width", wrapperH);
            var heightOfSlideshow = $('#sustainability-slider').height();
            $('#sustainability-slider li').css('height', heightOfSlideshow);
            $('#sustainability-slider video').css('width', wrapperH);
            var heightOfSliderVideo = $('#sustainability-slider video').height();
            var sliderVideoMargin = (wrapperH-heightOfSliderVideo)/2;
            $('#sustainability-slider video').css('margin-top', sliderVideoMargin);
            $('#sustainability-slider video').css('margin-bottom', sliderVideoMargin);


            // var loadLeft = (wrapperH/2)-50;
            // var loadtop = -(wrapperH/2)-50;
            // $('#playBut').css('position','relative');
            // $('#playBut').css('left',loadLeft);
            // $('#playBut').css('top',loadtop);
            // $('#playBut').css('left',loadLeft);


            var loadtop = -(wrapperH)-13;
            var loadHeightWidth = wrapperH;
            $('#playBut').css('position','relative');
            $('#playBut').css('top',loadtop);
            $('#playBut').css('height',(wrapperH+27));
            $('#playBut').css('width',wrapperH);


             //test for check when the video end
             var sustainVideo = document.getElementById("sustainability-videoPlayer");
             // Buttons
             var sustainPlayBut = document.getElementById("playBut");

            // play button functionality
          //  sustainVideo.addEventListener("ended", function(e) {
              // if(!e) { e = window.event;
             //  }
             //  else {
              
            //    $('#playBut').css('display','block');
             //  sustainPlayBut.addEventListener("click", function() {
             //   sustainVideo.play();
                // $('#playBut').css('display','none');
            //   }
           // });

            // Video playpause functionality
           // sustainVideo.addEventListener("click", function() {
           //    if ($("#sustainability-videoPlayer").get(0).paused) {
            //   $('#playBut').css('display','none');
              //    $("#sustainability-videoPlayer").get(0).play();
             //  } else {
             //      $("#sustainability-videoPlayer").get(0).pause();
               //    $('#playBut').css('display','block');
           //   }
         //   });


           // sustainPlayBut.addEventListener("click", function() {
            //  sustainVideo.play();
            //  $('#playBut').css('display','none');
          //  });

    }

    ///press slider height and width
     if ($('#press-slider').length) {
            $('.customHeight').css("height", wrapperH);
            $('.customHeight').css("width", wrapperH);
            $('.slider').css("height", wrapperH);
            $('.slider').css("width", wrapperH);
            var heightOfSlideshow = $('#press-slider').height();
            $('#press-slider li').css('height', heightOfSlideshow);
    }

    ///location slider height and width
     if ($('#location').length) {
            $('.slider').css("height", wrapperH);
            $('.slider').css("width", wrapperH);
            $('.map-container').css("height", wrapperH);
    }

    ///Contact slider height and width
    //  if ($('#contact-slider').length) {
    //         $('.customHeight').css("height", wrapperH);
    //         $('.customHeight').css("width", wrapperH);
    //         $('.slider').css("height", wrapperH);
    //         $('.slider').css("width", wrapperH);
    //         var heightOfSlideshow = $('#contact-slider').height();
    //         $('#contact-slider li').css('height', heightOfSlideshow);
    // }


    /************ Sliders *****************/
    // Home Slider
    if ($('#featured-slider').length) {
            var slider = $('#featured-slider ul.owl-carousel');

            slider.owlCarousel({
                responsive:{
                            0:{
                                    items:1
                            },
                            600:{
                                    items:1
                            },
                            960:{
                                    items:1
                            },
                            1200:{
                                    items:1
                            },
                            5000:{
                                    items:1
                            }
                    },
                    loop:true,
                    nav:true,
                    dots:false,
                    smartSpeed:650,
                    autoplay:true,
                    autoplayTimeout:7000,
                    autoplayHoverPause:true,
                    singleItem: true,
                    thumbs: false,
                    navContainer: '#nav-controls'
            });
    }

    // Entertainment Slider
    if ($('#entertainment-slider').length) {
            var slider = $('#entertainment-slider ul.owl-carousel');

            slider.owlCarousel({
                responsive:{
                            0:{
                                    items:1
                            },
                            600:{
                                    items:1
                            },
                            960:{
                                    items:1
                            },
                            1200:{
                                    items:1
                            },
                            5000:{
                                    items:1
                            }
                    },
                    loop:true,
                    nav:true,
                    dots:false,
                    smartSpeed:650,
                    autoplay:true,
                    autoplayTimeout:7000,
                    autoplayHoverPause:true,
                    singleItem: true,
                    thumbs: false,
                    navContainer: '#entertainment-nav-controls'
            });
    }

    // Residential Slider
    if ($('#residential-slider').length) {
            var slider = $('#residential-slider ul.owl-carousel');

            slider.owlCarousel({
                responsive:{
                            0:{
                                    items:1
                            },
                            600:{
                                    items:1
                            },
                            960:{
                                    items:1
                            },
                            1200:{
                                    items:1
                            },
                            5000:{
                                    items:1
                            }
                    },
                    loop:true,
                    nav:true,
                    dots:false,
                    smartSpeed:650,
                    autoplay:true,
                    autoplayTimeout:7000,
                    autoplayHoverPause:true,
                    singleItem: true,
                    thumbs: false,
                    navContainer: '#residential-nav-controls'
            });
    }

    // Commercial Slider
    if ($('#commercial-slider').length) {
            var slider = $('#commercial-slider ul.owl-carousel');

            slider.owlCarousel({
                responsive:{
                            0:{
                                    items:1
                            },
                            600:{
                                    items:1
                            },
                            960:{
                                    items:1
                            },
                            1200:{
                                    items:1
                            },
                            5000:{
                                    items:1
                            }
                    },
                    loop:true,
                    nav:true,
                    dots:false,
                    smartSpeed:650,
                    autoplay:true,
                    autoplayTimeout:7000,
                    autoplayHoverPause:true,
                    singleItem: true,
                    thumbs: false,
                    navContainer: '#commercial-nav-controls'
            });
    }

    // Sustainability Slider
    if ($('#sustainability-slider').length) {
            var slider = $('#sustainability-slider ul.owl-carousel');

            slider.owlCarousel({
                responsive:{
                            0:{
                                    items:1
                            },
                            600:{
                                    items:1
                            },
                            960:{
                                    items:1
                            },
                            1200:{
                                    items:1
                            },
                            5000:{
                                    items:1
                            }
                    },
                    loop:true,
                    nav:true,
                    dots:false,
                    smartSpeed:650,
                    autoplay:true,
                    autoplayTimeout:7000,
                    autoplayHoverPause:true,
                    singleItem: true,
                    thumbs: false,
                    navContainer: '#sustainability-nav-controls'
            });
    }

    // Sustainability Slider
    if ($('#press-slider').length) {
            var slider = $('#press-slider ul.owl-carousel');

            slider.owlCarousel({
                responsive:{
                            0:{
                                    items:1
                            },
                            600:{
                                    items:1
                            },
                            960:{
                                    items:1
                            },
                            1200:{
                                    items:1
                            },
                            5000:{
                                    items:1
                            }
                    },
                    loop:true,
                    nav:true,
                    dots:false,
                    smartSpeed:650,
                    autoplay:true,
                    autoplayTimeout:7000,
                    autoplayHoverPause:true,
                    singleItem: true,
                    thumbs: false,
                    navContainer: '#press-nav-controls'
            });
    }

    // Contact Slider
    // if ($('#contact-slider').length) {
    //         var slider = $('#contact-slider ul.owl-carousel');

    //         slider.owlCarousel({
    //             responsive:{
    //                         0:{
    //                                 items:1
    //                         },
    //                         600:{
    //                                 items:1
    //                         },
    //                         960:{
    //                                 items:1
    //                         },
    //                         1200:{
    //                                 items:1
    //                         },
    //                         5000:{
    //                                 items:1
    //                         }
    //                 },
    //                 loop:true,
    //                 nav:true,
    //                 dots:false,
    //                 smartSpeed:650,
    //                 autoplay:true,
    //                 autoplayTimeout:7000,
    //                 autoplayHoverPause:true,
    //                 singleItem: true,
    //                 thumbs: false,
    //                 navContainer: '#contact-nav-controls'
    //         });
    // }


    /***** RESPONSIVE NAV ******/

    $('#plus').click(function(){
        if($('.myClose').length == 0){

            if($('#responsiveNav').length ){
                var height = $(window).height();
                $('#responsiveNav').css('height',height);
            }
            $('#responsiveNav').toggleClass('dropdown');
            $('#plus').addClass('myClose');
        } else {
            $('#responsiveNav').removeClass('dropdown');
            $('#responsiveNav').css('height','45px');
            $('#plus').removeClass('myClose');
        }

    });

    $('#responsiveNav ul').click(function(){
        $('#responsiveNav').removeClass('dropdown');
        $('#responsiveNav').css('height','45px');
    });

    //Header Transition
    if ($('header').length) {
        $(window).on("scroll", function() {
            if ($(window).width() < 675) {
                if($(window).scrollTop() ) {
                    $('#video-homepage').css('Transition','margin-top 0s linear');
                    $('#video-homepage').css('-webkit-transition','margin-top 0s linear');
                    $('#video-homepage').css('-moz-transition','margin-top 0s linear');
                    $('#video-homepage').css('-o-transition','margin-top 0s linear');
                    $('#video-homepage').css('-ms-transition','margin-top 0s linear');
                    $('#video-homepage').css('margin-top','45px');
                    $('#video-controls').css('top','150px');
                    $('.topWrap').css('Transition','display 1s ease-in-out');
                    $('.topWrap').css('-webkit-transition','display 1s ease-in-out');
                    $('.topWrap').css('-moz-transition','display 1s ease-in-out');
                    $('.topWrap').css('-o-transition','display 1s ease-in-out');
                    $('.topWrap').css('-ms-transition','display 1s ease-in-out');
                    $('.topWrap').css('display','none');
                    $('header').css('padding-top','45px');
                    $('#responsiveNav').css('margin-bottom','0px');
                    $('#menuLogo').css('display','block');
                } else {
                    $('#video-homepage').css('Transition','margin-top 0s linear');
                    $('#video-homepage').css('-webkit-transition','margin-top 0s linear');
                    $('#video-homepage').css('-moz-transition','margin-top 0s linear');
                    $('#video-homepage').css('-o-transition','margin-top 0s linear');
                    $('#video-homepage').css('-ms-transition','margin-top 0s linear');
                    $('#video-homepage').css('margin-top','180px');
                    $('#video-controls').css('top','250px');
                    $('.topWrap').css('Transition','display 1s ease-in-out');
                    $('.topWrap').css('-webkit-transition','display 1s ease-in-out');
                    $('.topWrap').css('-moz-transition','display 1s ease-in-out');
                    $('.topWrap').css('-o-transition','display 1s ease-in-out');
                    $('.topWrap').css('-ms-transition','display 1s ease-in-out');
                     $('.topWrap').css('display','block');
                     $('header').css('padding-top','20px');
                     $('#responsiveNav').css('margin-bottom','15px');
                     $('#menuLogo').css('display','none');
                }
            } else {
                if($(window).scrollTop() ) {
                    $('#video-homepage').css('Transition','margin-top 0s linear');
                    $('#video-homepage').css('-webkit-transition','margin-top 0s linear');
                    $('#video-homepage').css('-moz-transition','margin-top 0s linear');
                    $('#video-homepage').css('-o-transition','margin-top 0s linear');
                    $('#video-homepage').css('-ms-transition','margin-top 0s linear');
                    $('#video-homepage').css('margin-top','51px');
                    $('.topWrap').css('Transition','display 1s ease-in-out');
                    $('.topWrap').css('-webkit-transition','display 1s ease-in-out');
                    $('.topWrap').css('-moz-transition','display 1s ease-in-out');
                    $('.topWrap').css('-o-transition','display 1s ease-in-out');
                    $('.topWrap').css('-ms-transition','display 1s ease-in-out');
                    $('.topWrap').css('display','none');
                    $('header').css('padding-top','0');
                    $('#nav').css('margin-top','0');
                } else {
                    $('#video-homepage').css('Transition','margin-top 0s linear');
                    $('#video-homepage').css('-webkit-transition','margin-top 0s linear');
                    $('#video-homepage').css('-moz-transition','margin-top 0s linear');
                    $('#video-homepage').css('-o-transition','margin-top 0s linear');
                    $('#video-homepage').css('-ms-transition','margin-top 0s linear');
                    $('#video-homepage').css('margin-top','150px');
                    $('.topWrap').css('Transition','display 1s ease-in-out');
                    $('.topWrap').css('-webkit-transition','display 1s ease-in-out');
                    $('.topWrap').css('-moz-transition','display 1s ease-in-out');
                    $('.topWrap').css('-o-transition','display 1s ease-in-out');
                    $('.topWrap').css('-ms-transition','display 1s ease-in-out');
                     $('.topWrap').css('display','block');
                     $('#nav').css('margin-top','20px');
                     $('header').css('padding-top','20px');
                }

            }
        });
    }

    //Contact form on the contact page
    if ($('#lead-contact-us').length) {
       var form = document.getElementById('lead-contact-us');
       var formConditions = {
           LeadFirstName: {
               empty: 'Required!'
           },
           LeadLastName: {
               empty: 'Required!'
           },
           LeadEmail: {
               empty: 'Required!',
               regex: {
                   match: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
                   message: 'Please enter a valid email'
               }
           },
           LeadEmailconfirm: {
               empty: 'Required!',
               match: {
                   LeadEmail: 'Email addresses do not match.'
               }
           },
           // LeadInterest: {
           //     empty: 'Please choose Interest Area'
           // },

           // LeadMessage: {
           //     empty: 'Please enter your inquiry'
           // },
       };
       var homeValidate = new pureValidate(formConditions,form);
    }

});


$( window ).ready(function() {

    //// video display and controls positions
    if($(window).width() < 676){
        var loadLeft = ($('video').width()/2)-95;
        var loadtop = ($('video').height()/2)-50+180;
        if($(window).width() < 450){
          var loadLeft = ($('video').width()/2)-75;
          var loadtop = ($('video').height()/2)-50+230;
        }
        $('#video-controls').css('top','250px');
        $('#video-controls').css('left','0px');

    } else {
        var loadLeft = ($('video').width()/2)-190;
        var loadtop = ($('video').height()/2);
        $('#video-controls').css('top','160px');
        $('#video-controls').css('left','0px');
    }
    $('#display').css('top',loadtop);
    $('#display').css('left',loadLeft);




  if($('#video-homepage').length && $('#video-contecnt').length && $('#video-controls').length && $('#mute').length && $('#display').length){
             document.getElementById('video-contecnt').style.cssText = 'position: relative; height:auto;';
        // Video
    // var videoContentHeight = $('video-homepage').height();
    // $('#video-contecnt').css('height',videoContentHeight+'px');
     var videoControls = document.getElementById("video-controls");
     var video = document.getElementById("video-homepage");
     // Buttons
     var muteButton = document.getElementById("mute");
     var fullScreenButton = document.getElementById("full-screen");
     var exitFullScreenButton = document.getElementById("exit-screen");
     var msg = document.getElementById("display");
     //var replay = document.getElementById('video-homepage');
     $('#display').css('display','none');
     // Sliders

    // Event listener for the mute button
     muteButton.addEventListener("click", function() {
       if (video.muted == false) {
         // Mute the video
         video.muted = true;

         // Update the button text
         muteButton.innerHTML = "<img src=\'./img/mute.png\'>";
       } else {
         // Unmute the video
         video.muted = false;

         // Update the button text
         muteButton.innerHTML = "<img src=\'./img/sound.png\'>";
       }
     });


      //test for check when the video end
     video.addEventListener("ended", function(e) {
        if(!e) { e = window.event;
        }
        else {
        //alert("Video Finished");
         $('#display').css('display','block');
        msg.addEventListener("click", function() {
          video.play();
          $('#display').css('display','none');
        });
        }
     });

     if (document.addEventListener)
    {
        document.addEventListener('webkitfullscreenchange', exitHandler, false);
        document.addEventListener('mozfullscreenchange', exitHandler, false);
        document.addEventListener('fullscreenchange', exitHandler, false);
        document.addEventListener('MSFullscreenChange', exitHandler, false);
    }


     // Event listener for the full-screen button
     fullScreenButton.addEventListener("click", function() {
       if (video.requestFullscreen) {
         video.requestFullscreen();  // Chrome and Safari
            video.setAttribute("controls","controls");
       } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen(); // Firefox
          video.setAttribute("controls","controls");
       } else if (video.webkitRequestFullscreen) {
         video.webkitRequestFullscreen ();  // Chrome and Safari
         video.setAttribute("controls","controls");
       }
     });

        }

        function exitHandler()
    {
        if (document.webkitIsFullScreen || !document.mozFullScreen || (document.msFullscreenElement !== null && typeof document.msFullscreenElement !== 'undefined'))
        {
            //alert(document.webkitIsFullScreen || (!document.mozFullScreen) || document.msFullscreenElement !== null);
            //alert(document.webkitIsFullScreen);
            //alert(!document.mozFullScreen);
            //alert(document.msFullscreenElement !== null && document.msFullscreenElement !== 'undefined');
             video.removeAttribute("controls")
        }
    }
  });


$(window).bind('resize',function() {

  //// video display and controls positions
  if($(window).width() < 676){
      var loadLeft = ($('video').width()/2)-95;
      var loadtop = ($('video').height()/2)-50+180;
      if($(window).width() < 450){
        var loadLeft = ($('video').width()/2)-75;
        var loadtop = ($('video').height()/2)-50+230;
      }
      $('#video-controls').css('top','250px');
      $('#video-controls').css('left','0px');

  } else {
      var loadLeft = ($('video').width()/2)-190;
      var loadtop = ($('video').height()/2);
      $('#video-controls').css('top','160px');
      $('#video-controls').css('left','0px');

  }
  $('#display').css('top',loadtop);
  $('#display').css('left',loadLeft);


    ////// height Wrapper, slider, content and halfBoxes /////////
    if($(window).width() >= 790){
        var wrapperH = $(window).width()/2;

    } else {
        var wrapperH = $(window).width();
    }
    $('.wrapper').css('height',wrapperH);
    $('.content').css('height',wrapperH);
    $('.content').css('width',wrapperH);
    $('.halfContent').css('width',wrapperH);
    $('.halfContent').css('height',(wrapperH/2));
    $('.box').css('width',(wrapperH/2));
    $('.box').css('height',(wrapperH/2));
    $('.singleImage').css('width',(wrapperH/2));
    $('.singleImage').css('height',(wrapperH/2));
    $('.ProgressT').css('top',(-((wrapperH/4)+14)));
    $('.contentLogo').css('width',(wrapperH/2));
    $('.boxLogo').css('width',((wrapperH*2)/6));


    //////// each sections title margin ////

    var numBoxs = $('.teamWrapper').children('div.box').length;
    var numRemoveBoxs = $('.teamWrapper').children('div.remove').length;
    var totalBoxs = numBoxs-numRemoveBoxs;
    var boxHeight = $('.box').height();

    if($(window).width() < 790){


        var TitleMargin = $(window).width();
        $('div.eachSection.title').css('margin-top',TitleMargin);

        if ((totalBoxs % 2) === 0){
            var numRows = (totalBoxs/2);
        } else {
            var numRows = (Math.floor(totalBoxs/2))+1;
            //window.alert(numRows);
        }
    } else {
            if ((totalBoxs % 4) === 0){
                var numRows = (totalBoxs/4);
            } else {
                var numRows = (Math.floor(totalBoxs/4))+1;
                //window.alert(numRows);
            }
          $('div.eachSection.title').css('margin-top','0px');
          $('div.eachSection.title').css('position','relative');
          // $('div.eachSection.locationTitle').css('margin-top','0px');
          $('div.eachSection.locationTitle').css('position','relative');

    }
    var teamWrapperH = (numRows*boxHeight);
    $('.teamWrapper').css('height',teamWrapperH);


    /////////////////////// Navigation Active item colors ///////////////////////
    if ($('#header').length) {
        var homeAlert = $("body, html").offset().top
        var entertainmentAlert = $("#entertainment").offset().top
        var residentialAlert = $("#residential").offset().top
        var commercialAlert = $("#commercial").offset().top
        var sustainabilityAlert = $("#sustainability").offset().top
        var teamAlert = $("#team").offset().top
        var locationAlert = $("#location").offset().top
        var pressAlert = $("#press").offset().top
        var contactAlert = $("#contact").offset().top


        if (homeAlert == 0) {
            $('#homeIcon').addClass("blueNav");}

        $(window).scroll(function(){

            if ($(window).scrollTop() > homeAlert -(wrapperH/2)) {
               $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
               $('#homeIcon').addClass("blueNav");}

            if ($(window).scrollTop() > entertainmentAlert -(wrapperH/2)) {
               $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
               $('#navEntertainment').addClass("entertainmentActive");}

            if ($(window).scrollTop() > residentialAlert -(wrapperH/2)) {
               $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
               $('#navResidential').addClass("residentialActive");}

            if ($(window).scrollTop() > commercialAlert -(wrapperH/2)) {
               $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
               $('#navCommercial').addClass("commercialActive");}

           if ($(window).scrollTop() > sustainabilityAlert -(wrapperH/2)) {
              $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
              $('#navSustainability').addClass("sustainabilityActive");}

            if ($(window).scrollTop() > teamAlert -(teamWrapperH/2)) {
               $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
               $('#navTeam').addClass("teamActive");}

            if ($(window).scrollTop() > locationAlert -(wrapperH/2)) {
               $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
               $('#navLocation').addClass("locationActive");}

            if ($(window).scrollTop() > pressAlert -(wrapperH/2)) {
               $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
               $('#navPress').addClass("pressActive");}

            if ($(window).scrollTop() > contactAlert -(wrapperH/2)) {
               $('.navAll').removeClass("blueNav entertainmentActive residentialActive commercialActive teamActive locationActive pressActive contactActive sustainabilityActive");
               $('#navContact').addClass("contactActive");}

        });

    }

    ///home slider height and width
     if ($('#featured-slider').length) {
            $('.customHeight').css("height", wrapperH);
            $('.customHeight').css("width", wrapperH);
            //$('#listing-slider ul.owl-carousel').css("width", wrapperH);
            //$('.liSlider').css("width", wrapperH);
            $('.slider').css("height", wrapperH);
            $('.slider').css("width", wrapperH);
            var heightOfSlideshow = $('#featured-slider').height();
            $('#featured-slider li').css('height', heightOfSlideshow);
    }

    ///Entertainment slider height and width
     if ($('#entertainment-slider').length) {
            $('.customHeight').css("height", wrapperH);
            $('.customHeight').css("width", wrapperH);
            //$('#listing-slider ul.owl-carousel').css("width", wrapperH);
            //$('.liSlider').css("width", wrapperH);
            $('.slider').css("height", wrapperH);
            $('.slider').css("width", wrapperH);
            var heightOfSlideshow = $('#entertainment-slider').height();
            $('#entertainment-slider li').css('height', heightOfSlideshow);
    }

    ///Residential slider height and width
     if ($('#residential-slider').length) {
            $('.customHeight').css("height", wrapperH);
            $('.customHeight').css("width", wrapperH);
            //$('#listing-slider ul.owl-carousel').css("width", wrapperH);
            //$('.liSlider').css("width", wrapperH);
            $('.slider').css("height", wrapperH);
            $('.slider').css("width", wrapperH);
            var heightOfSlideshow = $('#residential-slider').height();
            $('#residential-slider li').css('height', heightOfSlideshow);
    }

    ///Commercial slider height and width
     if ($('#commercial-slider').length) {
            $('.customHeight').css("height", wrapperH);
            $('.customHeight').css("width", wrapperH);
            //$('#listing-slider ul.owl-carousel').css("width", wrapperH);
            //$('.liSlider').css("width", wrapperH);
            $('.slider').css("height", wrapperH);
            $('.slider').css("width", wrapperH);
            var heightOfSlideshow = $('#commercial-slider').height();
            $('#commercial-slider li').css('height', heightOfSlideshow);
    }

    ///Sustainability slider height and width
     if ($('#sustainability-slider').length) {
            $('.customHeight').css("height", wrapperH);
            $('.customHeight').css("width", wrapperH);
            $('.slider').css("height", wrapperH);
            $('.slider').css("width", wrapperH);
            var heightOfSlideshow = $('#sustainability-slider').height();
            $('#sustainability-slider li').css('height', heightOfSlideshow);
            $('#sustainability-slider video').css('width', wrapperH);
            var heightOfSliderVideo = $('#sustainability-slider video').height();
            var sliderVideoMargin = (wrapperH-heightOfSliderVideo)/2;
            $('#sustainability-slider video').css('margin-top', sliderVideoMargin);
            $('#sustainability-slider video').css('margin-bottom', sliderVideoMargin);

            // var loadLeft = (wrapperH/2)-50;
            // var loadtop = -(wrapperH/2)-50;
            // $('#playBut').css('position','relative');
            // $('#playBut').css('top',loadtop);
            // $('#playBut').css('left',loadLeft);

            // var loadLeft = (wrapperH/2)-50;
            var loadtop = -(wrapperH)-13;
            var loadHeightWidth = wrapperH;
            $('#playBut').css('position','relative');
            $('#playBut').css('top',loadtop);
            $('#playBut').css('height',(wrapperH+27));
            $('#playBut').css('width',wrapperH);
            // $('#playBut').css('left',loadLeft);


            //test for check when the video end
            var sustainVideo = document.getElementById("sustainability-videoPlayer");
            // Buttons
            var sustainPlayBut = document.getElementById("playBut");

             // play button functionality
           //  sustainVideo.addEventListener("ended", function(e) {
              //  if(!e) { e = window.event;
             //   }
             //   else {
              //  //alert("Video Finished");
              //   $('#playBut').css('display','block');
              //  sustainPlayBut.addEventListener("click", function() {
                //  sustainVideo.play();
                //  $('#playBut').css('display','none');
               // });
            //  //  }
            // });

           //  sustainPlayBut.addEventListener("click", function() {
              // sustainVideo.play();
             //  $('#playBut').css('display','none');
            // });
    }

    ///press slider height and width
     if ($('#press-slider').length) {
            $('.customHeight').css("height", wrapperH);
            $('.customHeight').css("width", wrapperH);
            $('.slider').css("height", wrapperH);
            $('.slider').css("width", wrapperH);
            var heightOfSlideshow = $('#press-slider').height();
            $('#press-slider li').css('height', heightOfSlideshow);
    }

    ///location slider height and width
     if ($('#location').length) {
            $('.slider').css("height", wrapperH);
            $('.slider').css("width", wrapperH);
            $('.map-container').css("height", wrapperH);
    }

    ///Contact slider height and width
    //  if ($('#contact-slider').length) {
    //         $('.customHeight').css("height", wrapperH);
    //         $('.customHeight').css("width", wrapperH);
    //         $('.slider').css("height", wrapperH);
    //         $('.slider').css("width", wrapperH);
    //         var heightOfSlideshow = $('#contact-slider').height();
    //         $('#contact-slider li').css('height', heightOfSlideshow);
    // }



});

if ($('#location').length) {
    function initialize() {

      if ((($(window).width() > 790) && ($(window).width() < 1100)) || ($(window).width() < 550)){
          var zoomvalue = 14;
      } else {
          var zoomvalue = 15;
      }

      var mapOptions = {

        zoom: zoomvalue,
        scaleControl: false,
        scrollwheel: false,
        center: new google.maps.LatLng(33.005697, -96.724551),
        mapTypeId: google.maps.MapTypeId.ROADMAP

      };

      var bermudaTriangle;

      var map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

      // Define the LatLng coordinates for the polygon's path.
      var triangleCoords = [
        new google.maps.LatLng(33.0072,-96.73371),
        new google.maps.LatLng(33.00712,-96.72296),
        new google.maps.LatLng(33.00521,-96.72297),
        new google.maps.LatLng(33.00518,-96.72079),
        // new google.maps.LatLng(33.00725,-96.72087),
        // new google.maps.LatLng(33.00733,-96.72045),

        // new google.maps.LatLng(33.00773,-96.71948),
        // new google.maps.LatLng(33.00859,-96.71788),
        // new google.maps.LatLng(33.00886,-96.71585),
        // new google.maps.LatLng(33.00565,-96.71557),
        // new google.maps.LatLng(33.00496,-96.71582),
        // new google.maps.LatLng(33.00432,-96.71623),

        // new google.maps.LatLng(33.0045,-96.72027),
        new google.maps.LatLng(33.004541, -96.720736),

        new google.maps.LatLng(33.0045,-96.72624),
        new google.maps.LatLng(33.00435,-96.72927),
        new google.maps.LatLng(33.00435,-96.73228),
        new google.maps.LatLng(33.00516,-96.73305),
        new google.maps.LatLng(33.0061,-96.73363),
      ];

      var secondTriangleCoords = [
      //   new google.maps.LatLng(33.0072,-96.73371),
      //   new google.maps.LatLng(33.00712,-96.72296),
      //   new google.maps.LatLng(33.00521,-96.72297),
      //   new google.maps.LatLng(33.00518,-96.72079),
      //   new google.maps.LatLng(33.00725,-96.72087),
      //   new google.maps.LatLng(33.00733,-96.72045),
      //   new google.maps.LatLng(33.00773,-96.71948),
      //   new google.maps.LatLng(33.00859,-96.71788),
      //   new google.maps.LatLng(33.00886,-96.71585),
      //   new google.maps.LatLng(33.00565,-96.71557),
      //   new google.maps.LatLng(33.00496,-96.71582),
      //   new google.maps.LatLng(33.00432,-96.71623),
      //   new google.maps.LatLng(33.0045,-96.72027),
      //   new google.maps.LatLng(33.0045,-96.72624),
      //   new google.maps.LatLng(33.00435,-96.72927),
      //   new google.maps.LatLng(33.00435,-96.73228),
      //   new google.maps.LatLng(33.00516,-96.73305),
      //   new google.maps.LatLng(33.0061,-96.73363),

          new google.maps.LatLng(33.00518,-96.72079),


          new google.maps.LatLng(33.00725,-96.72087),
          new google.maps.LatLng(33.00733,-96.72045),

          new google.maps.LatLng(33.00773,-96.71948),
          new google.maps.LatLng(33.00859,-96.71788),
          new google.maps.LatLng(33.00886,-96.71585),
          new google.maps.LatLng(33.00565,-96.71557),
          new google.maps.LatLng(33.00496,-96.71582),
          new google.maps.LatLng(33.00432,-96.71623),

          new google.maps.LatLng(33.0045,-96.72027),


          new google.maps.LatLng(33.004541, -96.720736),
      ];

      // Construct the polygon.
      bermudaTriangle = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: '#BA5915',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#BA5915',
        fillOpacity: 0.35
      });

      bermudaTriangle.setMap(map);


      secondBermudaTriangle = new google.maps.Polygon({
        paths: secondTriangleCoords,
        strokeColor: '#499899',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#539899',
        fillOpacity: 0.35
      });

      secondBermudaTriangle.setMap(map);

    }

   // google.maps.event.addDomListener(window, 'load', initialize);
}