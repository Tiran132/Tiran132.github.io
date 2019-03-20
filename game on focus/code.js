let sq       = document.getElementsByClassName("sqeare")[0];
let boxes    = document.getElementsByClassName('box');
let overlay  = document.getElementById("overlay");
let score_div  = document.getElementById("score");
let sqeare   = [1, 2 ,3 ,4 ,5 ,6, 7, 8, 9];
let paint    = [];
let answer   = new Set();
let painting = new Set();
let score    = 0;


function equals(a, b) {
  const f_num = setToArray(a);
  const s_num = setToArray(b);

  return f_num.length == s_num.length && f_num.every(function(v,i){
  	return v === s_num[i];
  });
}


function setToArray(setInstance) {
  return Array.from(setInstance).sort((a ,b) => b - a);
}



function GetBox(num){
	return document.getElementById('box' + num);
}


function clearing(){
	sq.style.transform = "rotate(0)";

	for (let i = 0; i < boxes.length; i++) {
		boxes[i].style.backgroundColor = "#fff";
	}
	overlay.style.display = "none";
}


function rand(from, to){
	let eq = Math.round((to - (from - 1)) *  Math.random()) + from;

	if(eq > 0){
		return eq;
	}else{
		return 1;
	}
}

function randPaint(){
	sq.style.animation = "anim 2.2s linear forwards";
	sqeare  = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	paint   = [];
	answer  = new Set();
	painting.clear();

	for (let i = 0; i < rand(3, 8); i++) {
		let b = rand(1, sqeare.length-1);
		
		paint.push(b);
		sqeare.splice(sqeare.indexOf(b), 1);
		GetBox(b).style.backgroundColor = "#c82121";
	}

	setTimeout(clearing, 2700);
}


function aswr(num){
	painting = new Set(paint)

	if (paint.indexOf(num) != -1) {
		answer.add(num);
		GetBox(num).style.backgroundColor = "#c82121";
	}else{
		overlay.style.display = "block";
		sq.style.display = "none";
	}

	if (equals(painting, answer)){
		NewGame();
	}
}

randPaint()

function NewGame(){
	score++;
	score_div.innerText = score;
	sq.style.animation = "unset";
	clearing();
	setTimeout(randPaint, 200)
}