window.addEventListener("scroll", function () {
   document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);        //scroll navbar 
});

//--------------------------------------------------------------------------------------------------------------------------

const text = ["Developer", "Designer", "Freelancer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);                                                         //typing
    }

    document.querySelector(".typing").textContent = currentText;

    if (j === text[i].length) isDeleting = true;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }
  setTimeout(type, isDeleting ? 80 : 150);
}

type();

//------------------------------------------------------------------------------------------------------------------------


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.parentElement.classList.remove("active-link");

    if (link.getAttribute("href") === "#" + current) {
      link.parentElement.classList.add("active-link");
    }
  });
});