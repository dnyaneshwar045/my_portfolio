'use strict';

// Sidebar toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
}

// Navbar navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll(".main-content article[data-page]");
navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    navigationLinks.forEach(l => l.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));
    this.classList.add("active");
    const pageName = this.textContent.trim().toLowerCase();
    const page = document.querySelector(`.main-content article[data-page="${pageName}"]`);
    if (page) page.classList.add("active");
    window.scrollTo(0, 0);
  });
});

// Project filter (if you use it)
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterItems = document.querySelectorAll("[data-filter-item]");
if (select) {
  select.addEventListener("click", function () {
    select.classList.toggle("active");
  });
  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      select.classList.remove("active");
      filterItems.forEach(fi => {
        if (selectedValue === "all" || selectedValue === fi.dataset.category) {
          fi.classList.add("active");
        } else {
          fi.classList.remove("active");
        }
      });
    });
  });
}

// Contact form validation (if you use it)
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
if (form) {
  formInputs.forEach(input => {
    input.addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
}