//on google search:
//double check or inspect on the webpage the correct id for the logo.

function myMove() {
    var elem = document.getElementById("logo");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
} 

 myMove()


//on google search:

 document.querySelector("body").style.transform="skew(100deg,100deg)";

// ***********************************************************************************

 
var xMax, yMax, xNeg=0, yNeg=1;

function move() {
    window.scrollBy(5 * xNeg, 5 * yNeg);
    if(xMax == window.scrollX)xNeg = xNeg * 1;
    if(yMax == window.scrollY)yNeg = xNeg * -1;
    scrolldelay = setTimeout(move,100);
    console.log(window.scrollY);
    xMax = window.scrollX;
    yMax = window.scrollY;
}
move();

// ***********************************************************************************

// code snippets by Joana Chicau (joanachicau.com) more material available at:

// https://github.com/JoBCB

// https://joanachicau.x-temporary.org/unsystem.html

// http://www.internetmoongallery.com/archive/JoanaChicau/Theatre_of_reSources.html

// ***********************************************************************************
