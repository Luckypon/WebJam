$(document).ready(function() {

	reset();

	// EVENTS
	$("#intro").on( "click", 'button', function(){
		requestAjax("question1", "#questions");
		$("#start").remove();
	});

	$('#questions').on( "click.", 'button', showImage);

	$('#questions').on( "click", '#reset', function(){
		reset();
	});

	$('#infos-btn').click(function(e){
		$("#infos").show();
	});

	$('#infos > .close').click(function(e){
		$("#infos").hide();
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
	requestAjax("start", "#intro");
	$("#questions").empty();
	$(".calque").hide();
}

/******** Reset the canvas ********/

function showImage() {

	var parent = $(this).parent();
	var data1 = parent.data("value");
	var data2 = $(this).data("value");

	var element = $("#"+data1);
	var img = $("#"+data1+" > img");
	var imageURL = "img/"+data1+data2+".jpg";

	var number = parent.data("number");

	if (number == 1) {
		$("#canvas").css("background", "url("+imageURL+") repeat");
	}
	else{
		img.attr("src", imageURL);
		element.show();
	}

	nextQuestion(number);
}

function nextQuestion(number){
	if (number == 7) {
		requestAjax("reset", "#questions");
	}
	else{
		requestAjax("question"+(number+1), "#questions");
	}
}
