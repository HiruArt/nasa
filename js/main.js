$(document).ready(function () {
    if(window.innerWidth > 1024) {
        var scene = document.getElementsByClassName('paralax-1')[0];
        var parallax = new Parallax(scene);

        var scene = document.getElementsByClassName('paralax-2')[0];
        var parallax = new Parallax(scene);

        var scene = document.getElementsByClassName('paralax-3')[0];
        var parallax = new Parallax(scene);

        var scene = document.getElementsByClassName('paralax-4')[0];
        var parallax = new Parallax(scene);

        var scene = document.getElementsByClassName('paralax-5')[0];
        var parallax = new Parallax(scene);

        var scene = document.getElementsByClassName('paralax-6')[0];
        var parallax = new Parallax(scene);

        var scene = document.getElementsByClassName('paralax-7')[0];
        var parallax = new Parallax(scene);


        var rellax = new Rellax('.rellax');

    }
    AOS.init();


    // document.getElementById('deleteme').onclick = function() {
    //     parallax.destroy();
    //     parallax = null;
    //
    //     this.onclick = null;
    //     this.style.display = 'none';
    // };


    var ts;
    $(window).on('touchstart', function (e) {
        ts = $(document).scrollTop();
    });

    if(window.innerWidth > 1024){

        var animTop = false;
        flagScroll = false;

        // $(window).on('touchmove mousewheel wheel', function (e) {
        //
        //     let scroll = this.pageYOffset;
        //
        //     var secondBlock = $('.second-block').offset().top;
        //
        //     var delta = e.originalEvent.deltaY;
        //
        //
        //     console.log(scroll);
        //     console.log( $(this).scrollTop());
        //     console.log(this.scrollY);
        //     $('.top-rocket').css('transform', 'translate(-'+scroll/2+'%, -'+scroll/4+'%) rotate(-34.5deg)');
        //
        //
        //
        //     flagScroll = true;
        //     animTop = true;
        //
        //
        //
        // });
        var nScroll = 10;
        $(window).scroll(function () {
            let scroll = $(this).scrollTop();

            if(scroll > 0){
                $('.top-rocket').addClass('active');
            } else {
                $('.top-rocket').removeClass('active');
            }

            $('.top-rocket').css('transform', 'translate(-'+scroll/8.5+'%, -'+scroll/12+'%) rotate(-34.5deg)');
            $('.waves-2').css('transform', 'translate(-'+scroll/60+'%, -'+scroll/70+'%)');
            $('.waves-3').css('transform', 'translate(-'+scroll/80+'%, -'+scroll/60+'%)');


            if(scroll < 850){
                $('.b-wave').css('transform', 'translate(-'+scroll/90+'%, -'+scroll/70+'%)');
                $('.b-wave').css('opacity', 1);
            } else {
                nScroll == 0 ? scroll/30 : nScroll;
                $('.b-wave').css('transform', 'translate(-'+nScroll+'%, -'+scroll/70+'%)');
                $('.b-wave').css('opacity', 2.3 - (scroll*3) / 2500);
            }


            // if(window.innerWidth < 1600 ) {
                $('.top-block .inner-block').css('opacity', 1 - scroll / 550);

            // }

        });


















        // $(window).on('touchmove mousewheel wheel', function (e) {
        //
        //     if (flagScroll) return;
        //
        //     let height = this.innerHeight;
        //     let scroll = this.pageYOffset;
        //     let scrollDelta = e.originalEvent.deltaY;
        //
        //     var secondBlock = $('.second-block').offset().top;
        //
        //     var delta = e.originalEvent.deltaY;
        //     // console.log(height);
        //     // console.log(scroll);
        //     // console.log(scrollDelta);
        //     // console.log(secondBlock);
        //
        //
        //     if (delta > 0 && animTop == false){
        //
        //
        //         flagScroll = true;
        //         animTop = true;
        //
        //         $('.page-wrap').addClass('top-animate');
        //         $('.page-wrap').addClass('active ');
        //
        //         setTimeout(function () {
        //
        //             $('body').addClass('page--scroll');
        //             $('html,body').animate({
        //                 scrollTop: $('.second-block').offset().top
        //             }, 900, function () {
        //             });
        //         },600);
        //
        //         setTimeout(function () {
        //             $('.page-wrap').removeClass('active ');
        //         }, 1500);
        //
        //         setTimeout(function () {
        //             $('.page-wrap').removeClass('top-animate');
        //             $('.page-wrap').addClass('top');
        //             flagScroll = false;
        //         }, 2000);
        //
        //         setTimeout(function () {
        //             $('.page-wrap').removeClass('top');
        //         }, 2200);
        //
        //
        //
        //         // }
        //
        //     } else {
        //         if(scroll < secondBlock - 100 && flagScroll == false){
        //             console.log(222);
        //             animTop = false;
        //             flagScroll = true;
        //             $('html,body').animate({
        //                 scrollTop: 0
        //             }, 900, function () {
        //
        //                 $('body').removeClass('page--scroll');
        //                 $('.page-wrap').addClass('top-show');
        //                 $('.page-wrap').removeClass('top');
        //                 $('.page-wrap').removeClass('active ');
        //                 setTimeout(function () {
        //
        //
        //                 },500);
        //                 setTimeout(function () {
        //                     $('.page-wrap').removeClass('top-show');
        //                     flagScroll = false;
        //                 },1000);
        //
        //             });
        //
        //
        //         }
        //         // if (scroll == 0) {
        //         //     flagScroll = true;
        //         //     setTimeout(function () {
        //         //         flagScroll = false;
        //         //     }, 500);
        //         //
        //         //     $('.full-block').removeClass('hide-top');
        //         //     $('header').removeClass('fixed');
        //         //     $('body').addClass('page--hidden');
        //         // }
        //
        //     }
        //
        //
        // });
        //
        //

































        // var blocks = [];
        // var currentBlock = 0;
        // var scrollingFlag = false;
        // $('.scroll-block').each(function () {
        //     blocks.push($(this).attr('data-id'));
        // });


        // if(location.hash != ''){
        //     var hash = location.hash.split('#')[1];
        //
        //     blocks.forEach(function (name, index) {
        //         if(name == hash){
        //             currentBlock = index;
        //         }
        //     });
        //     scrollingFlag = true;
        //     setTimeout(function () {
        //         $('html,body').animate({
        //             scrollTop: $('[data-id="'+hash+'"]').offset().top
        //         }, 900, function () {
        //             scrollingFlag = false;
        //         });
        //     },300);
        //
        // }

        // $(window).on('mousewheel', function(e) {
        //     if (scrollingFlag){
        //         return;
        //     }
        //
        //     var delta = e.originalEvent.deltaY;
        //     var top = 50;
        //     console.log(delta);
        //
        //     if (delta > 0){
        //         if(currentBlock != blocks.length - 1){
        //             currentBlock = currentBlock + 1;
        //             scrollingFlag = true;
        //             var t = 0;
        //
        //             if(currentBlock == 1){
        //                 $('.top-block').addClass('active');
        //                 t=1100;
        //             }
        //
        //             if($('[data-id="'+blocks[currentBlock]+'"]').attr('data-pixel')){
        //                 top = $('[data-id="'+blocks[currentBlock]+'"]').attr('data-pixel')
        //             }
        //
        //             setTimeout(function () {
        //
        //
        //                 console.log(currentBlock);
        //                 $('html,body').animate({
        //                     scrollTop: $('[data-id="'+blocks[currentBlock]+'"]').offset().top - top
        //                 }, 900, function () {
        //                     scrollingFlag = false;
        //                     $('.top-block').removeClass('active');
        //                 });
        //             }, t);
        //             location.hash = blocks[currentBlock];
        //         }
        //
        //
        //
        //
        //     }
        //
        //     else{
        //         if(currentBlock != 0){
        //             currentBlock = currentBlock - 1;
        //             scrollingFlag = true;
        //
        //             if($('[data-id="'+blocks[currentBlock]+'"]').attr('data-pixel')){
        //                 top = $('[data-id="'+blocks[currentBlock]+'"]').attr('data-pixel')
        //             }
        //
        //             $('html,body').animate({
        //                 scrollTop:  $('[data-id="'+blocks[currentBlock]+'"]').offset().top - top
        //             }, 900, function () {
        //                 scrollingFlag = false;
        //             });
        //
        //             location.hash = blocks[currentBlock];
        //         }
        //     }
        //
        //
        // });
    }
    if(window.innerWidth > 600) {
        var stars = $('.star-solo').length;
        var comets = $('.comet').length;

        setInterval(function () {
            var random = randomInteger(0, stars);

            $('.star-solo').eq(random).addClass('animate');

            setTimeout(function () {
                $('.star-solo').eq(random).removeClass('animate');
            }, 1000);

        }, 5000);


        setInterval(function () {
            var random = randomInteger(0, stars);

            $('.comet').eq(random).addClass('animate');

            setTimeout(function () {
                $('.comet').eq(random).removeClass('animate');
            }, 7000);

        }, 5000);

        function randomInteger(min, max) {
            // случайное число от min до (max+1)
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        }
    }


});



