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

//differenciate the first selected dot
let listDot = document.querySelectorAll(".dot")
let selectedDot = listDot[slideNumber]
selectedDot.classList.add("dot_selected")

//event listener for both arrows

leftArrow.addEventListener("click", () => {
	console.log("cliqué sur flèche de gauche")
})

rightArrow.addEventListener("click", () => {
	console.log("cliqué sur flèche de droite")
})