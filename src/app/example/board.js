var Errors = await import ('..src/error.js');

var Fetcher = await import ('..src/fetcher.js');

export class Board{

	constructor( id ){

		this.id = id;

		this.url = "";

	}

	async Load(){

		try{

			var my = this;

			var fetcher = await new Fetch();

	  		var json = fetcher.fetch( my.url , "GET" , { board: my.id } , false );

	  		return JSON.stringify( json );

  		} catch (err){

			var error = await new Errors();

			error.sendMessage = { message: err.toString() , log: "export Load : " };

		}

	}

	async Config( event ){

		try{

			var my = this;

			var fetcher = await new Fetch();

			var config = ""; //!!!!!

	  		var json = fetcher.fetch( my.url , "POST" , { board: my.id , config: config } , false );

	  	} catch (err){

			var error = await new Errors();

			error.sendMessage = { message: err.toString() , log: "export Config : " };

		}

	}

	async Register( event ){

		try{

			var my = this;

			var fetcher = await new Fetch();

			var key = ""; //!!!!!

			var token = "";

	  		var json = fetcher.fetch( my.url , "POST" , { board: my.id , token: token , key: key } , false );

  		} catch (err){

			var error = await new Errors();

			error.sendMessage = { message: err.toString() , log: "export Register : " };

		}

	}

}
