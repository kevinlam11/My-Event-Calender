var rootEl = $("#root");
var containerEl = $(".container");

var time = moment().add(1, "hours").hour();
var replacement = moment().add(1, "hours").format("H A");
$("#timeOfTheDay").text(moment().format("LLL"));

function createTimeBlock(index) {
  // Event Rows
  var timeBlockEl = $("<div>");
  timeBlockEl.attr("class", "row time-block");
  timeBlockEl.attr("data-hour", index);

  var hourBlockEl = $("<div>");
  hourBlockEl.attr("class", "col-1 hour p-3");

  var textAreaEl = $("<textarea>");
  textAreaEl.attr("class", "col-10 description");

  var iconEl = $("<i>");
  iconEl.attr("class", "fas fa-save");

  var saveBtnEl = $("<button>");
  saveBtnEl.attr("class", "col-1 saveBtn");
  saveBtnEl.append(iconEl);

  // This is the complete time block element
  timeBlockEl.append(hourBlockEl);
  timeBlockEl.append(textAreaEl);
  timeBlockEl.append(saveBtnEl);

  return timeBlockEl;
}

function addTime() {}

// Appending & Logic
for (i = 1; i < 24; i++) {
  var timeStamp = createTimeBlock(i);

  var hour = timeStamp.data("hour");
  var message = localStorage.getItem(hour);
  timeStamp.find(".description").text(message);
  timeStamp.addClass(hour > time ? "future" : hour < time ? "past" : "present");

  timeStamp.find(".hour").text(hour);

  timeStamp.on("click", ".saveBtn", function () {
    var result = $(this).parent().find(".description").val();
    localStorage.setItem($(this).parent().data("hour"), result);
  });

  containerEl.append(timeStamp);
}
