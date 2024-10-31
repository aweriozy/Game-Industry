// Получаем элемент кнопки
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Показываем кнопку при прокрутке на 50% страницы
window.onscroll = function () {
  if (
    document.body.scrollTop > document.body.scrollHeight / 2 ||
    document.documentElement.scrollTop >
      document.documentElement.scrollHeight / 2
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Плавная прокрутка вверх при нажатии на кнопку
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let articles = [
  {
    foto: "https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png",
    title: "Устаревшие языки, которые уже не стоит изучать",
    intro:
      "Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.",
  },
  // остальные ваши статьи
];

// Придуманные статьи
let additionalArticles = [
  {
    foto: "../imgs/fifth.png",
    title: "Новые тренды в разработке на JavaScript",
    intro:
      "JavaScript постоянно развивается, и каждый год приносит новые подходы и библиотеки, которые меняют мир разработки.",
  },
  {
    foto: "../imgs/sixth.jpg",
    title: "Технологии, которые упростили веб-разработку",
    intro:
      "Современные технологии позволили разработчикам писать меньше кода и быстрее получать качественные результаты.",
  },
  {
    foto: "../imgs/seventh.jpg",
    title: "Как улучшить производительность сайта",
    intro:
      "Ускорение загрузки страниц может значительно улучшить пользовательский опыт и SEO-результаты.",
  },
  {
    foto: "../imgs/eigth.png",
    title: "Почему стоит перейти на WebAssembly",
    intro:
      "WebAssembly открывает возможности для написания высокопроизводительных веб-приложений на множестве языков.",
  },
  {
    foto: "../imgs/nineth.webp",
    title: "Тенденции дизайна UI/UX в 2024 году",
    intro:
      "Пользовательский интерфейс и пользовательский опыт играют важную роль в создании успешных цифровых продуктов.",
  },
  {
    foto: "../imgs/tenth.png",
    title: "Как защитить свой сайт от атак",
    intro:
      "Киберугрозы становятся все более изощренными, и защита вашего веб-приложения должна быть приоритетом.",
  },
  {
    foto: "../imgs/eleventh.png",
    title: "Vue.js или React: что выбрать в 2024?",
    intro:
      "Vue и React остаются популярными инструментами для создания интерфейсов, но какой из них лучше подходит для вашего проекта?",
  },
  {
    foto: "../imgs/12img.jpg",
    title: "Будущее AI в веб-разработке",
    intro:
      "Искусственный интеллект уже меняет процесс создания сайтов, и в будущем это влияние будет только увеличиваться.",
  },
];

let articlesShown = 0;
const articlesPerClick = 4;

const loadMoreBtn = document.getElementById("loadMoreBtn");
const moreNewsContainer = document.getElementById("more-news");

function renderArticles() {
  const start = articlesShown;
  const end = Math.min(start + articlesPerClick, additionalArticles.length);
  for (let i = start; i < end; i++) {
    const article = additionalArticles[i];
    const articleHtml = `
      <form>
        <img src="${article.foto}" alt="${article.title}">
        <h3>${article.title}</h3>
        <p>${article.intro}</p>
        <button type="button">Читать далее</button>
      </form>
    `;
    moreNewsContainer.innerHTML += articleHtml;
  }
  articlesShown += articlesPerClick;

  // Скрыть кнопку после того, как все статьи будут подгружены
  if (articlesShown >= additionalArticles.length) {
    loadMoreBtn.style.display = "none";
  }
}

loadMoreBtn.addEventListener("click", renderArticles);

document.getElementById("open-search").addEventListener("click", function () {
  document.getElementById("search-container").style.display = "flex";
});

document.getElementById("close-search").addEventListener("click", function () {
  document.getElementById("search-container").style.display = "none";
});
