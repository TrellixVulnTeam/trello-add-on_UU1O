var Errors = await import ('..src/error.js');

var init = await import ('..src/init.js');

//var board , is , config;

export async function render(){

  return trello.get( 'board' , 'shared' , 'id' )

  .then( async function(id){

  	try{

	  	return { board , is , config } = await init( id )

	  	.then(function( board , is , config ){

		  	if ( is ){

		  		window.config.style.visibility = "visible";

		  		t.sizeTo('x-large').done();

		  	} else {

		  		window.login.style.visibility = "visible";

		  		t.sizeTo('small').done();

		  	}

	  	});

  	} catch (err){

		var error = await new Errors();

		error.sendMessage = { message: err.toString() , log: "render get board : " };

	}

  });

}