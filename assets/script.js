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

let leftArrow = document.querySelector(".arrow_left")
console.log(leftArrow)
leftArrow.addEventListener("click", () => {
	console.log("cliqué sur flèche de gauche")
})
let rightArrow = document.querySelector(".arrow_right")
console.log(rightArrow)
rightArrow.addEventListener("click", () => {
	console.log("cliqué sur flèche de droite")
})