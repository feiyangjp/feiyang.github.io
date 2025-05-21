document.addEventListener("DOMContentLoaded", () => {
  const langSwitcher = document.getElementById("lang-switch");
  const elements = document.querySelectorAll("[data-ja], [data-zh]");
  if (!langSwitcher) return;
  langSwitcher.addEventListener("change", (e) => {
    const lang = e.target.value;
    elements.forEach((el) => {
      if (lang === "zh") {
        el.textContent = el.getAttribute("data-zh");
      } else {
        el.textContent = el.getAttribute("data-ja");
      }
    });
  });
});