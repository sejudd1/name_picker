function getRandomNames() {
	var names = [];
	if (names.length===0) {
	    refill();
	}
	
	return names.splice(Math.floor(Math.random()*names.length),1)[0];
    
    function refill() { 
       names = ["A", "B", "C", "D", "E", "F", "G"];
    } 
}

getRandomNames();