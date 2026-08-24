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
            ></iframe>
        `;

        thumbnail.classList.add("preview-active");

    });


    thumbnail.addEventListener("mouseleave", () => {

        thumbnail.classList.remove("preview-active");

        preview.innerHTML = "";

    });

});