// Configuración de Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBgVBGQkersxYtELSQEsotXtyxyXuqN5kQ",
    authDomain: "veterinariahuellita-8d203.firebaseapp.com",
    projectId: "veterinariahuellita-8d203",
    storageBucket: "veterinariahuellita-8d203.appspot.com",
    messagingSenderId: "833441330192",
    appId: "1:833441330192:web:34dd1ff7f2deb73de90695"
  };
  
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obtener elementos del formulario
const registroForm = document.querySelector('#registro-form');
const codigoVerificacionLabel = document.querySelector('#codigo-verificacion');
const botonGenerarCodigo = document.querySelector('#generar-codigo');

// Generar código de verificación aleatorio
const generarCodigoVerificacion = () => {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let codigo = '';
  for (let i = 0; i < 6; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres.charAt(indice);
  }
  codigoVerificacionLabel.dataset.codigo = codigo; // Almacenar el código en el atributo de datos
  codigoVerificacionLabel.textContent = `Código de verificación: ${codigo}`;
};

// Manejar click en el botón de generar código
botonGenerarCodigo.addEventListener('click', () => {
  generarCodigoVerificacion();
});

// Manejar envío del formulario
registroForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener email y contraseña
  const email = registroForm['email'].value;
  const password = registroForm['password'].value;
  const nombre = registroForm['nombre'].value;
  const apellido = registroForm['apellido'].value;
  const verificacion = codigoVerificacionLabel.dataset.codigo; // Obtener el código de verificación del atributo de datos

  // Verificar que el código de verificación no esté vacío
  if (verificacion === '') {
    alert('Ingrese el código de verificación');
    return;
  }

  // Verificar si el código de verificación es válido
  const codigoIngresado = registroForm['verificacion'].value;
  if (codigoIngresado !== verificacion) {
    alert('Código de verificación incorrecto');
    return;
  }

  // Registrar usuario en Firebase Auth
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Guardar datos del usuario en Firestore
      const db = firebase.firestore();
      const uid = userCredential.user.uid;
      db.collection('usuarios').doc(uid).set({
        activo: true,
        nombre: nombre,
        apellido: apellido,
        email: email,
        balance: 0
      })
        .then(() => {
          console.log('Usuario registrado exitosamente');
          window.location.replace("login.html");
        })
        .catch((error) => {
          console.error('Error al guardar datos del usuario: ', error);
        });
    })
    .catch((error) => {
      console.error('Error al registrar usuario: ', error);
    });
});

// Generar código de verificación al cargar la página
generarCodigoVerificacion();
