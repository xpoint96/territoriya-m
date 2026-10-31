const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const searchToggle = document.getElementById("search-toggle");
const searchPanel = document.getElementById("search-panel");
const searchForm = document.getElementById("search-form");
const searchNote = document.getElementById("search-note");
const carousel = document.getElementById("carousel");
const bookForm = document.getElementById("book-form");
const formNote = document.getElementById("form-note");

menuToggle.addEventListener("click", () => {
  const open = mobileMenu.hidden;
  mobileMenu.hidden = !open;
  menuToggle.setAttribute("aria-expanded", String(open));
  searchPanel.hidden = true;
});

searchToggle.addEventListener("click", () => {
  searchPanel.hidden = !searchPanel.hidden;
  mobileMenu.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  if (!searchPanel.hidden) {
    searchPanel.querySelector("input").focus();
  }
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = String(new FormData(searchForm).get("q") || "").toLowerCase();
  const target = query.includes("адрес") || query.includes("карт") || query.includes("парк")
    ? "#contacts"
    : query.includes("мастер") || query.includes("семён") || query.includes("роман")
      ? "#barbers"
      : query.includes("космет") || query.includes("паст")
        ? "#shop"
        : "#book";
  searchNote.hidden = false;
  searchNote.textContent = "Нашли. Листаем в нужный блок.";
  document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("next").addEventListener("click", () => {
  carousel.scrollBy({ left: 280, behavior: "smooth" });
});

document.getElementById("prev").addEventListener("click", () => {
  carousel.scrollBy({ left: -280, behavior: "smooth" });
});

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(bookForm);
  const name = String(data.get("name") || "").trim();
  formNote.hidden = false;
  formNote.textContent = name
    ? `${name}, заявка принята. Перезвоним по номеру и подтвердим кресло.`
    : "Заявка принята. Перезвоним и подтвердим кресло.";
  bookForm.reset();
});
