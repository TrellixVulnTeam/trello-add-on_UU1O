class Telegram {

    constructor( ){
       
      this.token = '1812139977:AAFHTtXoNPoOgD1Lc9fLrUHp084cl_VoSJE';
      
      this.url = 'https://api.telegram.org/bot' + this.token + "/sendMessage";
      
      this.payload = null;
      
      this.params = null;
      
      this.response = null;
      
      this.me = "649760380";
    
    }
    
    set sendMessage( message ){
        
        var my = this;
        
        my.payload = JSON.stringify( { chat_id: my.me , text: message } );
        
        my.params = {
          
          'method' : 'post',
          
          'contentType': 'application/json',
          
          'payload': my.payload 
          
        };
        
        my.response = UrlFetchApp.fetch( my.url , my.params );
    
    }
    
  }
  
  function doPost(e) {
    var teleg = new Telegram();
    teleg.sendMessage = JSON.parse(e.postData.contents).id;
    const table = SpreadsheetApp.openById("152mpAm_Jj8SMusi300clTsKgM3Oq5bsSFs9yCa1SAXY").getSheetByName("trello add-on");
    var params = JSON.stringify({"is": table.createTextFinder(JSON.parse(e.postData.contents).id).findAll().length != 0 });
    teleg.sendMessage = params;
    return HtmlService.createHtmlOutput(params);
  }
  
  function trythis(){
    var data = {
      'id': 'testid'
    };
    var options = {
      'method' : 'post',
      'contentType': 'application/json',
      'payload' : JSON.stringify(data)
    };
    var response = UrlFetchApp.fetch('https://script.google.com/macros/s/AKfycbxl-UnMq-kCYRbocHXMHqjluhweXs5emC10p24Qcxyx7HF7DEQ/exec', options);
    response = JSON.stringify(response.getContentText());
    Logger.log(response.slice(response.lastIndexOf("is")).substr(2, 20).includes("true"));
  }