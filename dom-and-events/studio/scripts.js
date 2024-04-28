// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    
    let altitude = 0;
    let rocketPosX = 0;
    let rocketPosY = 0;

    const takeoff = document.getElementById('takeoff');
    const shuttleBack = document.getElementById('shuttleBackground')
    const status = document.getElementById('flightStatus')
    const height = document.getElementById('spaceShuttleHeight')
    const land = document.getElementById('landing')
    const abort = document.getElementById('missionAbort')
    const rocket = document.getElementById('rocket')

    const up = document.getElementById('up')
    const down = document.getElementById('down')
    const right = document.getElementById('right')
    const left = document.getElementById('left')

    
    takeoff.addEventListener('click', function(event){
            if(window.confirm('Confirm that the shuttle is ready for takeoff')) {
                status.innerHTML = 'Shuttle in flight';
                shuttleBack.style.backgroundColor = 'blue'
                altitude = 10000;
                height.innerHTML = altitude
            }
        })

    land.addEventListener('click', function(event){
            if(window.confirm('The shuttle is landing. Landing gear engaged.')) {
                status.innerHTML = 'Shuttle has landed';
                resetRocket();
            }
        })

    abort.addEventListener('click', function(event){
            if(window.confirm('The shuttle is landing. Landing gear engaged.')) {
                status.innerHTML = 'Mission aborted';
                resetRocket();
            }
        
        })
        

    left.addEventListener('click', function(event){
        if(rocketPosX > -(bkgWidth / 2 - 40)){
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
    });

    right.addEventListener('click', function(event){
        if(rocketPosX < (bkgWidth / 2) - 40){
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
    });

    up.addEventListener('click', function(event){
        if(altitude < 250000) {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
    });

    down.addEventListener('click', function(event){
        if(altitude > 0){
            rocketPosY -= 10;
        rocket.style.marginBottom = rocketPosY + 'px';
        altitude -= 10000;
        spaceShuttleHeight.innerHTML = altitude;
        }
        
    });

        
    let bkgWidth = parseInt(window.getComputedStyle(shuttleBack).getPropertyValue('width'));


    function resetRocket() {
        shuttleBack.style.backgroundColor = 'green';
        altitude = 0;
        spaceShuttleHeight.innerHTML = altitude;
        rocketPosX = 0;
        rocketPosY = 0;
        rocket.style.marginLeft = rocketPosX + 'px';
        rocket.style.marginBottom = rocketPosY + 'px';
    };
}

    
window.addEventListener("load", init);





