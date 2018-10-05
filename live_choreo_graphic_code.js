
// CHOREOGRAPHING or BEING CHOREOGRAPHED?

// on google search:
// double check or inspect on the webpage the correct id for the logo.

function Move_Away () {
    var elem = document.getElementById("logo");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 1200) {
            clearInterval(id);
        } else {
            pos++;
            //elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
} 
Move_Away()



function Re_Move() {

// you can use any of the lines inside your function

	document.querySelector("body").style.display="none";}
	Re_Move() 

// synonym: 
document.querySelector("#logo").remove()


function breathe_in() {
    document.querySelector("body").style.transform="scale(0.1)"};
	breathe_in() 

function breathe_out() {
    document.querySelector("body").style.transform="scale(4)"}; 
	breathe_out()


// other moves:
document.querySelector("body").style.transform="skew(100deg,100deg)";
document.querySelector("body").style.transform="rotate(180deg)";


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


var text = "I am writing this...",
    soFar = "";

var visible = document.querySelector(".r"),
    invisible = document.querySelector(".s");

invisible.innerHTML = text;
var t = setInterval(function(){
    soFar += text.substr(0, 1),
        text = text.substr(1);
    
    visible.innerHTML = soFar;
    invisible.innerHTML = text;
    
    if (text.length === 0) clearInterval(t);
}, 100)


// ***********************************************************************************

// code snippets by Joana Chicau (joanachicau.com) more material available at:

// https://github.com/JoBCB

// https://joanachicau.x-temporary.org/unsystem.html

// http://www.internetmoongallery.com/archive/JoanaChicau/Theatre_of_reSources.html

// ***********************************************************************************
