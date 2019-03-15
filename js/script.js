$(document).ready(function(){
    /*
     * When hovering over one of the page links,
     * highlight them, to let the user know
     */
    $('.navigation a').hover(function(){
        // When mouse enters
        if (this.className != 'active_page')
            this.classList.add('hover_page');
    }, function(){
        // When mouse leaves
        this.classList.remove('hover_page');
    });
    
    /*
     *  Handles the floating captions when
     *  hovering over images on the HOME
     *  main page.
     */
    $('.expand').hover(function(){
        // When mouse enters
        var sibling = this.nextElementSibling; // Get the caption container
        var sib_height = sibling.clientHeight;
        var sib_width = sibling.clientWidth;
        sibling.style.visibility = "visible"; // Show caption
        // Make caption follow cursor
        $(document).on('mousemove', function(e){
            $(sibling).css({
                left: e.pageX - (sib_width / 2),
                top: e.pageY - sib_height - 50
            });
        });
    }, function(){
        // When mouse leaves
        this.nextElementSibling.style.visibility = "hidden";
    });
});