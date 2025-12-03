// Smooth scroll by data-scroll
document.querySelectorAll("[data-scroll]").forEach(btn => {
    btn.addEventListener("click", e => {
        const target = btn.getAttribute("data-scroll");
        const el = document.querySelector(target);
        if (el) {
            e.preventDefault();
            window.scrollTo({
                top: el.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});

// Toggle evidence details
document.querySelectorAll(".toggle").forEach(btn => {
    btn.addEventListener("click", () => {
        const target = document.querySelector(btn.dataset.target);
        if (!target) return;
        target.classList.toggle("active");
    });
});

// Folder tabs
const folderTabs = document.querySelectorAll(".folder-tab");
const folderPages = document.querySelectorAll(".folder-page");

folderTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.folder);
        if (!target) return;

        folderTabs.forEach(t => t.classList.remove("active"));
        folderPages.forEach(p => p.classList.remove("active"));

        tab.classList.add("active");
        target.classList.add("active");
    });
});

// Simple fade-in on scroll
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll(".section").forEach(section => {
    observer.observe(section);
});



// Click-to-expand images (lightbox)
const lightbox = document.querySelector(".image-lightbox");
const lightboxImg = lightbox ? lightbox.querySelector("img") : null;

if (lightbox && lightboxImg) {
    document.querySelectorAll(".zoom-trigger").forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt || "";
            lightbox.classList.add("open");
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("open");
    });
}
