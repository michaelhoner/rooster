var dag = new Array ('ma','di','wo','do','vr','za','zo')
var dienst = new Array ("middag", "nacht", "nacht", "", "", "middag", "nacht", "nacht", "", "", "ochtend", "ochtend", "ochtend", "", "", "middag", "middag", "nacht", "nacht", "", "", "ochtend", "ochtend", "ochtend", "middag", "middag", "", "");

function januari() {
    var jan = 31;
    let startDay = [...dag];
    startDay = [...startDay.splice(2), ...startDay];
    let startDienst = [...dienst];
    startDienst = [...startDienst.splice(23), ...startDienst];
    var datum = [],
        cols = document.querySelector("#januari > table > thead > tr").children.length,
        tbody = document.querySelector("#januari > table > tbody");
    for (var i = 0; i < jan; i++) {
        datum.push(i + 1);
        var row = tbody.insertRow(i);
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell(j);
            if (j === 0) {
                var text = document.createTextNode(startDay[i % 7]);
                cell.appendChild(text);
            } else if (j === 1) {
                var text = document.createTextNode(datum[i] + ' jan');
                cell.appendChild(text);
            } else if (j === 3) {
                var text = document.createTextNode(startDienst[i % 28]);
                cell.appendChild(text);
            }
        }
    }
    let rows = document.getElementById("januari").querySelectorAll('tr');

    var i;
    for (i = 0; i < rows.length; i++) {
        rows[i].classList.add(0);
    }
};

januari();

function februari() {
    var feb = 29;
    let startDay = [...dag];
    startDay = [...startDay.splice(5), ...startDay];
    let startDienst = [...dienst];
    startDienst = [...startDienst.splice(26), ...startDienst];
    var datum = [],
        cols = document.querySelector("#februari > table > thead > tr").children.length,
        tbody = document.querySelector("#februari > table > tbody");
    for (var i = 0; i < feb; i++) {
        datum.push(i + 1);
        var row = tbody.insertRow(i);
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell(j);
            if (j === 0) {
                var text = document.createTextNode(startDay[i % 7]);
                cell.appendChild(text);
            } else if (j === 1) {
                var text = document.createTextNode(datum[i] + ' feb');
                cell.appendChild(text);
            } else if (j === 3) {
                var text = document.createTextNode(startDienst[i % 28]);
                cell.appendChild(text);
            }
        }
    }
    let rows = document.getElementById("februari").querySelectorAll('tr');

    var i;
    for (i = 0; i < rows.length; i++) {
        rows[i].classList.add(1);
    }
};

februari();

function maart() {
    var mrt = 31;
    let startDay = [...dag];
    startDay = [...startDay.splice(6), ...startDay];
    let startDienst = [...dienst];
    startDienst = [...startDienst.splice(27), ...startDienst];
    var datum = [],
        cols = document.querySelector("#maart > table > thead > tr").children.length,
        tbody = document.querySelector("#maart > table > tbody");
    for (var i = 0; i < mrt; i++) {
        datum.push(i + 1);
        var row = tbody.insertRow(i);
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell(j);
            if (j === 0) {
                var text = document.createTextNode(startDay[i % 7]);
                cell.appendChild(text);
            } else if (j === 1) {
                var text = document.createTextNode(datum[i] + ' mrt');
                cell.appendChild(text);
            } else if (j === 3) {
                var text = document.createTextNode(startDienst[i % 28]);
                cell.appendChild(text);
            }
        }
    }
    let rows = document.getElementById("maart").querySelectorAll('tr');

    var i;
    for (i = 0; i < rows.length; i++) {
        rows[i].classList.add(2);
    }
};

maart();

function april() {
    var apr = 30;
    let startDay = [...dag];
    startDay = [...startDay.splice(2), ...startDay];
    let startDienst = [...dienst];
    startDienst = [...startDienst.splice(2), ...startDienst];
    var datum = [],
        cols = document.querySelector("#april > table > thead > tr").children.length,
        tbody = document.querySelector("#april > table > tbody");
    for (var i = 0; i < apr; i++) {
        datum.push(i + 1);
        var row = tbody.insertRow(i);
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell(j);
            if (j === 0) {
                var text = document.createTextNode(startDay[i % 7]);
                cell.appendChild(text);
            } else if (j === 1) {
                var text = document.createTextNode(datum[i] + ' apr');
                cell.appendChild(text);
            } else if (j === 3) {
                var text = document.createTextNode(startDienst[i % 28]);
                cell.appendChild(text);
            }
        }
    }
    let rows = document.getElementById("april").querySelectorAll('tr');

    var i;
    for (i = 0; i < rows.length; i++) {
        rows[i].classList.add(3);
    }
};

april();

function mei() {
    var mei = 31;
    let startDay = [...dag];
    startDay = [...startDay.splice(4), ...startDay];
    let startDienst = [...dienst];
    startDienst = [...startDienst.splice(4), ...startDienst];
    var datum = [],
        cols = document.querySelector("#mei > table > thead > tr").children.length,
        tbody = document.querySelector("#mei > table > tbody");
    for (var i = 0; i < mei; i++) {
        datum.push(i + 1);
        var row = tbody.insertRow(i);
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell(j);
            if (j === 0) {
                var text = document.createTextNode(startDay[i % 7]);
                cell.appendChild(text);
            } else if (j === 1) {
                var text = document.createTextNode(datum[i] + ' mei');
                cell.appendChild(text);
            } else if (j === 3) {
                var text = document.createTextNode(startDienst[i % 28]);
                cell.appendChild(text);
            }
        }
    }
    let rows = document.getElementById("mei").querySelectorAll('tr');

    var i;
    for (i = 0; i < rows.length; i++) {
        rows[i].classList.add(4);
    }
};

mei();

function juni() {
    var jun = 30;
    let startDay = [...dag];
    //startDay = [...startDay.splice(5), ...startDay];
    let startDienst = [...dienst];
    startDienst = [...startDienst.splice(7), ...startDienst];
    var datum = [],
        cols = document.querySelector("#juni > table > thead > tr").children.length,
        tbody = document.querySelector("#juni > table > tbody");
    for (var i = 0; i < jun; i++) {
        datum.push(i + 1);
        var row = tbody.insertRow(i);
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell(j);
            if (j === 0) {
                var text = document.createTextNode(startDay[i % 7]);
                cell.appendChild(text);
            } else if (j === 1) {
                var text = document.createTextNode(datum[i] + ' jun');
                cell.appendChild(text);
            } else if (j === 3) {
                var text = document.createTextNode(startDienst[i % 28]);
                cell.appendChild(text);
            }
        }
    }
    let rows = document.getElementById("juni").querySelectorAll('tr');

    var i;
    for (i = 0; i < rows.length; i++) {
        rows[i].classList.add(5);
    }
};

juni();

function juli() {
    var jul = 31;
    let startDay = [...dag];
    startDay = [...startDay.splice(2), ...startDay];
    let startDienst = [...dienst];
    startDienst = [...startDienst.splice(9), ...startDienst];
    var datum = [],
        cols = document.querySelector("#juli > table > thead > tr").children.length,
        tbody = document.querySelector("#juli > table > tbody");
    for (var i = 0; i < jul; i++) {
        datum.push(i + 1);
        var row = tbody.insertRow(i);
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell(j);
            if (j === 0) {
                var text = document.createTextNode(startDay[i % 7]);
                cell.appendChild(text);
            } else if (j === 1) {
                var text = document.createTextNode(datum[i] + ' jul');
                cell.appendChild(text);
            } else if (j === 3) {
                var text = document.createTextNode(startDienst[i % 28]);
                cell.appendChild(text);
            }
        }
    }
    let rows = document.getElementById("juli").querySelectorAll('tr');

    var i;
    for (i = 0; i < rows.length; i++) {
        rows[i].classList.add(6);
    }
};

juli();

function augustus() {
    var aug = 31;
    let startDay = [...dag];
    startDay = [...startDay.splice(5), ...startDay];
    let startDienst = [...dienst];
    startDienst = [...startDienst.splice(12), ...startDienst];
    var datum = [],
        cols = document.querySelector("#augustus > table > thead > tr").children.length,
        tbody = document.querySelector("#augustus > table > tbody");
    for (var i = 0; i < aug; i++) {
        datum.push(i + 1);
        var row = tbody.insertRow(i);
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell(j);
            if (j === 0) {
                var text = document.createTextNode(startDay[i % 7]);
                cell.appendChild(text);
            } else if (j === 1) {
                var text = document.createTextNode(datum[i] + ' aug');
                cell.appendChild(text);
            } else if (j === 3) {
                var text = document.createTextNode(startDienst[i % 28]);
                cell.appendChild(text);
            }
        }
    }
    let rows = document.getElementById("augustus").querySelectorAll('tr');

    var i;
    for (i = 0; i < rows.length; i++) {
        rows[i].classList.add(7);
    }
};

augustus();

function september() {
    var sep = 30;
    let startDay = [...dag];
    startDay = [...startDay.splice(1), ...startDay];
    let startDienst = [...dienst];
    startDienst = [...startDienst.splice(15), ...startDienst];
    var datum = [],
        cols = document.querySelector("#september > table > thead > tr").children.length,
        tbody = document.querySelector("#september > table > tbody");
    for (var i = 0; i < sep; i++) {
        datum.push(i + 1);
        var row = tbody.insertRow(i);
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell(j);
            if (j === 0) {
                var text = document.createTextNode(startDay[i % 7]);
                cell.appendChild(text);
            } else if (j === 1) {
                var text = document.createTextNode(datum[i] + ' sep');
                cell.appendChild(text);
            } else if (j === 3) {
                var text = document.createTextNode(startDienst[i % 28]);
                cell.appendChild(text);
            }
        }
    }
    let rows = document.getElementById("september").querySelectorAll('tr');

    var i;
    for (i = 0; i < rows.length; i++) {
        rows[i].classList.add(8);
    }
};

september();

function oktober() {
    var okt = 31;
    let startDay = [...dag];
    startDay = [...startDay.splice(3), ...startDay];
    let startDienst = [...dienst];
    startDienst = [...startDienst.splice(17), ...startDienst];
    var datum = [],
        cols = document.querySelector("#oktober > table > thead > tr").children.length,
        tbody = document.querySelector("#oktober > table > tbody");
    for (var i = 0; i < okt; i++) {
        datum.push(i + 1);
        var row = tbody.insertRow(i);
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell(j);
            if (j === 0) {
                var text = document.createTextNode(startDay[i % 7]);
                cell.appendChild(text);
            } else if (j === 1) {
                var text = document.createTextNode(datum[i] + ' okt');
                cell.appendChild(text);
            } else if (j === 3) {
                var text = document.createTextNode(startDienst[i % 28]);
                cell.appendChild(text);
            }
        }
    }
    let rows = document.getElementById("oktober").querySelectorAll('tr');

    var i;
    for (i = 0; i < rows.length; i++) {
        rows[i].classList.add(9);
    }
};

oktober();

function november() {
    var nov = 30;
    let startDay = [...dag];
    startDay = [...startDay.splice(6), ...startDay];
    let startDienst = [...dienst];
    startDienst = [...startDienst.splice(20), ...startDienst];
    var datum = [],
        cols = document.querySelector("#november > table > thead > tr").children.length,
        tbody = document.querySelector("#november > table > tbody");
    for (var i = 0; i < nov; i++) {
        datum.push(i + 1);
        var row = tbody.insertRow(i);
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell(j);
            if (j === 0) {
                var text = document.createTextNode(startDay[i % 7]);
                cell.appendChild(text);
            } else if (j === 1) {
                var text = document.createTextNode(datum[i] + ' nov');
                cell.appendChild(text);
            } else if (j === 3) {
                var text = document.createTextNode(startDienst[i % 28]);
                cell.appendChild(text);
            }
        }
    }
    let rows = document.getElementById("november").querySelectorAll('tr');

    var i;
    for (i = 0; i < rows.length; i++) {
        rows[i].classList.add(10);
    }
};

november();

function december() {
    var dec = 31;
    let startDay = [...dag];
    startDay = [...startDay.splice(1), ...startDay];
    let startDienst = [...dienst];
    startDienst = [...startDienst.splice(22), ...startDienst];
    var datum = [],
        cols = document.querySelector("#december > table > thead > tr").children.length,
        tbody = document.querySelector("#december > table > tbody");
    for (var i = 0; i < dec; i++) {
        datum.push(i + 1);
        var row = tbody.insertRow(i);
        for (var j = 0; j < cols; j++) {
            var cell = row.insertCell(j);
            if (j === 0) {
                var text = document.createTextNode(startDay[i % 7]);
                cell.appendChild(text);
            } else if (j === 1) {
                var text = document.createTextNode(datum[i] + ' dec');
                cell.appendChild(text);
            } else if (j === 3) {
                var text = document.createTextNode(startDienst[i % 28]);
                cell.appendChild(text);
            }
        }
    }
    let rows = document.getElementById("december").querySelectorAll('tr');

    var i;
    for (i = 0; i < rows.length; i++) {
        rows[i].classList.add(11);
    }
};

december();

let rows = document.querySelectorAll('tr');
rows.forEach((row) => {
    row.setAttribute("id", row.rowIndex);
});