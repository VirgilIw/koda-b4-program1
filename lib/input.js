import { stdin, stdout } from "node:process";
import readline from "node:readline";


export const rl = readline.createInterface({ input: stdin, output: stdout });
export const ask = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};
