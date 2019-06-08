
var wins = 0;
var losses = 0;
var playerNumber = 0;
var goal;
var berry1 = 0;
var berry2 = 0;
var berry3 = 0;
var berry4 = 0;


pageLoad = () => {
  $('#game').hide();
  $('#goal').hide();
  $('#current-number').hide();
  $('#stats').hide();

  startGame();
};


startGame = () => {
  $('#start').on('click', function () {

    $('#start').fadeOut();
    $.when($('#game').slideDown()).then(function () {
      $('#goal').fadeIn();
      $('#current-number').fadeIn();
      $('#stats').fadeIn();

    })
    restartGame();
  });
};
restartGame = () => {
  playerNumber = 0;

  goal = Math.floor(Math.random() * 120) + 19;

  
  berry1 = Math.floor(Math.random() * 12) + 1;
  berry2 = Math.floor(Math.random() * 12) + 1;
  berry3 = Math.floor(Math.random() * 12) + 1;
  berry4 = Math.floor(Math.random() * 12) + 1;

  displayStats();
  playGame();
};

displayStats = () => {

  $('#goal').empty();
  $('#goal').html(
    '<p id="x-concentration-text" class="animated tada"> Chemical X Level to Reach:<br>' + goal + '</p>'
  );


  $('#stats').empty();
  $('#stats').html(
    "<div> <div class='wins animated tada'> Wins:<br> " +
    wins +
    "</div><br> <div class='losses animated tada'>Losses:<br>" +
    losses +
    '</div></div>'
  );

  
  $('#current-number').html(
    ' <p class="animated fadeIn"> Your Current Level of Chemical X:<br><span class="animated tada" id="number">' + playerNumber + '</span></p>'
  );

}

updateStats = () => {

  $('#stats').empty();
  $('#stats').html(
    "<div> <div class='wins animated tada'> Wins:<br> " +
    wins +
    "</div><br> <div class='losses animated tada'>Losses:<br>" +
    losses +
    '</div></div>'
  );
}


updateNumber = () => {
  $('#number').empty();
  $('#number').fadeIn().text(playerNumber);


  if (playerNumber > goal) {
    losses += 1;
    updateStats();
    $('#goal').empty();
    $('#goal').html(
      '<p class="loser"> You suffered a <em>very</em> uncomfortble fate...  </p>'
    );
    $('#current-number').empty();
    $('#current-number').html(
      '<button class="btn btn-warning mt-2 animated bounceIn" id="restart">Restart</button>'
    );
    alert('death');

    $('#restart').on('click', function () {
      restartGame();
    });
  } else if (playerNumber === goal) {
    wins += 1;
    updateStats();
    $('#goal').html('<p class="winner"> You\'re Cured!!</p>');
    $('#current-number').empty();
    $('#current-number').html(
      '<button class="btn btn-warning mt-2 animated bounceIn" id="restart">Restart</button>'
    );
    alert('You won!');
    $('#restart').on('click', function () {
      restartGame();
    });
  }
}


playGame = () => {

  $('#berry1').on('click', function () {
    playerNumber += berry1;
    updateNumber();
  });
  $('#berry2').on('click', function () {
    playerNumber += berry2;
    updateNumber();
  });
  $('#berry3').on('click', function () {
    playerNumber += berry3;
    updateNumber();
  });
  $('#berry4').on('click', function () {
    playerNumber += berry4;
    updateNumber();
  });

}

pageLoad();