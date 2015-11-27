/**
 Created by Christian Everett on 11/25/2015.
 ceverett@cs.uml.edu
 Undergrad CS
 javascript for 91.461 assignment 9
 Scrabble.js
 */
//Counter for number of tiles current not dealt
var tilesLeft = 100;
//this array represents the scrabble board and the positions of each character
var scrabble_slots_array = new Array(15);
//Word Score
var score = 0;

//On user submit check word is valid
function submit(event)
{
    console.log("Submit Successful");

    //reset score
    score = 0;

    //go through each filled slot on the board
    for (i = 0; i < scrabble_slots_array.length; i++)
    {
        if (scrabble_slots_array[i] != undefined && scrabble_slots_array[i].length > 0)
            //for each filled slot find its value and add it to score
            for(x = 0; x < scrabbleTiles.length; x++)
            {
                if(scrabbleTiles[x].char == scrabble_slots_array[i])
                    score += scrabbleTiles[x].value;
            }
    }

    //update the score
    $("#score").text(score);
}

//Method called after scrabble board changes
//Updates the UI after changes are made to the board
function updateScrabbleBoard(newText)
{
    //go through all the characters currently on the board and build a new string with them
    for (i = 0; i < scrabble_slots_array.length; i++)
    {
        if (scrabble_slots_array[i] != undefined && scrabble_slots_array[i].length > 0)
            newText += (scrabble_slots_array[i])
    }

    //replace hold string with updated one
    $("#word").text(newText);
}
function tileDropped(event, ui)
{
    console.log("tile: " + ui.draggable.attr("id") + " dropped");

    //add tile to board
    scrabble_slots_array[$(this).attr("id")] = ui.draggable.attr("alt");

    var newText = "";
    updateScrabbleBoard(newText);
}

function tileRemoved(event, ui)
{
    console.log("tile: " + ui.helper.attr("id") + " removed");

    //Make sure the tile removed is the tile that was on the slot
    if(ui.draggable.attr("id") == scrabble_slots_array[$(this).attr("id")])
        //remove tile from board
        scrabble_slots_array[$(this).attr("id")] = "";

    var newText = "";

    updateScrabbleBoard(newText);
}

function generateTiles()
{
    //Generate seven tiles
    for(i = 0; i < 7; i++)
    {
        //randomly choose a tile from the remaining tiles (tiles left)
        var tileNumber = Math.floor((Math.random() * tilesLeft) + 1);
        var tile;

        //convert tile number to an actual tile character
        for (x = 0; x < scrabbleTiles.length; x++)
        {
            //When the tileNumber becomes less then zero scrabbleTiles[x].char is the character chosen
            tileNumber = tileNumber - scrabbleTiles[x].remaining;

            if (tileNumber < 0)
            {
                scrabbleTiles[x].remaining--;
                tilesLeft--;
                tile = "Scrabble_Tile_" + scrabbleTiles[x].char + ".jpg";
                break;
            }
        }

        //parse the filename for just the one letter character
        var char = tile.substring(14, 15);
        $("#tile_rack").append("<img src=Img/" + tile + " alt=" + char + " class='tile' id=" + char +" />");
    }
}

$(document).ready(function ()
{
    (function()
    {
        generateTiles();

        $("#submit_button").button().click(submit);
        $(".tile" ).draggable();
        $(".scrabble_slots").droppable({drop: tileDropped, out: tileRemoved});
    })();
});
//Data structure to keep track of remaining tiles
var scrabbleTiles = [
    {char: "A", value : 1,  remaining : 9  }
    , {char: "B", value : 3,  remaining : 2  }
    , {char: "C", value : 3,  remaining : 2  }
    , {char: "D", value : 2,  remaining : 4  }
    , {char: "E", value : 1,  remaining : 12 }
    , {char: "F", value : 4,  remaining : 2  }
    , {char: "G", value : 2,  remaining : 3  }
    , {char: "H", value : 4,  remaining : 2  }
    , {char: "I", value : 1,  remaining : 9  }
    , {char: "J", value : 8,  remaining : 1  }
    , {char: "K", value : 5,  remaining : 1  }
    , {char: "L", value : 1,  remaining : 4  }
    , {char: "M", value : 3,  remaining : 2  }
    , {char: "N", value : 1,  remaining : 6  }
    , {char: "O", value : 1,  remaining : 8  }
    , {char: "P", value : 3,  remaining : 2  }
    , {char: "Q", value : 10, remaining : 1  }
    , {char: "R", value : 1,  remaining : 6  }
    , {char: "S", value : 1,  remaining : 4  }
    , {char: "T", value : 1,  remaining : 6  }
    , {char: "U", value : 1,  remaining : 4  }
    , {char: "V", value : 4,  remaining : 2  }
    , {char: "W", value : 4,  remaining : 2  }
    , {char: "X", value : 8,  remaining : 1  }
    , {char: "Y", value : 4,  remaining : 2  }
    , {char: "Z", value : 10, remaining : 1  }
    , {char: "_", value : 0,  remaining : 2  }] ;