$(document).ready(function() {

	window.setTimeout(function() {
		$("#loader").hide();
	}, 3000);

	requestAjax("start", "#intro");
	reset();


	// EVENTS
	$("#intro").on( "click", 'button', function(){
		requestAjax("question1", "#questions");
		$("#start").remove();
	});

	$('#questions').on( "click.", 'button', showImage);

	$('#reset').on( "click", '#resetBtn', function(){
		reset();
		requestAjax("question1", "#questions");
	});

	$('#infos-btn').click(function(e){
		$("#infos").show();
	});

	$('#infos > .close').click(function(e){
		$("#infos").hide();
	});

	$('#reset').on( "click", '#saveBtn', function(){
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
	$("#questions").show();
	$("#reset").empty();
	$(".calque").hide();
	$("#canvas").css("height", "80%");
	$(".calque").removeClass('move');
	$(".calque").show();
	$("#canvas").css("background", "#F2F2EB no-repeat");
}

/******** Reset the canvas ********/

function showImage() {

	var parent = $(this).parent();
	var data1 = parent.data("value");
	var data2 = $(this).data("value");
	var element = $("#"+data1+data2);
	var img = $("#"+data1+data2+" > img");
	var imageURL = "img/"+data1+data2+".png";

	var number = parent.data("number");

	if (number == 1) {
		$("#canvas").css("background", "url("+imageURL+") repeat");
	}
	else{
		element.addClass('move');
	}

	nextQuestion(number);
}

function nextQuestion(number){
	if (number == 8) {
			requestAjax("reset", "#reset");
			$("#questions").hide();
			$("#canvas").css("height", "100%");
	}
	else{
		requestAjax("question"+(number+1), "#questions");
	}
}
