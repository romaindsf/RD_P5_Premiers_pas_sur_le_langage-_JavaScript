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

// Variables
let slideIndex = 0
let leftArrow = document.querySelector(".arrow_left")
let rightArrow = document.querySelector(".arrow_right")

// Number of dots in slideshow
slides.forEach(() => {
	let dot = document.createElement("div")
	let dots = document.querySelector(".dots").appendChild(dot)
	dot.classList.add("dot")
})

// First dot is selected at first
let selectedDot = document.querySelector(".dot:first-child")
selectedDot.classList.add("dot_selected")

// Function
function slideshow(slideIndex) {
	if(slideIndex < 0) {slideIndex = slides.length - 1}
	if(slideIndex > slides.length - 1) {slideIndex = 0}	//loop rules
	selectedDot.classList.remove("dot_selected")
	let imageContent =  document.querySelector(".banner-img")
	imageContent.src = `./assets/images/slideshow/${slides[slideIndex].image}`
	let textContent = document.querySelector("#banner p")
	textContent.innerHTML= slides[slideIndex].tagLine	//image & text change
	selectedDot = document.querySelector(`.dot:nth-child(${slideIndex + 1})`)
	selectedDot.classList.add("dot_selected")			//dot change
	return slideIndex
}

// Event listeners
rightArrow.addEventListener("click", () => {
	slideIndex += 1
	slideIndex = slideshow(slideIndex)
})
leftArrow.addEventListener("click", () => {
	slideIndex -= 1
	slideIndex = slideshow(slideIndex)
})