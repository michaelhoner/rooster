//  highlight current day
function highlightDay() {

    var date = new Date();
    var today = date.getDate();
    var month = date.getMonth();
    var calendardays = document.getElementsByTagName("tr");
    var calendarmonths = document.getElementsByTagName("tr");

    var i = 0;
    while (i < 366) {

        //  Checks if className and Id compare with today && month. If true; highlight corresponding tr.
        if (calendardays[i].id == today && calendarmonths[i].className == month) {
            calendardays[i].id = "activeDay", calendardays[i].scrollIntoView(true);
            var viewportH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            window.scrollBy(0, -viewportH/2);
            //   calendardays[i].style.backgroundColor = "#17a2b8", calendardays[i].style.color = "#fff", calendardays[i].scrollIntoView({block: "center"});
        }
        i++;
    }

}

window.onload = function () {
    highlightDay();
}