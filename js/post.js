const gamesref = db.collection("Games");
let games = [];
gamesref.onSnapshot(function (snapshotData) {
  games = [];
  snapshotData.forEach(function (doc) {
    let game = doc.data();

    game.id = doc.id;
    games.push(game);

  });
  console.log(games);
  appendgames(games);
  // appendgamesforpost(games);
});

// show game on browse page
function appendgames(games) {
  let htmlTemplate = "";
  for (let game of games) {
    console.log(games)

    htmlTemplate += `<article id="gamesliste" onclick="showDetailView('${game.id}')">
<h2>${game.title}</h2>
<img src="${game.Photo}">
</article>`

    document.querySelector("#games").innerHTML = htmlTemplate;

  }

}




// show game details when you click on the game on the browse game page. this is also where post are. 
function showDetailView(id) {
  console.log(id)
  let selectGame;

  for (let game of games) {
    if (game.id === id) {
      selectGame = game;
    }

  }


  //   <img src="${selectbanner.Photo}"></img>

  // <div class="gameTitle">
  // <h2>${selectGame.title}</h2>
  // </div>

  // this is the ui for the detailed game page 
  document.querySelector("#postDetailedView").innerHTML = `

  <div class="gameBg">
  <img class="coverImg" src="${selectGame.coverImg}">
  </div>
  <div id="hiddenInfoPost">
<p id="postGameTitle">${selectGame.title}</p>
<p id="postPlayerCount">${selectGame.maxPlayerCount}</p>
</div>
  <section class="gameForumSection">

  <div class="postSelectionBar">
  <button onclick="Hot()">Hot</button>
  <button onclick="New()">New</button>
  <button onclick="Top()">Top</button>
  </div>
  <div class="postSection">
  <div id="make-post">
    <div class="makePostTitle">
      <input id="postTitle" type="text" placeholder="name your post">
    </div>
      <label for="maketags">add tags:</label>
      <select id="maketags" name="maketags">
      </select>
  </div>
  <button type="button" name="button" onclick="addPost()">create post</button>
  <div id="showPost">
    <div id="postTitle"><div>
    <div class="playerCount"></div>
    <div id="tags"></div>
  </div>
</div>
<div id="view-post">
<div> 


  </section>
`;




  navigateTo("postDetailedView");
  makePostFun();
  viewPostFun();
}
