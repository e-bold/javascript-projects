
let launchcode = {
    organization: 'nonprofit',
    executiveDirector: 'Jeff',
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: launchOutput,
};

function launchOutput (number){
    let answer = '';

    if (number % 3 === 0 && number % 5 === 0 && number % 2 === 0){
        answer = 'LaunchCode Rocks!'
    };

    if (number % 3 || number % 5 || number % 2) {
        if (number % 3 === 0 && number % 5 === 0){
            answer = 'Code Rocks!'
        } else if (number % 2 === 0 && number % 3 === 0){
            answer = "LaunchCode!";
         } else if (number % 2 === 0 && number % 5 === 0){
            answer = 'Launch Rocks! (CRASH!!!!)';
         } else if (number % 2 === 0 ) {
            answer = 'Launch!';
        } else if (number % 3 === 0) {
            answer = 'Code!';
        } else if (number % 5 === 0){
            answer = 'Rocks!';
        } else (answer = "Rutabagas! That doesn't work.")
    }
    return answer
};


module.exports = launchcode;


// if (number % 5 === 0) {
//     answer = 'Rocks!';
//     return answer;
// };