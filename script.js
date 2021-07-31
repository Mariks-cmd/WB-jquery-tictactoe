'use strict';
const app = $('#app');
const container = app.find('.container');
let count = 0;
let symbol = 'x';
let game_on = true;
let message = app.find('.message');

for (let i = 0; i <= 8; i++) {
    container.append('<a href="#"></a>');
}

const links = container.find('a');

links.click(function() {
    if (game_on) {
        if ($(this).text() == '') {
            symbol = (count++ % 2 == 0) ? 'x' : 'o';
            $(this).text(symbol);
            checkWinner();
        }
    }
   
});

app.find('.reset').click(function() {
    links.text('');
    game_on = true;
    count = 0;
    message.text('');
    links.removeClass('green');
});


function checkWinner () {
    let win_combinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ];

    for (let c of win_combinations) {
        if (
            links.eq(c[0]).text() == symbol &&
            links.eq(c[1]).text() == symbol &&
            links.eq(c[2]).text() == symbol
        ){
            message.text('Winner is ' + symbol);
            game_on = false;
            links.eq(c[0]).addClass('green');
            links.eq(c[1]).addClass('green');
            links.eq(c[2]).addClass('green');
            break;
        }
    }
};
