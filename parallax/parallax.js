function parallax(element){if (window.innerWidth > 900) {let centerX = window.innerWidth/2;let centerY = window.innerHeight/2;speed = element.speed /= 100;let xyz = element.xyz;xyz_percent = element.xyz_percent / 100;let it = document.querySelector(element.selector);if (element.reverse == false){it.style.marginLeft = ((event.clientX - centerX)/5)*speed + "px";it.style.marginTop = ((event.clientY - centerY)/5)*speed + "px";if (xyz) {it.style.transform = 'rotateY(' + (-(event.clientX - centerX)/10)*xyz_percent + 'deg)' + 'rotateX(' + ((event.clientY - centerY)/10)*xyz_percent + 'deg)';}}else{it.style.marginLeft = (-(event.clientX - centerX)/5)*speed + "px";it.style.marginTop = (-(event.clientY - centerY)/5)*speed + "px";if (xyz) {it.style.transform = 'rotateY(' + ((event.clientX - centerX)/10)*xyz_percent + 'deg)' + 'rotateX(' + (-(event.clientY - centerY)/10)*xyz_percent + 'deg)';}}}}