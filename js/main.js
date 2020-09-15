$(function () {

    // NAV POSITION
    let nav = $('nav');
    let navPos = nav.position().top;
    let lastPos = 0;

    $(window).on('scroll', function () {
        let pos = $(window).scrollTop();
        let pos2 = pos + 50;

        if (pos >= navPos + nav.height() && lastPos < pos) {
            nav.addClass('fixed');
        }
        if (pos < navPos && lastPos > pos) {
            nav.removeClass('fixed');
        }
        lastPos = pos;

        // HIGHLIGHT LINK
        if (pos2 > $('.section-header').offset().top) {
            highlightLink('home');
        }
        if (pos2 > $('.section-about').offset().top) {
            highlightLink('about');
        }
        if (pos2 > $('.section-projects').offset().top) {
            highlightLink('projects');
        }
        if (pos2 > $('.section-skills').offset().top) {
            highlightLink('skills');
        }
        if (pos2 > $('.section-certificates').offset().top) {
            highlightLink('certificates');
        }
    });

    function highlightLink(navItem) {
        $('nav .active').removeClass('active');
        nav.find('[id="' + navItem + '"]')
            .addClass('active');
    }

    // EVENT HANDLERS
    $('.section-header-nav__link').on('click', function () {
        let navItem = $(this).attr('id');
        $('html, body').animate(
            {
                scrollTop: $('.section-' + navItem).offset().top
            }, 400
        );
    });
});