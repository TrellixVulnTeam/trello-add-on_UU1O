//
// TELEGRAM WEBHOOK dev.js => dev.gas
//

//
// GOOGLE APPS SCRIPT ONLY ( BASED ON JAVASCRIPT )
//

const token = "";
const key = "";

class Telegram {

  constructor(){
    
    this.token = 'TELEGRAM_BOT_TOKEN';
    
    this.url = 'https://api.telegram.org/bot' + this.token + "/sendMessage";
    
    this.payload = null;
    
    this.params = null;
    
    this.response = null;
    
    this.me = "CHAT_ID";
  
  }
  
  set sendMessage( message ){
      
  	var my = this;
      
    my.payload = JSON.stringify( { chat_id: my.me , text: message } );
      
    my.params = {
        
      'method' : 'POST',
        
      'contentType': 'application/json',
        
      'payload': my.payload 
        
    };
      
    my.response = UrlFetchApp.fetch( my.url , my.params );

  }
  
}

function doPost(e){

	if ( e.parameters.token === token && e.parameters.key === key ){

		var message = e.parameters.message;

		var tel = new Telegram();

		tel.sendMessage = message;

	}

}