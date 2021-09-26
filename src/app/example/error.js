var Fetcher = await import ('..src/fetcher.js');

export class Errors{

	construnctor(){

		this.token = "";

		this.key = "";

		this.url = "";

		this.message = null;

		this.date = new Date();

		this.data = null;

	}

	async set sendMessage( error ){

		var my = this;
    
    	this.date = ( this.date.getDate() + "." + this.date.getMonth() ).toString();
    
    	this.message = ( "#by_Legal_IT_Group, #" + error.log + ", #" + this.date + "\n" + error.message ).toString();
    
    	this.data = {
    
      		"method" : "POST",
      
     		"contentType": "application/json",
      
      		"headers": {
        
        		'Accept': 'application/json'
        
      		},

      		"payload": JSON.stringify( { token: my.token , key: my.key , message: my.message } )
      
    	};

    	var fetcher = await new Fetch();
    
    	return json = fetcher.fetch( my.url , "POST" , my.data , true );

	}

}