const { spawn } = require("child_process");
const chokidar = require("chokidar");
const chalk = require("chalk");

const FILE = "./index.js";

chokidar.watch(FILE).on("all", () => {
  const ls = spawn("node", getArgs());

  ls.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  ls.stderr.on("data", (data) => {
    console.error(chalk.red(data.toString()));
  });

  ls.on("close", (code) => {
    console.log(chalk.yellow(`Exit code ${code}`));
  });
});

function getArgs() {
  return process.argv[2] === "debug" ? ["--inspect-brk", FILE] : [FILE];
}
