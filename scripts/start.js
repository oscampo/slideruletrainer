// Load the application stack.
// Define a subroutine to handle interrupts more robustly.
require(File.join(File.dirname(__FILE__), "app.js"));

function handle_interrupt() {
  // Ask for input.
  puts("*** INTERRUPT RECEIVED: Are you sure you want to exit? [yes/no]");

  // Wait until we get some actual text, resetting if we get more interrupts from
  // an over-zealous panicker.
  var response = null;

  while (response.nil) {
    try {
      response = gets.chomp.to_s.downcase
    } catch (i) {
      if (i instanceof Interrupt) {
        response = null
      } else {
        throw i
      }
    }
  };

  // Process the response.
  if (["y", "yes"].include(response)) {
    puts("*** INTERRUPT: Exiting.");
    exit(1)
  } else {
    puts("*** INTERRUPT CANCELLED: Continuing.")
  }
}
