import moment from 'moment';

export default function genCountdownMessage(schedule) {
  var currentEvent = {};
  var nextEvent = {};

  schedule.events.forEach(event => {
    var start = moment(event.start, "HH:mm");
    var end = moment(event.end, "HH:mm");
    var isNow = moment().isBetween(start,end);
    var isBefore = moment().isBefore(start);

    if(isNow) {
      currentEvent = event;
    }
    if(isBefore) {
      if (nextEvent.name != undefined) {
        var prevStart = moment(nextEvent.start, "HH:mm");
        var diff = moment().diff(start);
        var prevDiff = moment().diff(prevStart);
        if (diff > 0 && diff < prevDiff) {
          nextEvent = event;
        }
      } else {
        nextEvent = event;
      }
    }

  });

  var message = "";
  if (currentEvent.name) {
    var end = moment(currentEvent.end, "HH:mm");
    message = currentEvent.name + " ends " + moment().to(end);
  } else if (nextEvent.name) {
    var start = moment(nextEvent.start, "HH:mm");
    message = nextEvent.name + " starts " + moment().to(start);
  } else {
    message = "No more events for the day."
  }
  return message;
}
