/* Slides - Inicio */
async function fetchSlides() {
  const response = await fetch('src\slides.json');
  const slides = await response.json();
  applySlides(slides);
}

function applySlides(slides) {
  const sliderContent = document.getElementById('slider-content');
  const slideBoxes = sliderContent.getElementsByClassName('slide-box');

  slides.forEach((slide, index) => {
    if (slideBoxes[index]) {
      slideBoxes[index].innerHTML = `
        <a href="${slide.link}"><img src="${slide.image}" alt="slide${index + 1}"></a>
        <div class="slide-text">${slide.text}</div>
      `;
    }
  });
}

var cont = 1;
document.getElementById('radio1').checked = true;
setInterval(() => {
  proximaImg();
}, 4000);

function proximaImg() {
  cont++;
  if (cont > 3) {
    cont = 1;
  }
  document.getElementById('radio' + cont).checked = true;
}

fetchSlides();
/* Slides - Fim */



/* Barra de Pesquisa - Início */
document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector(".search-container");
  const searchBox = document.querySelector(".search-box");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchBox.value.toLowerCase().trim();

    if (query) {

      fetch("/src/pesquisa.json")
        .then((response) => {
          if (!response.ok) throw new Error("Erro ao carregar o JSON");
          return response.json();
        })
        .then((data) => {
          const results = data.results.filter((item) =>
            item.query.toLowerCase().includes(query)
          );

          if (results.length > 0) {

            window.location.href = results[0].url;

          } else {
            alert("Nenhum resultado encontrado.");
          }
        })
        .catch((error) => console.error("Erro ao buscar resultados:", error));
    }
  });
});

/* Barra de Pesquisa - Fim */