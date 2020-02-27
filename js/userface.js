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
document.querySelector("#userface1").innerHTML=`
<img src="${userData.data().img}">`


 document.querySelector("#usernameinfo").innerHTML=`

<p>username:<br>${userData.data().displayName}</p>

`
document.querySelector("#usermail").innerHTML=`

<p>Email:<br>${userData.data().mail}</p>

`
document.querySelector("#userdiscord").innerHTML=`

<p>Discord:<br>${userData.data().discord}</p>

`

})
}
//update user images
