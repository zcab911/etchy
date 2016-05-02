// Enter script here??
var rows = 8;
var cols = 8;
var $etcharea = "#etch-area";
var $etchrow = ".etch-row";
var $etchpix = ".etch-pix";
$(document).ready(function() {
    for (var i=0; i<rows; i++)
    {
        for (var j=0; j<cols; j++)
        {
            $($etcharea).append("<div class='etch-pix'></div>");
        }
        $($etcharea).append("<div class='etch-row'></div>");
    }
    
    $($etchpix).mouseenter(function() {
        $(this).addClass('colored')
    })
})