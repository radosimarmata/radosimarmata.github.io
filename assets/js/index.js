tailwind.config = {
  darkMode: 'selector',
  theme: {
    extend: {},
  },
};

$('#download-cv').on('click', (e) => {
  const link = document.createElement('a');
  link.href = './assets/document/CV_RADO_HT_SIMARMATA.pdf';
  link.download = 'CV_RADO_HT_SIMARMATA.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// document.getElementById('hamburger').onclick = function() {
//   document.getElementsByClassName("toggle").classList.toggle('hidden');
// };

document.getElementById("menunav").onclick = function toggleMenu() {
  const navToggle = document.getElementsByClassName("toggle");
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }
};