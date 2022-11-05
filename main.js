function createGame(player1, hour, player2){
  return `
  <li>
     <img src="./assets/icon-${player1}.svg" alt="${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="${player2}">
  </li>
  `
}

let delay = -0.4;
function createCard(date, day, games){
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>
      <ul>
       ${games}
      </ul>
      </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "21/11",
    "segunda",
    createGame("brazil", "08:00", "cameroon") +
      createGame("hungary", "16:00", "argentina") +
      createGame("colombia", "16:00", "japan")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("portugal", "16:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("southkorea", "10:00", "ghana") +
      createGame("portugal", "13:00", "uruguay") +
      createGame("brazil", "16:00", "switzerland")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("southkorea", "12:00", "portugal") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  )
