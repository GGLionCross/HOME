/*
 *  This script is used to handle the floating
 *  captions when hovering over images on the
 *  HOME main page.
 */
$(document).ready(function(){ 
    $('.expand').hover(
        function(){
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
        },
        function(){
            // When mouse leaves
            this.nextElementSibling.style.visibility = "hidden";
        }
    );
});