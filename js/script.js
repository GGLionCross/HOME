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
});