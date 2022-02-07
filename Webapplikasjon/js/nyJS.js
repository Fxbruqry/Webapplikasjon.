const imageArray = [
	"images/bilde2.JPG",
	"images/bilde3.JPG",
	"images/bilde4.JPG",
	"images/bilde5.JPG",
	"images/bilde6.JPG",
	"images/bilde7.JPG",
	"images/bilde8.JPG",
	"images/bilde9.JPG",
	"images/bilde10.JPG",
	"images/bilde11.JPG",
	"images/bilde12.JPG",
	"images/bilde13.JPG",
	"images/bilde14.JPG"

];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}