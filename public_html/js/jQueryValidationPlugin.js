/**
 Created by Christian Everett on 10/28/2015.
 ceverett@cs.uml.edu
 Undergrad CS
 javascript for 91.461 assignment 7
 jQueryValidationPlugin.js
 */

function submitNumbers()
{
    console.log("Submit Successful");
    //retrieve user entered values from the form fields
    var firstNumber = document.getElementById("first_number").value;
    var secondNumber = document.getElementById("second_number").value;
    var thirdNumber = document.getElementById("third_number").value;
    var fourthNumber = document.getElementById("fourth_number").value;

    var fifthNumber = document.getElementById("fifth_number").value;
    var sixthNumber = document.getElementById("sixth_number").value;
    var seventhNumber = document.getElementById("seventh_number").value;
    var eighthNumber = document.getElementById("eighth_number").value;
    //retrieve an array of all td in the multiplication table
    var tdArray = document.getElementsByTagName("td");

    //set the outer row and column with user entered values
    tdArray[1].innerHTML = firstNumber != "" ? firstNumber : 0;
    tdArray[2].innerHTML = secondNumber != "" ? secondNumber : 0;
    tdArray[3].innerHTML = thirdNumber != "" ? thirdNumber : 0;
    tdArray[4].innerHTML = fourthNumber != "" ? fourthNumber : 0;

    tdArray[5].innerHTML = fifthNumber != "" ? fifthNumber : 0;
    tdArray[10].innerHTML = sixthNumber != "" ? sixthNumber : 0;
    tdArray[15].innerHTML = seventhNumber != "" ? seventhNumber : 0;
    tdArray[20].innerHTML = eighthNumber != "" ? eighthNumber : 0;

    //set the inner rows to there current multiplication values
    for (var y = 6; y <= 25; y += 5)
    {
        for (var x = 0; x < 4; x++)
        {
            //x is the column y is row
            tdArray[y + x].innerHTML = tdArray[x + 1].innerHTML * tdArray[y - 1].innerHTML;
        }
    }
}

$(document).ready(function ()
{
    //jQuery validation will require all fields to have a number input
    $("#multiplicationForm").validate(
    {
        rules:
        {
            first_number:
            {
                required: true,
                maxlength: 6
            },
            second_number:
            {
                required: true,
                maxlength: 6
            },
            third_number:
            {
                required: true,
                maxlength: 6
            },
            fourth_number:
            {
                required: true,
                maxlength: 6
            },
            fifth_number:
            {
                required: true,
                maxlength: 6
            },
            sixth_number:
            {
                required: true,
                maxlength: 6
            },
            seventh_number:
            {
                required: true,
                maxlength: 6
            },
            eighth_number:
            {
                required: true,
                maxlength: 6
            }
        },
        messages:
        {
            first_number: {
                required: "Required Field",
                maxlength: "Six digit number max"
            },
            second_number: {
                required: "Required Field",
                maxlength: "Six digit number max"
            },
            third_number: {
                required: "Required Field",
                maxlength: "Six digit number max"
            },
            fourth_number: {
                required: "Required Field",
                maxlength: "Six digit number max"
            },
            fifth_number: {
                required: "Required Field",
                maxlength: "Six digit number max"
            },
            sixth_number: {
                required: "Required Field",
                maxlength: "Six digit number max"
            },
            seventh_number: {
                required: "Required Field",
                maxlength: "Six digit number max"
            },
            eighth_number: {
                required: "Required Field",
                maxlength: "Six digit number max"
            }
        },
        showErrors: function(errorMap, errorList)
        {
            console.log("show errors");
            this.defaultShowErrors();
        },
        errorPlacement: function(error, element)
        {
            if(error[0].innerHTML == "Six digit number max")
            {
                $(error).appendTo( $("#errorMessage") ) ;
            }
            else
            {
                //Place the validation error message in the input field as a watermark
                element.watermark(error[0].innerHTML);
            }
        }

    });
});

