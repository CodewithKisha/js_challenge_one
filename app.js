let d = new Date();
let listOfDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = d.getDay();
console.log("current day is" + ":" + listOfDays[day]);

let hour = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();

let prepand = (hour >= 12) ? "pm" : "am";
hour = (hour >= 12) ? hour - 12 : hour;

if(hour === 0 && prepand === "pm") {
    if(min === 0 && sec === 0) {
        hour = 12;
        prepand = "Noon";
    } else {
        hour = 12;
        prepand= "pm";
    }
}

if(hour === 0 && prepand === "am") {
    if(min === 0 && sec === 0) {
        hour = 12;
        prepand = "Midnight";
    } else {
        hour = 12;
        prepand = "am"
    }
}

console.log("current time" + ":" + hour + ":" + min + ":" + sec);