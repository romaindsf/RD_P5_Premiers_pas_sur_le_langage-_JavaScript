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
//declarer les variables globales ici
let leftArrow = document.querySelector(".arrow_left")
let rightArrow = document.querySelector(".arrow_right")
let dots = document.querySelector(".dots")

// ajout évènement sur les 2 fléches

leftArrow.addEventListener("click_left", () => {
	console.log("cliqué sur flèche de gauche")
})

rightArrow.addEventListener("click_right", () => {
	console.log("cliqué sur flèche de droite")
})

//afficher les dots pour chaque slides
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div")
	dot.classList.add("dot")
	dots.appendChild(dot)
}