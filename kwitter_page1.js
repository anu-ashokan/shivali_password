//YOUR FIRE BASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyATbehBi2fXfGMz8t7FbLitNhUa_OEtw7o",
  authDomain: "test-9d6f3.firebaseapp.com",
  databaseURL: "https://test-9d6f3-default-rtdb.firebaseio.com",
  projectId: "test-9d6f3",
  storageBucket: "test-9d6f3.appspot.com",
  messagingSenderId: "32096264575",
  appId: "1:32096264575:web:388714e1deeb7c9c76ba4a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
	       console.log(message_data);
         password=message_data['password'];
        localStorage.setItem("password",password);
	       



        
         
        
//End code
      } });  }); }
getData();
  function check_password(){
    user_entered_password=document.getElementById("user_password").value;
    console.log(user_entered_password);
    password=localStorage.getItem("password");
    console.log(password);
    if(user_entered_password=password){
window.location="kwitter_page.html";
    }
  
 }
