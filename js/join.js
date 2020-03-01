
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
    let selectpost;
    for (let post of posts) {
      if (post.id === id) {
        selectpost = post;
      }
  
    }
  
   db.collection("posts").doc(`'${selectpost}'`).set({
  player:_currentUser
  
    })
}