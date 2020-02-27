"use strict";
// ----------------------------------------- sign in/up provile page functionality -------------------------------------
let _currentUser;
const _userRef = db.collection("users")

function showSignIn() {
  document.querySelector("#signIn").style.display = "block";
  document.querySelector("#blackout").style.display = "block";
}
document.getElementById("closebutton").addEventListener("click", function(){
  console.log("here")
  document.querySelector("#signIn").style.display = "none";
  document.querySelector("#blackout").style.display = "none";})


//---------------------------------------- sign up ----------------------------------------
function signUp() {
  let email = document.querySelector('#email2').value;
  let password = document.querySelector('#password2').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {

  });
  navigateTo("profile")
}
// ------------------------------  sign in  --------  -----------------------------------------
function signIn() {
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    userAuthenticated(user)
    console.log(user.uid);
  } else {
    navigateTo("front")
    // User not logged in or has just logged out.
    console.log("you are loged out")
  }
});

function userAuthenticated(currentUser) {
  appendUserForUserface(currentUser)
  document.querySelector('#userogdrop').style.display = "block";
  document.querySelector("#loginAndSingup").style.display = "none";
  navigateTo("browseGame")
}
// ========== PROFILE PAGE FUNCTIONALITY ========== //
// append user data to profile page
function appendUserData() {

  document.querySelector('#name-update').value = _currentUser.displayName;
  document.querySelector('#mail-update').value = _currentUser.mail;
   document.querySelector('#img').src = _currentUser.img;
}

function updateUser() {
  let user = firebase.auth().currentUser;

  // update auth user
  user.updateProfile({});

  // update database user
  _userRef.doc(user.uid).set({
    img: document.querySelector('#profileImg').src,
    displayName: document.querySelector('#name-update').value,
    mail: document.querySelector('#mail-update').value,
  }, {
    merge: true
  });
document.querySelector("#edit").display = "none";
}
//----------------------------------- image previewImage --------------------------------------
function previewImage(file, previewId) {
  if (file) {
    let reader = new FileReader();
    reader.onload = function (event) {
      document.querySelector('#' + previewId).setAttribute('src', event.target.result);
    };
    reader.readAsDataURL(file);
  }
}

function logout() {
  firebase.auth().signOut();
  console.log("logout");
}

function goBack() {
  window.history.back();
}


// function appendUserFace(user){
// document.querySelector("#userface").innerHTML+=`
// <p>${user.displayName}</p>
// <img>${user.img}</img>
// `
// }

function edit(){
document.querySelector("#edit").style.display ="block";
}
