//var Errors = await import ('..src/error.js');

//var Board = await import ('..src/board.js');

//var Fetcher = await import ('..src/fetcher.js');

//var initer = await import ('..src/initer.js');

var render = await import ('..src/renderBoardIframe.js');

var loginsubmit = await import ('..src/loginsubmit.js');

var configsubmit = await import ('..src/configsubmit.js');

var googlein = await import ('..src/googlein.js');

var board , is , config;

var trello = TrelloPowerUp.iframe();

trello.render( render() );

window.login.addEventListener( 'submit' , loginsubmit( event , board ) );

window.config.addEventListener( 'submit' , configsubmit( event , board ) );

window.googlein.addEventListener( 'submit' , googlein( event , board ));
