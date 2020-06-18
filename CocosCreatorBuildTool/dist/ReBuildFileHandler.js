"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var ReBuildFileHandler = /** @class */ (function () {
    function ReBuildFileHandler(args) {
        this._IndexHtmlPath = '';
        this._ServerIP = '';
        this._WebIP = '';
        this._TargetPath = '';
        this._ScriptPath = '';
        this._FileContent = '';
        this._HTMLTitle = '';
        this._ServerIP = args.ServerIP;
        this._WebIP = args.WepIP;
        this._TargetPath = args.TargetPath;
        this._IndexHtmlPath = args.IndexHtmlPath;
        this._ScriptPath = args.ScriptPath;
        this._HTMLTitle = args.HTMLTitle;
    }
    ReBuildFileHandler.prototype.Run = function () {
        this._ReadFile();
        this._ReplaceServerIP();
        this._ReplaceWebIP();
        this._ReplaceSettingFileName();
        this._ReplaceMainFileName();
        this._ReplaceScriptFileName();
        this._ReplaceTitleName();
        this._WriteToFile();
    };
    ReBuildFileHandler.prototype._ReadFile = function () {
        this._FileContent = fs_1.default.readFileSync(this._IndexHtmlPath, 'utf8');
    };
    ReBuildFileHandler.prototype._ReplaceServerIP = function () {
        var regex = /window.SERVER_IP\s?=\s"http:\/\/\w.+;/;
        var serverIP = "window.SERVER_IP = \"http://" + this._ServerIP + "\";";
        this._FileContent = this._FileContent.replace(regex, serverIP);
    };
    ReBuildFileHandler.prototype._ReplaceWebIP = function () {
        var regex = /window.SERVER_WEB\s?=\s"http:\/\/\w.+;/;
        var webIP = "window.SERVER_WEB = \"http://" + this._WebIP + "\";";
        this._FileContent = this._FileContent.replace(regex, webIP);
    };
    ReBuildFileHandler.prototype._ReplaceSettingFileName = function () {
        var _this = this;
        var regex = /settings.*.js/;
        var files = fs_1.default.readdirSync(this._ScriptPath)
            .filter(function (f) {
            var r = f.match(regex);
            return r != null;
        });
        files.forEach(function (element) {
            console.log(element);
            _this._FileContent = _this._FileContent.replace(regex, element);
        });
    };
    ReBuildFileHandler.prototype._ReplaceMainFileName = function () {
        var _this = this;
        var regex = /main.*.js/;
        var files = fs_1.default.readdirSync(this._TargetPath).filter(function (f) {
            var r = f.match(regex);
            return r != null;
        });
        files.forEach(function (element) {
            console.log(element);
            _this._FileContent = _this._FileContent.replace(regex, element);
        });
    };
    ReBuildFileHandler.prototype._ReplaceScriptFileName = function () {
        var _this = this;
        var regex = /cocos2d-js-min.*.js/;
        var files = fs_1.default.readdirSync(this._TargetPath).filter(function (f) {
            var r = f.match(regex);
            return r != null;
        });
        files.forEach(function (element) {
            console.log(element);
            _this._FileContent = _this._FileContent.replace(regex, element);
        });
    };
    ReBuildFileHandler.prototype._ReplaceTitleName = function () {
        var regex = /Cocos Creator\s*\|\s*Red88-Game/;
        this._FileContent = this._FileContent.replace(regex, this._HTMLTitle); //"Red88-Game");
    };
    ReBuildFileHandler.prototype._WriteToFile = function () {
        var buf = Buffer.from(this._FileContent, 'utf8');
        fs_1.default.writeFile(this._IndexHtmlPath, buf, function (err) {
            if (err)
                throw err;
            console.log('package tool run success');
        });
    };
    return ReBuildFileHandler;
}());
exports.default = ReBuildFileHandler;
//# sourceMappingURL=ReBuildFileHandler.js.map