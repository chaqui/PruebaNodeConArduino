//funcion para encender led
function encenderLed () {
	var five = require("johnny-five"),
	board = new five.Board();
	board.on("ready",function() {
	(new five.Led(13)).strobe(1000);
});
}
exports.encenderLed=encenderLed;
