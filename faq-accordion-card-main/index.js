var questions = document.querySelectorAll(".faq-section .question");

for (i = 0; i < questions.length; i++) {
    //this i is only for looping it will not help you with manuplating the element, to manipulate you have to use "this" in order to get the right element to manipulate
    questions[i].addEventListener("click", function () {
        var pText = this.childNodes[3];
        var h3 = this.childNodes[1].childNodes[1];
        var arrowIcon = this.childNodes[1].childNodes[3];

        //here this element refers to the current question div that has triggered a click function

        //here we are first targeting the p text in every queston div and making it visible or invisible accordingly
        pText.classList.toggle("invisible");
        //then we changing the font weight of h3
        h3.classList.toggle("big-fw");
        //then we rotating the img
        arrowIcon.classList.toggle("rotateimg180");
    });

}