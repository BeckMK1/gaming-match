function viewPostFun() {
  const _showPostRef = db.collection("posts");
  let posts = [];
  _showPostRef.onSnapshot(function (snapshotData) {
    posts = [];
    snapshotData.forEach(function (doc) {
      let post = doc.data();

      post.id = doc.id;
      posts.push(post);

    });
    console.log(posts);
    appendPosts(posts)
  });

  function appendPosts(posts) {
    let htmlTemplate = "";
    for (let post of posts) {
      console.log(post)

      htmlTemplate += `<article>

<p>${post.title}</p>

<div class="buttonjoin">
<p>${post.tag}</p>
<p>${post.playerCount}/${post.maxplayerCount}</p>
<button type="button" name="button" onclick="join('${post.id}')">join</button>
</article>`

      document.querySelector("#view-post").innerHTML = htmlTemplate;

    }

  }
}
const _showPostRef = db.collection("posts");
let posts = [];
_showPostRef.onSnapshot(function (snapshotData) {
  posts = [];
  snapshotData.forEach(function (doc) {
    let post = doc.data();

    post.id = doc.id;
    posts.push(post);

  });
});

function join(id) {
  let selectPost;
  for (let post of posts) {
    if (post.id === id) {
      selectPost = post
    }

  }
  navigateTo("postPage");
  document.querySelector("#postPage").innerHTML = `
  <div id="postPageContainer">
  <h2 id="postTitle">${selectPost.title}</h2>
  <article>
  <p id="postPageName">${selectPost.player}</p>
  <p id="postPageDicord">${selectPost.discord}</p>
  </article>
  </div>
  `;
  let updetePlayer = db.collection("posts").doc(`${selectPost.id}`);
  return updetePlayer.update({
    player: document.querySelector("#userName").textContent,
    discord: document.querySelector("#discord").textContent,
  });

}