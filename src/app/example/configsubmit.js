var Errors = await import ('..src/error.js');

var Board = await import ('..src/board.js');

export async function configsubmit( event , board ){

	try{

	    event.preventDefault();

	    board.Config( event );

	    window.config.style.visibility = "hidden";

	    window.googlein.style.visibility = "visible";

    } catch (err){

		var error = await new Errors();

		error.sendMessage = { message: err.toString() , log: "config submit: " };

	}

}