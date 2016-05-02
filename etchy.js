// Enter script here??
var rows = 16;
var cols = 16;
$(document).ready(function() {
    // Add 16x16 grid
    for (var i=0; i<rows; i++)
    {
        $('tbody').append("<tr>");
        for (var j=0; j<cols; j++)
        {
            $('tbody').append("<td></td>");
        }
        $('tbody').append("</tr>");
    }
    
    $('td').mouseenter(function() {
        $(this).addClass('colored')
    })
})