/* ============================================
   NEXORATECH — Main JS
   ============================================ */

// ===== EmailJS Config =====
const EMAILJS_PUBLIC_KEY = "97EI2W2X4F0-jDwij";
const EMAILJS_SERVICE_ID = "service_vkl089z";
const EMAILJS_TEMPLATE_ID = "template_l03r14o";

// ===== PROJECT DATA (easy to edit) =====
const PROJECTS = [
  {
    id: "lumen-studio",
    title: "Lumen Studio",
    category: "Website Development",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80",
    description: "A premium portfolio website for a boutique design studio. Built with performance and storytelling in mind — every scroll is a moment.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
    results: { label: "Conversions ↑", value: "+38%" },
    gallery: [
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1400&q=80",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80"
    ],
    livePreview: "#"
  },
  {
    id: "nimbus-cart",
    title: "NimbusCart AI Support",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
    description: "An AI-powered customer support agent that handles 70% of tickets autonomously, integrated with the existing helpdesk and product catalog.",
    tech: ["OpenAI GPT-4", "Node.js", "Pinecone", "Zendesk API"],
    results: { label: "Tickets auto-resolved", value: "70%" },
    gallery: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=80",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=900&q=80"
    ],
    livePreview: "#"
  },
  {
    id: "finforge",
    title: "FinForge Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    description: "Complete UX overhaul of a fintech dashboard. Reduced time-to-insight by 52% and gave the brand a refreshed, Stripe-grade visual identity.",
    tech: ["Figma", "React", "TypeScript", "Recharts"],
    results: { label: "Time-to-insight ↓", value: "-52%" },
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=900&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80"
    ],
    livePreview: "#"
  },
  {
    id: "aether-saas",
    title: "Aether SaaS Landing",
    category: "Website Development",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    description: "Marketing site for a B2B SaaS startup. Conversion-optimized with A/B-tested CTAs, scroll-triggered animations, and a fully integrated lead pipeline.",
    tech: ["Astro", "Tailwind CSS", "GSAP", "HubSpot"],
    results: { label: "Demo bookings ↑", value: "+124%" },
    gallery: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80"
    ],
    livePreview: "#"
  },
  {
    id: "verdant-app",
    title: "Verdant Mobile App",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    description: "End-to-end UX design for a wellness app. Crafted onboarding flow, dashboard, and gamification system that drove engagement by 2.4x.",
    tech: ["Figma", "Lottie", "Principle"],
    results: { label: "DAU ↑", value: "2.4x" },
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80"
    ],
    livePreview: "#"
  },
  {
    id: "orbit-automate",
    title: "Orbit Lead Automation",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    description: "Built a lead qualification + outreach automation system. Captures leads, enriches data, scores intent with GPT, and sends hyper-personalized follow-ups.",
    tech: ["Make.com", "OpenAI", "Airtable", "Resend"],
    results: { label: "Qualified leads ↑", value: "+210%" },
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
    ],
    livePreview: "#"
  }
];

// ===== ROUTING =====
const PAGES = ["/", "/services", "/projects", "/about", "/contact"];

function getRoute() {
  const hash = location.hash.replace(/^#/, "") || "/";
  return hash;
}

function renderPage() {
  const route = getRoute();

  // Project details route: /project/:id
  if (route.startsWith("/project/")) {
    const id = route.split("/project/")[1];
    showPage("/project");
    renderProjectDetails(id);
  } else {
    const target = PAGES.includes(route) ? route : "/";
    showPage(target);
  }

  // Update active nav
  document.querySelectorAll(".nav-links a").forEach(a => {
    const r = a.getAttribute("data-route");
    a.classList.toggle("active", r === route || (route.startsWith("/project") && r === "/projects"));
  });

  // Close mobile menu on navigation
  document.getElementById("nav-links")?.classList.remove("open");

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "instant" });

  // Re-run reveal/counters for the new page
  setTimeout(() => {
    initReveals();
    initCounters();
  }, 50);
}

function showPage(pageKey) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.toggle("active", p.getAttribute("data-page") === pageKey);
  });
}

window.addEventListener("hashchange", renderPage);

// ===== PROJECTS GRID =====
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card reveal" data-testid="project-card-${p.id}" onclick="location.hash='#/project/${p.id}'">
      <div class="project-image" style="background-image:url('${p.image}')"></div>
      <div class="project-body">
        <span class="project-cat">${p.category}</span>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description.slice(0, 110)}${p.description.length > 110 ? "…" : ""}</p>
        <div class="project-arrow">View Case Study <i class="fa-solid fa-arrow-right"></i></div>
      </div>
    </article>
  `).join("");
}

// ===== PROJECT DETAILS =====
function renderProjectDetails(id) {
  const project = PROJECTS.find(p => p.id === id);
  const container = document.getElementById("project-details-content");
  if (!container) return;

  if (!project) {
    container.innerHTML = `
      <div class="pd-wrap" style="text-align:center;padding:120px 0">
        <h2>Project not found</h2>
        <p style="color:var(--text-dim);margin:14px 0 24px">The project you're looking for doesn't exist.</p>
        <a href="#/projects" class="btn btn-primary">Back to Projects</a>
      </div>`;
    return;
  }

  container.innerHTML = `
    <div class="pd-wrap">
      <a href="#/projects" class="pd-back" data-testid="pd-back-link"><i class="fa-solid fa-arrow-left"></i> Back to all projects</a>

      <div class="pd-header reveal">
        <span class="pd-cat">${project.category}</span>
        <h1 class="pd-title" data-testid="pd-title">${project.title}</h1>
        <p class="pd-desc">${project.description}</p>
      </div>

      <div class="pd-gallery reveal">
        ${project.gallery.map((g, i) => `<div class="gal-img" data-testid="pd-image-${i}" style="background-image:url('${g}')"></div>`).join("")}
      </div>

      <div class="pd-meta reveal">
        <div class="glass-card pd-meta-card">
          <h4>Results</h4>
          <div class="pd-results"><span data-testid="pd-result-value">${project.results.value}</span></div>
          <p style="color:var(--text-dim);margin-top:6px;font-size:.92rem">${project.results.label}</p>
        </div>
        <div class="glass-card pd-meta-card">
          <h4>Tech Used</h4>
          <div class="pd-tech">
            ${project.tech.map(t => `<span class="tech-chip">${t}</span>`).join("")}
          </div>
        </div>
        <div class="glass-card pd-meta-card">
          <h4>Category</h4>
          <p style="font-size:1.05rem;margin-top:4px;font-weight:600">${project.category}</p>
        </div>
      </div>

      <div class="pd-cta-row reveal">
        <a href="${project.livePreview}" target="_blank" rel="noopener" class="btn btn-primary btn-lg" data-testid="pd-live-preview">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Preview
        </a>
        <a href="#/contact" class="btn btn-ghost btn-lg" data-testid="pd-start-project">
          Start a similar project
        </a>
      </div>
    </div>
  `;
}

// ===== SCROLL REVEAL =====
let revealObserver;
function initReveals() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".page.active .reveal:not(.in)").forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 60, 400)}ms`;
    revealObserver.observe(el);
  });
}

// ===== COUNTER ANIMATION =====
const animatedCounters = new WeakSet();
function initCounters() {
  const counters = document.querySelectorAll(".page.active [data-count]");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedCounters.has(entry.target)) {
        animatedCounters.add(entry.target);
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
}
function animateCounter(el) {
  const target = parseInt(el.getAttribute("data-count"), 10);
  const duration = 1600;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  }
  requestAnimationFrame(tick);
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 12);
});

// ===== MOBILE MENU =====
document.getElementById("menu-toggle")?.addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("open");
});

// ===== TOAST =====
function showToast(message, type = "success") {
  const t = document.getElementById("toast");
  t.textContent = message;
  t.className = `toast ${type} show`;
  setTimeout(() => t.classList.remove("show"), 3800);
}

// ===== EMAIL JS INIT =====
if (window.emailjs) {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

// ===== CONTACT FORM =====
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form || form.dataset.bound) return;
  form.dataset.bound = "1";

  const submitBtn = document.getElementById("cf-submit");
  const statusEl = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Reset errors
    document.querySelectorAll(".form-row").forEach(r => r.classList.remove("has-error"));
    document.querySelectorAll(".error-msg").forEach(e => e.textContent = "");
    statusEl.className = "form-status";
    statusEl.textContent = "";

    let valid = true;
    if (!name) {
      setError("name", "Please enter your name");
      valid = false;
    }
    if (!email) {
      setError("email", "Please enter your email");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("email", "Please enter a valid email");
      valid = false;
    }
    if (!message || message.length < 10) {
      setError("message", "Message should be at least 10 characters");
      valid = false;
    }
    if (!valid) return;

    submitBtn.classList.add("is-loading");
    submitBtn.disabled = true;

    try {
      if (!window.emailjs) throw new Error("EmailJS not loaded");
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        reply_to: email,
        name,
        email,
        message,
        to_email: "nexoratechx.007@gmail.com"
      });
      statusEl.className = "form-status success";
      statusEl.textContent = "✓ Message sent successfully! We'll get back to you within 24 hours.";
      form.reset();
      showToast("Message sent! We'll reply within 24 hours.", "success");
    } catch (err) {
      console.error("EmailJS error:", err);
      statusEl.className = "form-status error";
      statusEl.textContent = "Something went wrong. Please try WhatsApp or email us directly.";
      showToast("Failed to send. Try WhatsApp instead.", "error");
    } finally {
      submitBtn.classList.remove("is-loading");
      submitBtn.disabled = false;
    }
  });

  function setError(field, msg) {
    document.getElementById(`cf-${field}`).closest(".form-row").classList.add("has-error");
    document.getElementById(`err-${field}`).textContent = msg;
  }
}

// ===== FOOTER YEAR =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== INIT =====
function init() {
  renderProjects();
  renderPage();
  setupContactForm();
  initReveals();
  initCounters();
}

// Wait for DOM to be ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
