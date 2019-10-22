// switching to oop
const main = document.querySelector("main")
const box = document.querySelector(".box")
const hangman = document.querySelector(".hangman")

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
		this.size ++
		hangman.appendChild(document.createElement("p"))
		let badOmens = document.querySelectorAll("p")
		for (let i = 0; i < badOmens.length; i++) {
			badOmens[i].innerText = "X"
		}
	}
}
class Game {
	constructor(word) {
		this.word = new HiddenWord(word)
		this.word.createLetterDivs()
		this.word.addLetterContent()
		this.hangman = new Hangman
	}
	checkLetter(letter) {
		let hiddenLetters = document.querySelectorAll("div")
		let letterAppearanceCount = 0
		for(let i = 0; i < hiddenLetters.length; i ++) {
			if(letter === hiddenLetters[i].innerText) {
				hiddenLetters[i].classList.remove("hidden")
				letterAppearanceCount ++
			} 	
		}
		if (letterAppearanceCount === 0) {
			this.hangman.buildOn()
		}
		if (this.hangman.size > 10) {
			alert("Oh no!")
		}
	}
	addLetterToBox(letter) {
		box.innerText += letter	
	}
	play(letter) {
		this.checkLetter(letter)
		this.addLetterToBox(letter)
		let hiddenLetters = document.querySelectorAll("div")
		let blankCount = this.word.array.length
		for (let i = 0; i < hiddenLetters.length; i++) {
			if (hiddenLetters[i].classList != "hidden") {
				blankCount --
			}
		}
		console.log(blankCount)
		if (blankCount === 0) {
			alert("yay!")
		}
	}
}

const string = "plantains"
const game = new Game(string)
console.log(game.word.array)
game.play("p")

// building a keyboard
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const alphaArray = alphabet.split("")
const keyboard = document.querySelector(".keyboard")
for (let i = 0; i < alphaArray.length; i++) {
	keyboard.appendChild(document.createElement("button"))
	let keys = document.querySelectorAll("button")
	keys[i].innerText = alphaArray[i]
	keys[i].classList.add(alphaArray[i])
	keys[i].addEventListener("click", function(e) {
		e.preventDefault()
		keys[i].style.backgroundColor = "blue"
		game.play(keys[i].innerText)
		e.target.removeEventListener(e.type, arguments.callee)
	})	
}

// fetch request for api (OPTIONAL NEXT STEP)
// const url = ""
// fetch (url) {
// 	.then(res => res.json())
// 	.then(res => {
// 		console.log("success", res)
// 	})
// 	.catch(err => {
// 		console.log("uh oh", err)
// 	})
// }