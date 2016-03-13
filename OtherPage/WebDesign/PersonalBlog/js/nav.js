jQuery(".lanmubox").slide({
	easing: "easeOutBounce",
	delayTime: 400
});

var obj = null;
var As = document.getElementById('nav').getElementsByTagName('a');
obj = As[0];
for (i = 1; i < As.length; i++) {
	if (window.location.href.indexOf(As[i].href) >= 0)
		obj = As[i];
}
obj.id = 'nava';

var timer, m = 0,
	m1 = $("img[rel='lazy']").length;

function fade() {
	$("img[rel='lazy']").each(function() {
		var $scroTop = $(this).offset();
		if ($scroTop.top <= $(window).scrollTop() + $(window).height()) {
			$(this).hide();
			$(this).attr("src", $(this).attr("lazy_src"));
			$(this).attr("top", $scroTop.top);
			$(this).removeAttr("rel");
			$(this).removeAttr("lazy_src");
			$(this).fadeIn(600);
			var _left = $(this).parent().parent().attr("_left");
			if (_left != undefined)
				$(this).parent().parent().animate({
					left: _left
				}, 400);
			m++;
		}
	});
	if (m < m1) {
		timer = window.setTimeout(fade, 300);
	} else {
		window.clearTimeout(timer);
	}
}
$(function() {
	$("#wf-main img[rel='lazy']").each(function(i) {
		var _left = $(this).parent().parent().css("left").replace("px", "");
		$(this).parent().parent().attr("_left", _left);
		$(this).parent().parent().css("left", 0);
	});
	fade();
});
$(".loading").hide();
$("#wf-main").show();