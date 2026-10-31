const form = document.getElementById("contact-form");
const note = document.getElementById("form-note");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();

  note.hidden = false;
  note.classList.add("show");
  note.textContent = name
    ? `${name}, принято. Я вернусь с контуром, как только открою письмо.`
    : "Принято. Я вернусь с контуром, как только открою письмо.";

  form.reset();
});
