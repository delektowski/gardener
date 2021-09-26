"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cypress = __importStar(require("cypress"));
const cypressRunner = (login, pass, plant, timer) => {
    cypress
        .run({
        // the path is relative to the current working directory
        spec: "cypress/integration/plant.spec.js",
        env: {
            login_user: login,
            login_pass: pass,
            plant: plant,
        },
    })
        .then((results) => {
        console.log(results);
    })
        .catch((err) => {
        console.error(err);
    });
};
exports.default = cypressRunner;
