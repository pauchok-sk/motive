export default function tab() {
  const buttonsTab = document.querySelectorAll("[data-tab-btn]");
  const tabs = document.querySelectorAll(".tab");

  if (buttonsTab.length) {
    buttonsTab.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        const parent = btn.closest(".tab-container");
        const tabId = btn.dataset.tabBtn;
        const currentButtons = parent.querySelectorAll("[data-tab-btn]");
        const currentTab = parent.querySelector(`.tab[data-tab="${tabId}"]`);

        currentButtons.forEach((b) => b.classList.remove("_active"));
        tabs.forEach((t) => t.classList.remove("_open"));

        currentTab.classList.add("_open");
        btn.classList.add("_active");
      });
    });
  }
}