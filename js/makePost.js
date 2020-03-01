"use strict";

// inporting game title 
// function appendgamesforpost(games){
//     let htmlTemplate="";
//     let htmlTemplate2="";
//     for (let game of games){
//       console.log(games)
  
  
//     }
  
//   }

// inporting tags
function postFun(){
const tagsref = db.collection("tags");
let tags=[];
tagsref.onSnapshot(function(snapshotData) {
  tags = [];
  snapshotData.forEach(function(doc){
    let tag = doc.data();

    tag.id = doc.id;
    tags.push(tag);

  });
  console.log(tags);
  appendtags(tags);
});

function appendtags(tags){
    let htmlTemplate="";
    for (let tag of tags){
      console.log(tags)
  
  htmlTemplate +=`
  <option value="${tag.tag}">${tag.tag}</option>
  ` 
  document.querySelector("#maketags").innerHTML = htmlTemplate;   
    } 
}
}
// creating post
const _postRef = db.collection("posts");
function addPost(){
_postRef.add({
  gameTitle: document.getElementsByid('postGameTitle')[0].innerHTML,
  title: document.querySelector("#postTitle").value,
    tag: document.querySelector("#tags").value,
})
}
