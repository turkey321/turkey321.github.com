$(document).ready(function() {
        type();
        $('#click').click(boom);
        $('#reset').click(reset);


    });

    function type() {
         lyrics = "故事的小黄花 n从出生那年就飘着n童年的荡秋千n随记忆一直晃到现在n rui sou sou xi dou xi la  n sou la xi xi xi xi la xi la sou  n吹着前奏望着天空 n我想起花瓣试着掉落 n为你翘课的那一天 n花落的那一天 n教室的那一间 n我怎么看不见n消失的下雨天 n我好想再淋一遍 n没想到失去的勇气我还留着n好想再问一遍 n你会等待还是离开nn刮风这天我试过握着你手 n但偏偏雨渐渐大到我看你不见n还要多久我才能在你身边 n等到放晴的那天也许我会比较好一点n从前从前有个人爱你很久 n但偏偏风渐渐把距离吹得好远 n好不容易又能再多爱一天 n但故事的最后你好像还是说了n拜拜";

        for (var counter = 1; counter <= lyrics.length; counter++) {

            if (lyrics.substring(counter - 1, counter) == 'b') {
                s = '<div>&nbsp;</div>';
            } else if (lyrics.substring(counter - 1, counter) == 'n') {
                s = '<br>';
            } else {
                s = '<div>' + lyrics.substring(counter - 1, counter) + '</div>';
            }

            content = $('#all').html() + s;
            $('#all').html(content);
        }

    }

    function getRand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function boom() {

        for (var i = 0; i < lyrics.length; i++) {
            var size = getRand(16, 32) + 'px';
            var x = getRand(-600, 600) + 'px';
            var y = getRand(-600, 600) + 'px';
            var ro = getRand(0, 360) + 'deg';
            $('#all div:nth-child(' + (i + 1) + ')').animate({
                'top': y,
                'left': x,
                'font-size': size
            }, 1500);
            $('#click').hide();
            $('#reset').show();
        } //end of the for

    } //end of the boom
    function reset(){
    	for(var i = 0;i<lyrics.length;i++){
    		$('#all div:nth-child(' + (i + 1) + ')').animate({
                'top': 0,
                'left': 0,
                'font-size': '16px'
            }, 1500);
    	}

    	 $('#click').show();
         $('#reset').hide();
    }