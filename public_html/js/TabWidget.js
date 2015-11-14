/**
 Created by Christian Everett on 11/12/2015.
 ceverett@cs.uml.edu
 Undergrad CS
 javascript for 91.461 assignment 8
 TabWidget.js
 */
//An array to hold references to all the sliders
var sliderArray = [];
//An array to hold references to all the input fields
var inputArray = [];
//number of tabs currently on the page
var numberOfTabs = 0;

function submitNumbers()
{
    //add new tab with table
    numberOfTabs++;
    generateTab(numberOfTabs);

    //retrieve an array of all td in the multiplication table
    var tdArray = $("#" + numberOfTabs + " td");
    $("#" + numberOfTabs + "Button").button().click(onClickCloseButton);

    //set the outer row and column with user entered values
    tdArray[1].innerHTML = inputArray[0].val();
    tdArray[2].innerHTML = inputArray[1].val();
    tdArray[3].innerHTML = inputArray[2].val();
    tdArray[4].innerHTML = inputArray[3].val();

    tdArray[5].innerHTML = inputArray[4].val();
    tdArray[10].innerHTML = inputArray[5].val();
    tdArray[15].innerHTML = inputArray[6].val();
    tdArray[20].innerHTML = inputArray[7].val();

    //set the inner rows to there current multiplication values
    for (var y = 6; y <= 25; y += 5)
    {
        for (var x = 0; x < 4; x++)
        {
            //x is the column y is row
            tdArray[y + x].innerHTML = tdArray[x + 1].innerHTML * tdArray[y - 1].innerHTML;
        }
    }

    console.log("Submit Successful");
}

function onClickCloseButton(event)
{
    console.log("Button: " + $(this).attr("id") + "Clicked");

    //get the is of the tab to close
    var tabNumberToRemove = $(this).attr("id").split("B");

    //remove both the tab and tab data
    $("#li" + tabNumberToRemove[0]).remove();
    $("#tabs-" + tabNumberToRemove[0]).remove();

    //numberOfTabs--;
    $("#tabs").tabs("refresh");
}

function generateTab(tabNumber)
{
    //space holder table, table will be filled dynamically with user input
    var table = '<table id="' + tabNumber + '" class="multiplicationTable"> \
    <tr> \
    <td></td> \
    <td></td> \
    <td></td> \
    <td></td> \
    <td></td> \
    </tr> \
    <tr> \
    <td></td> \
    <td></td> \
    <td></td> \
    <td></td> \
    <td></td> \
    </tr> \
    <tr> \
    <td></td> \
    <td></td> \
    <td></td> \
    <td></td> \
    <td></td> \
    </tr> \
    <tr> \
    <td></td> \
    <td></td> \
    <td></td> \
    <td></td> \
    <td></td> \
    </tr> \
    <tr> \
    <td></td> \
    <td></td> \
    <td></td> \
    <td></td> \
    <td></td> \
    </tr> \
    </table>';
    //button to close the current tab
    var closeButton = '<button id="' + tabNumber +'Button">Close Tab</button>';

    //build tab and tab data then append them to the div
    var newTab = '<li id="li' + tabNumber + '"><a href="#tabs-' + tabNumber + '">table ' + tabNumber + '</a></li>';
    var newData = '<div id = "tabs-' + tabNumber + '">' + table + closeButton + '</div>';
    $("#tabs ul").append(newTab);
    $("#tabs").append(newData);

    $("#tabs").tabs("refresh");
}

//This method binds the sliders to the inputs
function onInputChanged()
{
    //find which input was changed
    switch ($(this).attr("id"))
    {
        case inputArray[0].attr("id"):
            sliderArray[0].slider("value", inputArray[0].val());
            break;
        case inputArray[1].attr("id"):
            sliderArray[1].slider("value", inputArray[1].val());
            break;
        case inputArray[2].attr("id"):
            sliderArray[2].slider("value", inputArray[2].val());
            break;
        case inputArray[3].attr("id"):
            sliderArray[3].slider("value", inputArray[3].val());
            break;
        case inputArray[4].attr("id"):
            sliderArray[4].slider("value", inputArray[4].val());
            break;
        case inputArray[5].attr("id"):
            sliderArray[5].slider("value", inputArray[5].val());
            break;
        case inputArray[6].attr("id"):
            sliderArray[6].slider("value", inputArray[6].val());
            break;
        case inputArray[7].attr("id"):
            sliderArray[7].slider("value", inputArray[7].val());
            break;
        default:
    }
}
//this method binds the inputs to the sliders
function onSliderChanged(event, ui)
{
    //find which slider was changed
    switch ($(this).attr("id"))
    {
        case sliderArray[0].attr("id"):
            inputArray[0].val(sliderArray[0].slider("value"));
            break;
        case sliderArray[1].attr("id"):
            inputArray[1].val(sliderArray[1].slider("value"));
            break;
        case sliderArray[2].attr("id"):
            inputArray[2].val(sliderArray[2].slider("value"));
            break;
        case sliderArray[3].attr("id"):
            inputArray[3].val(sliderArray[3].slider("value"));
            break;
        case sliderArray[4].attr("id"):
            inputArray[4].val(sliderArray[4].slider("value"));
            break;
        case sliderArray[5].attr("id"):
            inputArray[5].val(sliderArray[5].slider("value"));
            break;
        case sliderArray[6].attr("id"):
            inputArray[6].val(sliderArray[6].slider("value"));
            break;
        case sliderArray[7].attr("id"):
            inputArray[7].val(sliderArray[7].slider("value"));
            break;
        default:
    }
}


$(document).ready(function ()
{
    (function()
    {
        //read in all sliders from html
        sliderArray[0] = $("#first_number_slider");
        sliderArray[1] = $("#second_number_slider");
        sliderArray[2] = $("#third_number_slider");
        sliderArray[3] = $("#fourth_number_slider");
        sliderArray[4] = $("#fifth_number_slider");
        sliderArray[5] = $("#sixth_number_slider");
        sliderArray[6] = $("#seventh_number_slider");
        sliderArray[7] = $("#eighth_number_slider");

        //read in all input fields
        inputArray[0] = $("#first_number");
        inputArray[1] = $("#second_number");
        inputArray[2] = $("#third_number");
        inputArray[3] = $("#fourth_number");
        inputArray[4] = $("#fifth_number");
        inputArray[5] = $("#sixth_number");
        inputArray[6] = $("#seventh_number");
        inputArray[7] = $("#eighth_number");

        //The following sets up two way binding

        //set all sliders on change listener
        sliderArray.forEach(function (slider){slider.slider({change: onSliderChanged})});

        //set all inputs  change listener
        inputArray.forEach(function (input){input.on("input", onInputChanged)});

        //Button for removing all tabs
        $("#closeAllTabs").button().click(function(event)
        {
            //clear all tabs
            $("#tabs ul").empty();
            numberOfTabs = 0;

            //clear all tab data
            $("#tabs div").each(function()
            {
                if($(this).is("div"))
                {
                    $(this).remove();
                }
            });
        });

        $("#tabs").tabs();
    })();

    //jQuery validation will require all fields to have a number input
    $("#multiplicationForm").validate(
    {
        rules:
        {
            first_number:
            {
                required: true
            },
            second_number:
            {
                required: true
            },
            third_number:
            {
                required: true
            },
            fourth_number:
            {
                required: true
            },
            fifth_number:
            {
                required: true
            },
            sixth_number:
            {
                required: true
            },
            seventh_number:
            {
                required: true
            },
            eighth_number:
            {
                required: true
            }
        },
        messages:
        {
            first_number: {
                required: "Required Field"
            },
            second_number: {
                required: "Required Field"
            },
            third_number: {
                required: "Required Field"
            },
            fourth_number: {
                required: "Required Field"
            },
            fifth_number: {
                required: "Required Field"
            },
            sixth_number: {
                required: "Required Field"
            },
            seventh_number: {
                required: "Required Field"
            },
            eighth_number: {
                required: "Required Field"
            }
        },
        showErrors: function(errorMap, errorList)
        {
            console.log("show errors");
            this.defaultShowErrors();
        },
        errorPlacement: function(error, element)
        {
            //Place the validation error message in the input field as a watermark
            element.watermark(error[0].innerHTML);
        }
    });
});