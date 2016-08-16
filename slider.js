
sliderNext = 2;
sliderInt = 1;
$(document).ready(function(){
	$('#slider>img#1').fadeIn(300);
	startSlider();


});

function startSlider(){
	count = $('#slider>img').size();
	loop = setInterval(function(){
		$('#slider>img').fadeOut(300);
		$('#slider>img#'+sliderNext).fadeIn(300);
		sliderInt=sliderNext;
		sliderNext++;
		if(sliderNext>count){
			sliderNext=1;
			sliderInt=1;
		}

	},3000);

}
function prev(){
	newSlide = sliderInt-1;
	showSlide(newSlide);

}
function next(){
	newSlide = sliderInt+1;
	showSlide(newSlide);
}

function stopLoop(){
	window.clearInterval(loop);

}
function showSlide(newSlide){
	stopLoop();
if(newSlide>count){
	newSlide=1;
}
else if(newSlide<1){
	newSlide = count;
}
		$('#slider>img').fadeOut(300);
		$('#slider>img#'+newSlide).fadeIn(300);
		sliderInt=newSlide;
		sliderNext = newSlide+1;
		startSlider();
}

$('#slider>img').hover(
	function(){

	stopLoop();
},
function(){
	startSlider();
});