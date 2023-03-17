jQuery("h3").click(function(){
    $(this).next().slideToggle(500);
});

/**SHORT HAND FOR CALLING JQUERY IS $**/
$("h3").click(function(){
    $(this).next().slideToggle(500);
});

// $("#Library").text("jQuery is a Javascript library");

const $libraryReference = $("#Library");
let libraryText = $("#Library").text();
console.log(libraryText);
$libraryReference.text(`${libraryText} is library`);

