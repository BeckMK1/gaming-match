// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const _usersref = db.collection("users");
let userface=[];
_usersref.onSnapshot(function(snapshotData) {
games = [];
snapshotData.forEach(function(doc){
  let _usersref = doc.data();

  _usersref.uid = doc.id;
  userface.push(_usersref);

});
console.log(_usersref);
appendgames(_usersref);

});
function appendgames(_usersref){
let htmlTemplate="";
for (let userface of _usersref){
  console.log(_usersref)

htmlTemplate +=`<img src="${users.img}">`

document.querySelector("#userface").innerHTML = htmlTemplate;

}

}
