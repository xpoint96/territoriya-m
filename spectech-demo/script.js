const form = document.getElementById("lead-form");
const serviceSelect = document.getElementById("service");
const phoneInput = form.querySelector('input[name="phone"]');
const fileInput = form.querySelector('input[name="photo"]');
const fileName = form.querySelector(".file__name");

document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    serviceSelect.value = link.dataset.service;
  });
});

phoneInput.addEventListener("input", () => {
  let digits = phoneInput.value.replace(/\D/g, "");
  if (digits.startsWith("8")) digits = "7" + digits.slice(1);
  if (!digits.startsWith("7")) digits = "7" + digits;
  digits = digits.slice(0, 11);

  const p = digits.slice(1);
  let out = "+7";
  if (p.length) out += " (" + p.slice(0, 3);
  if (p.length >= 3) out += ")";
  if (p.length > 3) out += " " + p.slice(3, 6);
  if (p.length > 6) out += "-" + p.slice(6, 8);
  if (p.length > 8) out += "-" + p.slice(8, 10);

  phoneInput.value = out;
  phoneInput.classList.remove("invalid");
});

fileInput.addEventListener("change", () => {
  const count = fileInput.files.length;
  fileName.textContent = count ? `выбрано файлов: ${count}` : "необязательно";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (phoneInput.value.replace(/\D/g, "").length !== 11) {
    phoneInput.classList.add("invalid");
    phoneInput.focus();
    return;
  }
  form.querySelector(".form__success").hidden = false;
});
