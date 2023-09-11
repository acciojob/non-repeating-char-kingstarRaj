function firstNonRepeatedChar(str) {
	// creating a map/object to store a characters count 
	let obj = {};
	let bool = null;
	//iterating over str and adding count to obj
	for( let char of str){
		obj[char] = (obj[char] || 0) + 1 ; 
		
	}

	for(let char of str){
		if(obj[char] === 1)
			
			return char;
	}

	if(bool === null){
		return null;
	}
}
//const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
