

const BASE_PATH = "/pwa/"; 

const routes = {
  "/": {
    html: "index.html",
    css: "css/style.css"
  },
  "/home": {
    html: "views/home.html",
    css: "views/home.css"
  },
  "/blog": {
    html: "views/blog.html",
    css: "views/blog.css"
  },
  "/about": {
    html: "views/about.html",
    css: "views/about.css"
  }
};

const app = document.querySelector("#app");

function getRoutePath() {
  let path = window.location.pathname;

  if (path.startsWith(BASE_PATH)) {
    path = "/" + path.slice(BASE_PATH.length);
  }

  if (path === "/index.html" || path === "") {
    return "/";
  }

  return path.replace(/\/+$/, "") || "/";
}

function loadCSS(href) {
  let link = document.querySelector("#view-css");

  if (!link) {
    link = document.createElement("link");
    link.id = "view-css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }

  link.href = new URL(href, window.location.origin + BASE_PATH).href;
}

export async function renderRoute() {
  const pathname = getRoutePath();
  const route = routes[pathname];

  if (!route) {
    app.innerHTML = "<h1>Página no encontrada</h1>";
    return;
  }

  try {
    loadCSS(route.css);

    const response = await fetch(
      new URL(route.html, window.location.origin + BASE_PATH)
    );

    if (!response.ok) {
      throw new Error(`No se pudo cargar ${route.html}: ${response.status}`);
    }

    app.innerHTML = await response.text();
  } catch (error) {
    console.error("Error al cargar la vista:", error);
    app.innerHTML = "<h1>Error al cargar la página</h1>";
  }
}

export function navigate(path) {
  const url = new URL(path, window.location.origin + BASE_PATH);

  history.pushState({}, "", url.pathname + url.search + url.hash);
  renderRoute();
}

window.addEventListener("popstate", renderRoute);

document.addEventListener("click", event => {
  const link = event.target.closest("a[data-link]");

  if (
    !link ||
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  event.preventDefault();
  navigate(link.getAttribute("href"));
});