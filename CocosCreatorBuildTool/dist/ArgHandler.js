"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var command_line_args_1 = __importDefault(require("command-line-args"));
var DefaultConfig_json_1 = __importDefault(require("./DefaultConfig.json"));
var ArgHandler = /** @class */ (function () {
    function ArgHandler() {
        this._OptionDefinitions = [
            { name: 'serverIP', type: String },
            { name: 'serverPort', type: Number },
            { name: 'webIP', type: String },
            { name: 'webPort', type: Number },
            { name: 'targetPath', type: String },
            { name: 'templatePath', type: String },
        ];
        this._ServerIP = '';
        this._ServerPort = 0;
        this._WepIP = '';
        this._TargetPath = '';
        this._TemplatePath = '';
        this._Help = false;
        var options = command_line_args_1.default(this._OptionDefinitions);
        console.log(options);
        this._ServerIP = options.serverIP;
        this._ServerPort = options.serverPort;
        this._WepIP = options.webIP;
        this._TargetPath = options.targetPath;
        this._TemplatePath = options.templatePath;
        this._Help = options.help;
        if (this._ServerIP == undefined) {
            this._ServerIP = DefaultConfig_json_1.default.ServerIP;
            console.log(this._ServerIP);
        }
        if (this._WepIP == undefined) {
            this._WepIP = DefaultConfig_json_1.default.WebIP;
            console.log(this._WepIP);
        }
        if (this._TargetPath == undefined) {
            this._TargetPath = DefaultConfig_json_1.default.TargetPath;
            console.log(this._TargetPath);
        }
        if (this._TemplatePath == undefined) {
            this._TemplatePath = DefaultConfig_json_1.default.TemplatePath;
            console.log(this._TemplatePath);
        }
        console.log(this.IndexHtmlPath);
        console.log(this.ScriptPath);
    }
    Object.defineProperty(ArgHandler.prototype, "ServerIP", {
        get: function () {
            return this._ServerIP;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArgHandler.prototype, "ServerPort", {
        get: function () {
            return this._ServerPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArgHandler.prototype, "WepIP", {
        get: function () {
            return this._WepIP;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArgHandler.prototype, "TargetPath", {
        get: function () {
            return this._TargetPath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArgHandler.prototype, "TemplatePath", {
        get: function () {
            return this._TemplatePath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArgHandler.prototype, "IndexHtmlPath", {
        get: function () {
            var r = this._TargetPath + 'index.html';
            return r;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArgHandler.prototype, "ScriptPath", {
        get: function () {
            var r = this._TargetPath + 'src/';
            return r;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArgHandler.prototype, "HTMLTitle", {
        get: function () {
            return 'Red88-Game';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArgHandler.prototype, "Help", {
        get: function () {
            return this._Help;
        },
        enumerable: false,
        configurable: true
    });
    return ArgHandler;
}());
exports.default = ArgHandler;
//# sourceMappingURL=ArgHandler.js.map