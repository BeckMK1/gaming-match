
    const _showPostRef = db.collection("posts");
    let posts=[];
    _showPostRef.onSnapshot(function(snapshotData) {
      posts = [];
      snapshotData.forEach(function(doc){
        let post = doc.data();
    
        post.id = doc.id;
        posts.push(post);
    
      });
    });
function join(id){
    let selectPost;

  for (let post of posts) {
    if (game.id === id) {
      selectPost = post;
    }

  }
   let updetePlayer = db.collection("posts").doc(selectPost);
    return updetePlayer.update({
  player:document.querySelector("#userName").textContent,
  
    })
}