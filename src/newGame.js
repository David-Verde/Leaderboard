export default async function newGame() {
    let gameId = [];
    const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Digitalization' }),
    });
    const data = await res.json();
    gameId = (data.result).split(' ');
    return gameId[3];
  }