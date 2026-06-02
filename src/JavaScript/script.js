document.addEventListener("DOMContentLoaded", () => {
  const mobileBtn = document.querySelector(".mobile_btn");
  const mobileMenu = document.querySelector(".mobile_menu");
  const icon = mobileBtn?.querySelector("span");

  if (mobileBtn && mobileMenu && icon) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      icon.textContent = mobileMenu.classList.contains("active") ? "close" : "dehaze";
    });
  }

  const periciaButtons = document.querySelectorAll(".btn_default");
  const cards = document.querySelectorAll(".pericia_cards .card");

  periciaButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      periciaButtons.forEach((btn) => btn.classList.remove("active"));
      cards.forEach((card) => card.classList.remove("active"));

      button.classList.add("active");
      if (cards[index]) cards[index].classList.add("active");
    });
  });

  const dossieButtons = document.querySelectorAll(".timeline_btn");
  const sliderTrack = document.querySelector(".slider_track");

  dossieButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      dossieButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      if (sliderTrack) {
        sliderTrack.style.transform = `translateX(-${index * 100}%)`;
      }
    });
  });

  const navItems = $(".nav_item");;

});
