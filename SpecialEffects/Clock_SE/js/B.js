(function() {
	$(document).ready(function() {
		var now, nowYear, nowMonth, nowDate, nowHour, nowMin, nowSec,
			month10, month1, day10, day1, hour10, hour1, min10, min1, sec10, sec1, timer;
		_noteShow();
		_clock();
		_getNowTime();
		_typeChange();

		$(window).on('orientationchange', function() {
			_noteShow();
		});

		function _getNowTime() {
			clearTimeout(timer);
			now = new Date();
			nowYear = now.getFullYear();
			nowMonth = now.getMonth() + 1;
			nowDate = now.getDate();
			nowWeek = _getDayOfWeek(nowYear + '-' + nowMonth + '-' + nowDate);
			nowHour = now.getHours();
			nowMin = now.getMinutes();
			nowSec = now.getSeconds();

			$('.clock-week div').removeClass('week-day');
			$('.sec1 .show-time').removeClass('clock-' + sec1);
			$('.sec10 .show-time').removeClass('clock-' + sec10);
			$('.min1 .show-time').removeClass('clock-' + min1);
			$('.min10 .show-time').removeClass('clock-' + min10);
			$('.hour1 .show-time').removeClass('clock-' + hour1);
			$('.hour10 .show-time').removeClass('clock-' + hour10);
			sec10 = Math.floor(nowSec / 10);
			sec1 = nowSec % 10;
			min10 = Math.floor(nowMin / 10);
			min1 = nowMin % 10;
			hour10 = Math.floor(nowHour / 10);
			hour1 = nowHour % 10;

			if ($('.time-type').hasClass('type24')) {} else {
				if (nowHour > 11) {
					$('.time-type div:nth-child(3)').addClass('m');
					if (nowHour == 12) {
						hour10 = 1;
						hour1 = 2;
					} else {
						nowHour = nowHour - 12;
						hour10 = Math.floor(nowHour / 10);
						hour1 = nowHour % 10;
					}
				} else {
					$('.time-type div:nth-child(2)').addClass('m');
				}
			}

			day10 = Math.floor(nowDate / 10);
			day1 = nowDate % 10;
			month10 = Math.floor(nowMonth / 10);
			month1 = nowMonth % 10;

			$('.clock-week div').eq(nowWeek).addClass('week-day');
			$('.sec1 .show-time').addClass('clock-' + sec1);
			$('.sec10 .show-time').addClass('clock-' + sec10);
			$('.min1 .show-time').addClass('clock-' + min1);
			$('.min10 .show-time').addClass('clock-' + min10);
			$('.hour1 .show-time').addClass('clock-' + hour1);
			$('.hour10 .show-time').addClass('clock-' + hour10);

			timer = setTimeout(_getNowTime, 1000);
		}

		function _clock() {
			$('.clock').html(
				'<div class="bg">' +
				'<span class="s1"></span>' +
				'<span class="s2"></span>' +
				'<span class="s3"></span>' +
				'<span class="s4"></span>' +
				'<span class="s5"></span>' +
				'<span class="s6"></span>' +
				'<span class="s7"></span>' +
				'</div>' +
				'<div class="show-time">' +
				'<span class="s1"></span>' +
				'<span class="s2"></span>' +
				'<span class="s3"></span>' +
				'<span class="s4"></span>' +
				'<span class="s5"></span>' +
				'<span class="s6"></span>' +
				'<span class="s7"></span>' +
				'</div>'
			);
			$('.clock-dot').html(
				'<div class="dot1"></div>' +
				'<div class="dot1-bg"></div>' +
				'<div class="dot2"></div>' +
				'<div class="dot2-bg"></div>'
			);
		}

		function _getDayOfWeek(dayValue) {
			var day = new Date(Date.parse(dayValue.replace(/-/g, '/')));
			var today = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");
			//return today[day.getDay()];
			return day.getDay();
		}

		function _typeChange() {
			$('.time-type').on('click', function() {
				$('.time-type').toggleClass('type24');
				_getNowTime();
			});
		}

		function _noteShow() {
			if ($(window).width() < $(window).height()) {
				$('.note').show();
			} else {
				$('.note').hide();
			}
		}
	});
})();