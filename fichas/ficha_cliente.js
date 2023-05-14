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
  
  // Obtener el parámetro uid de la URL
  var uid = getParameterByName("uid");
  
  // Función para obtener el valor de un parámetro de la URL
  function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(location.search);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  
  // Obtener la referencia al documento del cliente
  var clienteRef = firebase.firestore().collection("clientes").doc(uid);
  
  // Obtener el elemento donde se mostrarán los detalles del cliente
  var clientDetails = document.getElementById("clientDetails");
  
  // Obtener los datos del cliente desde Firebase
clienteRef.get().then(function(doc) {
    if (doc.exists) {
      // El documento del cliente existe, obtener los datos
      var cliente = doc.data();
  
      // Mostrar los detalles del cliente en los elementos correspondientes
      document.getElementById("nombre").textContent = cliente.nombre;
      document.getElementById("apellido").textContent = cliente.apellido;
      document.getElementById("edad").textContent = cliente.edad;
      document.getElementById("rut").textContent = cliente.rut;
      document.getElementById("cirugia").textContent = cliente.cirugia ? "Sí" : "No";
      document.getElementById("enfermedad").textContent = cliente.enfermedad ? "Sí" : "No";
    } else {
      // El documento del cliente no existe
      clientDetails.innerHTML = "<p>Cliente no encontrado</p>";
    }
  }).catch(function(error) {
    // Ocurrió un error al obtener los datos del cliente
    clientDetails.innerHTML = "<p>Error al obtener los datos del cliente</p>";
  });
  
  // Función para generar el PDF
  function generarPDF() {
    // Obtener los datos del cliente desde los elementos correspondientes
    var clienteNombre = document.getElementById("nombre").textContent;
    var clienteApellido = document.getElementById("apellido").textContent;
    var clienteEdad = document.getElementById("edad").textContent;
    var clienteRUT = document.getElementById("rut").textContent;
    var clienteCirugia = document.getElementById("cirugia").textContent;
    var clienteEnfermedad = document.getElementById("enfermedad").textContent;
  
    // Verificar que los elementos existan y contengan datos
    if (
      clienteNombre &&
      clienteApellido &&
      clienteEdad &&
      clienteRUT &&
      clienteCirugia &&
      clienteEnfermedad
    ) {
      // Construir el contenido del PDF
      var contenido = "Ficha Cliente\n\n";
      contenido += "Nombre: " + clienteNombre + "\n";
      contenido += "Apellido: " + clienteApellido + "\n";
      contenido += "Edad: " + clienteEdad + "\n";
      contenido += "RUT: " + clienteRUT + "\n";
      contenido += "Cirugía: " + clienteCirugia + "\n";
      contenido += "Enfermedad: " + clienteEnfermedad + "\n";
  
      // Generar el PDF
      var doc = new jsPDF();
  // Definir estilos personalizados
  var tituloEstilo = {
    fontSize: 18,
    fontStyle: "bold",
    textColor: "#333",
    marginBottom: 10
  };
  var contenidoEstilo = {
    fontSize: 12,
    textColor: "#666",
    marginBottom: 5
  };

  // Agregar contenido al PDF
  doc.setFont("Arial");
  doc.setTextColor("#333");

  doc.setFontSize(tituloEstilo.fontSize);
  doc.setFontStyle(tituloEstilo.fontStyle);
  doc.text("Ficha Cliente", 10, 10);
  doc.setLineWidth(0.5);
  doc.line(10, 15, 70, 15);

  doc.setFontSize(contenidoEstilo.fontSize);
  doc.setFontStyle("normal");
  doc.setTextColor(contenidoEstilo.textColor);

  doc.text("Nombre: " + clienteNombre, 10, 30);
  doc.text("Apellido: " + clienteApellido, 10, 40);
  doc.text("Edad: " + clienteEdad, 10, 50);
  doc.text("RUT: " + clienteRUT, 10, 60);
  doc.text("Cirugía: " + clienteCirugia, 10, 70);
  doc.text("Enfermedad: " + clienteEnfermedad, 10, 80);

      // Agregar espacio para firmar
      var espacioFirmaY = 120;
      doc.setFontSize(12);
      doc.text("Firma: __________________________", 10, espacioFirmaY);
  
      doc.save("ficha_cliente.pdf");
    } else {
      // Los elementos no existen o no contienen datos
      console.log("No se pueden obtener los datos del cliente.");
    }
  }

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