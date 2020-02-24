
const _usersref = db.collection("users");
let userface=[];
_usersref.onSnapshot(function(snapshotData) {
snapshotData.forEach(function(doc){
  let _usersref = doc.data();

  _usersref.uid = doc.uid;
  userface.push(_usersref);

});
console.log(_usersref);
appenduserimg(_usersref);

});
function appenduserimg(_usersref){
let htmlTemplate="";
for (let _usersref of userface){
  console.log(_usersref)

htmlTemplate =`<img src="${_usersref.img}">
<p>${_usersref.displayName}</p>
`

document.querySelector("#userface").innerHTML = htmlTemplate;

}

}
