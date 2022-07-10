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

    $grid.imagesLoaded(function () {
        $grid.masonry('layout');
    })
}
