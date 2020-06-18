"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var RemoveFileHandler_1 = __importDefault(require("./RemoveFileHandler"));
var CopyFileHandler_1 = __importDefault(require("./CopyFileHandler"));
var ReBuildFileHandler_1 = __importDefault(require("./ReBuildFileHandler"));
var ArgHandler_1 = __importDefault(require("./ArgHandler"));
var args = new ArgHandler_1.default();
var a = new RemoveFileHandler_1.default(args);
a.Run();
var b = new CopyFileHandler_1.default(args);
b.Run();
var c = new ReBuildFileHandler_1.default(args);
c.Run();
//# sourceMappingURL=main.js.map