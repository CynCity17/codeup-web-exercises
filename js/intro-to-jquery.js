jQuery("h3").click(function(){
    $(this).next().slideToggle(500);
});

/**SHORT HAND FOR CALLING JQUERY IS $**/
$("h3").click(function(){
    $(this).next().slideToggle(500);
});
