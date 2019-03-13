$(document).ready(function(){ 
    //window.alert($(this).css("height"));
    $('.expand').hover(
        function(){
            // When mouse enters
            var sibling = this.nextElementSibling; // Get the caption container
            var sib_height = sibling.clientHeight;
            var sib_width = sibling.clientWidth;
//            $(sibling).fadeIn("slow");
            sibling.style.visibility = "visible"; // Show caption
            //window.alert(sib_height);
            $(document).on('mousemove', function(e){
                $(sibling).css({
                    left: e.pageX - (sib_width / 2),
                    top: e.pageY - sib_height - 50
                });
            });
        },
        function(){
            // When mouse leaves
            //windows.alert(this.nextElementSibling.style.display);
            this.nextElementSibling.style.visibility = "hidden"; // Hide caption
            //$(this.nextElementSibling).fadeOut("slow");
        }
    );
});

//$(document).on('mousemove', function(e){
//    $('.expand').hover(
//        function(){
//            // When mouse enters
//            $('.caption-container-right').css({
//                left: e.pageX,
//                top: e.pageY
//            });
//            
//        },
//        function(){
//            // When mouse leaves
//        }
//    );
//});