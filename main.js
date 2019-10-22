// switching to oop
const main = document.querySelector("main")
const box = document.querySelector(".box")

class HiddenWord {
	constructor(word) {
		this.array = word.split("")
	}
	createLetterDivs() {
		for (let i = 0; i < this.array.length; i ++) {
			main.appendChild(document.createElement("div"))
		}
	}
	addLetterContent() {
		let hiddenLetters = document.querySelectorAll("div")
		for (let i = 0; i < this.array.length; i ++) {
			hiddenLetters[i].innerText = this.array[i]
			hiddenLetters[i].classList.add("hidden")
		}
	}	
}
class Hangman {
	constructor() {
		this.size = 0
	}
	buildOn() {
		this.size += 1
	}
}
class Game {
	constructor(word) {
		this.score = []
		this.word = new HiddenWord(word)
		this.word.createLetterDivs()
		this.word.addLetterContent()
		this.hangman = new Hangman 
	}
	checkLetter(letter) {
		let hiddenLetters = document.querySelectorAll("div")
		let count = 0
		for(let i = 0; i < hiddenLetters.length; i ++) {
			if(letter === hiddenLetters[i].innerText) {
				hiddenLetters[i].classList.remove("hidden")
				count ++
			}
		}	
	}
	addLetterToBox(letter) {
		box.innerText += letter	
	}
	play(letter) {
		this.checkLetter(letter)
		this.addLetterToBox(letter)
	}
	gameOver() {
		if (this.hangman.size > 10) {
			console.log("Oh no!")
		}
	}
}

const game = new Game("potatoes")
console.log(game.word.array)
game.play("o")

