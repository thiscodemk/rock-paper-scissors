function computerPlay(randomItem) {
    const items = ['Schere','Papier','Stein'];
    var randomItem = items[Math.floor(Math.random()*items.length)];
    console.log(randomItem);
  }

computerPlay();