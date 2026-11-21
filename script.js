const themeToggle = document.querySelector(".theme-toggle");
const currentYear = document.querySelector("#current-year");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark
      ? "Switch to light mode"
      : "Switch to dark mode";
  });
}

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
