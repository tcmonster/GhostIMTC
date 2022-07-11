$(function () {
    'use strict';
    feed();
});


function feed() {
    'use strict';
    var $grid = $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        transitionDuration: '0.1s'
    });
    var msnry = $grid.data('masonry');

    $grid.imagesLoaded(function () {
        $grid.addClass('initialized');
        $grid.masonry('layout');
    });

    if ($('.pagination .older-posts').length) {
        $grid.infiniteScroll({
            append: '.grid-item',
            history: false,
            outlayer: msnry,
            path: '.pagination .older-posts',
            prefill: false,
            status: '.infinite-scroll-status',
        });
    }
    // var grid = $('.grid').masonry({
    //     columnWidth: '.grid-sizer',
    //     itemSelector: 'none',
    //     hiddenStyle: { transform: 'translateY(50px)', opacity: 0 },
    //     visibleStyle: { transform: 'translateY(0)', opacity: 1 },
    // });
    // var msnry = grid.data('masonry');

    // grid.imagesLoaded(function () {
    //     grid.addClass('initialized');
    //     grid.masonry('option', { itemSelector: '.grid-item' });
    //     var items = grid.find('.grid-item');
    //     grid.masonry('appended', items);
    // });

    // if ($('.pagination .older-posts').length) {
    //     grid.infiniteScroll({
    //         append: '.grid-item',
    //         history: false,
    //         outlayer: msnry,
    //         path: '.pagination .older-posts',
    //         prefill: false,
    //         status: '.infinite-scroll-status',
    //     });
    // }
}
