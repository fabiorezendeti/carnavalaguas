   // Masonry Grid
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 180,
        fitWidth: true, // When enabled, you can center the container with CSS.
        gutter: 10
    });

    // Loading Animation
    $('.grid-item').each(function (i) {
        setTimeout(function () {
            $('.grid-item').eq(i).addClass('is-visible');
        }, 200 * i);
    });

    // Fancybox
    $('.fancybox').fancybox({
        helpers: {
            overlay: { locked: false }
        }
    });
