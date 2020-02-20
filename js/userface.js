

const _usersref = db.collection("users");
let userface=[];
_usersref.onSnapshot(function(snapshotData) {
snapshotData.forEach(function(doc){
  let _usersref = doc.data();

  _usersref.uid = doc.uid;
  userface.push(_usersref);

});
console.log(_usersref);
appendgames(_usersref);

});
function appendgames(_usersref){
let htmlTemplate="";
for (let _usersref of userface){
  console.log(_usersref)

htmlTemplate =`<img src="${_usersref.img}">`

document.querySelector("#userface").innerHTML = htmlTemplate;

}

}
