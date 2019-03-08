/* Parallax for element with mouse move. */
function parallax(element){
	if (window.innerWidth > 900) {
		let centerX = window.innerWidth/2;
		let centerY = window.innerHeight/2;
		speed = element.speed /= 100;
		let xyz = element.xyz;
		xyz_percent = element.xyz_percent / 100;
		let it = document.querySelector(element.selector);


		if (element.reverse == false){
	
			it.style.marginLeft = ((event.clientX - centerX)/5)*speed + "px";
			it.style.marginTop = ((event.clientY - centerY)/5)*speed + "px";
			
			if (xyz) {
				it.style.transform = 'rotateY(' + (-(event.clientX - centerX)/10)*xyz_percent + 'deg)' + 'rotateX(' + ((event.clientY - centerY)/10)*xyz_percent + 'deg)';
			}
		}
		else{
			it.style.marginLeft = (-(event.clientX - centerX)/5)*speed + "px";
			it.style.marginTop = (-(event.clientY - centerY)/5)*speed + "px";

			if (xyz) {
				it.style.transform = 'rotateY(' + ((event.clientX - centerX)/10)*xyz_percent + 'deg)' + 'rotateX(' + (-(event.clientY - centerY)/10)*xyz_percent + 'deg)';
			}
		}
	}
}
/* End of function.*/


/* Parallax for background-image with scroll. */
function bgparallax(element){
	let bg = document.querySelector(element.selector);
	bg.style.backgroundAttachment= "fixed";

	document.addEventListener("scroll", function(){
		let st = window.pageYOffset;

		bg.style.backgroundPosition = '0 ' + -st*element.speed/2 + 'px';
	})
}
/* End of function.*/


/* Parallax for block with scroll. */
function blockparallax(element){
	let block = document.querySelector(element.selector);
	let st = window.pageYOffset;
	block.parentElement.style.position = "relative";
	

	if (element.alignby == "top") {
		block.style.top = -st*element.speed/2 + element.ot_start + block.clientHeight + 'px';

		document.addEventListener("scroll", function(){
			let st = window.pageYOffset;

			block.style.top = -st*element.speed/2 + element.ot_start + block.clientHeight + 'px';
		})
	}
	else if (element.alignby == "bottom") {
		block.style.bottom = st*element.speed/2 + element.ot_start + block.clientHeight + 'px';

		document.addEventListener("scroll", function(){
			let st = window.pageYOffset;

			block.style.bottom = st*element.speed/2 + element.ot_start + block.clientHeight + 'px';
		})
	}
	
}
/* End of function.*/