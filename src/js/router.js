// src/js/router.js

const routes = {
  "/": {
    render: () => import("./views/home.js"),
    css: "/src/js/views/home.css"
  },
  "/blog": {
    render: () => import("./views/blog.js"),
    css: "/src/js/views/blog.css"
  },
  "/about": {
    render: () => import("./views/about.js"),
    css: "/src/js/views/about.css"
  },
  "/home": {
    render: () => import("./views/home.js"),
    css: "/src/js/views/home.css"
  }
};

const app = document.querySelector("#app");

function normalizePath(path) {
  if (path.length > 1) {
    return path.replace(/\/+$/, "");
  }

  return path;
}

function loadCSS(href) {
  let link = document.querySelector("#view-css");

  if (!link) {
    link = document.createElement("link");
    link.id = "view-css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }

  // Evita recargar la misma hoja de estilos.
  if (link.getAttribute("href") !== href) {
    link.href = href;
  }
}

export async function navigate(path) {
  const url = new URL(path, window.location.origin);

  if (url.origin !== window.location.origin) {
    return;
  }

  const pathname = normalizePath(url.pathname);

  history.pushState({}, "", pathname + url.search + url.hash);

  await renderRoute();
}

export async function renderRoute() {
  const pathname = normalizePath(window.location.pathname);
  const route = routes[pathname];

  if (!route) {
    const module = await import("./views/not-found.js");
    module.renderNotFound(app);
    return;
  }

  try {
    loadCSS(route.css);

    const module = await route.render();
    module.render(app);
  } catch (error) {
    console.error("Error al cargar la ruta:", error);
    app.innerHTML = "<h1>Error al cargar la página</h1>";
  }
}

// Botones Atrás y Adelante del navegador.
window.addEventListener("popstate", renderRoute);

// Intercepta los enlaces internos.
document.addEventListener("click", event => {
  const link = event.target.closest("a[data-link]");

  if (!link || event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey || event.ctrlKey ||
      event.shiftKey || event.altKey) {
    return;
  }

  event.preventDefault();
  navigate(link.getAttribute("href"));
});