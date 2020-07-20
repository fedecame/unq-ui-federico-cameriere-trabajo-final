const { default: Option } = require("./Option");

export default class Scissors extends Option {
    constructor() {
        super("scissors", ["paper", "lizard"], ["cuts", "decapitates"]);
    }
};