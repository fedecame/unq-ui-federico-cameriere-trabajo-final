const { default: Option } = require("./Option");

export default class Rock extends Option {
    constructor() {
        super("rock", ["lizard", "scissors"], ["crushes", "crushes"]);
    }
};