const functions = require("firebase-functions");
const { exec } = require("child_process");

exports.awakeHero = functions.pubsub
  .schedule("*/15 * * * *")
  .onRun(async context => {
    exec("curl http://ibnudb.herokuapp.com/");
  });

if (true) {
  console.log({
    now: "hello"
  });
}
