
const gamesref = db.collection("Games");
let games=[];
gamesref.onSnapshot(function(snapshotData) {
  games = [];
  snapshotData.forEach(function(doc){
    let game = doc.data();

    game.id = doc.id;
    games.push(game);

  });
  console.log(games);
  appendgames(games);
  // appendgamesforpost(games);
});
function appendgames(games){
  let htmlTemplate="";
  for (let game of games){
    console.log(games)

htmlTemplate +=`<article id="gamesliste" onclick="showDetailView('${game.id}')">
<h2>${game.title}</h2>
<img src="${game.Photo}">
</article>`

document.querySelector("#games").innerHTML = htmlTemplate;

  }

}
function showDetailView(id){
  console.log(id)
  let selectGame;

  for(let game of games){
if(game.id === id){
selectGame=game;
}

  }

//   <img src="${selectbanner.Photo}"></img>

  document.querySelector("#postDetailedView").innerHTML =`

  <section class="gameForumSection">
  <div class="gameForum"
  <div class="postSelectionBar">
  <button onclick="Hot()">Hot</button>
  <button onclick="New()">New</button>
  <button onclick="Top()">Top</button>
  </div>
  <h2>${selectGame.title}</h2>

  </div>
  </section>
`;
navigateTo("postDetailedView");
}
