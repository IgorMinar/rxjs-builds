"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../../internal/Observable");
var publishReplay_1 = require("../../internal/patching/operator/publishReplay");
Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
//# sourceMappingURL=publishReplay.js.map