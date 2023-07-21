var point = 0;
var miss = 0;
var score = 0;
function start() {
    point = 0;
    miss = 0;
    score = 0;
    document.getElementById("currentPoint").innerHTML = 0;
    document.getElementById("misshit").innerHTML = 0;
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("mole").style.visibility = "hidden";
    document.getElementById("mud").style.visibility = "hidden";
    
    for (var i = 0; i < 2; i++) {
        document.querySelector("#currentPoint").style.visibility = "visible";
        document.querySelector("#misshit").style.visibility = "visible";
        document.querySelector("#currentPoint1").style.visibility = "visible";
        document.querySelector("#misshit1").style.visibility = "visible";
        // document.querySelector("#hammer").style.visibility = "visible";
    }
    for (var i = 1; i <= 9; i++) {
        document.querySelector(`#dirt${i}`).style.visibility = "visible";
    }

    setInterval(() => {
        if (miss > 7) {
            stop();
        }
        else{
        if (point < 2) {
            var random = Math.floor(Math.random() * 9) + 1;
            document.getElementById("mole" + random).style.visibility = "visible";
            setTimeout(() => {
                for (var i = 1; i <= 9; i++) {
                    document.querySelector(`#mole${i}`).style.visibility = "hidden";
                }
            }, 3000);
        }

        else if (point < 5) {
            var random = Math.floor(Math.random() * 9) + 1;
            document.getElementById("mole" + random).style.visibility = "visible";
            setTimeout(() => {
                for (var i = 1; i <= 9; i++) {
                    document.querySelector(`#mole${i}`).style.visibility = "hidden";
                }
            }, 2000);
        }

        else if (point < 8) {
            var random = Math.floor(Math.random() * 9) + 1;
            document.getElementById("mole" + random).style.visibility = "visible";
            setTimeout(() => {
                for (var i = 1; i <= 9; i++) {
                    document.querySelector(`#mole${i}`).style.visibility = "hidden";
                }
            }, 1500);
        }

        else if (point < 10) {
            var random = Math.floor(Math.random() * 9) + 1;
            document.getElementById("mole" + random).style.visibility = "visible";
            setTimeout(() => {
                for (var i = 1; i <= 9; i++) {
                    document.querySelector(`#mole${i}`).style.visibility = "hidden";
                }
            }, 1000);
        }
        else if (point < 19) {
            var random = Math.floor(Math.random() * 9) + 1;
            document.getElementById("mole" + random).style.visibility = "visible";
            setTimeout(() => {
                for (var i = 1; i <= 9; i++) {
                    document.querySelector(`#mole${i}`).style.visibility = "hidden";
                }
            }, 800);
        }
        else {
            var random = Math.floor(Math.random() * 9) + 1;
            document.getElementById("mole" + random).style.visibility = "visible";
            setTimeout(() => {
                for (var i = 1; i <= 9; i++) {
                    document.querySelector(`#mole${i}`).style.visibility = "hidden";
                }
            }, 500);
        }
    }
    }, 3100);
}


function clicked() {
    document.getElementById("currentPoint").innerHTML = point++;

}

function notclicked() {
    document.getElementById("misshit").innerHTML = miss++;
}

function stop() {
    document.querySelector("#dey").style.visibility="visible";
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("mole").style.visibility = "visible";
    document.getElementById("mud").style.visibility = "visible";
    document.querySelector(".mole").style.visibility = "hidden";
    for (var i = 1; i <= 9; i++) {
        document.querySelector(`#dirt${i}`).style.visibility = "hidden";
    }
    document.querySelector(".sou").style.visibility = "hidden";
    
}







































































































