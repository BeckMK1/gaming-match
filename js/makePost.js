"use strict";
// fetch firebase: firestore
const _postRef = db.collection("posts");
function addPost(){
_postRef.add({
    title: document.querySelector("#gameTitle").value,
    palyercount: document.querySelector("#numberOfPlayers").value,
    tag: document.querySelector("#tags").value
})
}