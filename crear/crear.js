// Inicializa la configuración de Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC72tNuLYllETZkDWhmKTj5XO1LcNWrnzM",
    authDomain: "esteticafq.firebaseapp.com",
    projectId: "esteticafq",
    storageBucket: "esteticafq.appspot.com",
    messagingSenderId: "1088079794760",
    appId: "1:1088079794760:web:70d909762dc6a4ec663e7d"
};
firebase.initializeApp(firebaseConfig);

// Obtener el formulario de registro de nuevo cliente
var newClientForm = document.getElementById("newClientForm");

// Agregar un evento de envío al formulario
newClientForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores de los campos del formulario
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var edad = parseInt(document.getElementById("edad").value);
  var rut = document.getElementById("rut").value;
  var cirugia = document.getElementById("cirugia").checked;
  var enfermedad = document.getElementById("enfermedad").checked;

  // Crear un objeto con los datos del nuevo cliente
  var nuevoCliente = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    rut: rut,
    cirugia: cirugia,
    enfermedad: enfermedad
  };

  // Guardar el nuevo cliente en la colección "clientes" de Firebase
  firebase.firestore().collection("clientes").add(nuevoCliente)
    .then(function(docRef) {
      console.log("Nuevo cliente registrado con ID: ", docRef.id);
      // Redirigir al usuario a otra página o realizar alguna otra acción
    })
    .catch(function(error) {
      console.error("Error al registrar nuevo cliente: ", error);
    });
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

  // Obtener boton de crear cliente
var volverButton = document.getElementById("volverButton")

volverButton.addEventListener("click", function(){
  window.location.href = "../fichas/fichas.html"
})