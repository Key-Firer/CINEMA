const cartelera = [
  {
    titulo: "Sombras de Quisqueya",
    trailer: "#",
    horarios: ["2:00 PM", "5:00 PM", "8:00 PM"]
  },
  {
    titulo: "Código Caribe",
    trailer: "#",
    horarios: ["3:00 PM", "6:00 PM", "9:00 PM"]
  },
  {
    titulo: "Noche en el Malecón",
    trailer: "#",
    horarios: ["1:00 PM", "4:00 PM", "7:00 PM"]
  },
  {
    titulo: "Sueños de Azúcar",
    trailer: "#",
    horarios: ["12:00 PM", "3:00 PM", "6:00 PM"]
  },
  {
    titulo: "El Último Mangú",
    trailer: "#",
    horarios: ["2:30 PM", "5:30 PM", "8:30 PM"]
  }
];

function cargarPeliculas() {
  const contenedor = document.getElementById("peliculas-en-cartelera");
  contenedor.innerHTML = "";
  cartelera.forEach(peli => {
    const div = document.createElement("div");
    div.className = "pelicula";
    div.innerHTML = \`
      <h3>\${peli.titulo}</h3>
      <p>Horarios: \${peli.horarios.join(", ")}</p>
      <a href="\${peli.trailer}">Ver Trailer</a><br>
      <button onclick="comprarBoleta()">Comprar Boleta</button>
    \`;
    contenedor.appendChild(div);
  });
}

function comprarBoleta() {
  const email = prompt("Introduce tu correo electrónico para generar tu ticket:");
  if (email) {
    alert("¡Gracias! Tu ticket digital ha sido enviado a " + email);
  }
}

document.getElementById("buscarPelicula").addEventListener("input", function () {
  const valor = this.value.toLowerCase();
  const peliculas = document.querySelectorAll(".pelicula");
  peliculas.forEach(p => {
    p.style.display = p.textContent.toLowerCase().includes(valor) ? "block" : "none";
  });
});

window.onload = cargarPeliculas;
