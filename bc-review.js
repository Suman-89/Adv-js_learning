function calculatesrCaseSlaPerformance(srCaseElapsedTime, srCaseSla) {
  // Convert the srCaseElapsedTime from hh:mm:ss to seconds
  var timeParts = srCaseElapsedTime.split(':');
  var elapsedTimeInSeconds = parseInt(timeParts[0]) * 3600 + parseInt(timeParts[1]) * 60 + parseInt(timeParts[2]);

  // Convert the srCaseSla from minutes to seconds
  var slaInSeconds = srCaseSla * 60;

  // Calculate the percentage of elapsed time with respect to the SLA
  var elapsedTimePercentage = (elapsedTimeInSeconds / slaInSeconds) * 100;

  // Determine the SLA performance based on the elapsed time percentage
  var srCaseSlaPerformance;
  if (elapsedTimePercentage <= 50) {
    srCaseSlaPerformance = 'Outstanding';
  } else if (elapsedTimePercentage <= 80) {
    srCaseSlaPerformance = 'Excellent';
  } else if (elapsedTimePercentage <= 100) {
    srCaseSlaPerformance = 'As Expected';
  } else {
    srCaseSlaPerformance = 'Breached';
  }

  return srCaseSlaPerformance;
}

// Example usage: Replace these variables with your actual srCaseElapsedTime and srCaseSla
var srCaseElapsedTime = execution.getVariable('srCaseElapsedTime'); // e.g., '00:04:30'
var srCaseSla =  execution.getVariable('srCaseSla'); // e.g., 5 minutes

try {
  var srCaseSlaPerformance = calculatesrCaseSlaPerformance(srCaseElapsedTime, srCaseSla);
  execution.setVariable('srCaseSlaPerformance', srCaseSlaPerformance);
} catch (error) {
  // Set a process variable to indicate the error
  execution.setVariable('srCaseSlaPerformanceError', error.message);
  // Optionally, set a default value for the SLA performance
  execution.setVariable('srCaseSlaPerformance', 'Error');
} 