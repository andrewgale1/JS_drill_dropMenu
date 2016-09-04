$(document).ready(function() {
$("#dropdown-content").hide();

$("#menu").mouseenter(function() {
    $("#dropdown-content").slideDown(500);
    });
$("#dropdown").mouseleave(function(){
    $("#dropdown-content").slideUp(500);
})

});











