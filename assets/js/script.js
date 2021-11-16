// Work planner logic


// init global variables
moment().format();

// bonus: allow days to be set as 8am, 9am, ending at diff times, etc.

// currentDay is retrieved from moment.js

// when the page loads, display the current page
// and load any user's data from storage
// display the default layout for daily planner (8 hours)


// color code the current, past, and future cards

let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]; // hours in the day
let currenthour = parseInt(moment().hour());
let starthour = parseInt((moment().hour(hours[0]).hour()));

console.log(`Current hour is: ${currenthour}`);
console.log(`Starting time of the loop is: ${currenthour}`);
console.log(` `);

for (let i = 0; i < hours.length; i++) {

    // check if hour is past
    if (parseInt((moment().hour(hours[i]).hour())) < currenthour) {
        console.log(`The hour ${hours[i]} will be grey`);

    // check if hour is current
    } else if (parseInt((moment().hour(hours[i]).hour())) === currenthour) {
        console.log(`The hour ${hours[i]} will be highlighted`);

    } else {
        console.log("This is a future time");
    }
}


// allow the text boxes to have text entered into them

// listen for a user clicking inside of a text boxes
// then open the text box for editing


// add save functionality to text/card
// bonus: warn users before leaving that there are unsaved changes

// listen for a user clicking on the lock


// allow buttons to change color of text boxes

// listen for user clicks on buttons
// change the background color to the selected color
// store this and prepare to save


// TODO: Research how to play haptic sounds when hovering, etc.