/**
 Created by Christian Everett on 9/23/2015.
 ceverett@cs.uml.edu
 Undergrad CS
 javascript for 91.461 assignment 1
 index.js
 */
    //jQuery for animating the Button table
$(document).ready(function ()
{
    $(window).load(function ()
    {
        //Setting element draggable for design process
        $("h1").draggable();
        $("#uml_logo").draggable();

        //Set the Button table buttons to change opacity when hovered over
        $("td").mouseenter(function ()
        {
            $(this).fadeTo("fast", 1);
        });

        $("td").mouseleave(function ()
        {
            $(this).fadeTo("fast", 0.5);
        });

        //button table will redirect to an empty html document for the assignments that have not been implemented
        $(".empty").click(function ()
        {
            $(location).attr('href', 'empty.html');
        });

        //Ignore the following
        $(document).keydown(function (key)
        {
            switch (parseInt(key.which, 10))
            {
                case 37://left //animate(properties, speed)
                    $('#mario').animate({
                        left: "-=30px"
                    }, 0.5);
                    break;
                case 38://up
                    $('#mario').animate({
                        top: "-=30px"
                    }, 0.5);
                    break;
                case 39://right
                    $('#mario').animate({
                        left: "+=30px"
                    }, 0.5);
                    break;
                case 40://down
                    $('#mario').animate({
                        top: "+=30px"
                    }, 0.5);
                    break;
                case 32://space bar
                    $('#mario').animate({
                        height: "+=30px",
                        width: "+=20px"
                    }, 100);
                    break;
                default:
                    break;
            }
        });
    });
});