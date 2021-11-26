var Errors = await import ('..src/error.js');

var Board = await import ('..src/board.js');

var initer = await import ('..src/initer.js');

export async function init( trello ){

	return trello.board("id")

        .then( initer( board.id ));

}