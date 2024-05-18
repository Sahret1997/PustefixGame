let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();


function playGame(userChoice) {
    const choices = ['schere', 'stein', 'papier', 'echse', 'spock'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    
    let result;
    
    if (userChoice === computerChoice) {
    result = 'Unentschieden.';
    } else if (
    (userChoice === 'schere' && computerChoice === 'papier') ||
    (userChoice === 'schere' && computerChoice === 'echse') ||
    (userChoice === 'stein' && computerChoice === 'schere') ||
    (userChoice === 'stein' && computerChoice === 'echse') ||
    (userChoice === 'papier' && computerChoice === 'stein') ||
    (userChoice === 'papier' && computerChoice === 'spock') ||
    (userChoice === 'echse' && computerChoice === 'spock') ||
    (userChoice === 'echse' && computerChoice === 'papier') ||
    (userChoice === 'spock' && computerChoice === 'stein') ||
    (userChoice === 'spock' && computerChoice === 'schere')
    ) {
    result = 'Du lurch gewinnst!';
    } else {
    result = 'Von einem Bot besiegt, lösch dich!';
    }


    if (result === 'Du lurch gewinnst!') {
        score.wins += 1;
      } else if (result === 'Von einem Bot besiegt, lösch dich!') {
        score.losses += 1;
      } else if (result === 'Unentschieden.') {
        score.ties += 1;
      }
    
    document.querySelector('.js-result').innerHTML = 
    `Du wählst 
    <img class="result-icon" src="../images/${userChoice}-emoji.png"> 
    Bot wählt
     <img class="result-icon" src="../images/${computerChoice}-emoji.png"> :
     ${result}`;

     localStorage.setItem('score', JSON.stringify(score));

     updateScoreElement();
    }

    function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Gewonnen: ${score.wins}, <br>
           Verloren (LMAO): ${score.losses}, <br>
            Unentschieden: ${score.ties}`;
      }

      function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
      }