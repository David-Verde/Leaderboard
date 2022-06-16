const newGame = async () => {
  let gameId = [];
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({ name: 'Digitalization' }),
    headers: {
      'Content-Type': 'application/json',
    }, 
  });
  const data = await res.json();
  gameId = (data.result).split(' ');
  return gameId[3];

};
module.exports = newGame;
