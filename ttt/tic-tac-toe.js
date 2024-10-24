var currentPlayer = 'X';
var board = ['', '', '', '', '', '', '', '', ''];
var gameActive = true;

$('.cell').click(function() {
	var cellIndex = $(this).attr('id').substring(1);

	if (board[cellIndex] === '' && gameActive) {
		board[cellIndex] = currentPlayer;
		$(this).html(currentPlayer === 'X' ? getSvgX() : getSvgO());

		if (checkWin()) {
			$('.score').text('Winner: ' + currentPlayer);
			gameActive = false;
			$('#resetButton').show();
		} else if (board.indexOf('') === -1) {
			$('.score').text('Draw!');
			gameActive = false;
			$('#resetButton').show();
		} else {
			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
			$('.score').text('Current turn: ' + currentPlayer);
		}
	}
});

$('#resetButton').click(function() {
	board = ['', '', '', '', '', '', '', '', ''];
	$('.cell').empty();
	currentPlayer = 'X';
	gameActive = true;
	$('.score').text('Current turn: ' + currentPlayer);
	$(this).hide();
});

function checkWin() {
	const winPatterns = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8],
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6]
	];

	return winPatterns.some(pattern =>
		pattern.every(index => board[index] === currentPlayer)
	);
}

function getSvgX() {
	return `<svg width="80" height="80" viewBox="0 0 100 100">
                <line x1="10" y1="10" x2="90" y2="90" stroke="#209781" stroke-width="10"/>
                <line x1="90" y1="10" x2="10" y2="90" stroke="#209781" stroke-width="10"/>
            </svg>`;
}

function getSvgO() {
	return `<svg width="80" height="80" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#e9b64a" stroke-width="10" fill="none"/>
            </svg>`;
}
