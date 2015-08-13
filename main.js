var singleName;
var color;
var addClass;
var names = [];

function getRandomNames() {
	if (names.length===0) {
	    refill();
	}
	singleName = names.splice(Math.floor(Math.random()*names.length),1);
	console.log(singleName);

}

function refill() { 
   names = ["A", "B", "C", "D", "E", "F", "G"];
}

function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    color = "#";
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
}

function randomAnimation() {
	var arrOfClass = ["bounceIn", "flipInY", "flipInX"]; 
	for (var i = 0; i < 3; i++){	
		addClass = arrOfClass[Math.floor(Math.random() * arrOfClass.length)];
	}
}

document.querySelector(".myButton").addEventListener("click", function(){
		getRandomNames();
		randomColor();
		randomAnimation();
		document.getElementById("wrapper").style.backgroundColor = color;
		document.getElementById("name").innerHTML = singleName;
		document.getElementById("name").className = addClass;
	});	
