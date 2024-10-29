function calculatestageBillingSlaPerformance(stageBillingElapsedTime, stageBillingSla) {
    // Convert the stageBillingElapsedTime from hh:mm:ss to seconds
    var timeParts = stageBillingElapsedTime.split(':');
    var elapsedTimeInSeconds = parseInt(timeParts[0]) * 3600 + parseInt(timeParts[1]) * 60 + parseInt(timeParts[2]);
  
    // Convert the stageBillingSla from minutes to seconds
    var slaInSeconds = stageBillingSla * 60;
  
    // Calculate the percentage of elapsed time with respect to the SLA
    var elapsedTimePercentage = (elapsedTimeInSeconds / slaInSeconds) * 100;
  
    // Determine the SLA performance based on the elapsed time percentage
    var stageBillingSlaPerformance;
    if (elapsedTimePercentage <= 50) {
      stageBillingSlaPerformance = 'Outstanding';
    } else if (elapsedTimePercentage <= 80) {
      stageBillingSlaPerformance = 'Excellent';
    } else if (elapsedTimePercentage <= 100) {
      stageBillingSlaPerformance = 'As Expected';
    } else {
      stageBillingSlaPerformance = 'Breached';
    }
  
    return stageBillingSlaPerformance;
  }
  
  // Example usage: Replace these variables with your actual stageBillingElapsedTime and stageBillingSla
  var stageBillingElapsedTime = execution.getVariable('stageBillingElapsedTime'); // e.g., '00:04:30'
  var stageBillingSla = execution.getVariable('stageBillingSla'); // e.g., 5 minutes
  
  try {
    var stageBillingSlaPerformance = calculatestageBillingSlaPerformance(stageBillingElapsedTime, stageBillingSla);
    execution.setVariable('stageBillingSlaPerformance', stageBillingSlaPerformance);
  } catch (error) {
    // Set a process variable to indicate the error
    execution.setVariable('stageBillingSlaPerformanceError', error.message);
    // Optionally, set a default value for the SLA performance
    execution.setVariable('stageBillingSlaPerformance', 'Error');
  }