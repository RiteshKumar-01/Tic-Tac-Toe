
var count = 1;
function fill(control) {

    if (count < 9) {
        if (count % 2 != 0) {
            document.getElementById(control.id).innerHTML = "X";
        }
        else {
            document.getElementById(control.id).innerHTML = "O";
        }
        count++;
        if(checkWin()) 
        {
            alert(" Winner!!");
            reset();
        }
        }else 
        {
        alert("Match Draw!");
        reset();
    }
}

function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById("cell" + i).innerHTML = "";
    }
    count = 1;
}

function checkWin() {
    if (checkCondition("cell1", "cell2", "cell3") || checkCondition("cell1", "cell5", "cell9") || checkCondition("cell1", "cell4", "cell7") || checkCondition("cell3", "cell5", "cell7") || checkCondition("cell4", "cell5", "cell6") || checkCondition("cell7", "cell8", "cell9") || checkCondition("cell3", "cell6", "cell9") ||checkCondition("cell2","cell5","cell8")) {
        return true;
    }
}

function checkCondition(cell1, cell2, cell3) {
    if (getData(cell1) != "" && getData(cell2) != "" && getData(cell3) != "" && getData(cell1) == getData(cell2) && getData(cell2) == getData(cell3)) {
        return true;
    }

}
function getData(cell) {
    return document.getElementById(cell).innerHTML;
}