// JavaScript Document
function selectBand(id){
	var banda = document.getElementById(id);
	var bandas = document.getElementsByTagName("article")
	
	for(var i = 0; i < bandas.length; i++){
		bandas[i].style.opacity = 0
	}
	setTimeout(function(){
		var bandas = document.getElementsByTagName("article")
	
		for(var i = 0; i < bandas.length; i++){
			bandas[i].style.display = "none"
		}
		banda.style.display = "block"
	},500)
			
	setTimeout(function(){
		banda.style.opacity = 1
	},1000)
	
}


function selectTodas(){
	
	var bandas = document.getElementsByTagName("article")
	
		for(var i = 0; i < bandas.length; i++){
			bandas[i].style.opacity = 0
		}
	
	setTimeout(function(){
		var bandas = document.getElementsByTagName("article")
	
		for(var i = 0; i < bandas.length; i++){
			bandas[i].style.display = "block"
		}
	},500)
			
	setTimeout(function(){
		var bandas = document.getElementsByTagName("article")
		for(var i = 0; i < bandas.length; i++){
			bandas[i].style.opacity = 1
		}
	},1000)
}
