// get random mystery word from array
randomArray = ["bananas", "shoes", "biscuits", "television", "lugubrious", "shimmer", "apples"]
let randomItem = randomArray[Math.floor(Math.random()*randomArray.length)];
const randomButton = document.querySelector("#random")
const enterYourOwnButton = document.querySelector("#enter")
// switching to oop
const main = document.querySelector("main")
const box = document.querySelector(".box")
const hangman = document.querySelector(".hangman")
const img = document.querySelector("img")
const winMsg = document.querySelector(".winning")
const loseMsg = document.querySelector(".losing")
const form = document.querySelector("form")

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
			loseMsg.classList.add("space")
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
			winMsg.classList.add("space")
		}
	}
}

let game = new Game(randomItem)
console.log(game.word.array)


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
		keys[i].style.backgroundColor = "#056053"
		game.play(keys[i].innerText)
		e.target.removeEventListener(e.type, arguments.callee)
	})	
}

// event listeners for buttons
// randomButton.addEventListener("click", function(e) {
// 	e.preventDefault()

// })
// enterYourOwnButton.addEventListener("click", function(e) {
// 	e.preventDefault()
// 	let mysteryWord = prompt("Enter Your Own Word!")
// 	game = new Game(`${mysteryWord}`)
// })
// this one times out -- neither seems to replace the old game

// working to add typing feature
// form.addEventListener("keydown", function(e) {
// 	e.preventDefault()
// 	keys[i].style.backgroundColor = "#056053"
// 	game.play(keys[i].innerText)
// 	e.target.removeEventListener(e.type, arguments.callee)
// })



// fetch request for api
// fetch("https://api.datamuse.com/words?ml=animals&max=1000") 
// 	.then(res => res.json()) 
// 	.then(res => {
// 		console.log("success", res)
// 		let randomWord = res[Math.floor(Math.random()*res.length)].word;
// 		console.log(randomWord)
// 		// let game = new Game(randomWord)

// 	})
// 	.catch(err => {
// 		console.log("oops", err)
// 	})
// let game = new Game(randomWord)


	
