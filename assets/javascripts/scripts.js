$(document).ready(function()
{
    $("a.joel").hover(function(e)
    {
        var randomClass = getRandomClass();
        $(e.target).attr("class", randomClass);
    });


    var audioElement = document.getElementById('audio1');
    $('#stop').hide();

    $('#play').click(function() {
        $('#play').hide();
        $('#stop').show();
        audioElement.play();
    });


    $('#stop').click(function() {
        $('#play').show();
        $('#stop').hide();
        audioElement.pause();
    });

    $("#mapudungun i.for-display").click(function () {
        $("#mapudungun").removeClass("displaying").addClass("no-displaying fadeIn");
        $("#espanol").removeClass("no-displaying").addClass("displaying fadeIn"); 
        $("i.for-display").toggleClass('fa-rotate-90 normal');      
    });

    $("#espanol i.for-display").click(function () {
        $("#espanol").removeClass("displaying").addClass("no-displaying fadeIn");
        $("#mapudungun").removeClass("no-displaying").addClass("displaying fadeIn");
        $("i.for-display").toggleClass('fa-rotate-90 normal');    
    });

    $("#saludo-mapudungun i.for-display").click(function () {
        $("#saludo-mapudungun").removeClass("displaying").addClass("no-displaying fadeIn");
        $("#saludo-espanol").removeClass("no-displaying").addClass("displaying fadeIn"); 
        $("i.for-display").toggleClass('fa-rotate-90 normal');      
    });

    $("#saludo-espanol i.for-display").click(function () {
        $("#saludo-espanol").removeClass("displaying").addClass("no-displaying fadeIn");
        $("#saludo-mapudungun").removeClass("no-displaying").addClass("displaying fadeIn");
        $("i.for-display").toggleClass('fa-rotate-90 normal');    
    });
});

function getRandomClass()
{
    //Store available css classes
    var classes = new Array("text-red", "text-green", "text-blue", "text-yellow", "text-brown");

    //Get a random number from 0 to 4
    var randomNumber = Math.floor(Math.random()*5);

    return classes[randomNumber];
}