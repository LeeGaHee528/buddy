$(".answer").hide();
$(".question").click(function(){
    $(this).next().slideToggle()
});
$(".question").click(function(){
    $(this).children().children('img').toggleClass('turn')
});
