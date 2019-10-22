let hiddenWord = "bananas"

// need to break string into array of letters
let hiddenArray = hiddenWord.split("");
console.log(hiddenArray)

// need to create hidden p for each letter in the array
const main = document.querySelector("main")
for (let i = 0; i < hiddenArray.length; i++) {
	main.appendChild(document.createElement("p"))
	// let hiddenLetters = document.querySelectorAll("p")
	// for (let j = 0; j < hiddenLetters.length; j++) {
	// 	hiddenLetters[j].innerText = hiddenArray[i]
	// }
	// p.classList.add("hidden")
}
let hiddenLetters = document.querySelectorAll("p")
for (let i = 0; i < hiddenLetters.length; i++) {
	hiddenLetters[i].innerText = hiddenArray[i]
	hiddenLetters[i].classList.add("hidden")
}
function checkLetter(letter) {
	for(let i = 0; i < hiddenArray.length; i++) {
		if (letter === hiddenArray[i]) {
			console.log(letter)
		}
	}
}

// checkLetter("a")