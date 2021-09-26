var Errors = await import ('..src/error.js');

var Board = await import ('..src/board.js');

export async function loginsubmit( event , board ){

	try{

	    event.preventDefault();

	    board.Register( event );
 
	    window.login.style.visibility = "hidden";

	    window.config.style.visibility = "visible";

	    trello.sizeTo('x-large').done();

	} catch (err){

		var error = await new Errors();

		error.sendMessage = { message: err.toString() , log: "login submit: " };

	}

}
