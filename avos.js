var separateAvo = function(str){
	
	for(var i=0; i< str.length; i++){
		var separate = str.split(',');
		var result = separate[i].trim();
		return result;
	}
}

console.log(separateAvo("1 for R3, 2 for R7, 3 for R10, 5 for R14.50"));