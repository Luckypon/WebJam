$(document).ready(function() {

	window.setTimeout(function() {
		$("#loader").hide();
	}, 1000);

	requestAjax("start", "#intro");
	reset();


	// EVENTS
	$("#intro").on( "click", 'button', function(){
		requestAjax("question1", "#questions");
		$("#start").remove();
	});

	$('#questions').on( "click.", 'button', showImage);

	$('#questions').on( "click", '#reset', function(){
		reset();
		requestAjax("question1", "#questions");
	});

	$('#infos-btn').click(function(e){
		$("#infos").show();
	});

	$('#infos > .close').click(function(e){
		$("#infos").hide();
	});

	$('#questions').on( "click", '#save', function(){
		window.print();
	});

});

/******** Change HTLM content with AJAX ********/
//argument file = the file within the content you want to add
function requestAjax(file, container) {

	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			ajaxData(xhr.responseText, container);
		}
	};
	xhr.open("GET", file+".html", true);
	xhr.send(null);
}

function ajaxData(data, container) {
	$(container).html(data);
}

/******** Reset the canvas ********/
function reset(){
	$("#questions").empty();
	$(".calque").hide();
	$("#canvas").css("background", "#e5d39a no-repeat");
	/*$(".calque > img").attr("src", "");*/
}

/******** Reset the canvas ********/

function showImage() {

	var parent = $(this).parent();
	var data1 = parent.data("value");
	var data2 = $(this).data("value");
	console.log(parent);
	var element = $("#"+data1+data2);
	var img = $("#"+data1+data2+" > img");
	var imageURL = "img/"+data1+data2+".png";

	var number = parent.data("number");

	if (number == 1) {
		$("#canvas").css("background", "url("+imageURL+") repeat");
	}
	else{
		element.show();
		console.log("#"+data1+data2);
	}

	nextQuestion(number);
}

function nextQuestion(number){
	if (number == 8) {
		requestAjax("reset", "#questions");
	}
	else{
		requestAjax("question"+(number+1), "#questions");
	}
}
