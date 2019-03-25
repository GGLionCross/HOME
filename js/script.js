$(document).ready(function(){
	var nav = $("nav");
	var menu = $("#menu-ctn");
	var menu_btn = $("#menu-btn");
	var menu_flag = false;
	var menu_height = menu.height();
	menu.css("margin-top", -menu_height);
	menu_btn.click(function(){
		if (menu_flag == true){
			menu_flag = false;
			menu_btn.removeClass("menu-act");
			$("#menu-btn > div").css("background-color", "white");
			menu.animate({ "margin-top": -menu_height }, "slow");
			nav.css("box-shadow", "0 0 1px 100vmax rgba(0,0,0,0)")
		}
		else {
			menu_flag = true;
			menu_btn.addClass("menu-act");
			$("#menu-btn > div").css("background-color", "grey");
			menu.animate({ "margin-top": 0 }, "slow");
			nav.css("box-shadow", "0 0 1px 100vmax rgba(0,0,0,0.7)")
		}
	});
});