// $('.codeup').css('border', '1px solid red');

// $("li").css('font-size', '20px');
//
// $("h1, p, li").css('background-color', 'pink');
//
// let header = $('h1').html();
// alert(header);

$('h1').click(function() {
    $(this).css('background-color', 'pink');
});

$('p').dblclick(function(e) {
    $(this).css('font-size', '18px');
});

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);