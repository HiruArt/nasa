$(document).ready(function () {
    // var scene = document.getElementById('scene');
    // var parallax = new Parallax(scene);
    //
    // document.getElementById('deleteme').onclick = function() {
    //     parallax.destroy();
    //     parallax = null;
    //
    //     this.onclick = null;
    //     this.style.display = 'none';
    // };

    // $('html,body').animate({
    //     scrollTop: $(".second-block").offset().top
    // });

    var blocks = [];
    var currentBlock = 0;
    $('.scroll-block').each(function () {
        blocks.push($(this).attr('id'));
    });

    console.log(blocks);

    if(location.hash != ''){
        var hash = location.hash;
        var blockName = '#'+hash;



        $('html,body').animate({
            scrollTop: $(blockName).offset().top
        });
    }

    $(window).on('mousewheel', function(e) {
        var delta = e.originalEvent.deltaY;
        console.log(delta);
        if (delta == 100){
            location.hash = '';
        }
        // return false;
        if(location.hash == ''){
        }
    });

    $(document).on('scroll', function (e) {

    })
});



