"use strict";

// inporting game title 
function appendgamesforpost(games){
    let htmlTemplate="";
    let htmlTemplate2="";
    for (let game of games){
      console.log(games)
  
  htmlTemplate +=`
  <option value="${game.title}">${game.title}</option>
  `;
  htmlTemplate2 +=
  `<option value="${game.maxPlayerCount}">${game.maxPlayerCount}</option>
  `;
  document.querySelector("#gameSelection").innerHTML = htmlTemplate;
  document.querySelector("#playercount").innerHTML= htmlTemplate2;
  
    }
  
  }

// inporting tags
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
  document.querySelector("#tags").innerHTML = htmlTemplate;   
    } 
}

// creating post
const _postRef = db.collection("posts");
function addPost(){
_postRef.add({
    title: document.querySelector("#gameSelection").value,
    palyercount: document.querySelector("#playercount").value,
    tag: document.querySelector("#tags").value,
})
}
