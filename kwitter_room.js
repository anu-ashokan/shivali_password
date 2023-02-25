
//ADD YOUR FIREBASE LINKS
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

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
 

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  password=document.getElementById("password").value;
  firebase.database().ref(room_name).push({
    password:password
    });


    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page1.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page1.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
