/*
 * INTERACTIONS ONLY — project CONTENT belongs in projects.js.
 * This script handles filtering, the case-study popup and mobile menu.
 */
const projectsGrid = document.querySelector('#projects-grid');
const filters = document.querySelectorAll('[data-filter]');
const modal = document.querySelector('#project-dialog');
const modalContent = document.querySelector('#dialog-content');
const closeModalButton = document.querySelector('#dialog-close');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

// Escape editable data so adding text cannot accidentally break HTML.
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);

function projectCard(project) {
  const featured = project.featured ? ' is-featured' : '';
  return `
    <article class="project-card${featured}" data-category="${escapeHtml(project.category)}">
      <div class="project-text">
        <div class="project-numeral"><span>${escapeHtml(project.dates)}</span><b>${escapeHtml(project.number)}</b></div>
        <span class="project-category">${escapeHtml(project.categoryLabel)}</span>
        <h4>${escapeHtml(project.shortTitle)}</h4>
        <p class="project-summary">${escapeHtml(project.description)}</p>
        <div class="project-bottom"><span>ENGINEERING PROJECT / ${escapeHtml(project.number)}</span><button class="project-open" data-project="${escapeHtml(project.id)}" type="button" aria-label="Read more about ${escapeHtml(project.shortTitle)}">↗</button></div>
      </div>
      <button class="project-media" type="button" data-project="${escapeHtml(project.id)}" aria-label="View ${escapeHtml(project.shortTitle)} case study"><img src="${escapeHtml(project.thumbnail)}" alt="${escapeHtml(project.gallery[0].alt)}" loading="lazy" style="object-position:${escapeHtml(project.imagePosition || 'center')}"><span class="project-media-label">VIEW THE BUILD ↗</span></button>
    </article>`;
}

function renderProjects(filter = 'all') {
  const visible = PROJECTS.filter((project) => filter === 'all' || project.category === filter);
  projectsGrid.innerHTML = visible.map(projectCard).join('');
  document.querySelector('[data-filter="all"] span').textContent = String(PROJECTS.length).padStart(2, '0');
  // When the featured project is filtered out, ordinary cards remain a 2-column grid.
}

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    renderProjects(filter);
  });
});


/* ==========================================
   RENDER 3D MODEL VIEWER
   ========================================== */

function render3DViewer(project) {

    // No 3D model? Don't display anything.
    if (!project.model3d?.src) return "";

    const model = project.model3d;

    return `
        <section class="model-section">

            <div class="model-heading">
                <div>
                    <span class="eyebrow">
                        INTERACTIVE ENGINEERING
                    </span>

                    <h3>
                        INSPECT THE DESIGN<span>.</span>
                    </h3>
                </div>
            </div>

            <div class="model-stage" id="model-stage">

                <img
                    class="model-poster"
                    src="${escapeHtml(model.poster || project.thumbnail)}"
                    alt="Model preview"
                >

                <model-viewer
                    id="project-model"
                    src="${escapeHtml(model.src)}"
                    alt="${escapeHtml(model.label || project.title)}"
                    camera-controls
                    touch-action="none"
                    interaction-prompt="none"
                    shadow-intensity="0.65"
                    exposure="1.05"
                    camera-orbit="35deg 65deg auto"
                    loading="eager">
                </model-viewer>

            </div>

            <div class="model-toolbar">

                <span class="toolbar-group-label">
                    VIEW:
                </span>

                <button class="model-button is-active"
                        data-orbit="iso">
                    ISOMETRIC
                </button>

                <button class="model-button"
                        data-orbit="front">
                    FRONT
                </button>

                <button class="model-button"
                        data-orbit="side">
                    SIDE
                </button>

                <button class="model-button"
                        data-orbit="top">
                    TOP
                </button>

                <span class="toolbar-spacer"></span>

                <button class="model-button"
                        data-viewer-action="spin"
                        aria-pressed="false">
                    AUTO-ROTATE
                </button>

                <button class="model-button"
                        data-viewer-action="reset">
                    RESET
                </button>

                <button class="model-button"
                        data-viewer-action="fullscreen">
                    FULLSCREEN
                </button>

            </div>

            <p class="model-status" id="model-status">
                LOADING 3D MODEL...
            </p>

        </section>
    `;
}


/* ==========================================
   INITIALIZE THE VIEWER
   ========================================== */

function bind3DViewer() {

    const viewer =
        modalContent.querySelector("#project-model");

    const status =
        modalContent.querySelector("#model-status");

    if (!viewer || !status) return;

    viewer.addEventListener("load", () => {
        status.textContent = "MODEL READY — DRAG TO ROTATE";

        viewer.closest(".model-stage")
              ?.classList.add("is-ready");
    });

    viewer.addEventListener("error", () => {
        status.textContent =
            "MODEL FAILED TO LOAD — CHECK FILE PATH";
    });

}


/* =======================================
   PROJECT VIDEO GALLERY
   ======================================= */

function renderProjectVideos(project) {

    if (!project.videos?.length) return "";

    const videos = project.videos.map((video) => {

        let player = "";

        // Locally hosted video
        if (video.type === "file") {

            const poster = video.poster
                ? `poster="${escapeHtml(video.poster)}"`
                : "";

            player = `
                <video
                    controls
                    playsinline
                    preload="metadata"
                    ${poster}
                >
                    <source
                        src="${escapeHtml(video.src)}"
                        type="video/mp4"
                    >

                    Your browser does not support
                    HTML5 video.
                </video>
            `;
        }

        // YouTube video
        else if (
            video.type === "youtube" &&
            /^[a-zA-Z0-9_-]{11}$/.test(video.youtubeId)
        ) {

            player = `
                <iframe
                    src="https://www.youtube-nocookie.com/embed/${video.youtubeId}"
                    title="${escapeHtml(video.caption || "Project video")}"
                    loading="lazy"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            `;
        }

        if (!player) return "";

        return `
            <figure class="project-video">
                <div class="project-video-frame">
                    ${player}
                </div>

                <figcaption>
                    ${escapeHtml(video.caption || "PROJECT VIDEO")}
                </figcaption>
            </figure>
        `;

    }).join("");

    if (!videos) return "";

    return `
        <section class="project-videos">

            <div class="project-videos-heading">
                <span class="eyebrow">
                    MOTION / DOCUMENTATION
                </span>
            </div>

            <div class="project-video-grid">
                ${videos}
            </div>

        </section>
    `;
}

function openProject(id) {
  const project = PROJECTS.find((item) => item.id === id);
  if (!project) return;

  const modelMarkup = render3DViewer(project);
  const videoMarkup = renderProjectVideos(project);

  modalContent.innerHTML = `
    <div class="dialog-head">
      <span class="eyebrow">PROJECTS / ${escapeHtml(project.number)} &nbsp;·&nbsp; ${escapeHtml(project.dates)}</span>
      <h2>${escapeHtml(project.title)}</h2>
      <p>${escapeHtml(project.description)}</p>
      <div class="dialog-tags">${project.stack.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
    </div>
    ${modelMarkup}
    ${videoMarkup}
    <div class="dialog-gallery">${project.gallery.map((photo) => `<figure class="gallery-image"><img loading="lazy" src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt)}"><figcaption>${escapeHtml(photo.caption)}</figcaption></figure>`).join('')}</div>
    <div class="dialog-facts">${project.facts.map((fact) => `<div class="dialog-fact"><b>${escapeHtml(fact.value)}</b><span>${escapeHtml(fact.label)}</span></div>`).join('')}</div>
    <div class="dialog-body"><span class="eyebrow">ROLE / RESPONSIBILITIES</span><h3>INSIDE THE BUILD.</h3><p class="dialog-role">${escapeHtml(project.role)}</p><ul>${project.tasks.map((task) => `<li>${escapeHtml(task)}</li>`).join('')}</ul>
    <div class="dialog-footer"><span>ENGINEERING PORTFOLIO / GHALIH SALAMUN</span><a href="engineering-portfolio.pdf" target="_blank" rel="noopener">ORIGINAL PDF ↗</a></div></div>`;

  modal.showModal();
  bind3DViewer();
  modal.scrollTop = 0;
}

projectsGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-project]');
  if (button) openProject(button.dataset.project);
});

/* ==========================================
   3D VIEWER CAMERA CONTROLS
   ========================================== */

modalContent.addEventListener("click", (event) => {

    const button = event.target.closest(
        "[data-orbit], [data-viewer-action]"
    );

    if (!button) return;

    const viewer = modalContent.querySelector(
        "#project-model"
    );

    if (!viewer) return;

    // Camera presets
    const cameraPositions = {
        iso:   "35deg 65deg auto",
        front: "0deg 90deg auto",
        side:  "90deg 90deg auto",
        top:   "0deg 0deg auto"
    };

    // Camera angle buttons
    if (button.dataset.orbit) {

        viewer.cameraOrbit =
            cameraPositions[button.dataset.orbit];

        modalContent.querySelectorAll(
            "[data-orbit]"
        ).forEach(item => {

            item.classList.toggle(
                "is-active",
                item === button
            );

        });

        return;
    }

    const action = button.dataset.viewerAction;

    // Auto rotate
    if (action === "spin") {

        const spinning =
            !viewer.hasAttribute("auto-rotate");

        viewer.toggleAttribute(
            "auto-rotate",
            spinning
        );

        button.classList.toggle(
            "is-active",
            spinning
        );

        button.setAttribute(
            "aria-pressed",
            String(spinning)
        );
    }

    // Reset the camera
    if (action === "reset") {

        viewer.removeAttribute("auto-rotate");

        viewer.cameraOrbit =
            cameraPositions.iso;

        viewer.cameraTarget = "auto auto auto";

        const spinButton = modalContent.querySelector(
            '[data-viewer-action="spin"]'
        );

        if (spinButton) {
            spinButton.classList.remove("is-active");
            spinButton.setAttribute(
                "aria-pressed",
                "false"
            );
        }

        modalContent.querySelectorAll(
            "[data-orbit]"
        ).forEach(item => {

            item.classList.toggle(
                "is-active",
                item.dataset.orbit === "iso"
            );

        });
    }

    // Fullscreen mode
    if (action === "fullscreen") {

        const stage = modalContent.querySelector(
            "#model-stage"
        );

        if (document.fullscreenElement) {

            document.exitFullscreen?.();

        } else if (stage?.requestFullscreen) {

            stage.requestFullscreen().catch(() => {
                const status = modalContent.querySelector(
                    "#model-status"
                );

                if (status) {
                    status.textContent =
                        "FULLSCREEN NOT AVAILABLE";
                }
            });
        }
    }

});

modal.addEventListener('close', () => {
    // Pause locally hosted videos
    modalContent.querySelectorAll('video').forEach((video) => {
        video.pause();
    });

    // Stop embedded YouTube videos
    modalContent.querySelectorAll('.project-video iframe').forEach((iframe) => {
        iframe.removeAttribute('src');
    });
});

closeModalButton.addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#copyright-year').textContent = String(new Date().getFullYear());
renderProjects();
