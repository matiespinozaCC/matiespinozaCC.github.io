// Configurar la conexión con Firebase
var firebaseConfig = {
  // Agrega tus credenciales de Firebase aquí
  apiKey: "AIzaSyC72tNuLYllETZkDWhmKTj5XO1LcNWrnzM",
  authDomain: "esteticafq.firebaseapp.com",
  projectId: "esteticafq",
  storageBucket: "esteticafq.appspot.com",
  messagingSenderId: "1088079794760",
  appId: "1:1088079794760:web:70d909762dc6a4ec663e7d"
};

// Inicializar la aplicación de Firebase
firebase.initializeApp(firebaseConfig);

// Obtener la referencia a la colección "clientes"
var clientesRef = firebase.firestore().collection("clientes");

// Obtener el elemento <tbody> de la tabla de clientes
var clientTableBody = document.querySelector("#clientTable tbody");

// Obtener los datos de los clientes desde Firebase
clientesRef.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    // Obtener los datos de cada cliente
    var cliente = doc.data();

    // Crear una fila (<tr>) para mostrar los datos del cliente
    var row = document.createElement("tr");

    // Crear celdas (<td>) para cada campo de datos del cliente
    var nombreCell = document.createElement("td");
    nombreCell.textContent = cliente.nombre;
    row.appendChild(nombreCell);

    var apellidoCell = document.createElement("td");
    apellidoCell.textContent = cliente.apellido;
    row.appendChild(apellidoCell);

    var edadCell = document.createElement("td");
    edadCell.textContent = cliente.edad;
    row.appendChild(edadCell);

    var rutCell = document.createElement("td");
    rutCell.textContent = cliente.rut;
    row.appendChild(rutCell);

    var cirugiaCell = document.createElement("td");
    cirugiaCell.textContent = cliente.cirugia ? "✔" : "❌";
    row.appendChild(cirugiaCell);

    var enfermedadCell = document.createElement("td");
    enfermedadCell.textContent = cliente.enfermedad ? "✔" : "❌";
    row.appendChild(enfermedadCell);

    // Crear una celda (<td>) para los botones
    var actionsCell = document.createElement("td");
    actionsCell.classList.add("actions-cell");
    actionsCell.style.display = "flex";
    actionsCell.style.justifyContent = "space-between";

    // Crear el botón "Eliminar"
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function() {
      // Lógica para eliminar el cliente con el ID correspondiente a esta fila
      var clienteId = cliente.id;
      eliminarCliente(clienteId);
    });

    // Crear el botón "Abrir Ficha"
var openButton = document.createElement("button");
openButton.textContent = "Abrir Ficha";
openButton.classList.add("open-button");
openButton.addEventListener("click", function() {
  var clienteId = doc.id; // Obtener el ID del documento directamente desde 'doc'
  abrirFicha(clienteId);
});


    // Agregar los botones a la celda
    actionsCell.appendChild(openButton);
    actionsCell.appendChild(deleteButton);

// Agregar la celda a la fila
row.appendChild(actionsCell);

// Agregar la fila a la tabla
clientTableBody.appendChild(row);
});
});

// Función para eliminar un cliente por su ID
function eliminarCliente(clienteId) {
  // Eliminar el cliente con el ID proporcionado de la colección "clientes"
  clientesRef
    .doc(clienteId)
    .delete()
    .then(function() {
      console.log("Cliente eliminado correctamente");
    })
    .catch(function(error) {
      console.error("Error al eliminar el cliente: ", error);
    });
}

// Función para abrir la ficha del cliente en una nueva ventana
function abrirFicha(clienteId) {
  // Construir la URL de la nueva ventana con el ID del cliente
  var url = "ficha_cliente.html?uid=" + encodeURIComponent(clienteId);
  
  // Abrir una nueva ventana con la URL construida
  window.open(url, "_blank");
}



// Obtener el botón de cerrar sesión
var logoutButton = document.getElementById("logoutButton");

// Agregar un evento de clic al botón de cerrar sesión
logoutButton.addEventListener("click", function() {
  firebase.auth().signOut().then(function() {
    // La sesión se ha cerrado correctamente
    console.log("Sesión cerrada correctamente");
    // Redirigir al usuario a la página de inicio de sesión u otra página deseada
    window.location.href = "../inicio/inicio.html";
  }).catch(function(error) {
    // Ocurrió un error al cerrar la sesión
    console.log("Error al cerrar la sesión: ", error);
  });
});

// Obtener botón de crear cliente
var crearButton = document.getElementById("crearButton");

crearButton.addEventListener("click", function() {
  window.location.href = "../crear/crear.html";
});

// Verificar el estado de autenticación del usuario en cada página
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // El usuario tiene la sesión iniciada, permitir acceso a las páginas
    // Aquí puedes redirigir al usuario a la página que deseas permitir el acceso
  } else {
    // El usuario no tiene la sesión iniciada, redirigir al inicio de sesión
    window.location.replace("../inicio/inicio.html"); // Cambia "login.html" por la página de inicio de sesión correspondiente
  }
});

// Obtener el elemento de entrada de búsqueda
var searchInput = document.getElementById("searchInput");

// Obtener el botón de búsqueda
var searchButton = document.getElementById("searchButton");

// Agregar un evento de clic al botón de búsqueda
searchButton.addEventListener("click", function() {
  var searchTerm = searchInput.value.trim(); // Obtener el valor de búsqueda y eliminar espacios en blanco
  filtrarClientes(searchTerm);
});

// Agregar un evento de tecla presionada en el elemento de entrada de búsqueda
searchInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    var searchTerm = searchInput.value.trim(); // Obtener el valor de búsqueda y eliminar espacios en blanco
    filtrarClientes(searchTerm);
  }
});

// Función para filtrar los clientes por el término de búsqueda
function filtrarClientes(searchTerm) {
  // Obtener todas las filas de clientes
  var rows = document.querySelectorAll("#clientTable tbody tr");

  // Recorrer todas las filas y ocultar aquellas que no coincidan con el término de búsqueda
  rows.forEach(function(row) {
    var rutCell = row.querySelector("td:nth-child(4)");
    if (rutCell) {
      var rut = rutCell.textContent;
            // Convertir el texto de búsqueda y el rut a minúsculas para una comparación insensible a mayúsculas
            var searchTermLower = searchTerm.toLowerCase();
            var rutLower = rut.toLowerCase();
      
            // Verificar si el término de búsqueda coincide con el rut del cliente
            if (rutLower.includes(searchTermLower)) {
              row.style.display = ""; // Mostrar la fila si hay coincidencia
            } else {
              row.style.display = "none"; // Ocultar la fila si no hay coincidencia
            }
          }
        });
      }
      