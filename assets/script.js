const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//declaring variables
let slideNumber = 0
let leftArrow = document.querySelector(".arrow_left")
let rightArrow = document.querySelector(".arrow_right")

// properties of dots at first
slides.forEach(() => {
	let dot = document.createElement("div")
	let dots = document.querySelector(".dots").appendChild(dot)
	dot.classList.add("dot")
})
let selectedDot = document.querySelector(".dot:first-child")
selectedDot.classList.add("dot_selected")

//Function
function slideshow(slideNumber) {
	if(slideNumber < 0) {slideNumber = slides.length - 1}
	if(slideNumber > slides.length - 1) {slideNumber = 0}
	selectedDot.classList.remove("dot_selected")
	let imageContent =  document.querySelector(".banner-img")
	imageContent.src = `./assets/images/slideshow/${slides[slideNumber].image}`
	let textContent = document.querySelector("#banner p")
	textContent.innerHTML= slides[slideNumber].tagLine
	selectedDot = document.querySelector(`.dot:nth-child(${slideNumber + 1})`)
	selectedDot.classList.add("dot_selected")
	return slideNumber
}
//event listeners
rightArrow.addEventListener("click", () => {
	slideNumber += 1
	slideNumber = slideshow(slideNumber)
	console.log(slideNumber)
})
leftArrow.addEventListener("click", () => {
	slideNumber -= 1
	slideNumber = slideshow(slideNumber)
	console.log(slideNumber)
})