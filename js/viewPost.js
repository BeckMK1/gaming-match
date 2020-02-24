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
<p>${post.palyercount}</p>
</article>`

document.querySelector("#show-post").innerHTML = htmlTemplate;

  }

}
