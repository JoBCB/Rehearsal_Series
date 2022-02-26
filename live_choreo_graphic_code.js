// - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// - - - - - Choreo-Graphic-Codes by Joana Chicau - - - \\
// - - - - - - - - - - - - - - - - - - - - - - - - - - - //

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

// keep on moving:

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


    function rotate () {
    var centro = document.querySelector("body"),
    deg = 10;
    des_centro = setInterval(function() {
    centro.style.transform = "rotateY(" + deg + "deg)";
    deg = (deg + 10) % 360
    }, 80); 
    } 

//rotate ()


    function pause () {
    clearInterval(des_centro);
    } 

// pause ()  

// ***********************************************************************************



function Warning() {
    alert("Welcome to Web Choreographies. Every move counts and it is counting.");
}

var delay="10";
var count='0';
var Texts=new Array();
      Texts[0]="new choreography";
      Texts[1]="set the movement";
      Texts[2]="words to define space - time";
      Texts[3]="(  expand  ノ) )contract(()";
      Texts[4]="the space of the body";
      Texts[5]="the body in space";
      Texts[6]="";
      Texts[7]="BREATHE";
      Texts[8]="";
      Texts[9]="refuse the movement";
      Texts[10]="";
      Texts[11]="movement undefined";
      Texts[12]="breathe in and out...";
      Texts[13]="";
      Texts[14]="choreographing tensions";
      Texts[15]="and counter -  tensions ";
      Texts[16]="and counter - choreographies";
      Texts[17]="";
      Texts[18]="continue b r e a t h i n g"

function NewSequence(){
document.querySelector('.logo').innerHTML=Texts[count]; 
count++;
if(count==Texts.length){count='0';}
setTimeout("NewSequence()",delay*1000);

document.querySelector(".logo").style.width="1000px"
document.querySelector(".logo").style.fontSize="12vw"
document.querySelector(".logo").style.opacity="0.75"
}


// transform: matrix3d(1, 1, 0, 0, 10, 1, 0, 10, 10, 0, 1, 0, 200, 10, 0, 1);
// width: 500px;
// opacity: 0.25;
//transform: matrix3d(-1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 10, 50, 0, 25);

function LeaveTheStage (n){
var r =document.querySelector("#rso > div:nth-child("+n+")");
r.style.visibility="hidden";
};


// LOOP all images

function Breathing(){
  var x = document.getElementsByTagName("img");
  var i;
  currenttime = setInterval(function() {
      for (i = 0; i < x.length; i++) {
        x[i].style.opacity = Math.random() * 0.9;
        x[i].style.filter = "blur(" + Math.random() * 25 + "px)"; 
      }
  }, 1000); 
}


function noBreathing() {
    clearInterval(currenttime);
}


function OffStage () {
    document.body.innerHTML = '';
    document.head.innerHTML = '';      
}


// ***********************************************************************************

// code snippets by Joana Chicau (joanachicau.com) more material available at:

// https://github.com/JoBCB

// - - - - - - - - - - - - - - - - - - - - - - - - - - - //
// - - - - thank you for moving along! - - - \\
// - - - - - - - - - - - - - - - - - - - - - - - - - - - //
