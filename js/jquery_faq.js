$('dt').hover(function (event) {
        $('dd').toggleClass('invisible');
    });

/**CLASS EXAMPLE PER INSTRUCTIONS OF EXERCISE TO USE BUTTON**/
// $('button').on('click', function (){
//     $('dd').toggleClass('invisible');
// });

//DOES NOT WORK YET, tried to apply from class example
// $('.list-button').on('click', function (){
//     $('#national-parks-heading').find('ul li:last-child').toggleClass('highlight');
// });

/**My Incomplete attempt**/
//     $('li').each(function(index) {
//         if (index === 4 || index === 9) {
//             $(this).css('background-color', '#FF0');
//         }
// });


$('h3').on('click', function (){
    $('ul').children().css('font-weight', 'bold');
});

$('#national-parks li, #state-parks-texas li').on('click', function (){
    $(this).siblings().first().css('color', 'blue');
});
