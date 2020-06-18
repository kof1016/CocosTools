"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commandArgs = require('command-line-args');
var RemoveFileHandler = /** @class */ (function () {
    function RemoveFileHandler() {
        var optionDefinitions = [
            { name: 'serverIP', type: String },
            { name: 'port', type: Number },
            { name: 'webIP', type: String },
            { name: 'webPort', type: Number },
            { name: 'buildPath', type: String },
            { name: 'projectPath', type: String },
            { name: 'help', alias: 'h', type: Boolean }
        ];
        var options = commandArgs(optionDefinitions);
        var serverIP = options.serverIP, port = options.port, webIP = options.webIP, webPort = options.webPort, buildPath = options.buildPath, projectPath = options.projectPath, help = options.help;
        if (help != undefined) {
            console.log(help);
        }
        else {
            console.log(options);
        }
    }
    return RemoveFileHandler;
}());
exports.default = RemoveFileHandler;
//# sourceMappingURL=CommandArgs.js.map