// input.js
import { stdin, stdout } from "node:process";
import readline from "node:readline";

export const ask = (question) => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: stdin,
      output: stdout,
    });

    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};
