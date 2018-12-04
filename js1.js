const cel = document.getElementById('cel');
const pric = document.getElementById('pric');
const score = document.getElementById('score');
const hellth = document.getElementById('hell');
const tablo = document.getElementById('tablo');
const grass = document.getElementById('grass');
const sky = document.getElementById('sky');
const end = document.getElementById('end');

let win = 0, lose = 0, krit = 0, hell = 100;
let time;

let clickListener = function(){checkCollusion()};
document.addEventListener("click", clickListener);

let mouseListener = function(event){mouseMoveFunc(event)};
document.addEventListener("mousemove", mouseListener);

let keyListener = function(event){rest(event)};


function rest(event){
	if (event.keyCode == 32) {
		end.innerHTML = null;
		end.style.display = 'none';
		cel.style.display = 'block';
		pric.style.display = 'block';
		tablo.style.display = 'block';
		sky.style.display = 'block';
		grass.style.display = 'block';
		document.addEventListener("click", clickListener);
		document.addEventListener("mousemove", mouseListener);
		document.removeEventListener("keydown", keyListener);
		hell = 100;
		win = 0;
		lose = 0;
		krit = 0;
		spawnCel();
	}
}

function mouseMoveFunc(event){
	pric.style.left=event.clientX - 30 + 'px' ;
	pric.style.top=event.clientY - 30 + 'px';
}
function checkCollusion(){
	let windthcel = cel.offsetWidth / 2;
	let heightcel = cel.offsetHeight / 2;
	let windthpric = pric.offsetWidth / 2;
	let heightpric = pric.offsetHeight / 2;

	let dist = Math.sqrt(Math.pow((pric.offsetLeft + windthpric) - (cel.offsetLeft + windthcel),2) + Math.pow((pric.offsetTop + heightpric) - (cel.offsetTop + heightcel),2));
	console.log(dist);
	if (dist < 10) {
		win++
			krit++;
			console.log('nice');
			spawnCel();
		}else if (dist < 60) {
		win++;
		console.log('ura!!!');
		spawnCel();
	}
}

function mlose(){
	lose++;
	if (hell > 0) {
		hell-=20;
		if (hell == 0) {
		end.innerHTML = '<span id="info">' + 'NUM OF HITS IN TARGET: ' + win + '<br>' + 'NUM OF CRITICAL HITS: ' + krit + '</span><br>GAME OVER!<br><span id="whatto"> IF YOU WANT TO RESTART THE GAME PRESS SPACE</span>';
		cel.style.display = 'none';
		pric.style.display = 'none';
		tablo.style.display = 'none';
		sky.style.display = 'none';
		grass.style.display = 'none';
		end.style.display = 'block';
		document.removeEventListener("click", clickListener);
		document.removeEventListener("mousemove", mouseListener);
		document.addEventListener("keydown", keyListener);
	}else{
		spawnCel();
	}
	}
	
}

function spawnCel(){
	clearTimeout(time);
	cel.style.left=Math.random()*(window.innerWidth-120) + 'px' ;
	cel.style.top=Math.random()*(window.innerHeight-120) + 'px';
	score.innerHTML = win + ' : ' + lose + '  NUM OF CRITICAL HITS ' + krit;
	hellth.style.width = hell + 'px';
	hellth.innerHTML = hell;
	time = setTimeout(mlose, 1000);
}

spawnCel();