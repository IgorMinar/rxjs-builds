"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../../internal/Observable");
var mergeMapTo_1 = require("../../internal/patching/operator/mergeMapTo");
Observable_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
//# sourceMappingURL=mergeMapTo.js.map