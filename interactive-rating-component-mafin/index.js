var buttons = document.querySelectorAll(".rating-button");
var ratingText;
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        //this function will get all the buttons unclicked and then
        clearAllClicked();
        //the clicked button will be clicked
        this.classList.add("clicked");
        ratingText = generateRatingText(this.innerHTML);
    });
}

//this will remove all the "clicked" styling from the button
function clearAllClicked() {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("clicked");
    }
}


//thank you card 

function generateRatingText(rating) {
    return "You selected " + rating + " out of 5";
}
var submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", function () {
    if (ratingText != null) {
        //making our rating card disapear first
        document.querySelector(".rating-card").classList.add("invisible");
        //and then revealing the thank you card 
        document.querySelector(".thankyou-card").classList.remove("invisible");
        //chaning the text of rating text according to selected rating
        document.querySelector(".rating-text").innerHTML = ratingText;
    }
    else {
        alert("choose a rating");
    }
});