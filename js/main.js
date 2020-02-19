"use strict";
// ----------------------------------------- sign in/up provile page functionality -------------------------------------
let _currentUser;
const _userRef = db.collection("users")
function showSignUp() {
document.querySelector("#add-acc").style.display ="block"; 
}
//---------------------------------------- sign up ----------------------------------------
function signUp(){
    let email = document.querySelector('#mail').value;
    let password = document.querySelector('#password').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {

      });
    // ------------------------------  sign in  -------------------------------------------------
    };
    function signIn(){
    let email = document.querySelector('#inMail').value;
    let password = document.querySelector('#inPassword').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
      navigateTo("profile")
    }
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User logged in already or has just logged in.
          console.log(user.uid);
        } else {
          // User not logged in or has just logged out.
        }
      });

    // ========== PROFILE PAGE FUNCTIONALITY ========== //
// append user data to profile page
function appendUserData() {
    document.querySelector('#name').value = _currentUser.displayName;
    document.querySelector('#imagePreview').src = _currentUser.img;
  }
    function updateUser() {
        let user = firebase.auth().currentUser;
      
        // update auth user
        user.updateProfile({
        });
      
        // update database user
        _userRef.doc(user.uid).set({
          // img: document.querySelector('#profileImg').src,
          displayName: document.querySelector('#name').value,
        }, {
          merge: true
        });
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