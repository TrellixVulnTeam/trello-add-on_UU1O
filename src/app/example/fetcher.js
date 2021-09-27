var Errors = await import ('..src/error.js');

export class Fetcher{

	constructor(){

		this.token = "";

		this.key = "";

	}

	async fetch( url , method , payload , tel ){

		try{
  
		    var data = {
		    
		      "method" : method,
		      
		      "contentType": "application/json",
		      
		      "headers": {
		        
		        'Accept': 'application/json'
		        
		      }
		      
		    };
		    
		    if ( payload != null && tel != false ) {

		    	payload["token"] = this.token;

		    	payload["key"] = this.key;
		    
		    	data["body"] = JSON.stringify( payload );
		      
		    } else if ( payload != null && tel === true ){

		    	data["body"] = JSON.stringify( payload );

		    }

		    var response = await fetch( url , data );

			return json = response.json();

		} catch (err){

			var error = await new Errors();

			error.sendMessage = { message: err.toString() , log: "export fetch : " };

		}
    
    }

}

