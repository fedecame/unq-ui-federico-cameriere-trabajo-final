const { default: Option } = require("./Option");

export default class Paper extends Option {
    constructor() {
        super("paper", ["rock", "spock"], ["covers", "disproves"]);
    }
};