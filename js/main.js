$(document).ready(function () {

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

    AOS.init();

    var rellax = new Rellax('.rellax');

    // document.getElementById('deleteme').onclick = function() {
    //     parallax.destroy();
    //     parallax = null;
    //
    //     this.onclick = null;
    //     this.style.display = 'none';
    // };


    if(window.innerWidth > 1024){


        var blocks = [];
        var currentBlock = 0;
        var scrollingFlag = false;
        $('.scroll-block').each(function () {
            blocks.push($(this).attr('data-id'));
        });


        if(location.hash != ''){
            var hash = location.hash.split('#')[1];

            blocks.forEach(function (name, index) {
                if(name == hash){
                    currentBlock = index;
                }
            });
            scrollingFlag = true;
            setTimeout(function () {
                $('html,body').animate({
                    scrollTop: $('[data-id="'+hash+'"]').offset().top
                }, 900, function () {
                    scrollingFlag = false;
                });
            },300);

        }

        $(window).on('mousewheel', function(e) {
            if (scrollingFlag){
                return;
            }

            var delta = e.originalEvent.deltaY;
            var top = 50;
            console.log(delta);

            if (delta > 0){
                if(currentBlock != blocks.length - 1){
                    currentBlock = currentBlock + 1;
                    scrollingFlag = true;
                    var t = 0;

                    if(currentBlock == 1){
                        $('.top-block').addClass('active');
                        t=1100;
                    }

                    if($('[data-id="'+blocks[currentBlock]+'"]').attr('data-pixel')){
                        top = $('[data-id="'+blocks[currentBlock]+'"]').attr('data-pixel')
                    }

                    setTimeout(function () {


                        console.log(currentBlock);
                        $('html,body').animate({
                            scrollTop: $('[data-id="'+blocks[currentBlock]+'"]').offset().top - top
                        }, 900, function () {
                            scrollingFlag = false;
                            $('.top-block').removeClass('active');
                        });
                    }, t);
                    location.hash = blocks[currentBlock];
                }




            }

            else{
                if(currentBlock != 0){
                    currentBlock = currentBlock - 1;
                    scrollingFlag = true;

                    if($('[data-id="'+blocks[currentBlock]+'"]').attr('data-pixel')){
                        top = $('[data-id="'+blocks[currentBlock]+'"]').attr('data-pixel')
                    }

                    $('html,body').animate({
                        scrollTop:  $('[data-id="'+blocks[currentBlock]+'"]').offset().top - top
                    }, 900, function () {
                        scrollingFlag = false;
                    });

                    location.hash = blocks[currentBlock];
                }
            }


        });
    }

    var stars = $('.star-solo').length;
    var comets = $('.comet').length;

    setInterval(function () {
        var random = randomInteger(0, stars);

        $('.star-solo').eq(random).addClass('animate');

        setTimeout(function () {
            $('.star-solo').eq(random).removeClass('animate');
        }, 1000);

    }, 500);


    setInterval(function () {
        var random = randomInteger(0, stars);

        $('.comet').eq(random).addClass('animate');

        setTimeout(function () {
            $('.comet').eq(random).removeClass('animate');
        }, 1000);

    }, 500);

    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }



});



