var Errors = await import ('..src/error.js');

var Board = await import ('..src/board.js');

export async function initer( id ){

	try{

	  	console.log( JSON.stringify( data , null , 2 ) );

	  	var board = await new Board( id );

	  	var json = board.Load();

	  	if ( json.found === true ){

	  		return { obj: board , is: true  , config: json.config };

	  	} else {

	  		return { obj: board , is: false , config: null };

	  	}

  	} catch (err){

		var error = await new Errors();

		error.sendMessage = { message: err.toString() , log: "export init : " };

	}

}