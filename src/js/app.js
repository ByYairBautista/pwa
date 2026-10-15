const cafes = [
  {
    imagen: "images/coffee1.jpg",
    titulo: "Café Chocolate",
    descripcion: "Café suave con notas de chocolate y caramelo.",
    origen: "Veracruz, México",
    region: "Coatepec",
    proceso: "Lavado",
    altitud: "1,200 - 1,400 msnm",
    notas: "Chocolate, caramelo y nuez",
    preparacion: "Prensa francesa o cafetera de goteo.",
    historia:
      "Este café se cultiva en las montañas de Veracruz, una región reconocida por sus condiciones ideales para producir cafés suaves y aromáticos.",
    comoSeHace:
      "Las cerezas maduras son recolectadas manualmente. Después se despulpan, fermentan, se lavan y finalmente los granos se secan antes de ser tostados."
  },

  {
    imagen: "images/coffee2.jpg",
    titulo: "Café Nuez",
    descripcion: "Café con cuerpo medio, acidez equilibrada y sabor a nueces.",
    origen: "Chiapas, México",
    region: "Tapachula",
    proceso: "Natural",
    altitud: "1,000 - 1,500 msnm",
    notas: "Nuez, cacao y frutos secos",
    preparacion: "Espresso o método V60.",
    historia:
      "Los cafetales de Chiapas están rodeados de montañas y bosques. El clima permite desarrollar granos con aromas intensos y sabores equilibrados.",
    comoSeHace:
      "Las cerezas se secan completas con su pulpa. Una vez secas, se retira la cáscara y se seleccionan los mejores granos."
  },

  {
    imagen: "images/coffee3.jpg",
    titulo: "Café Cítrico",
    descripcion: "Café intenso con un toque frutal y aroma a cítricos.",
    origen: "Oaxaca, México",
    region: "Pluma Hidalgo",
    proceso: "Lavado",
    altitud: "1,300 - 1,700 msnm",
    notas: "Naranja, mandarina y chocolate",
    preparacion: "V60, Chemex o Aeropress.",
    historia:
      "Pluma Hidalgo es una de las zonas cafetaleras más conocidas de Oaxaca. Sus montañas y clima favorecen cafés con una acidez brillante.",
    comoSeHace:
      "Las cerezas maduras son recolectadas manualmente. Posteriormente se despulpan, fermentan, se lavan y se secan cuidadosamente."
  },

  {
    imagen: "images/coffee4.jpg",
    titulo: "Café Montaña",
    descripcion: "Café aromático con cuerpo completo y un final dulce.",
    origen: "Guerrero, México",
    region: "Atoyac de Álvarez",
    proceso: "Honey",
    altitud: "1,100 - 1,400 msnm",
    notas: "Miel, panela y frutos rojos",
    preparacion: "Prensa francesa.",
    historia:
      "Los cafetales de Guerrero se encuentran en zonas montañosas donde muchos productores trabajan en pequeñas fincas.",
    comoSeHace:
      "En el proceso honey se retira la piel de la cereza, pero parte del mucílago permanece alrededor del grano durante el secado."
  },

  {
    imagen: "images/coffee5.jpg",
    titulo: "Café Vainilla",
    descripcion: "Café dulce con aromas de vainilla, cacao y caramelo.",
    origen: "Puebla, México",
    region: "Cuetzalan",
    proceso: "Lavado",
    altitud: "1,200 msnm",
    notas: "Vainilla, cacao y caramelo",
    preparacion: "Café filtrado o latte.",
    historia:
      "Las montañas de Puebla proporcionan un ambiente húmedo y fresco que permite producir cafés de gran complejidad aromática.",
    comoSeHace:
      "Los granos maduros se recolectan manualmente y pasan por despulpado, fermentación, lavado y secado."
  },

  {
    imagen: "images/coffee6.jpg",
    titulo: "Café Frutal",
    descripcion: "Café brillante con sabores de frutos rojos y una acidez agradable.",
    origen: "Hidalgo, México",
    region: "Huasteca",
    proceso: "Natural",
    altitud: "900 - 1,300 msnm",
    notas: "Fresa, frutos rojos y miel",
    preparacion: "Aeropress o V60.",
    historia:
      "La región Huasteca cuenta con abundante vegetación y un clima favorable para el cultivo de café.",
    comoSeHace:
      "Las cerezas se secan enteras durante varios días. Los productores controlan cuidadosamente la humedad durante el proceso."
  },

  {
    imagen: "images/coffee7.jpg",
    titulo: "Café Caramelo",
    descripcion: "Café equilibrado con dulzor pronunciado y textura cremosa.",
    origen: "Nayarit, México",
    region: "Compostela",
    proceso: "Honey",
    altitud: "1,000 - 1,300 msnm",
    notas: "Caramelo, azúcar morena y cacao",
    preparacion: "Espresso y bebidas con leche.",
    historia:
      "Los cafetales de Nayarit reciben influencia del clima costero y de las zonas montañosas.",
    comoSeHace:
      "El método honey conserva parte del mucílago durante el secado, ayudando a desarrollar sabores dulces y una textura más intensa."
  },

  {
    imagen: "images/coffee8.jpg",
    titulo: "Café Floral",
    descripcion: "Café delicado con aromas florales y una acidez elegante.",
    origen: "Estado de México",
    region: "Amatepec",
    proceso: "Lavado",
    altitud: "1,400 - 1,700 msnm",
    notas: "Flores, miel y cítricos",
    preparacion: "Método V60.",
    historia:
      "Los cafetales de Amatepec se encuentran en regiones montañosas donde las temperaturas frescas ayudan al desarrollo lento del fruto.",
    comoSeHace:
      "Después de seleccionar las cerezas maduras, se realiza el despulpado, fermentación, lavado y secado."
  },

  {
    imagen: "images/cooffe9.jpg",
    titulo: "Café Tostado",
    descripcion: "Café intenso con notas de cacao oscuro y especias.",
    origen: "Colombia",
    region: "Huila",
    proceso: "Lavado",
    altitud: "1,500 - 1,800 msnm",
    notas: "Cacao, ciruela y especias",
    preparacion: "Espresso o moka italiana.",
    historia:
      "La región del Huila es reconocida por sus cafés de altura y por la diversidad de perfiles que producen sus diferentes zonas.",
    comoSeHace:
      "Los granos seleccionados se despulpan, fermentan y lavan. Después se secan y se tuestan cuidadosamente."
  },

  {
    imagen: "images/coffee10.jpg",
    titulo: "Café Especial",
    descripcion: "Café complejo con notas frutales, florales y un final dulce.",
    origen: "Guatemala",
    region: "Antigua Guatemala",
    proceso: "Lavado",
    altitud: "1,500 - 1,700 msnm",
    notas: "Chocolate, frutas y flores",
    preparacion: "Métodos de café filtrado.",
    historia:
      "Los cafés de Antigua crecen en suelos volcánicos y bajo condiciones climáticas que favorecen una maduración lenta y una gran concentración de sabores.",
    comoSeHace:
      "Los granos son recolectados cuando alcanzan su punto óptimo de maduración. Después se despulpan, fermentan, lavan y secan antes del tostado."
  }
];

const contenedor = document.querySelector(".container");

cafes.forEach((cafe) => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = cafe.imagen;
  img.alt = cafe.titulo;

  const titulo = document.createElement("h3");
  titulo.textContent = cafe.titulo;

  const texto = document.createElement("p");
  texto.textContent = cafe.descripcion;

  card.append(img, titulo, texto);

  card.addEventListener("click", () => {
    mostrarCafe(cafe);
  });

  contenedor.appendChild(card);
});

function mostrarCafe(cafe) {
  const pantalla = document.createElement("div");

  pantalla.className = "pantalla-cafe";

  pantalla.innerHTML = `
    <div class="detalle-cafe">

      <button class="btn-regresar" type="button">
        ← Regresar
      </button>

      <img
        class="detalle-imagen"
        src="${cafe.imagen}"
        alt="${cafe.titulo}"
      >

      <div class="detalle-contenido">

        <h2>${cafe.titulo}</h2>

        <p class="detalle-descripcion">
          ${cafe.descripcion}
        </p>

        <div class="informacion-grid">

          <div class="dato">
            <span> Origen</span>
            <strong>${cafe.origen}</strong>
          </div>

          <div class="dato">
            <span> Región</span>
            <strong>${cafe.region}</strong>
          </div>

          <div class="dato">
            <span> Proceso</span>
            <strong>${cafe.proceso}</strong>
          </div>

          <div class="dato">
            <span> Altitud</span>
            <strong>${cafe.altitud}</strong>
          </div>

          <div class="dato">
            <span> Notas de sabor</span>
            <strong>${cafe.notas}</strong>
          </div>

          <div class="dato">
            <span> Preparación</span>
            <strong>${cafe.preparacion}</strong>
          </div>

        </div>

        <section class="seccion-info">

          <h3> Historia y origen</h3>

          <p>
            ${cafe.historia}
          </p>

        </section>

        <section class="seccion-info">

          <h3> ¿Cómo se hace?</h3>

          <p>
            ${cafe.comoSeHace}
          </p>

        </section>

      </div>

    </div>
  `;

  document.body.appendChild(pantalla);

  document.body.style.overflow = "hidden";

  setTimeout(() => {
    pantalla.classList.add("mostrar");
  }, 10);

  const botonRegresar =
    pantalla.querySelector(".btn-regresar");

  function cerrarPantalla() {
    pantalla.classList.remove("mostrar");

    document.body.style.overflow = "";

    document.removeEventListener(
      "keydown",
      cerrarConEscape
    );

    setTimeout(() => {
      pantalla.remove();
    }, 300);
  }

  function cerrarConEscape(event) {
    if (event.key === "Escape") {
      cerrarPantalla();
    }
  }

  botonRegresar.addEventListener(
    "click",
    cerrarPantalla
  );

  document.addEventListener(
    "keydown",
    cerrarConEscape
  );
}