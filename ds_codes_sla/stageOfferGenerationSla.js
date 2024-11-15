function calculateStageOfferGenerationSlaPerformance(stageOfferGenerationElapsedTime, stageOfferGenerationSla) {
    // Convert the stageOfferGenerationElapsedTime from hh:mm:ss to seconds
    var timeParts = stageOfferGenerationElapsedTime.split(':');
    var elapsedTimeInSeconds = parseInt(timeParts[0]) * 3600 + parseInt(timeParts[1]) * 60 + parseInt(timeParts[2]);
  
    // Convert the stageOfferGenerationSla from minutes to seconds
    var slaInSeconds = stageOfferGenerationSla * 60;
  
    // Calculate the percentage of elapsed time with respect to the SLA
    var elapsedTimePercentage = (elapsedTimeInSeconds / slaInSeconds) * 100;
  
    // Determine the SLA performance based on the elapsed time percentage
    var stageOfferGenerationSlaPerformance;
    if (elapsedTimePercentage <= 50) {
      stageOfferGenerationSlaPerformance = 'Outstanding';
    } else if (elapsedTimePercentage <= 80) {
      stageOfferGenerationSlaPerformance = 'Excellent';
    } else if (elapsedTimePercentage <= 100) {
      stageOfferGenerationSlaPerformance = 'As Expected';
    } else {
      stageOfferGenerationSlaPerformance = 'Breached';
    }
  
    return stageOfferGenerationSlaPerformance;
  }
  
  // Example usage: Replace these variables with your actual stageOfferGenerationElapsedTime and stageOfferGenerationSla
  var stageOfferGenerationElapsedTime = execution.getVariable('stageOfferGenerationElapsedTime'); // e.g., '00:04:30'
  var srStageSla = execution.getVariable('stageOfferGenerationSla'); // e.g., 5 minutes
  
  try {
    var stageIllustrationSlaPerformance = calculateStageOfferGenerationSlaPerformance(stageOfferGenerationElapsedTime, srStageSla);
    execution.setVariable('stageIllustrationSlaPerformance', stageIllustrationSlaPerformance);
  } catch (error) {
    // Set a process variable to indicate the error
    execution.setVariable('stageIllustrationSlaPerformanceError', error.message);
    // Optionally, set a default value for the SLA performance
    execution.setVariable('stageIllustrationSlaPerformance', 'Error');
}