let hiddenWord = "bananas"

// need to break string into array of letters
let hiddenArray = hiddenWord.split("");
console.log(hiddenArray)

const main = document.querySelector("main")
// this creates a p for each letter in the array
for (let i = 0; i < hiddenArray.length; i++) {
	main.appendChild(document.createElement("p"))
}
// this adds one letter from the hidden word to each p and adds a hidden class
let hiddenLetters = document.querySelectorAll("p")
for (let i = 0; i < hiddenLetters.length; i++) {
	hiddenLetters[i].innerText = hiddenArray[i]
	hiddenLetters[i].classList.add("hidden")
}

function checkLetters(letters) {
	letters.forEach(letter => {
		for(let i = 0; i < hiddenLetters.length; i++) {
			if (letter === hiddenLetters[i].innerText) {
				hiddenLetters[i].classList.remove("hidden")
			}
		}
	})
}

let guessArray = ["a", "n", "b", "s"]
checkLetters(guessArray)