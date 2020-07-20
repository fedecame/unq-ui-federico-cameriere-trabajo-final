const { default: Option } = require("./Option");

export default class Spock extends Option {
    constructor() {
        super("spock", ["scissors", "rock"], ["smashes", "vaporizes"]);
    }
};