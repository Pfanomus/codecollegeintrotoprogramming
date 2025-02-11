
document.getElementById("head").style.transform = "rotate(15deg)";
document.getElementById("mouth").style.backgroundColor = "pink";
document.getElementById("rightarm").style.left ="23%";
document.getElementById('nose').style.borderRadius= "5px";




var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
var top = 0;
var id = setInterval(frame, 10) // draw every 10ms
function frame() {
    robotPart.style.top = top + '%' ;
    top++;
    if (top === 20){
    clearInterval(id);
    }
    }
    }

    var leftArm =document.getElementById("leftarm");
    leftArm.addEventListener("mouseover", moveRightLeft);

    function moveRightLeft(e) {
        var robotPart = e.target;
        var left = 0;
        var id = setInterval(frame, 10) // draw every 10ms
        function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 70){
        clearInterval(id);
        }
        }
        }
        
       