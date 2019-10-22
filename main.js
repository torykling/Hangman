// switching to oop
const main = document.querySelector("main")
const box = document.querySelector(".box")
const hangman = document.querySelector(".hangman")
const img = document.querySelector("img")
const winMsg = document.querySelector(".winning")
const loseMsg = document.querySelector(".losing")

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
		img.setAttribute("src", `img/flowerError${this.size}.png`)
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
			loseMsg.classList.remove("hidden")
			img.classList.add("hideImg")
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
			winMsg.classList.remove("hidden")
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
	// api key 880603e3154c1979d3f50bcfda4cea9b
	// application id 	e344023d
fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		"x-rapidapi-key": "d75413ccb8mshebbd7456372ec1cp10a3c6jsn3604564d1538"
	}
})
	.then(res => res.json())
	.then(res => {
		console.log("success", res)
	})
	.catch(err => {
		console.log("uh oh", err)
	})

	
