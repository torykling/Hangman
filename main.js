// switching to oop
const main = document.querySelector("main")
const box = document.querySelector(".box")

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
			hiddenLetters[i].classList.add("hidden")
		}
	}	
}
class Guess {
	constructor(string) {
		this.array = string.split("")
	}
	addLettersToBox() {
		for(let i = 0; i < this.array.length; i++) {
			box.innerText += this.array[i]
		}
	}
}
class Hangman {
	constructor() {
		this.man = 0
	}
	buildOn() {
		this.man += 1
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
	checkLetters(letters) {
		let hiddenLetters = document.querySelectorAll("p")
		letters.forEach(letter => {
			for(let i = 0; i < hiddenLetters.length; i ++) {
				if(letter === hiddenLetters[i].innerText) {
					hiddenLetters[i].classList.remove("hidden")
				} 
			}
			for (let i = 0; i < hiddenLetters.length; i++) {
				if(letter !== hiddenLetters[i].innerText) {
					this.hangman.buildOn()
				}
			}
		})
	}
}

const game = new Game("potatoes")
let guess = new Guess("bansty")
console.log(game.word.array)
game.checkLetters(guess.array)
guess.addLettersToBox()


