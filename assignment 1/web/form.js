const firebaseConfig = {
  apiKey: "AIzaSyBnnHmaeNQbWYsaqMSP0NmRaHcoDRSyPPI",
  authDomain: "menweb-2e9fb.firebaseapp.com",
  databaseURL: "https://menweb-2e9fb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "menweb-2e9fb",
  storageBucket: "menweb-2e9fb.appspot.com",
  messagingSenderId: "755114691868",
  appId: "1:755114691868:web:adc9909d6b036216c33ed9",
  measurementId: "G-P479J49961"
};

//initialising firebase
firebase.initializeApp(firebaseConfig);

//referencing database
var pollDB = firebase.database().ref("7menweb");

document.getElementById("favemem").addEventListener("submit", submitPoll);

function submitPoll(e){
  e.preventDefault();
  var name = getElementVal("name");
  var email = getElementVal("email");
  var feedback = getElementVal("feedback");

  console.log(name,email,feedback);
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
}
