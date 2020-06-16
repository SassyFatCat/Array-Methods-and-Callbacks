import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
/*(a)*/ console.log(fifaData.filter(obj => obj["Year"] === 2014 & obj["Stage"] === "Final")[0]["Home Team Initials"]);
/*(b)*/ console.log(fifaData.filter(obj => obj["Year"] === 2014 & obj["Stage"] === "Final")[0]["Away Team Initials"]);
/*(c)*/ console.log(fifaData.filter(obj => obj["Year"] === 2014 & obj["Stage"] === "Final")[0]["Home Team Goals"]);
/*(d)*/ console.log(fifaData.filter(obj => obj["Year"] === 2014 & obj["Stage"] === "Final")[0]["Away Team Goals"]);
/*(e)*/ console.log(fifaData.filter(obj => obj["Year"] === 2014 & obj["Stage"] === "Final")[0]["Home Team Name"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(x => x["Stage"] === "Final")
};

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
let years = [];
    callback.map(x => years.push(x["Year"]));
return years;
};

getYears(getFinals(fifaData));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
let winners = [];
callback.forEach(x => x["Home Team Goals"] > x["Away Team Goals"] ? winners.push(x["Home Team Name"]) : winners.push(x["Away Team Name"]));
return winners;
};

getWinners(getFinals(fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winners, years) {
for (let i = 0; i < winners.length; i++) {
    console.log(`In ${years[i]}, ${winners[i]} won the world cup!`)
}
};

getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
let averageHomeGoals = Math.round(data.map(x => x["Home Team Goals"]).reduce((a, b) => a + b) / data.length);
let averageAwayGoals = Math.round(data.map(x => x["Away Team Goals"]).reduce((a, b) => a + b) / data.length);
return `The average number of goals per game for home teams was ${averageHomeGoals},\n and the average number of goals per game for away teams was ${averageAwayGoals}`
};  

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
