

// let sudoku = [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]

function isValidSudokuRows(sudoku) {
    for (let i = 0; i < sudoku.length; i++) {
        let rowString = sudoku[i].join('')
        for (let j = 0; j < rowString.length; j++) {
            if (rowString.indexOf(j) !== rowString.lastIndexOf(j)) {
                return false;
            }
        }
    }
    return true;
}
function isValidSudokuCols(sudoku) {
    for (let i = 0; i < sudoku.length; i++) {
        let colString = ""
        for (let j = 0; j < sudoku.length; j++) {
            colString = colString + sudoku[j][i].toString()

        }
        for (let k = 0; k < colString.length; k++) {
            if (colString.indexOf(k) !== colString.lastIndexOf(k)) {
                return false;
            }

        }
    }
    return true;
}

function isValidSudokuGroups(sudoku){
    
    let sqaure3All = [];

    function forGroups(i,num3,square3,j,jnext){
        let temp_arr = [];
        for (i; i < num3; i++) {
            let a = j;
            let b = jnext;
            for(a; a < b; a++){
                temp_arr.push(sudoku[i][a]);
            }    
            square3.push(temp_arr)
            temp_arr = []

        }
        return square3

    }

    sqaure3All.push(forGroups(0,3,[],0,3))
    sqaure3All.push(forGroups(3,6,[],0,3))
    sqaure3All.push(forGroups(6,9,[],0,3))

    sqaure3All.push(forGroups(0,3,[],3,6))
    sqaure3All.push(forGroups(3,6,[],3,6))
    sqaure3All.push(forGroups(6,9,[],3,6))


    sqaure3All.push(forGroups(0,3,[],6,9))
    sqaure3All.push(forGroups(3,6,[],6,9))
    sqaure3All.push(forGroups(6,9,[],6,9))

    for (let z = 0; z < sqaure3All.length; z++) {
        let groupString = "";
        for (let h = 0; h < sqaure3All[z].length; h++) {
            
            groupString = groupString + sqaure3All[z][h].join('');
            
        }
        for (let t = 0; t < groupString.length; t++) {
            if(groupString.indexOf(t) !== groupString.lastIndexOf(t)){
                return false;
            }
            
        }
    }

    return true
}


function isValidSudoku(sudoku){
    if(isValidSudokuRows(sudoku) && isValidSudokuCols(sudoku) && isValidSudokuGroups(sudoku)){
        return true;
    } else {
        return false;
    }
}



module.exports = isValidSudoku