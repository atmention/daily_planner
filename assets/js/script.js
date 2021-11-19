// Work planner logic

// TODO: Offline support for app (style, etc.)

// init global variables

// TODO: Listen for page loaded
// when the page loads, 

// current hour is retrieved from moment.js
// let currentHour = parseInt(moment().hour());
// moment().format();

// store the default hours in the day
let workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// bonus: allow days to be set as 8am, 9am, ending at diff times, etc.

// get any local user configs
const userSettings = localStorage.getItem("plannerText");
console.log(userSettings);

// if there is no stored data for a user,
if (userSettings === null) {
    // then load the default times of 9AM - 5PM
    // TODO: Create the default array - With loop..?

    // array of objects, each object containing the text
    // and configuration for each card on the page.
    // plannerText = [{
    //     id: 0,
    //     time: 9,
    //     apm: am,
    //     text: '',
    //     color: 'gray',
    // }];
} else

// load any user's data from storage
// TODO: things that need to be stored for the user
    // time offset (default: 9am)
    // array of 9 cards, each with:
        // text content
        // bonus: color

// function to loop through cards and update the timezone
const refreshCardTimezone = function(startTime) {
    // for plannerText.length
    // set hour, am/pm, etc., to new values
}

// // color code the current, past, and future cards
// // TODO: add data-hour attribute to cards and implement dynamic styling

// // check the user's starting hour for the day
// let startHour = parseInt((moment().hour(dailyHours[0]).hour()));

// console.log(`Current hour is: ${currentHour}`);
// console.log(`Starting hour of the loop is: ${dailyHours[0]}`);
// console.log(` `);

// for (let i = 0; i < dailyHours.length; i++) {

//     // check if hour is past
//     if (parseInt((moment().hour(dailyHours[i]).hour())) < currentHour) {
//         // set the card style to greyed-out
//         // TODO: the card with data-hour attribute === dailyHours[i] is greyed out
//         console.log(`Cards with the hour ${dailyHours[i]} will be grey`);

//     // check if hour is current
//     } else if (parseInt((moment().hour(dailyHours[i]).hour())) === currentHour) {
//         // set the card style to highlighted
//         // TODO: the card with data-hour attribute === dailyHours[i] is highlighted
//         console.log(`Cards with the hour ${dailyHours[i]} will be highlighted`);

//     } else {
//         // do nothing to these cards
//         console.log(`Cards with the hour ${dailyHours[i]} will be for a future time`);
//     }
// }


// allow the text boxes to have text entered into them

// listen for a user clicking inside of a text boxes
// then open the text box for editing


// add save functionality to text/card
// bonus: warn users before leaving that there are unsaved changes

// listen for a user clicking on the lock
// then save the text and color value to localStorage


// allow buttons to change color of text boxes

// listen for user clicks on buttons
// then change the background color to the selected color
// bonus: possibly change styles/text color if appropriate

// TODO: Research how to play haptic sounds when hovering, etc.