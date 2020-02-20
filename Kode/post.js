var firebaseConfig = {
    apiKey: "AIzaSyDUpw1SBd2hm7arpboisjoLDlRJY8CE_UY",
    authDomain: "gmaing-match.firebaseapp.com",
    databaseURL: "https://gmaing-match.firebaseio.com",
    projectId: "gmaing-match",
    storageBucket: "gmaing-match.appspot.com",
    messagingSenderId: "408389194553",
    appId: "1:408389194553:web:6d30c2a496a7774ec50ee8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
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
