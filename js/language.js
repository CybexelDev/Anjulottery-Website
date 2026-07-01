async function loadMalayalam() {
    try {
        const response = await fetch("lang/ml.json");
        const translations = await response.json();

        // =========================
        // 1. data-key SYSTEM
        // =========================
        document.querySelectorAll("[data-key]").forEach((element) => {
            const key = element.dataset.key;

            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

        // =========================
        // 2. LOCATION ARRAY SYSTEM
        // =========================
        const locationElements = document.querySelectorAll(".location-text");

        if (translations.locations && locationElements.length) {

            locationElements.forEach((el, index) => {

                if (translations.locations[index]) {
                    el.textContent = translations.locations[index];
                }

            });

        }


        // Lottery Name

                const ticketElements = document.querySelectorAll(".tickets-name");

        if (translations.tickets && ticketElements.length) {

            ticketElements.forEach((el, index) => {

                if (translations.tickets[index]) {
                    el.textContent = translations.tickets[index];
                }

            });

        }

        // =========================
        // SETTINGS
        // =========================
        document.documentElement.lang = "ml";
        localStorage.setItem("language", "ml");

    } catch (error) {
        console.error(error);
    }
}

window.addEventListener("DOMContentLoaded", () => {

    const savedLang = localStorage.getItem("language");

    if (savedLang === "ml") {

        document.documentElement.lang = "ml";
        loadMalayalam();

        document.getElementById("selectedLanguage").textContent = "മലയാളം";

    } else {

        document.documentElement.lang = "en";
        document.getElementById("selectedLanguage").textContent = "English";

    }

});