//TODO: Add Your Code Below


window.addEventListener("load",async function(){
    let data = await fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        return response.json()

    });
    console.log(data);
    const container = document.getElementById("container");
    let htmlString = "";
    
    for(let i = 0; i < data.length; i++){
        htmlString = htmlString + `
        <div class="astronaut">
    <div class="bio">
        <h3>${data[i].firstName} ${data[i].lastName}</h3>
        <ul>
        <li>Hours in space: ${data[i].hoursInSpace}</li>
        <li>Active: ${data[i].active}</li>
        <li>Skills: ${data[i].skills}</li>
        </ul>
    </div>
    <img class="avatar" src="${data[i].picture}">
</div>
        `
    container.innerHTML = htmlString
    }

})





