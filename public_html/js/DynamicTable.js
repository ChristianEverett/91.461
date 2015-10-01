/**
 Created by Christian Everett on 9/28/2015.
 ceverett@cs.uml.edu
 Undergrad CS
 javascript for 91.461 assignment 6
 DynamicTable.js
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
    tdArray[1].innerHTML = firstNumber;
    tdArray[2].innerHTML = secondNumber;
    tdArray[3].innerHTML = thirdNumber;
    tdArray[4].innerHTML = fourthNumber;

    tdArray[5].innerHTML = fifthNumber;
    tdArray[10].innerHTML = sixthNumber;
    tdArray[15].innerHTML = seventhNumber;
    tdArray[20].innerHTML = eighthNumber;

    //set the inner rows to there current multiplication values
    for(var y = 6; y <= 25; y+=5)
    {
        for(var x = 0; x < 4; x++)
        {
            //x is the column y is row
            tdArray[y+x].innerHTML = tdArray[x+1].innerHTML * tdArray[y-1].innerHTML;
        }
    }
}
