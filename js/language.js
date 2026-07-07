async function loadPopupMalayalam() {
    try {
        const response = await fetch("lang/ml.json");
        const translations = await response.json();

        document.querySelectorAll(".popup-ml").forEach((element) => {
            const key = element.dataset.key;

            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

    } catch (error) {
        console.error(error);
    }
}





async function loadMalayalam() {
  try {
    const response = await fetch("lang/ml.json");
    const translations = await response.json();

    // Translate data-key elements
   document.querySelectorAll("[data-key]:not(.popup-ml)").forEach((element) => {
    const key = element.dataset.key;

    if (translations[key]) {
        element.textContent = translations[key];
    }
});

    // Locations
    const locationElements = document.querySelectorAll(".location-text");

    if (translations.locations) {
      locationElements.forEach((el, index) => {
        if (translations.locations[index]) {
          el.textContent = translations.locations[index];
        }
      });
    }

    // Ticket names
    const ticketElements = document.querySelectorAll(".tickets-name");

    if (translations.tickets) {
      ticketElements.forEach((el, index) => {
        if (translations.tickets[index]) {
          el.textContent = translations.tickets[index];
        }
      });
    }

    document.documentElement.lang = "ml";
    document.getElementById("selectedLanguage").textContent = "മലയാളം";

    localStorage.setItem("language", "ml");
  } catch (error) {
    console.error("Malayalam Load Error:", error);
  }
}

// =============================
// Load English
// =============================
function loadEnglish() {
  localStorage.setItem("language", "en");

  document.documentElement.lang = "en";
  document.getElementById("selectedLanguage").textContent = "English";

  // Reload to original English HTML
  location.reload();
}

// =============================
// Page Load
// =============================
window.addEventListener("DOMContentLoaded", async () => {
      await loadPopupMalayalam();

  const savedLanguage = localStorage.getItem("language") || "ml";

  if (savedLanguage === "ml") {
    await loadMalayalam();
  } else {
    document.documentElement.lang = "en";
    document.getElementById("selectedLanguage").textContent = "English";
  }
});
