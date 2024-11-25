// tailwind.config = {
//   darkMode: 'selector',
//   theme: {
//     extend: {},
//   },
// };

// $('#download-cv').on('click', (e) => {
//   const link = document.createElement('a');
//   link.href = './assets/document/CV_RADO_HT_SIMARMATA.pdf';
//   link.download = 'CV_RADO_HT_SIMARMATA.pdf';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// });

// document.getElementById("menunav").onclick = function toggleMenu() {
//   const navToggle = document.getElementsByClassName("toggle");
//   for (let i = 0; i < navToggle.length; i++) {
//     navToggle.item(i).classList.toggle("hidden");
//   }
// };


const options = {
  strings: ["a Web Developer","an Android Developer","experienced in IoT Development", "a Software Engineer"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
};

const typed = new Typed("#typed-output", options);

let currentSlide = 0;

// Function to move slides
function moveSlide(direction) {
  const slides = document.querySelector('.flex.transition-transform');
  const totalSlides = document.querySelectorAll('.flex.transition-transform > div').length;
  currentSlide += direction;

  // Ensure slides loop around
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  // Move slides
  const slideWidth = document.querySelector('.flex').offsetWidth;
  slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}