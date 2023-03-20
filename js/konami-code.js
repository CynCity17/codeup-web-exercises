"use strict";

$(document).keyup(function(event){
    console.log(event.keyCode);
});

let global = {

    konami: function() {
        let konamikeys = [38,38,40,40,37,39,37,39,66,65,13],
            started = false,
            count = 0;

        $(document).keyup(function(e){
            let reset = function() {
                started = false;
                count = 0;
                return;
            };

            let key = e.keyCode;

            // Watching if first key in sequence was pressed, only when key is 38 will the function continue.
            if(!started){
                if(key === 38){
                    started = true;
                }
            }
            // If started, pay attention to key presses, looking for right sequence.
            if (started){
            // If the key presses are strictly equal to the sequence of konamikeys keycodes then count
                if (konamikeys[count] === key){
                    count++;
                } else {
            // if they don't match, restart.
                    reset();
                }
            // if they match and strictly reach all eleven keys then alert
                if (count === 11){
                    alert('Konami code entered! Sweeeeeet!.');
                    reset();
                }
            } else {
                reset();
            }
        });
    }
}

global.konami();
