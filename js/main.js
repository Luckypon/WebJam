$(document).ready(function() {

	function reset(){
		$(".question").hide();
		$(".question:nth-child(1)").show();
		$(".calque").hide();
	};


	$('.question > button').click(function(e){
		var parent = $(this).parent();
		var data1 = parent.data("value");
		var data2 = $(this).data("value");

		var element = $("#"+data1);
		var img = $("#"+data1+" > img");
		var imageURL = "img/"+data1+data2+".jpg";

		img.attr("src", imageURL);

		element.show();
		parent.hide();
		parent.next('.question').show();

	});

	$('#reset').click(function(e){
		reset();
	});

	$('#infos-btn').click(function(e){
		$("#infos").show();
	});

	$('#infos > .close').click(function(e){
		$("#infos").hide();
	});

	reset();

});

