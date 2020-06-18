"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CopyFileHandler = /** @class */ (function () {
    function CopyFileHandler(args) {
        this._TemplatePath = '';
        this._TargetPath = '';
        this._TemplateFiles = [];
        this._TargetFiles = [];
        this._TemplatePath = args.TemplatePath;
        this._TargetPath = args.TargetPath;
    }
    CopyFileHandler.prototype.Run = function () {
        this._TemplateFiles.push(this._TemplatePath + 'splash.png');
        this._TemplateFiles.push(this._TemplatePath + 'style-mobile.css');
        this._TemplateFiles.push(this._TemplatePath + 'style-mobile.6e9cd.css');
        this._TemplateFiles.push(this._TemplatePath + 'index.html');
        this._TargetFiles.push(this._TargetPath + 'splash.png');
        this._TargetFiles.push(this._TargetPath + 'style-mobile.css');
        this._TargetFiles.push(this._TargetPath + 'style-mobile.6e9cd.css');
        this._TargetFiles.push(this._TargetPath + 'index.html');
        try {
            fs_1.default.copyFileSync(this._TemplateFiles[0], this._TargetFiles[0]);
            fs_1.default.copyFileSync(this._TemplateFiles[1], this._TargetFiles[1]);
            fs_1.default.copyFileSync(this._TemplateFiles[2], this._TargetFiles[2]);
            fs_1.default.copyFileSync(this._TemplateFiles[3], this._TargetFiles[3]);
        }
        catch (err) {
            console.error("copy failed, please check arg targetPath and templatePath");
            console.error(err);
        }
    };
    return CopyFileHandler;
}());
exports.default = CopyFileHandler;
//# sourceMappingURL=CopyFileHandler.js.map