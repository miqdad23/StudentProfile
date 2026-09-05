document.addEventListener("DOMContentLoaded", () => {

    const page = document.querySelector(".page");

    const supportBtn = document.getElementById("supportBtn");
    const loginBtn = document.getElementById("loginBtn");

    const snackbar = document.getElementById("snackbar");
    const snackbarText = document.getElementById("snackbarText");

    let snackbarTimer;


    // =========================
    // Page Fade In
    // =========================

    requestAnimationFrame(() => {
        page.classList.add("page-loaded");
    });


    // =========================
    // Snackbar Function
    // =========================

    function showSnackbar(message) {

        clearTimeout(snackbarTimer);

        snackbarText.textContent = message;

        snackbar.classList.remove("show");

        // Restart animation if clicked repeatedly
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                snackbar.classList.add("show");
            });
        });

        snackbarTimer = setTimeout(() => {
            snackbar.classList.remove("show");
        }, 2800);
    }


    // =========================
    // Support
    // =========================

    supportBtn.addEventListener("click", () => {
        showSnackbar(
            "Support service is currently under development."
        );
    });


    // =========================
    // Login
    // =========================

    loginBtn.addEventListener("click", () => {
        showSnackbar(
            "Login feature is currently under development."
        );
    });

});