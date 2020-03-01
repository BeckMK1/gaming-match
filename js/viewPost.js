
function viewPostFun(){
const _showPostRef = db.collection("posts");
let posts=[];
_showPostRef.onSnapshot(function(snapshotData) {
  posts = [];
  snapshotData.forEach(function(doc){
    let post = doc.data();

    post.id = doc.id;
    posts.push(post);

  });
  console.log(posts);
appendPosts(posts)
});
function appendPosts(posts){
  let htmlTemplate="";
  for (let post of posts){
    console.log(post)

htmlTemplate +=`<article>

<p>${post.title}</p>
<p>${post.tag}</p>
<p>${post.playerCount}/${post.maxplayerCount}</p>
<button type="button" name="button" onclick="join('${post.id}')">join</button>
</article>`

document.querySelector("#view-post").innerHTML = htmlTemplate;

  }

}
}


