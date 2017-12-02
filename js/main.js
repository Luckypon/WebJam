$(document).ready(function() {

	$(function (){
		$(".question").hide();
		$(".question:nth-child(1)").show();
		$(".calque").hide();
	});


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

});

