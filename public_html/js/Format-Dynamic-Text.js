/**
 Created by Christian Everett on 9/23/2015.
 ceverett@cs.uml.edu
 Undergrad CS
 javascript for 91.461 assignment 5
 Format-Dynamic-Text.js
 */
var jsonObject;

//function Print text will print all the contents of the json object from colors.json into the html div tag
function PrintText()
{
    var strContent = "<table>";

    // create dynamic content from JSON

    for(var x = 0; x < jsonObject.colorsArray.length; x++)
    {
        strContent += "<tr class=" + jsonObject.colorsArray[x].colorName + ">" + "<td>" + jsonObject.colorsArray[x].colorName + "</td><td>" + jsonObject.colorsArray[x].hexValue + "</td></tr>";
    }

    strContent += "</table>"

    $("#dynamic-content").html(strContent);
}
//make ajax call to retrieve json file to be manipulated
jQuery.ajax(
    {
        async: false,
        dataType: "json",
        url: "colors.json",
        success: function (data)
        {
            jsonObject = data;
        }
    });

$(document).ready(function ()
{
    PrintText();
});