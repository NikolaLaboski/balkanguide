// Tab Functionality
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".nav-tabs a");
  const tabContents = document.querySelectorAll(".tab-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((content) =>
        content.classList.remove("active", "in")
      );

      // Add active class to clicked tab and content
      tab.classList.add("active");
      const targetId = tab.getAttribute("href").substring(1);
      const targetContent = document.getElementById(targetId);
      targetContent.classList.add("active", "in");
    });
  });

  // Smooth Scroll for navigation
  const navLinks = document.querySelectorAll(".smooth-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Sticky Header
  const header = document.querySelector(".top-area");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  // Simple Form Validation
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = form.querySelectorAll("input");
      let valid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          input.style.borderColor = "#e74c3c";
          valid = false;
        } else {
          input.style.borderColor = "#ddd";
        }
      });

      if (valid) {
        console.log("Form submitted successfully");
        // Add your form submission logic here
      }
    });
  });
});
