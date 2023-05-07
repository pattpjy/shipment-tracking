import { Destination } from "./Destination ";
import { Cargo } from "./Cargo";
// do not use export default for variable we declare, still ok for npm package
//got an error from webpack because it's expecting a json/ js file but we are just exporting TS file
// add configuration to webpack npm install --save -dev typescript ts-loader
//add tsconfig file to src

const destination = new Destination();
console.log(destination);
const cargo = new Cargo();
console.log(cargo);
