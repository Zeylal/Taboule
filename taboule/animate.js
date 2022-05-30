$(document).ready(function () {
	$("#target").click(function () {
		$(".animated-progress span").each(function () {
			$(this).animate(
				{
					width: $(this).attr("data-progress") + "%",
				},
				1000
			);
			$(this).text($(this).attr("data-progress") + "%");
		});
	});
});

var element = document.getElementById('mySwipe');
window.mySwipe = new Swipe(element, {
  startSlide: 0,
  auto: 3000,
  draggable: false,
  autoRestart: false,
  continuous: true,
  disableScroll: true,
  stopPropagation: true,
  callback: function(index, element) {},
  transitionEnd: function(index, element) {}
});
window.mySwipe = $('#mySwipe').Swipe().data('Swipe');