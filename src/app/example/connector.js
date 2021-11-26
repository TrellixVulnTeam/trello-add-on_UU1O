var Errors = await import ('..src/error.js');

var Board = await import ('..src/board.js');

var Fetcher = await import ('..src/fetcher.js');

var init = await import ('..src/init.js');

var GRAY_ICON = '';//..

window.TrelloPowerUp.initialize({

	'board-buttons': function (trello, options) { 
		
		var board , is , config , buttons;

		({ board , is , config }) = init( trello );

		var buttons = [{

	      icon: {

        	dark: WHITE_ICON,

        	light: BLACK_ICON
		  
		  },
	      
	      text: 'by Legal IT Group',

	      callback: function(trello){

	        return trello.popup({

	          title: "Settings",

	          url: '..src/settings.html'

	        });

	      }

	    }];

	    if (is) {

	    	buttons.push({

	      		icon: {

        			dark: WHITE_ICON,

        			light: BLACK_ICON
		  
		  		},
	      
	    	    text: 'Table',

	      		callback: function(trello){

	       			return trello.popup({

	         			title: "Table",

	         			url: '' //!!!!!!!!!!!!!!!!!!

	      			});

	      		}

	    	});

	    }

		return buttons;

	 },

	'card-buttons': function (trello, options) { 

		var board , is , config;

		({ board , is , config }) = init( trello );

	 },

	'attachment-sections': function(trello, options){

		var board , is , config;

		({ board , is , config }) = init( trello );

	  }
});

/*
///

// return t.lists("all").then(function (lists) {
  //     		console.log(JSON.stringify(lists, null, 2));
  //   	});

	    // options.entries is a list of the attachments for this card
	    // you can look through them and 'claim' any that you want to
	    // include in your section.

	    // we will just claim urls for Yellowstone
	    var claimed = options.entries.filter(function (attachment) {
	      return attachment.url.indexOf('http://www.nps.gov/yell/') === 0;
	    });

	    // you can have more than one attachment section on a card
	    // you can group items together into one section, have a section
	    // per attachment, or anything in between.
	    if (claimed && claimed.length > 0) {
	      // if the title for your section requires a network call or other
	      // potentially lengthy operation you can provide a function for the title
	      // that returns the section title. If you do so, provide a unique id for
	      // your section
	      return [{
	        id: 'Yellowstone', // optional if you aren't using a function for the title
	        claimed: claimed,
	        icon: GRAY_ICON, // Must be a gray icon, colored icons not allowed.
	        title: 'Example Attachment Section: Yellowstone',
	        content: {
	          type: 'iframe',
	          url: t.signUrl('./section.html', {
	            arg: 'you can pass your section args here'
	          }),
	          height: 230
	        }
	      }];
	    } else {
	      return [];
	    }
*/