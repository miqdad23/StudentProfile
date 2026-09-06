document.addEventListener("DOMContentLoaded", () => {

    /* =================================
       ELEMENTS
    ================================= */

    const verificationScreen =
        document.getElementById("verificationScreen");

    const loadingState =
        document.getElementById("loadingState");

    const verifiedState =
        document.getElementById("verifiedState");

    const mainPage =
        document.getElementById("mainPage");

    const supportBtn =
        document.getElementById("supportBtn");

    const loginBtn =
        document.getElementById("loginBtn");

    const snackbar =
        document.getElementById("snackbar");

    const snackbarText =
        document.getElementById("snackbarText");


    let snackbarTimer;


    /* =================================
       VERIFICATION INTRO
    ================================= */

    function startVerification() {

        /*
         * Step 1:
         * Show loading animation.
         */

        loadingState.classList.add("active");


        /*
         * Step 2:
         * After loading, show
         * verification tick.
         */

        setTimeout(() => {

            loadingState.classList.remove("active");

            setTimeout(() => {

                verifiedState.classList.add("active");

            }, 220);

        }, 1200);


        /*
         * Step 3:
         * Hide verification screen
         * and display main page.
         */

        setTimeout(() => {

            verificationScreen.classList.add("hide");

            mainPage.classList.add("show-page");

        }, 2500);


        /*
         * Completely remove overlay
         * after fade-out.
         */

        setTimeout(() => {

            verificationScreen.style.display = "none";

        }, 3200);
    }


    startVerification();


    /* =================================
       SNACKBAR
    ================================= */

    function showSnackbar(message) {

        clearTimeout(snackbarTimer);

        snackbarText.textContent = message;

        /*
         * Remove old snackbar first
         * so repeated taps still work.
         */

        snackbar.classList.remove("show");


        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                snackbar.classList.add("show");

            });

        });


        snackbarTimer = setTimeout(() => {

            snackbar.classList.remove("show");

        }, 2800);

    }


    /* =================================
       SUPPORT BUTTON
    ================================= */

    supportBtn.addEventListener("click", () => {

        showSnackbar(
            "Support service is currently under development."
        );

    });


    /* =================================
       LOGIN BUTTON
    ================================= */

    loginBtn.addEventListener("click", () => {

        showSnackbar(
            "Login feature is currently under development."
        );

    });

});