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
//Variables globales déclarées
let leftArrow = document.querySelector(".arrow_left")
let rightArrow = document.querySelector(".arrow_right")
let slideNumber = 0



//display dots equal to the numbers of slides

let dots = document.querySelector(".dots")
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div")
	dot.classList.add("dot","dot_"+ i)
	dots.appendChild(dot)
}


//Differenciate the selected dot
function selectedDot(slideNumber){
	let listDot = document.querySelectorAll(".dot")
	console.log(listDot[slideNumber])
	let selectedDot = document.querySelector(".dot_" + slideNumber)
	console.log(selectedDot)
	listDot[slideNumber - 1].classList.remove("dot_selected")
	listDot[slideNumber + 1].classList.remove("dot_selected")
	selectedDot.classList.add("dot_selected")
	return
}



//event listener for both arrows

leftArrow.addEventListener("click", () => {
	console.log("cliqué sur flèche de gauche")
	slideNumber -=1
	console.log("show the slide number " + slideNumber)
	if (slideNumber <= 0) {
		slideNumber = 0
	}
	console.log("show the slide number " + slideNumber)
	selectedDot(slideNumber)
})

rightArrow.addEventListener("click", () => {
	console.log("cliqué sur flèche de droite")
	slideNumber += 1
	if (slideNumber >= slides.length) {
		slideNumber = 0
	}
	console.log("show the slide number " + slideNumber)
	selectedDot(slideNumber)
})