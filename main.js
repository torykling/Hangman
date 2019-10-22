// switching to oop
const main = document.querySelector("main")

class HiddenWord {
	constructor(word) {
		this.array = word.split("")
	}
	createLetterDivs() {
		for (let i = 0; i < this.array.length; i ++) {
			main.appendChild(document.createElement("p"))
		}
	}
	addLetterContent() {
		let hiddenLetters = document.querySelectorAll("p")
		for (let i = 0; i < this.array.length; i ++) {
			hiddenLetters[i].innerText = this.array[i]
			// hiddenLetters[i].classList.add("hidden")
		}
	}	
}
class Guess {
	constructor(string) {
		this.array = string.split("")
	}
}
class Game {
	constructor(word) {
		this.score = []
		this.goalWord = new HiddenWord(word)
		this.goalWord.createLetterDivs()
		this.goalWord.addLetterContent()
	}
	checkLetters(letters) {
		letters.forEach(letter => {
			for(let i = 0; i < hiddenLetters.length; i ++) {
				if(letter === hiddenLetters[i].innerText) {
					hiddenLetters[i].classList.remove("hidden")
				}
			}
		})
	}
}

const game = new Game("potatoes")
console.log(game.goalWord.array)





