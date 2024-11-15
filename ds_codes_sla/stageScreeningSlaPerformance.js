function calculateStageScreeningSlaPerformance(stageScreeningElapsedTime, stageScreeningSla) {
    // Convert the stageScreeningElapsedTime from hh:mm:ss to seconds
    var timeParts = stageScreeningElapsedTime.split(':');
    var elapsedTimeInSeconds = parseInt(timeParts[0]) * 3600 + parseInt(timeParts[1]) * 60 + parseInt(timeParts[2]);
  
    // Convert the stageScreeningSla from minutes to seconds
    var slaInSeconds = stageScreeningSla * 60;
  
    // Calculate the percentage of elapsed time with respect to the SLA
    var elapsedTimePercentage = (elapsedTimeInSeconds / slaInSeconds) * 100;
  
    // Determine the SLA performance based on the elapsed time percentage
    var stageScreeningSlaPerformance;
    if (elapsedTimePercentage <= 50) {
      stageScreeningSlaPerformance = 'Outstanding';
    } else if (elapsedTimePercentage <= 80) {
      stageScreeningSlaPerformance = 'Excellent';
    } else if (elapsedTimePercentage <= 100) {
      stageScreeningSlaPerformance = 'As Expected';
    } else {
      stageScreeningSlaPerformance = 'Breached';
    }
  
    return stageScreeningSlaPerformance;
  }
  
  // Example usage: Replace these variables with your actual stageScreeningElapsedTime and stageScreeningSla
  var stageScreeningElapsedTime = execution.getVariable('stageScreeningElapsedTime'); // e.g., '00:04:30'
  var srStageSla = execution.getVariable('stageScreeningSla'); // e.g., 5 minutes
  
  try {
    var stageScreeningSlaPerformance = calculateStageScreeningSlaPerformance(stageScreeningElapsedTime , srStageSla);
    execution.setVariable('stageScreeningSlaPerformance', stageScreeningSlaPerformance);
  } catch (error) {
    // Set a process variable to indicate the error
    execution.setVariable('stageScreeningSlaPerformanceError', error.message);
    // Optionally, set a default value for the SLA performance
    execution.setVariable('stageScreeningSlaPerformance', 'Error');
  }