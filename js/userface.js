
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
