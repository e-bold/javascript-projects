
function makeLine(size){
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#'
    }
    return line;
}

function makeSquare(size){
    let line = '';
    for (let i = 0; i < size; i++) {
        line += makeLine(size) + '\n'
    }
    return line;
}



// below uses makeLine to create Rectangle

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
}



// below uses makeRectangle to create Square

function makeSquare(size) {
    let line = '';
    let height = size
    let width = size
    for (let i = 0; i < size; i++) {
        line = makeRectangle(width, height) + '\n'
    }
    return line;
}



//below uses makeLine to create Square

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i+1)+'\n')
    }
    return stairs.slice(0,-1);
}


//  space###space
function makeSpaceLine(numspaces, numChars) {
    let spacesLine = '';
    for (let i= 0; i < numspaces; i++) {
        spacesLine += ' '
    }
    let spaceChars = '';
    for (let i = 0; i< numChars; i++) {
        spaceChars += '#'
    }
    return spacesLine + spaceChars + spacesLine
}

//                         #
//                        ###
//                       #####
//                      #######
//                     #########
//                    ###########    down below


function makeIsoscelesTriangle(height) {
    let triangle = ''
    for (let i = 0; i < height; i ++) {
        triangle += (makeSpaceLine(height -i - 1, height - 1) + '\n');
    }
    return triangle;
}

// DIamond

