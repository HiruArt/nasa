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


    // document.getElementById('deleteme').onclick = function() {
    //     parallax.destroy();
    //     parallax = null;
    //
    //     this.onclick = null;
    //     this.style.display = 'none';
    // };


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
            }, 700, function () {
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
                    }, 700, function () {
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
                }, 700, function () {
                    scrollingFlag = false;
                });

                location.hash = blocks[currentBlock];
            }
        }


    });

});



