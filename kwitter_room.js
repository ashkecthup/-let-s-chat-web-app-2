const firebaseConfig = {
      apiKey: "AIzaSyApBLVznj270qAek3SBiO4QZcJJ_KqseFE",
      authDomain: "let-s-chat-589dd.firebaseapp.com",
      projectId: "let-s-chat-589dd",
      storageBucket: "let-s-chat-589dd.appspot.com",
      messagingSenderId: "898864129940",
      appId: "1:898864129940:web:412920070695c998871181"
    };
    
    // Initialize Firebase
  //  const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
