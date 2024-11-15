function calculateStageScreeningElapsedTime(stageScreeningStartTime, stageScreeningEndTime) {
  // Parse the stageScreeningStartTime and stageScreeningEndTimeinto Date objects
  var startTime = new Date(stageScreeningStartTime);
  var endTime = new Date(stageScreeningEndTime);

  // Calculate the difference in milliseconds
  var diffInMilliseconds = endTime - startTime;

  // Ensure the difference is not negative
  if (diffInMilliseconds < 0) {
    throw new Error("stageScreeningEndTime is before stageScreeningStartTime. Cannot calculate the difference.");
  }

  // Convert the difference into hours, minutes, and seconds
  var diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  var diffInMinutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
  var diffInSeconds = Math.floor((diffInMilliseconds % (1000 * 60)) / 1000);

  // Format the output in hh:mm:ss format
  var formattedTime =
    (diffInHours < 10 ? '0' : '') + diffInHours + ':' +
    (diffInMinutes < 10 ? '0' : '') + diffInMinutes + ':' +
    (diffInSeconds < 10 ? '0' : '') + diffInSeconds;

  return formattedTime;
}

// Example usage: Replace these variables with your actual stageScreeningStartTime and stageScreeningEndTime

var stageScreeningStartTime = execution.getVariable('stageScreeningStartTime');
var stageScreeningEndTime = execution.getVariable('stageScreeningEndTime');

try {
  var stageScreeningElapsedTime = calculateStageScreeningElapsedTime(stageScreeningStartTime, stageScreeningEndTime
  );
  execution.setVariable('stageScreeningElapsedTime', stageScreeningElapsedTime);
} catch (error) {
  // Set a process variable to indicate the error
  execution.setVariable('stageScreeningElapsedTimeError', error.message);
  // Optionally, set a default value for the elapsed time
  execution.setVariable('stageScreeningElapsedTime', '00:00:00');
}