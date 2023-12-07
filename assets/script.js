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

//Global variables stated
let leftArrow = document.querySelector(".arrow_left")
let rightArrow = document.querySelector(".arrow_right")
let slideNumber = 0
let slidesLength = slides.length
let slideShow = document.querySelector(".banner-img")

//display dots equal to the numbers of slides
let dots = document.querySelector(".dots")
for (let i = 0; i < slidesLength; i++) {
	let dot = document.createElement("div")
	dot.classList.add("dot","dot_"+ i)
	dots.appendChild(dot)
}

//differenciate the first selected dot
let listDot = document.querySelectorAll(".dot")
let selectedDot = listDot[slideNumber]
selectedDot.classList.add("dot_selected")

//function to reset the slides at both ends
function slidesLoop(slideNumber, slidesLength){
	if(slideNumber < 0) {
		slideNumber = slidesLength - 1
	}
	if(slideNumber > slidesLength - 1){
		slideNumber = 0
	}
	console.log(slideNumber)
	return slideNumber
}

//event listener for both arrows
leftArrow.addEventListener("click", () => {
	console.log("cliqué sur flèche de gauche")
	slideNumber -= 1
	slideNumber = slidesLoop(slideNumber, slidesLength)
	switch(slideNumber){
		case(0):
		slideShow.setAttribute("src", "./assets/images/slideshow/slide1.jpg")
			break
		case(1):
			slideShow.setAttribute("src", "./assets/images/slideshow/slide2.jpg")
			break
		case(2):
			slideShow.setAttribute("src", "./assets/images/slideshow/slide3.jpg")
			break
		case(3):
		slideShow.setAttribute("src", "./assets/images/slideshow/slide4.png")
			break
	}
})

rightArrow.addEventListener("click", () => {
	console.log("cliqué sur flèche de droite")
	slideNumber += 1
	slideNumber = slidesLoop(slideNumber, slidesLength)

	//change images

	switch(slideNumber){
		case(0):
		slideShow.setAttribute("src", "./assets/images/slideshow/slide1.jpg")
			break
		case(1):
			slideShow.setAttribute("src", "./assets/images/slideshow/slide2.jpg")
			break
		case(2):
			slideShow.setAttribute("src", "./assets/images/slideshow/slide3.jpg")
			break
		case(3):
		slideShow.setAttribute("src", "./assets/images/slideshow/slide4.png")
			break
	}
})