let page = document.getElementById('bag');

function load(){
	page.innerHTML = '';
for (var i = 0; i < localStorage.length; i++) {
	page.innerHTML += '<div>' + "<img class=\"tov\" src=\"img/" +
	 localStorage.key(i) +"\">" + '<span>Артикль: '
	  + localStorage.getItem(localStorage.key(i)) + '</span>' + 
	  '<button onclick=\"rmv(\''+localStorage.key(i)+'\')\">del</button>' + '</div>';
}	
}
function clr(){
	localStorage.clear();
	load();
}
function rmv(artic){
	localStorage.removeItem(artic);
	load();
}






load();