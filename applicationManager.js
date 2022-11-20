/*
 * Complete the 'getOpenApplications' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY commands as parameter.
 */

function getOpenApplications(commands) {
  // Write your code here
  let commandsArr = [];
  for (let i = 0; i < commands.length; i++) {
    let cmd = commands[i];
    if (cmd.includes("open")) {
      let newEntry = cmd.replace("open ", "");
      commandsArr.push(newEntry);
      continue;
    } else if (cmd.includes("close")) {
      let newDelete = parseInt(cmd.replace("close ", ""));
      if (newDelete < commandsArr.length) {
        for (let j = 0; j < newDelete; j++) {
          commandsArr.pop();
        }
      } else {
        commandsArr = [];
      }
    } else if (cmd.includes("clear")) {
      commandsArr = [];
      continue;
    }
  }
  return commandsArr;
}

let array = [
  "clear",
  "open firefox",
  "close 4",
  "open curly",
  "clear",
  "open ps",
]; // Expected output [ 'ps' ]

console.log(getOpenApplications(array));
