const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });

}


/* =========================================================
   YOUTUBE HOVER PREVIEW
========================================================= */

const videoThumbnails =
    document.querySelectorAll(".video-thumbnail");

videoThumbnails.forEach((thumbnail) => {

    const videoId =
        thumbnail.dataset.videoId;

    const preview =
        thumbnail.querySelector(".video-preview");

    if (!videoId || !preview) return;


    thumbnail.addEventListener("mouseenter", () => {

        preview.innerHTML = `
            <iframe
                src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1"
                allow="autoplay; encrypted-media"
                loading="lazy"
                title="YouTube video preview"
            ></iframe>
        `;

        thumbnail.classList.add("preview-active");

    });


    thumbnail.addEventListener("mouseleave", () => {

        thumbnail.classList.remove("preview-active");

        preview.innerHTML = "";

    });

});


/* =========================================================
   BACKGROUND MUSIC
========================================================= */

const backgroundMusic =
    document.querySelector("#backgroundMusic");

const musicToggle =
    document.querySelector("#musicToggle");


if (backgroundMusic && musicToggle) {

    const musicStatus =
        musicToggle.querySelector(".music-status");


    const updateMusicButton = (isPlaying) => {

        musicToggle.classList.toggle(
            "is-playing",
            isPlaying
        );


        musicToggle.setAttribute(
            "aria-pressed",
            String(isPlaying)
        );


        musicToggle.setAttribute(
            "aria-label",
            isPlaying
                ? "Pause background music"
                : "Play background music"
        );


        if (musicStatus) {

            musicStatus.textContent =
                isPlaying
                    ? "ON"
                    : "OFF";

        }

    };


    musicToggle.addEventListener(
        "click",
        async () => {

            try {

                if (backgroundMusic.paused) {

                    await backgroundMusic.play();

                    updateMusicButton(true);

                }

                else {

                    backgroundMusic.pause();

                    updateMusicButton(false);

                }

            }

            catch (error) {

                console.error(
                    "Background music could not be played:",
                    error
                );

                updateMusicButton(false);

            }

        }
    );


    backgroundMusic.addEventListener(
        "play",
        () => updateMusicButton(true)
    );


    backgroundMusic.addEventListener(
        "pause",
        () => updateMusicButton(false)
    );


    backgroundMusic.addEventListener(
        "ended",
        () => updateMusicButton(false)
    );


    /*
       Volume default:
       25%
    */

    backgroundMusic.volume = 0.25;


    /*
       Initial state:
       Music OFF
    */

    updateMusicButton(false);

}