//max bar height = 10rem;
var amountArray = [];

//days div
var days = document.querySelectorAll(".days");

var dayNames = document.querySelectorAll(".days .day-name");
var bars = document.querySelectorAll(".days .bar");

//the amount which shows up on hover
var hoverPrice = document.querySelectorAll(".days .hover-price");

//total amount (amout of all days)
var total = 0;

//h1 which holds the total amount
var totalH1 = document.querySelector(".totalB-section h1");

function insertData(jsonFile) {
    for (i = 0; i < jsonFile.length; i++) {
        dayNames[i].innerHTML = jsonFile[i].day;
        bars[i].innerHTML = jsonFile[i].amount;
        hoverPrice[i].innerHTML = "$" + jsonFile[i].amount;
        total += jsonFile[i].amount;

        //adding the amounts of each element in the array
        amountArray.push(jsonFile[i].amount);
    }
    totalH1.innerHTML = "$" + total;
    showBars(amountArray, jsonFile);
}

function showBars(array, jsonFile) {

    //the spread operator is used when inputting an array in the Math.max function.
    var maxNum = Math.max(...array);

    for (x = 0; x < jsonFile.length; x++) {
        //get the bar value first
        var barHeight = (jsonFile[x].amount / maxNum) * 10;
        // then rounding it off
        barHeight = Math.round(barHeight);
        //if the bar has highest value, the it will change its color
        if (barHeight == 10) {
            bars[x].classList.add("blue");
        }
        //seting the height of each bar according to their amount
        bars[x].style.height = barHeight + "rem";
    }

}

//this function will fetch the json file first the convert it into the json format to be usable for us
//then the file is passed in to the function where rest of the magic happens.
//this is the main character function xD
fetch("data.json").
    then(response =>
        response.json()).
    then(jsonFile => {
        insertData(jsonFile);
    });


//adding the hover effects using mouseleave and mouseenter events

for (i = 0; i < days.length; i++) {
    days[i].addEventListener("mouseenter",
        function (selectedDay) {
            var hoverText = selectedDay.target.childNodes[1];
            //reveal the amount on mouse enter (hover)
            hoverText.classList.remove("d-none");
        });

    days[i].addEventListener("mouseleave",
        function (selectedDay) {
            var hoverText = selectedDay.target.childNodes[1];
            //hides the amount when the mouse is moved aways from the div
            hoverText.classList.add("d-none");
        });


}