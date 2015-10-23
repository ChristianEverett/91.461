/**
 Created by Christian Everett on 10/10/2015.
 ceverett@cs.uml.edu
 Undergrad CS
 javascript for 91.461 assignment 8
 SinglePageNavigation.js
 */

"use strict";
// All Javascript is wrapped in a self invoking function
(function()
{
    // No hash path parameter set to default index page
    if(location.hash == "")
    {
        location.hash = "#home";
    }

    function getPageContent()
    {
        var fragmentId = location.hash.substr(1);

        $.get(fragmentId + ".html", function(data) {setPageContent(data)});
    }

    function setPageContent(content)
    {
        $("#fragmentHolder").html(content);
    }

    getPageContent();

    // Set the event listener for hash changes
    $(window).bind('hashchange', getPageContent);
}());