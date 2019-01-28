let page = document.getElementById('bag');
let buylist = document.getElementById('buylist');
document.getElementById("sub").addEventListener("click", clr());

function load(){
	page.innerHTML = '';
	buylist.value = '';
for (var i = 0; i < localStorage.length; i++) {
	page.innerHTML += '<div>' + "<img class=\"tov\" src=\"img/" +
	 localStorage.key(i) +"\">" + '<span>Артикль: '
	  + localStorage.getItem(localStorage.key(i)) + '</span>' + 
	  '<button onclick=\"rmv(\''+localStorage.key(i)+'\')\">del</button>' + '</div>';

	buylist.value += localStorage.getItem(localStorage.key(i)) + ' ';
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