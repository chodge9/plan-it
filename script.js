$(document).ready(function(){
    for(var i = 9; i < 19; i ++) {
        var colorkey = ""
        var momenttime = moment().hours()
        if (momenttime > i) {
         colorkey = "past"   
        } else if(momenttime === i) {
            colorkey = "present"
        }
        else {
            colorkey = "future"
        }
        var hourdisplay = ""; 
        if (i < 12) {
            hourdisplay = i + "AM"
        }
        else if (i === 12) {
            hourdisplay = i + "PM"
        }
        else {
            hourdisplay = i - 12 + "PM "}

        var rowDiv = $("<div>").addClass("row time-block").attr("id", i);
        var colDiv = $("<div>").addClass("col-1 hour").text(hourdisplay);
        var textDiv = $("<textarea>").addClass("col-10 description " + colorkey).val(localStorage.getItem(i));
        var button = $("<button>").addClass("col-1 saveBtn").text("save").attr("id", i).click(function(){
        var hourkey = $(this).attr("id");
        var activity = $(this).siblings(".description").val().trim()
        localStorage.setItem(hourkey, activity)
        })

        $(".container").append(rowDiv.append(colDiv, textDiv, button))
    }
})