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
getFinals(fifaData)
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    return callback.map(x => x["Year"]);
};

console.log(getYears(getFinals(fifaData)));

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

function getCountryWins(data, teamInitials) {
let number = data.map(obj => obj["Home Team Goals"] > obj["Away Team Goals"] ? obj["Home Team Initials"] : obj["Away Team Initials"])
                 .filter(x => x === teamInitials).length;
console.log(`${teamInitials} has had ${number} FIFA wins!`)
};

getCountryWins(fifaData, "USA");


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */
// I did receive help on this, so I can't take all the credit
function getGoals(data) {
    const finals = getFinals(data);
    const obj = {};
    function addToObj(property) {
        if (!obj.hasOwnProperty(property)) {
            obj[property] = {goals: 0, games: 0};
        }
    }
    finals.forEach(function(element) {
        addToObj(element["Home Team Name"]);
        addToObj(element["Away Team Name"]);
    });
    
    function updateStats(element) {
        obj[element["Home Team Name"]].goals += element["Home Team Goals"];
        obj[element["Away Team Name"]].goals += element["Away Team Goals"];
        obj[element["Home Team Name"]].games += 1;
        obj[element["Away Team Name"]].games += 1;
    };
    finals.forEach(element => updateStats(element));

    Object.keys(obj).forEach(function(key) {
        obj[key].average = obj[key].goals / obj[key].games
    });
    
    const highestAverage = Object.keys(obj).reduce(function(team1, team2) {
        if (obj[team1].average > obj[team2].average) {
            return team1;
        }
        else {
            return team2;
        }
    });
    console.log(obj)
    console.log(highestAverage)
}
getGoals(fifaData);


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
