// get random mystery word from array
randomArray = ["bananas", "shoes", "biscuits", "television", "lugubrious", "shimmer", "apples"]
let randomWord = randomArray[Math.floor(Math.random()*randomArray.length)];
const resetButton = document.querySelector("#reset")
// const enterYourOwnButton = document.querySelector("#enter")

// Switch back 
const main = document.querySelector("main")
const box = document.querySelector(".box")
const hangman = document.querySelector(".hangman")
const img = document.querySelector("img")
const winMsg = document.querySelector(".winning")
const loseMsg = document.querySelector(".losing")
const form = document.querySelector("form")

const alphabet = "abcdefghijklmnopqrstuvwxyz"
const alphaArray = alphabet.split("")
const keyboard = document.querySelector(".keyboard")

// let word = randomWord
// const wordArray = word.split("")
let errCount = 0

function buildLines(word) {
	let wordArray = word.split("")
	for (let i = 0; i < wordArray.length; i ++) {
		main.appendChild(document.createElement("div"))
	}
	let hiddenDivs = document.querySelectorAll("div")
		for (let i = 0; i < wordArray.length; i ++) {
			hiddenDivs[i].innerText = wordArray[i]
			hiddenDivs[i].classList.add("hidden")
		}
}
function buildKeyboard() {
	for (let i = 0; i < alphaArray.length; i++) {
	keyboard.appendChild(document.createElement("button"))
	let keys = document.querySelectorAll("button")
	keys[i].innerText = alphaArray[i]
	keys[i].classList.add(alphaArray[i])
	keys[i].addEventListener("click", function(e) {
		e.preventDefault()
		keys[i].style.backgroundColor = "#056053"
		play(keys[i].innerText)
		e.target.removeEventListener(e.type, arguments.callee)
		})	
	}
}
function buildError() {
	errCount ++
	img.setAttribute("src", `img/flowerError${errCount}.png`)
	
}
function startGame(word) {
	console.log(word)
	buildLines(word)
	buildKeyboard()
}
function checkLetter(letter) {
		let hiddenLetters = document.querySelectorAll("div")
		let letterAppearanceCount = 0
		for(let i = 0; i < hiddenLetters.length; i ++) {
			if(letter === hiddenLetters[i].innerText) {
				hiddenLetters[i].classList.remove("hidden")
				letterAppearanceCount ++
			} 	
		}
		if (letterAppearanceCount === 0) {
			buildError()
		} 
		if (errCount > 10) {
			loseMsg.classList.remove("hidden")
			loseMsg.classList.add("space")
			img.classList.add("hideImg")
			img.setAttribute("src", "#")
		}
}
function addLetterToBox(letter) {
	box.innerText += letter
}

function play(letter) {
	checkLetter(letter)
	addLetterToBox(letter)
	let hiddenDivs = document.querySelectorAll("div")
	let blankCount = hiddenDivs.length
	for (let i = 0; i < hiddenDivs.length; i++) {
		if (hiddenDivs[i].classList != "hidden") {
			blankCount --
		}
	}
	console.log(blankCount)
	if(blankCount === 0) {
		winMsg.classList.remove("hidden")
		winMsg.classList.add("space")
	}
}
startGame(randomWord)
// event listeners for buttons
resetButton.addEventListener("click", function(e) {
	e.preventDefault()
	box.innerHTML=""
	main.innerHTML=""
	keyboard.innerHTML=""
	startGame(randomWord)
})
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