// FAQ
var acc = document.getElementsByClassName("accordion-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("is-open");
    
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}


// Features tabs
const tabs = document.querySelectorAll('[data-tab-target')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


// Info
// Email validation
function validation() {
  var form = document.getElementById("form")
  var email = document.getElementById("email").value
  var text = document.getElementById("text")
  var pattern = /^[^]+@[^]+\.[A-Z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid")
    form.classList.remove("invalid")
  } else {
    form.classList.remove("valid")
    form.classList.add("invalid")
    text.innerHTML="Please enter valdid email address"
  }
}


// Navbar
// Hamburger Menu
function myFunction() {
  var x = document.getElementById("hamburgerMenu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block"
  }
} 