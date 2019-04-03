$(document).ready(function(){
	var menu_flag = false;
	var menu = $("#menu-ctn");
	menu.css("margin-top",-menu.height());
	$("#menu-btn").click(function(){
		if (menu_flag == true){
			menu_flag = false;
			menu_close();
		}
		else {
			menu_flag = true;
			menu_open();
		}
	});
	$("#nav-span").click(function(){
		if (menu_flag == true){
			menu_flag = false;
			menu_close();
		}
	})
});

function menu_close()
{
	var nav = $("nav");
	var menu = $("#menu-ctn");
	var menu_btn = $("#menu-btn");
	var menu_height = menu.height();
	menu_btn.children("div").css("background-color", "white");
	menu.animate({ "margin-top": -menu_height }, "slow", function(){
		// The callback function, remove border when animation finishes
		menu.css("border-bottom", "none");
	});
	nav.css("box-shadow", "0 0 1px 100vmax rgba(0,0,0,0)");
}

function menu_open()
{
	var nav = $("nav");
	var menu = $("#menu-ctn");
	var menu_btn = $("#menu-btn");
	menu_btn.children("div").css("background-color", "#DAAA00");
	menu.css("border-bottom", "3px solid white");
	menu.animate({ "margin-top": 0 }, "slow");
	nav.css("box-shadow", "0 0 1px 100vmax rgba(0,0,0,0.7)");
}