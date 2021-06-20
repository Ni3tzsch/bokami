var firebaseConfig = {
    apiKey: "AIzaSyAf1MFYTcII7mUbPI16NSkndmmrUwO1Cas",
    authDomain: "bokamiapp.firebaseapp.com",
    databaseURL: "https://bokamiapp-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bokamiapp",
    storageBucket: "bokamiapp.appspot.com",
    messagingSenderId: "17181478083",
    appId: "1:17181478083:web:7cc7d51f58a27e43216676",
    measurementId: "G-CD1FNHYRF7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth.Auth.Persistence.LOCAL

  $("#sign-in-btn").click(function(){
      var email = $("#floatingInput").val();
      var password = $("#floatingPassword").val();

      if(email != "" && password !="")
      {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);
        result.catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            windows.alert("Message : " + errorMessage);
        });
    }
      else
      {
          window.alert("Veuillez remplir tous les champs.")
      }
  })