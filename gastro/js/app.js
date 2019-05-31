$(document).foundation()
document.body.onload = window.onscroll = function(){
	var menu = document.getElementById("menu")
	if(document.scrollingElement.scrollTop >= 70){
		menu.style.position = "fixed"
		menu.style.top = 0
		menu.style.left = 0
	}
	else{
		menu.style.position = "inherit"
	}
}
