"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var RemoveFileHandler = /** @class */ (function () {
    function RemoveFileHandler(args) {
        this._TargetPath = '';
        this._RemoveFiles = [];
        this._TargetPath = args.TargetPath;
        this._RemoveFiles.push(this._TargetPath + 'style-desktop.dfd76.css');
        this._RemoveFiles.push(this._TargetPath + 'style-mobile.6e9cd.css');
        this._RemoveFiles.push(this._TargetPath + 'index.html');
    }
    RemoveFileHandler.prototype.Run = function () {
        var _this = this;
        var regex = /splash.*.png/;
        try {
            fs_1.default.readdirSync(this._TargetPath)
                .filter(function (f) { return regex.test(f); })
                .map(function (f) { return fs_1.default.unlinkSync(_this._TargetPath + f); });
        }
        catch (err) {
            console.error("not folder " + this._TargetPath + ", please check arg targetPath");
            console.error(err);
        }
        try {
            fs_1.default.unlinkSync(this._RemoveFiles[0]);
            fs_1.default.unlinkSync(this._RemoveFiles[1]);
            fs_1.default.unlinkSync(this._RemoveFiles[2]);
        }
        catch (err) {
            console.error("not file form remove, please check cocos creator build state");
            console.error(err);
        }
    };
    return RemoveFileHandler;
}());
exports.default = RemoveFileHandler;
//# sourceMappingURL=RemoveFileHandler.js.map