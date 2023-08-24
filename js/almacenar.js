function cargarDatos(container) {
  container.textContent = "";
  const datos = localStorage.getItem("datos");
  if (datos != null) {
    const datosJSON = JSON.parse(datos);

    datosJSON.forEach((element) => {
      agregarElemento(element, container, false);
    });
  }
}

function agregarElemento(dato, padre, guardar) {
  const elemento = document.createElement("li");
  elemento.textContent = dato;
  padre.appendChild(elemento);

  const datos = localStorage.getItem("datos");
  const datosJSON = JSON.parse(datos);

  if (guardar === true) {
    if (datosJSON != null) {
      datosJSON.push(dato);
      localStorage.setItem("datos", JSON.stringify(datosJSON));
    } else {
      let datoArray = [dato];
      localStorage.setItem("datos", JSON.stringify(datoArray));
    }
  }
}

function limpiar(container) {
  container.textContent = "";
  localStorage.removeItem("datos");
}

document.addEventListener("DOMContentLoaded", () => {
  const buttonAgregar = document.getElementById("agregar");
  const container = document.getElementById("contenedor");
  const buttonLimpiar = document.getElementById("limpiar");
  const input = document.getElementById("item");

  cargarDatos(container);

  buttonAgregar.addEventListener("click", () => {
    agregarElemento(input.value, container, true);
    input.value = "";
  });

  buttonLimpiar.addEventListener("click", () => {
    limpiar(container);
  });
});
