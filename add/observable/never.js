"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../../internal/Observable");
var never_1 = require("../../internal/observable/never");
function staticNever() {
    return never_1.NEVER;
}
exports.staticNever = staticNever;
Observable_1.Observable.never = staticNever;
//# sourceMappingURL=never.js.map