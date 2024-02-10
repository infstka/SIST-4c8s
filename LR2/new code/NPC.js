function NPC(name, pos) {
    this._name = name || "NPC";
    this._pos = pos || 0;
    NPC.count++;
}

NPC.prototype.name = function(value) {
    if (value === undefined) {
        return this._name;
    } else {
        this._name = value;
    }
};

NPC.prototype.pos = function() {
    return this._pos;
};

NPC.create = function() {
    return new NPC();
};

NPC.prototype.walkForward = function() {
    this._pos++;
};

NPC.prototype.walkBack = function() {
    this._pos--;
};

NPC.count = 0;

if (typeof module !== 'undefined' && module.exports) { 
    module.exports = NPC;
} else { 
    throw new Error("Use Node.js!");
}
