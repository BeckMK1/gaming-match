
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
  appendgamesforpost(games);
});
function appendgames(games){
  let htmlTemplate="";
  for (let game of games){
    console.log(games)

htmlTemplate +=`<article id="gamesliste">
<h2>${game.title}</h2>
<img src="${game.Photo}">
</article>`

document.querySelector("#games").innerHTML = htmlTemplate;

  }

}
