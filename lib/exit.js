// exit.js
import { rl } from "./input.js";

export const exit = () => {
  rl.close();
  process.exit(0); // biar langsung berhenti
};
