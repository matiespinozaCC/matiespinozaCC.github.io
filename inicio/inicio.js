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

// Función para iniciar sesión
function iniciarSesion() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Llama al método de inicio de sesión de Firebase
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user) {
      // Redirecciona al usuario a la página de lista de clientes
      window.location = "../fichas/fichas.html";
    })
    .catch(function(error) {
      // Maneja los errores de inicio de sesión
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
}