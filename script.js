

window.addEventListener('scroll', function() {
var box = document.querySelector('.about-me');
var boxPosition = box.getBoundingClientRect().top;
var screenPosition = window.innerHeight / 1.5;

if (boxPosition < screenPosition) {
    box.classList.add('animate');
} else {
    box.classList.remove('animate');
}
});

window.addEventListener('scroll', function() {
    var boxes = document.querySelectorAll('.projects');
    var screenPosition = window.innerHeight / 1.5;
  
    boxes.forEach(function(box) {
      var boxPosition = box.getBoundingClientRect().top;
  
      if (boxPosition < screenPosition) {
        box.classList.add('animate');
      } else {
        box.classList.remove('animate');
      }
    });
});
  

window.addEventListener('scroll', function() {
  var boxes = document.querySelectorAll('.art-item');
  
  boxes.forEach(function(box) {
    var boxPosition = box.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;
  
    if (boxPosition < screenPosition) {
      box.classList.add('animate');
    } else {
      box.classList.remove('animate');
    }
  });
});

// Smooth scroll to anchor links
const navLinks = document.querySelectorAll('.nav-container a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});



window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.animate-rise.hidden');
  var screenPosition = window.innerHeight / 1.5;

  elements.forEach(function(element) {
    var elementPosition = element.getBoundingClientRect().top;

    if (elementPosition < screenPosition) {
      element.style.animation = 'rise-up 1s ease-in-out forwards';
      element.classList.remove('hidden');
      element.classList.add('animate');
    } else {
      element.style.animation = '';
      element.classList.remove('animate');
      element.classList.add('hidden');
    }
  });
});





let toggleBtnIcon = document.querySelector('#nav-toggle i');
let dropdown = document.querySelector('.drop-down-menu');

toggleBtnIcon.addEventListener('click', () => {
  dropdown.style.display = 'block'
  dropdown.classList.toggle('open');
});
