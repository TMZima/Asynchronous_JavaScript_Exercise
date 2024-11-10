// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).

let oneTimeTasks = [];
let monitoringTaskId;

// Task 2: Add One-Time Task Function
function addOneTimeTask(func, delay) {
  // TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
  oneTimeTasks.push({ func, delay });
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks() {
  // TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
  oneTimeTasks.forEach((task) => {
    setTimeout(task.func, task.delay);
  });
}

// Task 4: Start Monitoring Function
function startMonitoring() {
  // TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
  console.log("Starting continuous monitoring of space station parameters...");

  monitoringTaskId = setInterval(() => {
    console.log("Monitoring the space station conditions...");
    // Condition Checks
    const oxygenLevel = Math.random() * 100; // Random oxygen percentage (0-100%)
    const powerLevel = Math.random() > 0.1 ? "Stable" : "Unstable"; // Random power level (90% stable)
    const communicationCheck =
      Math.random() > 0.05
        ? "All systems go!"
        : "Lost communication with ground control!"; // Random communication check (95% OK)
    console.log(
      `Oxygen Level: ${oxygenLevel.toFixed(
        2
      )}% | Power Status: ${powerLevel} | Communication: ${communicationCheck}`
    );
  }, 2000); // Every 2 seconds - adjust as needed.
}

// Task 5: Stop Monitoring Function
function stopMonitoring() {
  // TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
  clearInterval(monitoringTaskId);
  console.log("Continuous monitoring has been stopped.");
}

// Task 6: Start Countdown Function
function startCountdown(duration) {
  // TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
  let countdown = duration;
  console.log(`Countdown started: ${countdown} seconds`);

  const countdownId = setInterval(() => {
    countdown--;
    console.log(`T-minus ${countdown} seconds`);
    if (countdown === 0) {
      clearInterval(countdownId);
      console.log("Liftoff! The rocket has successfully launched into space!");
    }
  }, 1000);
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission() {
  // TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
  startMonitoring(); // Start monitoring the space station.
  addOneTimeTask(() => {
    console.log("Preparing for launch..."); // Prepare for launch after 9 seconds
  }, 9000); // Schedule the pre-launch system check.
  addOneTimeTask(() => {
    stopMonitoring();
    console.log("Pre-launch systems check complete.");
  }, 10000); // Stop monitoring after 10 seconds.
  addOneTimeTask(() => {
    startCountdown(10);
  }, 15000); // Start the countdown after all preparations are complete.

  runOneTimeTasks(); // Run the scheduled one-time tasks.
}

scheduleMission(); // Starts the mission.
