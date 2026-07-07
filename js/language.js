// =============================
// Load Malayalam
// =============================
async function loadMalayalam() {
    try {
        const response = await fetch("lang/ml.json");
        const translations = await response.json();

        // Translate all data-key elements
        document.querySelectorAll("[data-key]").forEach((element) => {
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

        // Ticket Names
        const ticketElements = document.querySelectorAll(".tickets-name");
        if (translations.tickets) {
            ticketElements.forEach((el, index) => {
                if (translations.tickets[index]) {
                    el.textContent = translations.tickets[index];
                }
            });
        }

        document.documentElement.lang = "ml";
        localStorage.setItem("language", "ml");
        document.getElementById("selectedLanguage").textContent = "മലയാളം";

    } catch (error) {
        console.error(error);
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
// Change Language
// =============================
function changeLanguage(lang) {
    if (lang === "ml") {
        loadMalayalam();
    } else {
        loadEnglish();
    }
}

// =============================
// Page Load
// =============================
window.addEventListener("DOMContentLoaded", () => {

    // Default = Malayalam
    const savedLanguage = localStorage.getItem("language") || "ml";

    if (savedLanguage === "ml") {
        loadMalayalam();
    } else {
        document.documentElement.lang = "en";
        document.getElementById("selectedLanguage").textContent = "English";
    }

});