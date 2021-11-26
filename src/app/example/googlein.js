var Errors = await import ('..src/error.js');

export async function googlein( event , board ){

	try{

		event.preventDefault();

	} catch (err){

		var error = await new Errors();

		error.sendMessage = { message: err.toString() , log: "googlein submit: " };

	}

}