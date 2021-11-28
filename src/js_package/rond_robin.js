/*
 * Round Robin Build Prototype build.
 *
 */

var Team = [];
/**
 * List is a function where number of people are
 * sent into a new array to be added later
 */
var numberOfRounds = Team.length - 1;

function generateRounds() {
  for (let i = 0; i < numberOfRounds; i++) {
    /**
     * document.write will be swaped out with json function.
     */
    document.write('<h1 class="round">' + "Round " + (i + 1) + "</h1>");

    for (var j = 0; j < Team.length / 2; j++) {
      /**
       * document.write will be swaped out with json function.
       */
      document.write(
        '<div class="match">' +
          Team[j].playerName +
          " - " +
          Team[Team.length - 1 - j].playerName +
          "</div>"
      );
    }

    Team.splice(1, 0, Team[15]);
    Team.pop();
  }
}
generateRounds();
