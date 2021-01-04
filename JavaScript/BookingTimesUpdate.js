// Say you are building a booking system.
// So you have an array of hours in a ComboBox for the users to choose arival time.
// After the user chose the arival time and the duration for his stay, you would want to remove the hours which are not available anymore from the comboBox database
// 
// timeslotArray is your strings array which contains the available hours, as a database for the comboBox.
// updateArray is the function to remove the no-more-available hours from the array.
//
// Have fun hacking!

var timeslotArray = ["09:00", "09:05", "09:10", "09:15", "09:20", "09:25","18:00"] // -----> as an example

function updateArray(timeChosen,duration){
var startTime = new Date(Date.parse('01/01/2011 '+timeChosen));
var endTime =  new Date(startTime.getTime() + duration * 60000);

timeslotArray.forEach((hour, index)=>{
var hourAsDate = new Date(Date.parse('01/01/2011 '+ hour));
if (hourAsDate < endTime && hourAsDate >= startTime){
timeslotArray[index] = null; 
}
});
timeslotArray = timeslotArray.filter((hour) => {return hour != null;});
}

updateArray("09:00",20); // -----> example how to implement
console.log(timeslotArray); // -----> result array
