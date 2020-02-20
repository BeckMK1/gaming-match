function search(value) {
  console.log(value);
  let filteredgamelist = [];
  for (let game of games){
    let name = game.title.toLowerCase();
    if (name.includes(value.toLowerCase())) {
      filteredgamelist.push(game);
    }
  }

  console.log(filteredgamelist);
  appendgames(filteredgamelist);
}

function filter(value) {
  let filteredgamelist = games.filter(game => game.name.toLowerCase().includes(value.toLowerCase()));

  console.log(filteredgamelist);
  appendgames(filteredgamelist);
}
