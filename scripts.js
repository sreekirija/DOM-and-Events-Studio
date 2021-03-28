// Write your JavaScript code here.
function init() {
    const takeOffButton = document.getElementById("takeoff");
    const flightStatusText = document.getElementById("flightStatus");
    const shuttleBackgroundColor = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const rocketImage = document.getElementById("rocket");
   
    
    

    // 2) When the "Take off" button is clicked, the following should happen:
    takeOffButton.addEventListener("click", function() {
        if((window.confirm("Confirm that the shuttle is ready for takeoff.")) === true) {
            flightStatusText.innerHTML = "Shuttle in flight.";
            shuttleBackgroundColor.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000;
        }
    });

    // 3) When the "Land" button is clicked, the following should happen:
    landingButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.")
            flightStatusText.innerHTML = "The shuttle has landed.";
            shuttleBackgroundColor.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
        
    });

    // 4) When the "Abort Mission" button is clicked, the following should happen:
    missionAbortButton.addEventListener("click", function() {
        if (window.confirm("Confirm that you want to abort the mission.") === true) {
            flightStatusText.innerHTML = "Mission aborted.";
            shuttleBackgroundColor.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
        }    
    });

    // 5 ) when "up" button is clicked:
    upButton.addEventListener("click", function() {
        rocketImage.style.top = 90 + "px";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
    });

    // 5 ) when "down" button is clicked:
    downButton.addEventListener("click", function() {
        rocketImage.style.top = 110 + "px";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
    });

    // 5 ) when "right" button is clicked:
    rightButton.addEventListener("click", function() {
        rocketImage.style.left = 410 + "px";
    });

    
    // 5 ) when "left" button is clicked:
    
    leftButton.addEventListener("click", function() {
        rocketImage.style.left = 390 + "px";
    });


}

// Remember to pay attention to page loading!
// 1) Use the window load event to ensure all elements have loaded before attaching event handlers.
window.addEventListener("load", init);









    