function calculateStageOfferGenerationElapsedTime(stageOfferGenerationStartTime, stageOfferGenerationEndTime) {
    // Parse the stageOfferGenerationStartTime and stageOfferGenerationEndTime into Date objects
    var startTime = new Date(stageOfferGenerationStartTime);
    var endTime = new Date(stageOfferGenerationEndTime);

    // Calculate the difference in milliseconds
    var diffInMilliseconds = endTime - startTime;

    // Ensure the difference is not negative
    if (diffInMilliseconds < 0) {
        throw new Error("stageOfferGenerationEndTime is before stageOfferGenerationStartTime. Cannot calculate the difference.");
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

// Example usage: Replace these variables with your actual stageOfferGenerationStartTime and stageOfferGenerationEndTime
var stageOfferGenerationStartTime = execution.getVariable('stageOfferGenerationStartTime');
var stageOfferGenerationEndTime = execution.getVariable('stageOfferGenerationEndTime');

try {
    var stageOfferGenerationElapsedTime = calculateStageOfferGenerationElapsedTime(stageOfferGenerationStartTime, stageOfferGenerationEndTime);
    execution.setVariable('stageOfferGenerationElapsedTime', stageOfferGenerationElapsedTime);
} catch (error) {
    // Set a process variable to indicate the error
    execution.setVariable('stageOfferGenerationElapsedTimeError', error.message);
    // Optionally, set a default value for the elapsed time
    execution.setVariable('stageOfferGenerationElapsedTime', '00:00:00');
}