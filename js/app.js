var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');
var paint;
var originX;
var originY;
var endX;
var endY;
var duringX;
var duringY;
var tool;


function initDraw(e, tool){
	$("#x").text("x : " + originX + " dX : " + duringX);
	$("#y").text("y : " + originY + " dY : " + duringY);
	if(tool == "brush"){
		line();
	}
	else if(tool == "square"){
		rect();
	}
	else{
		return false;  
	}

}

$('button').click(function(e){
	tool = $(this).data('tools');
	$("#paint").mousedown(function(event) {

		$(this).mousemove(function(event) {

			initDraw(event, tool)
		});
	});

	$("#paint").mouseup(function(event) {

		$(this).unbind('mousemove');
	});
	if(tool == "clear"){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
});

function line(){

}

function rect(){
	
}