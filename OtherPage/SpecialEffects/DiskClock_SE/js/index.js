var miao = document.getElementById("miao");
var fen = document.getElementById("fen");
var shi = document.getElementById("shi");
var clock = setInterval(function() {
	var nowDate = new Date(); //每次读取当前时间
	var hour = nowDate.getHours();
	var minute = nowDate.getMinutes();
	var second = nowDate.getSeconds();
	var circleHour = hour % 12 * 30;
	shi.style.transform = "rotate(" + circleHour + "deg)"; //读取到的时间为24小时制，转换为12小时
	fen.style.transform = "rotate(" + minute * 6 + "deg)";
	miao.style.transform = "rotate(" + second * 6 + "deg)";
}, 1000);