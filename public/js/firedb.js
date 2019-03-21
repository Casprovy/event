
// Initialize Firebase
var config = {
  apiKey: "AIzaSyC1GTuvHr5huBBNxfGudcZuE9GUDBiPWyU",
  authDomain: "firma-2a216.firebaseapp.com",
  databaseURL: "https://firma-2a216.firebaseio.com",
  projectId: "firma-2a216",
  storageBucket: "firma-2a216.appspot.com",
  messagingSenderId: "945958014647"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactform').addEventListener('submit', submitForm);

function submitForm(e) {
e.preventDefault();
var email = getInputVal('email');
var message = getInputVal('message');
// try - catch...
// saveMessage(email, message);
document.getElementById('contactform').reset();
document.getElementById('confo1').style.display = 'block';
}

function getInputVal(id) {
return document.getElementById(id).value;
}

function saveMessage(email, message) {
var newMessageRef = messagesRef.push();
newMessageRef.set({
email: email,
message: message
})
}

