// 不可狂击选中
$('body').bind("selectstart",function(){ return false; });
// create banner
function createBannerImg(){
	for(var i=0;i<5;i++){
		$(".banner").append("<a class='imgs'><img src='../image/banner-"+(i+1)+".jpg' /></a>");
		index = i;
	};
};
createBannerImg();
function createBannerDots(){
	for(var i=0;i<5;i++){
		$(".banner1").find(".dots").append("<a class='dot'></a>");
	};
};
createBannerDots();
// banner 初始化
var	$index = $(".dot"),
	_index,
	a = 0;;
$(".banner a:eq(0)").find("img").css("display","block");
$(".dots .dot:eq("+ a +")").addClass("current");
// 点点切换
$(".dots .dot").mouseover(function(){
	for( var i = 0;i<$index.length;i++){
		$(this).addClass("current").siblings().removeClass("current");
		var _index = $(this).index();
	}
	$(".banner a:eq("+ _index + ")").find("img").fadeIn(500).parent().siblings().find("img").fadeOut(500);
	$(".dots .dot:eq("+ _index + ")").addClass("current").siblings().removeClass("current");
	a =_index;
});
// 向右切换
$(".banner1 .banner-r").click(function(){
	clearInterval(time);
	a >=4 ? a = 0 : ++a;
	$(".banner a:eq("+ a +")").find("img").fadeIn(500).parent().siblings().find("img").fadeOut(500);
	$(".dots .dot:eq("+ a + ")").addClass("current").siblings().removeClass("current");
});
// 向左切换
$(".banner1 .banner-l").click(function(){
	clearInterval(time);
	a <= 0 ? a = 4 : a--;
	$(".banner a:eq("+ a +")").find("img").fadeIn(500).parent().siblings().find("img").fadeOut(500);
	$(".dots .dot:eq("+ a + ")").addClass("current").siblings().removeClass("current");
});
// 定时轮播
var timer = function(){
	a++;
	a ==5 ? $(".dots .dot:eq(0)").mouseover() : $(".dots .dot:eq("+ a +")").mouseover();
}
	time = setInterval(timer,2000);
// $(".banner").mouseover(function(){
// 	clearInterval(time);
// }).mouseleave(function(){
// 	time = setInterval(timer,2000);
// });

// 左侧微信动画
$(".words").css("opacity",1).animate({right:"700px"},80);
$(".wx").css("display","block").animate({right:"260px"},1200);
$(".qq").css("display","block").animate({right:"260px"},1500);
$(".wb").css("display","block").animate({right:"260px"},1800);
$(window).scroll(function(){	
	scrollY > 60 ? $(".fixed").css("display","block") : $(".fixed").css("display","none");
	if(scrollY > 60){
		$(".top").addClass("top1").animate({height:"60px"},500);
	}
});

// top跳转
$(".top").find(".productions").click(function(){
	$("body").animate({scrollTop:$(".color").offset().top},500);
});
// skill links跳转
$(".top").find(".skills").click(function(){
	$("body").animate({scrollTop:$(".skills1").offset().top},500);
});
$(".top").find(".home").click(function(){
	$("body").animate({scrollTop:"0px"},500);
});
// about me fixed展示
$(".top").find(".about").click(function(){
	$(".aboutMe1").addClass("me");
	$(".page").addClass("blur");
	$(".about1").addClass("aboutMe");
});
$(".aboutMe1 .close").click(function(){
	$(".aboutMe1").removeClass("me");
	$(".page").removeClass("blur");
	$(".about1").removeClass("aboutMe");
});

// head animation
$(".top li").mouseenter(function(){
	$(this).find(".in").animate({"margin-top":"0px"},200);
}).mouseleave(function(){
	$(this).find(".in").animate({"margin-top":"-60px"},100);
});
// productions animation
$(".color .name").mouseenter(function(){
	$(this).css({"width":"250px","height":"250px","line-height":"250px"}).parent().siblings().find(".name").css({"width":"150px","height":"150px","line-height":"150px"});
}).mouseleave(function(){
	$(".color .name").css({"width":"167px","height":"167px","line-height":"167px"});
});
// skills animation
$(".skills1 .html").mouseenter(function(){
	$(this).css({"width":"250px","height":"250px","line-height":"250px"}).siblings().css({"width":"150px","height":"150px","line-height":"150px"});
}).mouseleave(function(){
	$(".skills1 .html").css({"width":"167px","height":"167px","line-height":"167px"});
});

// go top
$(".fixed").click(function(){
	$("body").animate({scrollTop:"0px"},500);
});