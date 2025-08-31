const faqTabs = document.querySelectorAll(".faq-tabs__item");
const faqListItems = document.querySelectorAll(".faq-list__item");
faqTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    faqTabs.forEach((element) => {
      element.classList.remove("faq-tabs__item--active");
    });
    tab.classList.add("faq-tabs__item--active");
  });
});

faqListItems.forEach((element) => {
  element.addEventListener("click", () => {
    const arrow = element.querySelector(".accordion-arrow");
    element.classList.toggle("faq-list__item--open");
    arrow.classList.toggle("accordion-arrow--active");
  });
});
