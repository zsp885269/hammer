# ver 1.0.0 #
## 2018年11月28日 ##
PC端实现视频拼图的效果，创建的canvas块放在对应的container(div)中，9块canvas的索引值与9个div索引值相同时，提示游戏结束。
代码步骤说明：
``` 
for (var i = 0; i < $(".container").length; i++) {
	//给自定义属性"left"赋左偏移量
	$(".container").eq(i).data("left",$(".container").eq(i).offset().left);
	//给自定义属性"right"赋右偏移量+container的宽度
	$(".container").eq(i).data("right",$(".container").eq(i).offset().left + $(".container").eq(i).width());
	//给自定义属性"top"赋右偏移量+container的高度
	$(".container").eq(i).data("top",$(".container").eq(i).offset().top);
	//给自定义属性"botton"赋右偏移量+container的高度
	$(".container").eq(i).data("botton",$(".container").eq(i).offset().top + $(".container").(i).height());
	//canvas中心点
	$(".container").eq(i).data("Xzhou",$(".container").eq(i).data("left") + ($(".container").eq(i).width())/2);
	$(".container").eq(i).data("Yzhou",$(".container").eq(i).data("top") + ($(".container").e(i).height())/2);
}
 `````` 
 //创建9个canvasfor (var i = 0; i < 9; i++) {	var canvas = document.createElement("canvas");	var context = canvas.getContext("2d");	window.document.body.appendChild(canvas);	con[i] = context;	canvas.setAttribute("width","107px");	canvas.setAttribute("height","80px");	canvas.setAttribute("data-index",i);	canvas.setAttribute("class","piece");	//canvas旋转的度数	canvas.setAttribute("data-rotate",(Math.random()*20));	canvas.style.left = (Math.random()*window.screen.availWidth/1.5)+"px";	canvas.style.top = (Math.random()*window.screen.availHeight/1.5)+"px";	canvas.style.transform = "rotate("+canvas.getAttribute("data-rotate")+"deg)";}setInterval(function(){	for(var i = 0; i < 9; i++){		var row = Math.floor($(".piece").eq(i).data("index")/3);//取余数获取行数		var col = Math.floor($(".piece").eq(i).data("index")%3);//取模获得列数		con[i].drawImage(video,(col*107),(row*80),107,80,0,0,107,80);	}},50);
 ``` 事件触发移动``` 
var hammer = $(".piece").hammer();hammer.on("panstart",function(ev){	$(this).data("top",$(this).offset().top);	$(this).data("left",$(this).offset().left);	$(this).data("position",$(this).offset());});hammer.on("panmove",function(ev){	var top = $(this).data("position").top;	var left = $(this).data("position").left;	$(this).css({		"top":top + ev.gesture.deltaY,		"left":left + ev.gesture.deltaX	})});hammer.on("panend",function(ev){	var centerX = $(this).data("position").left + ev.gesture.deltaX + (parseInt($(this).c("width"))/2);	var centerY = $(this).data("position").top + ev.gesture.deltaY + (parseInt($(this).css("height"))/2);	var tt =  $(this).data("index");	for (var i = 0; i < $(".container").length; i++) {		console.log($(".piece").eq(i).data("index"));		console.log($(".container").eq(i).data("index"));		if (centerX > $(".container").eq(i).data("left") && centerX < $(".container").eq(i).da("right") && centerY > $(".container").eq(i).data("top") && centerY < $(".container").eq(i).data("botton")) {					this.style.transform = "rotate(0deg)";			weizhi(tt,centerX,centerY);			$(this).css({				"top":$(".container").eq(i).data("Yzhou") - 39 + "px",				"left":$(".container").eq(i).data("Xzhou") - 55 + "px"			})		}	}	console.log(tt);	if (centerX > $(".container").eq(tt).data("left") && centerX < $(".container").eq(tt).da("right") && centerY > $(".container").eq(tt).data("top") && centerY < $(".container").eq(tt).data("botton")) {		$(".container").eq(tt).data("pan","1");		this.style.transform = "rotate(0deg)";		$(this).css({					"top":$(".container").eq(tt).data("Yzhou") - 39 + "px",			"left":$(".container").eq(tt).data("Xzhou") - 55 + "px"		})	}});
 ``` 判断游戏结束``` 
 function weizhi(tt,x,y){	if (x > $(".container").eq(tt).data("left") && x < $(".container").eq(tt).data("right") && y > $(".container").eq(tt).data("top") && y < $(".container").eq(tt).data("botton")) {		$(".container").eq(tt).data("pan","1");	}		var aa = true;	for (var i = 0; i < $(".container").length; i++) {		if ($(".container").eq(i).data("pan") == 0) {			aa = false;		}	}	if (aa) {		alert("游戏结束");		}};
 ```  具体请请观察index.html