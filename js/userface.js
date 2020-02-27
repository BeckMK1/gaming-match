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
<img src="${userData.data().img}">
`
document.querySelector(".userinfo").innerHTML=`

<p>username:<br>${userData.data().displayName}</p>
`
})
}
