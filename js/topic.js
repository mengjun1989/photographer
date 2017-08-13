$(".more").hide();
$(".sort>ul>li").eq(6).click(function(){
	$(".more").toggle();
})
$(".sort>ul>li").eq(6).click(function(){
	if($(this).html()=="收起-"){
	$(this).html("更多+");}
	else{
		$(this).html("收起-");
	}
})
var vv=new Vue({
			el: ".photo",
			data: {//初始化
				disp1: false,
				disp2: false,
				disp3: false,
				disp4: false,
				disp5: false,
				disp6: false,
				disp7: false
			}})
$('.photo>#img1').mouseover(function(){
	vv.disp1=true;
})
$('.photo>#img1').mouseout(function(){
	vv.disp1=false;
})
$('.photo>#img2').mouseover(function(){
	vv.disp2=true;
})
$('.photo>#img2').mouseout(function(){
	vv.disp2=false;
})
$('.photo>#img3').mouseover(function(){
	vv.disp3=true;
})
$('.photo>#img3').mouseout(function(){
	vv.disp3=false;
})
$('.photo>#img4').mouseover(function(){
	vv.disp4=true;
})
$('.photo>#img4').mouseout(function(){
	vv.disp4=false;
})
$('.photo>#img5').mouseover(function(){
	vv.disp5=true;
})
$('.photo>#img5').mouseout(function(){
	vv.disp5=false;
})
$('.photo>#img6').mouseover(function(){
	vv.disp6=true;
})
$('.photo>#img6').mouseout(function(){
	vv.disp6=false;
})
$('.photo>#img7').mouseover(function(){
	vv.disp7=true;
})
$('.photo>#img7').mouseout(function(){
	vv.disp7=false;
})