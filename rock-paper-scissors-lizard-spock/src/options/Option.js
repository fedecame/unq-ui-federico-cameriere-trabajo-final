export default class Option {
    constructor(value, defeatableOptions, defeatableMessages) {
        this._value = value;
        this._defeatableOptions = defeatableOptions;
        this._defeatableMessages = defeatableMessages;
    }

    get value() {return this._value};
    get defeatableOptions() {return this._defeatableOptions};
    get defeatableMessages() {return this._defeatableMessages};

    set defeatableOptions(newDefeatables) {return this._defeatableOptions = newDefeatables};
    set defeatableMessages(newDefeatableMessages) {return this._defeatableMessages = newDefeatableMessages};

    defeats(optionValue) {
        return this.defeatableOptions.includes(optionValue);
    }

    getDefeatMessage(optionValue) {
        const optionIndex = this.defeatableOptions.indexOf(optionValue);
        let msg = optionIndex >= 0 ? this.defeatableMessages[optionIndex] : "";
        return msg;
    }
};