# What is Parallax effect?...
https://ru.wikipedia.org/wiki/parallax

# Parallax.js
With this library you can add parallax effect to any element of your page just in 3-5 lines!


**FUNCTIONS:**

1. parallax for background-image

2. parallax for block in the other block

3. parallax for any element you like


# 1.parallax for background-image


#### This function work on scroll, to use this functin you have to add this function in your code:


`bgparallax(`

`element = {`

`selector: "",`

`speed: 3` *To properly understand how does it work, play with this number*

`}`
`);`


# 2.parallax for block in the other block

#### This function work on scroll and move block faster or slower than others

##### To use this add that in your js code:

#
#
#
**YOU HAVE TO ADD "`position: absolute;` and `bottom: ;` or `top: ;`", but bottom will work as top and top as bottom
**

`blockparallax(`
`element = {`

`selector: "",`

`speed: 2.5,`

`alignby: "bottom",` (top or bottom)
	
`ot_start: $("selector!").offset().top`
	
`},`
`);`


# 3. parallax for any element you like


#### This function work on mouse move and move with your cursor

##### To use this add that in your js code:

#

#

#

`let mouseListener = function(event){`

`parallax(`

`Element = {`

`selector: "",`

`speed: 50,` (speed of element's moves)

`reverse: false,` (reverse all moves)

`xyz: false,` (add 3d effect)

`xyz_percent: 40`(speed of 3d effect)

`}`
`, event`
`);`

`};`

`document.addEventListener("mousemove", mouseListener);`

