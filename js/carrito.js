// Configuración de Firebase
// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBgVBGQkersxYtELSQEsotXtyxyXuqN5kQ",
    authDomain: "veterinariahuellita-8d203.firebaseapp.com",
    projectId: "veterinariahuellita-8d203",
    storageBucket: "veterinariahuellita-8d203.appspot.com",
    messagingSenderId: "833441330192",
    appId: "1:833441330192:web:34dd1ff7f2deb73de90695"
  };
  
  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
  var productosRef = firebase.firestore().collection("productos");
  var carritoRef = firebase.firestore().collection("carrito");
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      showCartItems(user.uid);
      showCartTotal(user.uid);
    } else {
      window.location.href = "login.html";
    }
  });
  
  function showCartItems(userId) {
    var cartItemsContainer = document.getElementById("product-list");
    cartItemsContainer.innerHTML = "";
  
    carritoRef.doc(userId)
      .get()
      .then(function(doc) {
        if (doc.exists) {
          var carrito = doc.data().carrito || [];
  
          var promises = carrito.map(function(item) {
            return productosRef.doc(item.productId).get();
          });
  
          Promise.all(promises)
            .then(function(results) {
              results.forEach(function(doc, index) {
                var product = doc.data();
                var quantity = carrito[index].quantity;
  
                var listItem = document.createElement("li");
                listItem.innerHTML = `
                  <h3>${product.nombre}</h3>
                  <img src="${product.imagenUrl}" alt="${product.nombre}">
                  <p class="price">Precio: $${product.precio}</p>
                  <p class="quantity">Cantidad: ${quantity}</p>
                `;
  
                cartItemsContainer.appendChild(listItem);
              });
            })
            .catch(function(error) {
              console.log("Error retrieving cart items:", error);
            });
        }
      })
      .catch(function(error) {
        console.log("Error retrieving cart items:", error);
      });
  }
  
  function showCartTotal(userId) {
    var cartTotalElement = document.getElementById("cart-total");
    cartTotalElement.textContent = "$0.00";
  
    carritoRef
      .doc(userId)
      .get()
      .then(function(doc) {
        if (doc.exists) {
          var carrito = doc.data().carrito || [];
          var promises = carrito.map(function(item) {
            return productosRef.doc(item.productId).get();
          });
  
          Promise.all(promises)
            .then(function(results) {
              var total = 0;
              results.forEach(function(doc, index) {
                var product = doc.data();
                var quantity = carrito[index].quantity;
                total += product.precio * quantity;
              });
              cartTotalElement.textContent = "$" + total.toFixed(2);
              processPayment(userId, total);
            })
            .catch(function(error) {
              console.log("Error retrieving cart items:", error);
            });
        }
      })
      .catch(function(error) {
        console.log("Error retrieving cart items:", error);
      });
  }
  
  function processPayment(userId, total) {
    var totalInDollars;
  
    if (total > 0) {
      totalInDollars = (total / 680).toFixed(2);
    } else {
      totalInDollars = "0.00";
    }
  
    paypal.Buttons({
      env: "sandbox",
      client: {
        sandbox: 'AclcsVUqq1k9tQBq9b1CZpNyuJ-iJmtaPZoWv14skjkZrPCrpc3aa-eI7Kl7se4Id-wTcfJTFkMoEY_1',
        production: 'EPOMWRQOTVgojPoYjl120urMdm8ub_aDN9RMpsRgix8ZxebtFZqM7yjX58PdKrIb767U4Xx6Zp-xrhlS'
      },
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: totalInDollars
              },
            },
          ],
        });
      },
      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          carritoRef
            .doc(userId)
            .get()
            .then(function(doc) {
              if (doc.exists) {
                var carrito = doc.data().carrito || [];
                var promises = carrito.map(function(item) {
                  return productosRef.doc(item.productId).get();
                });
  
                Promise.all(promises)
                  .then(function(results) {
                    var products = results.map(function(doc, index) {
                      var product = doc.data();
                      product.quantity = carrito[index].quantity;
                      return product;
                    });
  
                    var pedidoData = {
                      userId: userId,
                      products: products,
                      timestamp: firebase.firestore.Timestamp.now(),
                    };
  
                    firebase
                      .firestore()
                      .collection("pedidos")
                      .add(pedidoData)
                      .then(function() {
                        carritoRef
                          .doc(userId)
                          .update({
                            carrito: firebase.firestore.FieldValue.delete(),
                          })
                          .then(function() {
                            console.log("Payment processed and cart items removed.");
                            alert("Pago confirmado, su pedido ya fue registrado");
                            window.location.href = "productos.html";
                          })
                          .catch(function(error) {
                            console.log("Error removing cart items:", error);
                          });
                      })
                      .catch(function(error) {
                        console.log("Error creating pedido:", error);
                      });
                  })
                  .catch(function(error) {
                    console.log("Error retrieving cart items:", error);
                  });
              }
            })
            .catch(function(error) {
              console.log("Error retrieving cart items:", error);
            });
        });
      },
      onCancel: function(data) {
        console.log("Payment cancelled:", data);
      },
      onError: function(err) {
        console.log("Error during payment:", err);
      },
    })
      .render("#paypal-button-container")
      .catch(function(error) {
        console.log("Error rendering PayPal button:", error);
      });
  }