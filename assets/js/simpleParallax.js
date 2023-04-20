var image = document.getElementsByClassName('fundoimg');
new simpleParallax(image,{
    scale: 2,
    delay: .8,
	transition: 'cubic-bezier(0,0,0,1)'
});