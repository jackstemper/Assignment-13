async function showGames(){
    let response = await fetch("/api/games");
    let gamesJson = await response.json();
    let contentDiv = document.getElementById("content");
    for(i in gamesJson ){
        contentDiv.append(makeGameElement(gamesJson[i]));
    }
}

function makeGameElement(game){
    gameElm = document.createElement("div");
    gameElm.classList.add("game");
    gameH2 = document.createElement("h2");
    gameH2.innerHTML = game.name;
    gameElm.append(gameH2);
    gameSec = document.createElement("section");
    gameSec.classList.add("gamesplit");
    gameElm.append(gameSec);
    gameImg = document.createElement("img");
    gameImg.src = game.img;
    gameSec.append(gameImg);
    gameP = document.createElement("p");
    gameP.innerHTML = `${game.name} is a ${game.genre} game, that is ${game.type}\n`;
    gameP.innerHTML += `The game has a ${game.rating}\n I personally think it is a ${game.merating} game\n`;
    //gameP.innerHTML += makeReviews(game.reviews);
    gameSec.append(gameP);
    return gameElm;
}

//function makeReviews(reviews){
//    
//}

window.onload = function(){
    this.showGames();
}