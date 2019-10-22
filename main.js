let hiddenWord = "bananas"

// need to break string into array of letters
let hiddenArray = hiddenWord.split("");
console.log(hiddenArray)

function checkLetter(letter) {
	for(let i = 0; i < hiddenArray.length; i++) {
		if (letter === hiddenArray[i]) {
			console.log("yay")
		}
	}
}

checkLetter("a")