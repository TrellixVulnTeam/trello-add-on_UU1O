//
// BOARD WEBHOOK board.js => board.gas
//

//
// GOOGLE APPS SCRIPT ONLY ( BASED ON JAVASCRIPT )
//

const app_token = "";
const app_key= "";
const table = SpreadsheetApp.openById("");
// SpreadsheetApp - google apps script class
// that access or create Google Sheets files
// openById - method of this class
// that opens the spreadsheet with the given ID. A spreadsheet ID can be extracted from its URL
// and return Spreadsheet class object with the given id
// src : https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app?hl=en#openById(String)
const config = table.getSheetByName("config");
const autorization = table.getSheetByName("autorization"); 
// getSheetByName - method of the Spreadsheet class
// that returns a sheet object with the given name



class Errors{

	construnctor(){

		this.token = "";

		this.key = "";

		this.url = "";

		this.message = null;

		this.date = new Date();

		this.data = null;

	}

	set sendMessage( error ){

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
    
    	return UrlFetchApp.fetch( my.url , my.data );

	}

}

class Board{

	constructor( data ){

		this.isinRow = null;

		this.board = "board" in data ? data.board : null;

		this.config = "config" in data ? data.config : null;

		this.configer = null;

		this.token = "token" in data ? data.token : null;

		this.key = "key" in data ? data.key : null;

		this.user = null;

	}

	Load(){

		try{

			var my = this;

			this.isinRow = config.createTextFinder( my.board ).findAll()[0].getRow();

			this.configer = new Config( this.isinRow , null );

			this.configer = this.config.getData();

			return this.returner( { found: true, config: my.config } ); 
			// ? json.stringify
			//found board - autorization doesn't need
		} catch (err){

			var error = new Errors();

			error.sendMessage = { message: err.toString() , log: "Load : " };

		}

	}

	Config(){

		try{

			var my = this;

			this.isinRow = config.createTextFinder( my.board ).findAll()[0].getRow();

			this.configer = new Config( isinRow , this.config );

			this.configer.setData();

			return this.returner( { found: true, config: my.config } ); 
			//setup config from settings list settings card

		} catch (err){

			var error = new Errors();

			error.sendMessage = { message: err.toString() , log: "Config : " };

		}

	}

	Register(){

		try{

			var my = this;

			this.user = {};

			this.user["token"] = autorization.createTextFinder( my.token ).findAll();

			this.user["key"] = autorization.createTextFinder( my.key ).findAll();

			this.isinRow = this.userr.token.length !=0 && this.user.key.length !=0 ? this.userr.token[0].getRow() === this.user.key[0].getRow() : false;

			if ( this.isinRow ){

				this.isinRow = this.userr.token[0].getRow();

				this.writeBoard();

				return this.returner( { found: false, autorisation: true, config: null } ); 
				//what should return ?

			} else {

				return this.returner( { found: false, autorisation: false } ); 
				//what should return ?

			}

		} catch (err){

			var error = new Errors();

			error.sendMessage = { message: err.toString() , log: "Register : " };

		}

	}

	writeBoard(){

		try{

			var my = this;

			var column = 3;

			while ( autorization.getRange( my.isinRow , column ).getValue() != "" ){ column += 1; }

			autorization.getRange( my.isinRow , column ).setValue( my.board );

			config.getRange( config.getLastRow() , 1 ).setValue( my.board );

		} catch (err){

			var error = new Errors();

			error.sendMessage = { message: err.toString() , log: "writeBoard : " };

		}

	}

	returner( data ){

		return HtmlService.createHtmlOutput( JSON.stringify( data ) ); 

	}

}

class Config{

	constructor( row , data ){

		this.row = row;

		if ( data = null ){

			this.data = {

				//update: //[ { bool: true, func: "", src: "" } ];

			};

		} else {

			this.data = data;

		}

	}

	getData(){

		var my = this;

		return my.data;

	}

	setData(){

		var my = this;

	}

}

function setup(e){

	params = e.parameters;

	data = params.data;

	init = new Board( data );

	condition = params.token === app_token && params.key === app_key;

	length = autorization.createTextFinder( data.board ).findAll().length;

}

function doGet(e){

	try{

		var params, data, init, condition, length;

		setup(e);

		switch(true){

			case ( condition ? length != 0 : false ):

				init.Load();

				break;	

			case ( condition ? length === 0 : false ):

				return HtmlService.createHtmlOutput( JSON.stringify( { found: false } ) ); 
				//not found board - autorisation

				break; 

		}

	} catch (err){

		var error = new Errors();

		error.sendMessage = { message: err.toString() , log: "doGet : " };

	}

}

function doPost(e){

	try{

		var params, data, init, condition, length;

		setup(e);

		switch(true){

			case ( condition ? length != 0 : false ):

				init.Config();

				break;

			case ( condition ? length === 0 : false ):

				init.Register();

				break; 

		}

	} catch (err){

		var error = new Errors();

		error.sendMessage = { message: err.toString() , log: "doPost : " };

	}

}




//
// .gitignore
//

/*
.cahce

dist/
*/

//
// install node, yarn init, paceljs, yarn build, 
//

/*
in package:

"scripts": {
	"build": "pacel build src/html/*.html"
},
*/