$(document).ready(function()
{
    $("a.joel").hover(function(e)
    {
        var randomClass = getRandomClass();
        $(e.target).attr("class", randomClass);
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