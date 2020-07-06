/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById('myLinks')
  if (x.style.display === 'block') {
    x.style.display = 'none'
  } else {
    x.style.display = 'block'
  }
}

/* alt. hamburger menu */
const btn = document.getElementById('toggle')
const menu = document.getElementById('menu')

btn.addEventListener('click', toggleMenu)
menu.addEventListener('click', toggleMenu)

function toggleMenu() {
  console.log('here')
  if (menu.classList.contains('open')) {
    menu.classList.remove('open')
  } else {
    menu.classList.add('open')
  }
}

// Toggle function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle('active')
}
// Will be executed when the element is clicked.
document.getElementById('question1').onclick = toggle

document.getElementById('question2').onclick = toggle

document.getElementById('question3').onclick = toggle

document.getElementById('question4').onclick = toggle

// More Info "alert"
function moreInfoFunction() {
  var x = document.getElementById('moreInfo')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  } else {
    x.style.display = 'none'
  }
}
