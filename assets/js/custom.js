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

// Countdown Timer
function startCountdown(targetDate) {
  function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      document.getElementById("timer").innerHTML = "<h3>Offer Expired</h3>";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = `<span>${days}</span>Days`;
    document.getElementById("hours").innerHTML = `<span>${hours}</span>Hours`;
    document.getElementById(
      "minutes"
    ).innerHTML = `<span>${minutes}</span>Minutes`;
    document.getElementById(
      "seconds"
    ).innerHTML = `<span>${seconds}</span>Seconds`;
  }

  // Update the timer every second
  setInterval(updateTimer, 1000);
  updateTimer(); // Run immediately to prevent 1s delay
}

// Set target date (change this to your desired countdown end date)
const countdownDate = new Date("April 30, 2028 23:59:59").getTime();
startCountdown(countdownDate);
