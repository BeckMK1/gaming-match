const _usersref = db.collection("users");
function appendUserForUserface(){
let currentUser =firebase.auth().currentUser 
_usersref.doc(currentUser.uid).onSnapshot(function (userData){
console.log(userData.data())
// console.log(currentUser)
document.querySelector("#userface").innerHTML=`
<img src="${userData.data().img}">
<p>${userData.data().displayName}</p>
`
})
}
const _usersref1 = db.collection("users");
let userface1=[];
_usersref1.onSnapshot(function(snapshotData) {
snapshotData.forEach(function(doc){
  let _usersref1 = doc.data();

  _usersref.uid = doc.uid;
  userface.push(_usersref1);

});
console.log(_usersref1);
appenduserimg(_usersref1);

});
function appenduserimg(_usersref1){
let htmlTemplate="";
for (let _usersref1 of userface1){
  console.log(_usersref1)

htmlTemplate =`<img src="${_usersref1.img}">

`

document.querySelector("#profileimages").innerHTML = htmlTemplate;

}

}
