/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

// A function that adds and remove the class "active" on the section you click on.
// console.log(this) to see how it works
function toggle() {
	this.classList.toggle("active")
}
// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("question1").onclick = toggle



document.getElementById("question2").onclick = toggle



document.getElementById("question3").onclick = toggle



document.getElementById("question4").onclick = toggle


// // A function that adds and remove the class "active" on the section you click on.
// function moreInfoToggle() {
// 	console.log(moreInfoToggle)
// 	this.classList.toggle("active")
// }
// // Selects an HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("moreInfoAnswer").onclick = moreInfoToggle


function moreInfoFunction() {
	var x = document.getElementById('moreInfo');
	if (x.style.display === 'none') {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
}