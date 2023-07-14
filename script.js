

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






// function addAnimationClasses() {
//   var elements = document.querySelectorAll('.animate-rise.hidden');

//   elements.forEach(function(element) {
//       element.classList.remove('hidden');
//       element.classList.add('animate');
//   });
// }

// window.addEventListener('load', addAnimationClasses);




// const menuIcon = document.getElementById('menu-icon');
// const navContainer = document.querySelector('.nav-container');
// const dropdownMenu = document.createElement('div');
// dropdownMenu.classList.add('dropdown-menu');

// const dropdownLinks = [];

// navLinks.forEach((link) => {
//   const dropdownLink = document.createElement('a');
//   dropdownLink.href = link.href;
//   dropdownLink.textContent = link.textContent;
//   dropdownMenu.appendChild(dropdownLink);
// });

// navContainer.appendChild(dropdownMenu);

// menuIcon.addEventListener('click', () => {
//   navContainer.classList.toggle('show');
// })



function myFunction() {
  var x = document.getElementById("myTopnav");
  x.classList.toggle("responsive");
  // if (x.classList.contains("responsive")) {
  //   x.classList.remove("responsive");
  // } else {
  //   x.classList.add("responsive");
  // }
}

