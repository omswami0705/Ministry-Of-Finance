document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;
    const logo = document.getElementById("logo-img");

    // Check if dark mode is enabled in local storage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
        logo.src = "dark-logo.png"; // Change to a dark mode logo (replace with your own)
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save user preference in local storage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
            logo.src = "dark-logo.png"; // Change to dark mode logo
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
            logo.src = "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"; // Original logo
        }
    });
});
