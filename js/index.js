var mm = ['img/u2_normal.jpg', 'img/1.jpg', 'img/2.jpg', 'img/3.jpg','img/4.jpg'];
var index = 0;
var left = $("#btn1");
var right = $("#btn2");
var rains = $(".wrap>p>button");
$('.wrap>.img').css('background', 'url(' + mm[0] + ')');
$('.wrap>.img').css("background-size", "100% 100%");
rains.eq(0).css("background-color","white");
function btnLeft() {
	--index;
	if(index < 0) {
		index = mm.length - 1;
	}
	$('.wrap>.img').fadeOut(200, function() { //先淡出再淡入
		$(this).css('background', 'url(' + mm[index] + ')');
		$(this).css("background-size", "100% 100%");
		//执行淡入
		$(this).fadeIn(500);
	});
	rains.css("background-color","gray");
	rains.eq(index).css("background-color","white");
};
function btnRight() {
	++index;
	if(index > mm.length - 1) {
		index = 0;
	}
	$('.wrap>.img').fadeOut(200, function() { //先淡出再淡入
		$(this).css('background', 'url(' + mm[index] + ')');
		$(this).css("background-size", "100% 100%");
		//执行淡入
		$(this).fadeIn(500);
	});
	rains.css("background-color","gray");
	rains.eq(index).css("background-color","white");
};
left.click(function(){
	btnLeft();
});
right.click(function(){
	btnRight();
})
setInterval(btnRight,2000);
rains.click(function(){
	index = $(this).index();
	$('.wrap>.img').css('background', 'url(' + mm[index] + ')').css("background-size", "100% 100%");
	rains.css("background-color","gray");
	rains.eq(index).css("background-color","white");
	setInterval(btnRight,2000);
})
