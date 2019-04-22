let field_divs    = document.querySelectorAll('#field div');
let start_div     = document.getElementById('instruction');
let player        = document.getElementById('player');
let field         = document.getElementById('field');
let player_field  = document.getElementById('player_field');
let score_div     = document.getElementById('score');
let overlay       = document.getElementById('overlay');
let gs_div        = document.getElementById('game-score');
let field_width   = field.offsetWidth / 4;
let field_height  = field.offsetHeight / 4;

let keylistner = function(event){move_player(event.keyCode)};

let place       = 0,
	score       = 0,
	inter_speed = 2000,
	last        = null;


// Генератор рандомных чисел.
function rand(from, to){
	rand_num = Math.round((to + 1 - from) * Math.random() + from);
	middle = (from + to) / 2;

	if (rand_num == last) {
		if (rand_num > middle) {
			rand_num -= 1;
		}
		else if (rand_num <= middle) {
			rand_num += 1;
		}
	}

	if (rand_num >= from & rand_num <= to) {
		return rand_num;
	}
	else if (rand_num < from) {
		return from;
	}
	else if (rand_num > to){
		return to;
	}
}


// Функция для обновления поля.
function update_field() {
	for (let i = 0; i < field_divs.length; i++) {
		field_divs[i].style.backgroundColor = "transparent";
	}

	place = rand(0, 15);
	last = place;

	field_divs[place].style.backgroundColor = "#eee";

	setTimeout(function() {
		if (checkCollusion()) {
			score++;
			gs_div.innerText = "SCORE: " + score;
		}else{
			lose(false);
		}
	}, inter_speed);
}


// Функция для движения игрока при нажатии на соотвествующие клавиши
function move_player(n){
	if (n == 87){
		if (player.offsetTop + player_field.offsetTop - field_height > field.offsetTop) {
			player.style.top = player.offsetTop - field_height + 'px';
		}
		else{
			lose(true);
		}
	}
	else if(n == 83){
		if (player.offsetTop + player_field.offsetTop + player.offsetHeight + field_height < field.offsetTop + field.offsetHeight) {
			player.style.top = player.offsetTop + field_height + 'px';
		}
		else{
			lose(true);
		}
	}
	else if(n == 65){
		if (player.offsetLeft + player_field.offsetLeft - field_width > field.offsetLeft) {
			player.style.left = player.offsetLeft - field_width + 'px';
		}
		else{
			lose(true);
		}
	}
	else if(n == 68){
		if (player.offsetLeft + player_field.offsetLeft + player.offsetWidth + field_width < field.offsetLeft + field.offsetWidth) {
			player.style.left = player.offsetLeft + field_width + 'px';
		}
		else{
			lose(true);
		}
	}
	checkCollusion();
}


// Функция которая проверяет дистанцию от игрока до сгенерированного квадрата.
function checkCollusion(){
	let windth_player = player.offsetWidth / 2;
	let height_player = player.offsetHeight / 2;
	let windth_place = field_divs[place].offsetWidth / 2;
	let height_place = field_divs[place].offsetHeight / 2;

	let dist = Math.sqrt(Math.pow((field_divs[place].offsetLeft + windth_place) - (player.offsetLeft + windth_player),2)
			 + Math.pow((field_divs[place].offsetTop + height_place) - (player.offsetTop + height_player),2));

	if (dist < 14) {
		return true;
	}
	else{
		return false;
	}
}


// Конец Игры.
function lose(arg) {
	overlay.style.opacity = "1";
	score_div.style.top = "20vh";

	document.removeEventListener('keydown', keylistner);
	field.style.display = "none";

	if (arg) {
		score_div.innerText = "GAME OVER!\nYou Felt\nYour score:" + score;
	}else{
		score_div.innerText = "GAME OVER!\nYou were too slow\nYour score:" + score;
	}
}


// Начало игры.
function start(){
	score = 0;

	start_div.style.display = "none"
	overlay.style.opacity = "0";
	score_div.style.top = "-30vh";

 	update_field();
	let interval = setInterval(update_field, inter_speed);

	let listner = document.addEventListener('keydown', keylistner);
}